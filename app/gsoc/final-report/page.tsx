import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'GSoC 2026 final report · VoxBento',
    description:
        'Arnav Angarkar’s Google Summer of Code 2026 final report for VoxBento at FOSSASIA.',
    alternates: { canonical: 'https://angarkar.is-a.dev/gsoc/final-report/' },
};

/*
 * GSoC work product. Replace the placeholder below with the final report
 * after the coding period ends on Nov 2, 2026; this URL is the one to submit.
 */
export default function FinalReport() {
    return (
        <article className="max-w-2xl pt-12 pb-8">
            <p className="font-mono text-xs uppercase tracking-wider text-primary">
                Work product · in progress
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                GSoC 2026 final report
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                This report will be completed after the extended 22-week coding
                period ends on November 2, 2026.
            </p>
            <h2 className="mt-10 font-medium">Coming in November</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
                The final submission will document the VoxBento implementation,
                merged FOSSASIA contributions, demonstrations, outcomes,
                technical decisions and community collaboration, with links to
                the upstream work.
            </p>
            <p className="mt-6">
                <Link href="/gsoc/contributions" className="link">
                    View the live contribution audit →
                </Link>
            </p>
        </article>
    );
}
