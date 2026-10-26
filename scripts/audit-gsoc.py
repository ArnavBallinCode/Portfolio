"""Read public GitHub evidence for the GSoC report. Requires authenticated gh."""
import json, subprocess, datetime, time, argparse
from pathlib import Path
from collections import Counter
ROOT=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser()
parser.add_argument('--start',default='2026-05-25T00:00:00Z')
parser.add_argument('--output',default='research/gsoc-2026')
args=parser.parse_args()
OUT=ROOT/args.output; OUT.mkdir(parents=True,exist_ok=True)
start=args.start
end=datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')
def gh(*args):
 for attempt in range(3):
  result=subprocess.run(['gh','api',*args],capture_output=True,text=True)
  if result.returncode==0:
   data=json.loads(result.stdout)
   if 'errors' not in data:return data
  time.sleep(2)
 raise RuntimeError(result.stderr or result.stdout[:500])
def search(q):
 from urllib.parse import urlencode
 items=[]
 for page in range(1,11):
  d=gh('search/issues?'+urlencode({'q':q,'per_page':100,'page':page,'sort':'created','order':'asc'}))
  if d.get('incomplete_results') or d['total_count']>1000:raise RuntimeError('Incomplete search: '+q)
  items+=d['items']
  if len(items)>=d['total_count']:break
 return items
prs=search('org:fossasia author:ArnavBallinCode is:pr')
# Keep reproducible public metadata, rather than copying PR discussions into the report.
authored=[{k:p.get(k) for k in ['number','title','html_url','repository_url','created_at','state','pull_request']} for p in prs]
(OUT/'authored-prs.json').write_text(json.dumps({'asOf':end,'items':authored},indent=2)+'\n')
query='''query($start:DateTime!,$end:DateTime!,$cursor:String){user(login:"ArnavBallinCode"){contributionsCollection(from:$start,to:$end){pullRequestReviewContributions(first:50,after:$cursor){pageInfo{hasNextPage endCursor} nodes{pullRequest{number title url author{login} repository{nameWithOwner} reviews(author:"ArnavBallinCode",first:100){pageInfo{hasNextPage endCursor} nodes{state submittedAt url}}}}}}}}'''
reviews={};cursor=None
while True:
 args=['graphql','-f','query='+query,'-f','start='+start,'-f','end='+end]
 if cursor:args+=['-f','cursor='+cursor]
 connection=gh(*args)['data']['user']['contributionsCollection']['pullRequestReviewContributions']
 for n in connection['nodes']:
  p=n['pullRequest']
  if not p['repository']['nameWithOwner'].startswith('fossasia/'):continue
  if p['reviews']['pageInfo']['hasNextPage']:raise RuntimeError('Review pagination required: '+p['url'])
  p['reviews']= [r for r in p['reviews']['nodes'] if r['submittedAt'] and start<=r['submittedAt']<=end and r['state']!='PENDING']
  if p['reviews']:reviews[p['url']]=p
 print('Reviewed PRs collected:',len(reviews),flush=True)
 if not connection['pageInfo']['hasNextPage']:break
 cursor=connection['pageInfo']['endCursor']
(OUT/'reviews.json').write_text(json.dumps({'from':start,'asOf':end,'items':list(reviews.values())},indent=2)+'\n')
counts=Counter();submitted=Counter();states=Counter()
for p in reviews.values():
 repo=p['repository']['nameWithOwner'];counts[repo]+=1;submitted[repo]+=len(p['reviews']);states.update(r['state'] for r in p['reviews'])
period=[p for p in authored if start<=p['created_at']<=end]
summary={'from':start,'asOf':end,'authoredAllTime':len(authored),'mergedAllTime':sum(bool(p['pull_request'].get('merged_at')) for p in authored),'openedDuringPeriod':len(period),'mergedOpenedDuringPeriod':sum(bool(p['pull_request'].get('merged_at')) for p in period),'openDuringPeriod':sum(p['state']=='open' for p in period),'closedUnmergedDuringPeriod':sum(p['state']=='closed' and not p['pull_request'].get('merged_at') for p in period),'reviewedPRs':len(reviews),'reviewSubmissions':sum(submitted.values()),'reviewStates':dict(states),'reviewRepositories':[{'name':r,'prs':n,'submissions':submitted[r]} for r,n in counts.most_common()]}
(OUT/'summary.json').write_text(json.dumps(summary,indent=2)+'\n')
print(json.dumps(summary,indent=2))
