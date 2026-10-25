import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { github } from '../../data/gsoc';

export const metadata: Metadata = {
    title: 'FOSSASIA contributions · GSoC 2026',
    description:
        'Every public FOSSASIA pull request and issue by Arnav Angarkar, grouped by repository and refreshed from the GitHub API at build time.',
    alternates: { canonical: 'https://angarkar.is-a.dev/gsoc/contributions/' },
};

export default function GsocContributions() {
    const recentBusinessPRs = github.pullRequests
        .filter(pr => pr.repository === 'fossasia/eventyay-business' && pr.merged)
        .sort((a, b) => Date.parse(b.mergedAt!) - Date.parse(a.mergedAt!))
        .slice(0, 6);
    const updated = new Date(github.generatedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

    return (
        <>
            <header className="pt-12 pb-14">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    An open-source audit trail.
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    {github.stats.mergedPullRequests} merged pull requests
                    across {github.stats.repositories} FOSSASIA repositories,
                    authored by{' '}
                    <a
                        href="https://github.com/ArnavBallinCode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        @ArnavBallinCode
                    </a>
                    .
                </p>
            </header>

            <section className="border-t border-border/60 py-12">
                <h2 className="section-title">By repository</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-border text-left font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                                <th className="py-2 pr-4 font-normal">Repository</th>
                                <th className="py-2 pr-4 text-right font-normal">PRs</th>
                                <th className="py-2 pr-4 text-right font-normal">Merged</th>
                                <th className="py-2 text-right font-normal">Issues</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                            {github.repositories.map((r) => (
                                <tr key={r.name}>
                                    <td className="py-2.5 pr-4">
                                        <a
                                            href={`https://github.com/${r.name}/pulls?q=author%3AArnavBallinCode`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary"
                                        >
                                            {r.name.replace('fossasia/', '')}
                                        </a>
                                    </td>
                                    <td className="py-2.5 pr-4 text-right tabular-nums">
                                        {r.pullRequests}
                                    </td>
                                    <td className="py-2.5 pr-4 text-right tabular-nums">
                                        {r.mergedPullRequests}
                                    </td>
                                    <td className="py-2.5 text-right tabular-nums text-muted-foreground">
                                        {r.issues}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                    {github.error ?? `Snapshot from the GitHub API, ${updated}.`}
                </p>
            </section>

            <section className="border-t border-border/60 py-12">
                <h2 className="section-title">Recent work · Eventyay Business</h2>
                <p className="mb-6 text-muted-foreground">
                    Latest merged contributions, refreshed with the GitHub snapshot.
                </p>
                <ul className="divide-y divide-border">
                    {recentBusinessPRs.map(pr => (
                        <li key={pr.number} className="py-4">
                            <a
                                href={pr.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start justify-between gap-4 hover:text-primary"
                            >
                                <span>{pr.title}</span>
                                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                                    #{pr.number} ↗
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="border-t border-border/60 py-12">
                <a
                    href={github.allContributionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center gap-1.5 rounded-md bg-foreground px-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                >
                    Every merged FOSSASIA PR on GitHub{' '}
                    <ArrowUpRight className="size-4" />
                </a>
            </section>
        </>
    );
}
