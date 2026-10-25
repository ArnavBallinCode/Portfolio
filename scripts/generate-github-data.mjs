import { mkdir, readFile, writeFile } from 'node:fs/promises';

const user = 'arnavballincode';
const envText = await readFile('.env', 'utf8').catch(() => '');
const envToken = envText.match(/^\s*github_pat\s*=\s*['"]?([^'"\s]+)['"]?\s*$/m)?.[1];
const token = process.env.GITHUB_TOKEN ?? process.env.github_pat ?? envToken;
const headers = { Accept: 'application/vnd.github+json', ...(token ? { Authorization: `Bearer ${token}` } : {}) };
const request = async (path) => { const response = await fetch(`https://api.github.com${path}`, { headers }); if (!response.ok) throw new Error(`${response.status} ${response.statusText}`); return response.json(); };
const searchAll = async (query) => {
  const results = [];
  for (let page = 1; page <= 10; page += 1) {
    const result = await request(`/search/issues?q=${encodeURIComponent(query)}&per_page=100&page=${page}&sort=updated&order=desc`);
    results.push(...result.items);
    if (result.items.length < 100) break;
  }
  return results;
};
const toItem = (item, kind) => ({ kind, title: item.title, repository: item.repository_url.replace('https://api.github.com/repos/', ''), number: item.number, url: item.html_url, state: item.state, merged: kind === 'pr' && Boolean(item.pull_request?.merged_at), createdAt: item.created_at, mergedAt: kind === 'pr' ? item.pull_request?.merged_at ?? null : null, labels: item.labels?.map(label => label.name) ?? [] });
let pullRequests = [], issues = [], error = null;
let previousData = null;
try { previousData = JSON.parse(await readFile('app/data/github-contributions.json', 'utf8')); } catch { /* No prior cache exists on the first build. */ }
try {
  const [prs, openedIssues] = await Promise.all([searchAll(`author:${user} org:fossasia is:pr`), searchAll(`author:${user} org:fossasia is:issue`)]);
  pullRequests = prs.map(item => toItem(item, 'pr'));
  issues = openedIssues.map(item => toItem(item, 'issue'));
} catch (caught) {
  error = `GitHub data unavailable: ${caught.message}`;
  if (previousData?.pullRequests?.length || previousData?.issues?.length) {
    previousData.error = `Using the last successful contribution snapshot. ${error}`;
    await writeFile('app/data/github-contributions.json', `${JSON.stringify(previousData, null, 2)}\n`);
    process.exit(0);
  }
}
const grouped = new Map();
for (const item of [...pullRequests, ...issues]) { const repo = grouped.get(item.repository) ?? { name: item.repository, count: 0, pullRequests: 0, issues: 0, mergedPullRequests: 0 }; repo.count++; repo.pullRequests += item.kind === 'pr' ? 1 : 0; repo.issues += item.kind === 'issue' ? 1 : 0; repo.mergedPullRequests += item.merged ? 1 : 0; grouped.set(item.repository, repo); }
const highlightScore = (item) => {
  const text = `${item.title} ${item.labels.join(' ')}`.toLowerCase();
  let score = item.merged ? 20 : 0;
  if (text.includes('feat') || text.includes('feature')) score += 12;
  if (/(architecture|stream|audio|translation|transcri|authentication|api|database|deployment|infrastructure|migration)/.test(text)) score += 8;
  if (item.repository === 'fossasia/voxbento') score += 10;
  if (item.repository.startsWith('fossasia/')) score += 4;
  return score;
};
const highlightedPullRequests = pullRequests.filter(item => item.merged).map(item => ({ ...item, highlightScore: highlightScore(item) })).sort((a, b) => b.highlightScore - a.highlightScore || new Date(b.mergedAt) - new Date(a.mergedAt)).slice(0, 12);
const output = { generatedAt: new Date().toISOString(), error, pullRequests, issues, highlightedPullRequests, allContributionsUrl: `https://github.com/pulls?q=is%3Apr+author%3A${user}+org%3Afossasia+is%3Amerged+sort%3Aupdated-desc`, repositories: [...grouped.values()].sort((a,b) => b.count - a.count), stats: { pullRequests: pullRequests.length, issues: issues.length, repositories: grouped.size, commits: null, mergedPullRequests: pullRequests.filter(item => item.merged).length, majorFeatures: null } };
await mkdir('app/data', { recursive: true }); await writeFile('app/data/github-contributions.json', `${JSON.stringify(output, null, 2)}\n`);