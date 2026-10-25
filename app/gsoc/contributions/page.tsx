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
                <h2 className="section-title">In progress · Eventyay Business</h2>
                <div className="grid gap-8 sm:grid-cols-2">
                    <div className="space-y-3 text-muted-foreground">
                        <h3 className="font-medium text-foreground">
                            What is taking shape
                        </h3>
                        <p>
                            Versioned tiers with draft, published and archived
                            states; multi-currency monthly and annual prices;
                            and typed feature entitlements. New organizers get
                            a default Free subscription, and the dashboard
                            resolves the effective plan.
                        </p>
                        <p>
                            A capability registry defines 13 standard
                            capabilities, and usage records are idempotent so
                            metering has an audit trail.
                        </p>
                    </div>
                    <div className="space-y-3 text-muted-foreground">
                        <h3 className="font-medium text-foreground">
                            Deliberately marked incomplete
                        </h3>
                        <p>
                            Stripe identifiers and overage fields exist in the
                            model, but payment webhooks, charging, upgrades,
                            proration, capacity enforcement and usage analytics
                            are not wired yet.
                        </p>
                    </div>
                </div>
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
