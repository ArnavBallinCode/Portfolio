import type { Metadata } from 'next';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { Marked } from 'marked';
import { ArrowDownToLine, ArrowUpRight } from 'lucide-react';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import report from '@/app/data/gsoc-report.json';

export const metadata: Metadata = {
    title: 'GSoC 2026 final report · VoxBento & FOSSASIA',
    description: 'A working report on VoxBento, the Eventyay Business foundation, and cross-repository review work, with dated upstream evidence.',
    alternates: { canonical: 'https://angarkar.tech/gsoc/final-report/' },
};
const slug = (text: string) => text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').trim().replace(/\s+/g, '-');
const number = (value: number) => value.toLocaleString('en-US');

export default async function FinalReport() {
    const markdown = await readFile(path.join(process.cwd(), 'content/reports/gsoc-2026.md'), 'utf8');
    const sections = [...markdown.matchAll(/^## (.+)$/gm)].map((match) => ({ title: match[1], id: slug(match[1]) }));
    const parser = new Marked({
        renderer: {
            heading({ tokens, depth, text }) {
                return `<h${depth} id="${slug(text)}">${this.parser.parseInline(tokens)}</h${depth}>`;
            },
        },
    });
    const html = await parser.parse(markdown);
    const metrics = [
        { value: number(report.mergedOpenedDuringPeriod), label: 'authored PRs merged', detail: `Of ${report.openedDuringPeriod} opened in the coding window` },
        { value: number(report.reviewSubmissions), label: 'submitted PR reviews', detail: `On ${number(report.reviewedPRs)} distinct pull requests` },
        { value: String(report.reviewRepositories.length), label: 'repositories reviewed', detail: 'Across the FOSSASIA organization' },
    ];
    return (
        <article className="report-page pt-12 pb-8">
            <header className="border-b border-border/60 pb-10">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider">
                    <span className="rounded-full border border-primary/25 bg-primary/5 px-3 py-1 text-primary">Working draft</span>
                    <span className="text-muted-foreground">Evidence · 26 Oct 2026</span>
                </div>
                <p className="mt-8 text-sm font-medium text-muted-foreground">GSoC 2026 · Final report</p>
                <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Building live interpretation.<br /><span className="text-muted-foreground">Maintaining the platform around it.</span></h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">VoxBento, the foundations of Eventyay Business, and the review work that connects an open-source ecosystem.</p>
                <p className="mt-5 text-sm">Arnav Angarkar <span className="text-muted-foreground">· FOSSASIA · 25 May–26 October 2026 snapshot</span></p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                    <a className="link inline-flex items-center gap-1" href="https://summerofcode.withgoogle.com/programs/2026/projects/DdK1Ocuw">Official project <ArrowUpRight className="size-3.5" /></a>
                    <a className="link inline-flex items-center gap-1" href="#evidence">Explore the evidence <ArrowDownToLine className="size-3.5" /></a>
                </div>
            </header>
            <section aria-label="Coding-window contribution summary" className="grid gap-6 border-b border-border/60 py-8 sm:grid-cols-3">
                {metrics.map(metric => <div key={metric.label}><p className="text-3xl font-semibold tracking-tight tabular-nums">{metric.value}</p><h2 className="mt-2 text-sm font-medium">{metric.label}</h2><p className="mt-1 text-xs leading-relaxed text-muted-foreground">{metric.detail}</p></div>)}
            </section>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">Dated public activity across FOSSASIA, including work beyond the official project. Counts are not a measure of unique features, impact, or sole authorship.</p>
            <nav aria-label="Report contents" className="my-10 rounded-xl border border-border bg-secondary/20 p-5 sm:p-6">
                <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">Inside the report</p>
                <ol className="grid gap-x-6 gap-y-3 text-sm sm:grid-cols-2">{sections.map((section, index) => <li key={section.id}><a className="group flex gap-3 hover:text-primary" href={`#${section.id}`}><span className="font-mono text-xs text-muted-foreground">{String(index+1).padStart(2,'0')}</span>{section.title}</a></li>)}</ol>
            </nav>
            <section aria-labelledby="architecture-title" className="mb-12">
                <h2 id="architecture-title" className="mb-4 text-sm font-medium">The core design: separate media transport from coordination</h2>
                <ArchitectureDiagram />
            </section>
            <div className="prose-body report-body max-w-3xl" dangerouslySetInnerHTML={{ __html: html }} />
            <section id="evidence" className="mt-14 scroll-mt-24 border-t border-border pt-10">
                <p className="font-mono text-xs uppercase tracking-wider text-primary">Evidence appendix</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight">An inspectable record of the work.</h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">The coding-window ledger contains {report.openedDuringPeriod} authored PRs: {report.mergedOpenedDuringPeriod} merged, {report.openDuringPeriod} open, and {report.closedUnmergedDuringPeriod} closed without merging. Earlier contributions are retained in the download and marked separately.</p>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">For broader context, the audit from 27 October 2025 through 26 October 2026 records <strong className="font-medium text-foreground">{number(report.yearReviewSubmissions)} review submissions on {number(report.yearReviewedPRs)} PRs</strong>. That larger window is not presented as GSoC-only work.</p>
                <div className="my-6 flex flex-wrap gap-3">{[['authored-prs.csv','Authored PRs · CSV'],['reviews.csv','Coding-window reviews · CSV'],['year-reviews.csv','Past-year reviews · CSV'],['evidence.json','Sources & method · JSON']].map(([file,label])=><a key={file} download href={`/reports/gsoc-2026/${file}`} className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm hover:bg-secondary"><ArrowDownToLine className="size-4"/>{label}</a>)}</div>
                <details className="rounded-lg border border-border p-4 sm:p-5">
                    <summary className="cursor-pointer font-medium">Review work by repository · {report.reviewRepositories.length} repositories</summary>
                    <div className="mt-4 overflow-x-auto"><table className="w-full text-left text-sm"><caption className="mb-3 text-left text-xs text-muted-foreground">25 May–26 October 2026 · repeated submissions on a PR count as separate reviews</caption><thead><tr className="border-b border-border text-muted-foreground"><th scope="col" className="py-2 font-medium">Repository</th><th scope="col" className="px-3 py-2 text-right font-medium">PRs</th><th scope="col" className="py-2 text-right font-medium">Reviews</th></tr></thead><tbody>{report.reviewRepositories.map(repo=><tr key={repo.name} className="border-b border-border/50"><th scope="row" className="py-2 font-normal"><a className="hover:text-primary" href={`https://github.com/${repo.name}/pulls?q=is%3Apr+reviewed-by%3AArnavBallinCode`}>{repo.name.replace('fossasia/','')}</a></th><td className="px-3 py-2 text-right tabular-nums">{number(repo.prs)}</td><td className="py-2 text-right tabular-nums">{number(repo.submissions)}</td></tr>)}</tbody></table></div>
                </details>
                <details className="mt-3 rounded-lg border border-border p-4 sm:p-5">
                    <summary className="cursor-pointer font-medium">How the numbers were collected</summary>
                    <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground"><p>Authored PRs come from paginated GitHub Search. The coding-window subset uses creation timestamps from {report.from} through {report.asOf}; merge and closure status are observed at that audit. Earlier PRs merged during the window are not included in the headline authored cohort.</p><p>Reviews come from paginated public GitHub contribution records and author-filtered review records, then submitted timestamps. Pending reviews, issue comments, and inline comment counts are excluded. A submitted review is a GitHub record; it does not establish whether tools assisted the review. Repeated submissions count separately; PRs are deduplicated by URL.</p><p>The past-year audit independently yields the same coding-window review count. Deleted or inaccessible records cannot be recovered. These are observed public counts, not a claim of exhaustive lifetime activity. Dismissed review states reflect the audit date.</p><p>This report follows <a className="link" href="https://developers.google.com/open-source/gsoc/help/work-product">Google’s work-product guidance</a>: identify personal work, show upstream evidence, explain current state, and leave a usable handoff.</p></div>
                </details>
            </section>
        </article>
    );
}
