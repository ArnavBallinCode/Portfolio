"""Build dated, public report ledgers from saved GitHub audit responses."""
import csv,json
from pathlib import Path
from collections import Counter
ROOT=Path(__file__).resolve().parents[1]; SOURCE=ROOT/'research/gsoc-2026'; PUBLIC=ROOT/'public/reports/gsoc-2026'; PUBLIC.mkdir(parents=True,exist_ok=True)
audit=json.loads((SOURCE/'summary.json').read_text()); year=json.loads((SOURCE/'year-audit/summary.json').read_text())
prs=json.loads((SOURCE/'authored-prs.json').read_text())['items'];reviews=json.loads((SOURCE/'reviews.json').read_text())['items']
selected=json.loads((SOURCE/'selected-prs.json').read_text()) + json.loads((SOURCE/'core-foundations.json').read_text())
selected=list({p['url']:p for p in selected}.values())
issues=json.loads((SOURCE/'authored-issues.json').read_text())
period=[p for p in prs if audit['from']<=p['created_at']<=audit['asOf']]
repos=Counter(p['repository_url'].split('/')[-1] for p in period)
merged=Counter(p['repository_url'].split('/')[-1] for p in period if p['pull_request'].get('merged_at') and p['pull_request']['merged_at']<=audit['asOf'])
assert len({p['html_url'] for p in prs})==len(prs)
assert len({p['url'] for p in reviews})==len(reviews)
assert sum(len(p['reviews']) for p in reviews)==audit['reviewSubmissions']
assert audit['openedDuringPeriod']==audit['mergedOpenedDuringPeriod']+audit['openDuringPeriod']+audit['closedUnmergedDuringPeriod']
summary={**audit,'yearFrom':year['from'],'yearAsOf':year['asOf'],'yearReviewSubmissions':year['reviewSubmissions'],'yearReviewedPRs':year['reviewedPRs'],'authoredRepositories':[{'name':r,'opened':n,'merged':merged[r]} for r,n in repos.most_common()]}
summary['journey']={'authoredPRs':len(prs),'mergedPRs':sum(bool(p['pull_request'].get('merged_at')) for p in prs),'issuesOpened':len(issues),'reviewSubmissions':year['reviewSubmissions'],'reviewedPRs':year['reviewedPRs'],'reviewRepositories':year['reviewRepositories']}
(ROOT/'app/data/gsoc-report.json').write_text(json.dumps(summary,indent=2)+'\n')
def safe(value):
 text=str(value or '')
 return "'"+text if text.startswith(('=','+','-','@')) else text
with (PUBLIC/'authored-prs.csv').open('w') as f:
 w=csv.writer(f);w.writerow(['repository','number','title','opened','merged','status','opened_in_coding_window','url'])
 for p in prs:
  m=p['pull_request'].get('merged_at');w.writerow([safe(p['repository_url'].split('/')[-1]),p['number'],safe(p['title']),p['created_at'],m,'merged' if m else p['state'],audit['from']<=p['created_at']<=audit['asOf'],p['html_url']])
with (PUBLIC/'reviews.csv').open('w') as f:
 w=csv.writer(f);w.writerow(['repository','pull_request','review_state_at_audit','submitted_at','review_url'])
 for p in reviews:
  for v in p['reviews']:w.writerow([p['repository']['nameWithOwner'],p['number'],v['state'],v['submittedAt'],v['url']])
with (PUBLIC/'year-reviews.csv').open('w') as f:
 w=csv.writer(f);w.writerow(['repository','pull_request','review_state_at_audit','submitted_at','review_url'])
 for p in json.loads((SOURCE/'year-audit/reviews.json').read_text())['items']:
  for v in p['reviews']:w.writerow([p['repository']['nameWithOwner'],p['number'],v['state'],v['submittedAt'],v['url']])
evidence={'summary':summary,'methodology':{'authored':'Public FOSSASIA PRs returned by author search, all pages. Coding-window authorship is based on PR creation time; merge status is observed at audit time.','reviews':'GitHub GraphQL pullRequestReviewContributions, paginated; then reviews filtered by author and submitted timestamp. Public fossasia/ repositories only; unique PR URLs and review URLs. Pending reviews, issue comments and inline-comment counts excluded. A review is a submitted GitHub review record, not a claim of manual-only work or a merged outcome.','coverage':'Observed public GitHub evidence, not a lifetime total. A one-year cross-check yields the same coding-window review count. Deleted/inaccessible activity is not recoverable; dismissed review state reflects the audit, not necessarily its original state.','cutoff':audit['asOf']},'selectedMergedWork':[{k:v for k,v in p.items() if k!='body'} for p in selected]}
(PUBLIC/'evidence.json').write_text(json.dumps(evidence,indent=2)+'\n')
print('Generated summary and public evidence ledgers; counts reconciled.')
