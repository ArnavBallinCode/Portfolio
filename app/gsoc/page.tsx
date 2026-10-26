import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import { formatDate, getPosts } from '@/lib/blog';
import gallery from '../data/gallery.json';
import { github, phases, trips } from '../data/gsoc';

export const metadata: Metadata = {
    title: 'GSoC 2026 · VoxBento',
    description:
        'Arnav Angarkar’s Google Summer of Code 2026 with FOSSASIA: building VoxBento, a real-time speech translation and multilingual interpretation platform.',
    alternates: { canonical: 'https://angarkar.tech/gsoc/' },
};

const featuredPhotos = [
    'bangkok/speakingatbangkokabouteventyaywork.jpg',
    'paris/wikimaniaopeningparty.jpg',
    'germany/mariomesakshamattherechstage.jpg',
    'germany/project-discussion-with-nielsmagnus-mentor.jpg',
];

export default function GsocOverview() {
    const posts = getPosts()
        .filter((p) => p.series === 'GSoC 2026')
        .slice(0, 3);
    const photos = featuredPhotos
        .map((key) => gallery.find((g) => `${g.place}/${g.file}` === key))
        .filter((g) => g !== undefined);

    const stats = [
        { value: github.stats.mergedPullRequests, label: 'merged PRs' },
        { value: github.stats.pullRequests, label: 'pull requests' },
        { value: github.stats.issues, label: 'issues opened' },
        { value: github.stats.repositories, label: 'FOSSASIA repos' },
    ];

    return (
        <>
            <header className="pt-12 pb-14">
                <div className="flex items-center gap-3">
                    <Image
                        src="/voxbento-icon.png"
                        alt=""
                        width={40}
                        height={40}
                        className="size-10 rounded-lg"
                    />
                    <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        VoxBento
                    </h1>
                </div>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    Real-time speech translation and multilingual
                    interpretation for virtual and hybrid events, built in the
                    browser. This is the running record of my Google Summer of
                    Code 2026 with FOSSASIA: the system, the code, and the
                    people around it.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                    <a
                        href="https://voxbento.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 items-center gap-1.5 rounded-md bg-foreground px-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                    >
                        voxbento.com <ArrowUpRight className="size-4" />
                    </a>
                    <Link
                        href="/gsoc/project"
                        className="inline-flex h-9 items-center rounded-md border border-border px-3.5 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                        How it works
                    </Link>
                    <Link
                        href="/gsoc/final-report"
                        className="inline-flex h-9 items-center rounded-md border border-border px-3.5 text-sm font-medium transition-colors hover:bg-secondary"
                    >
                        Final report
                    </Link>
                </div>
            </header>

            <section id="fossasia-journey" className="scroll-mt-24 border-t border-border/60 py-12">
                <h2 className="section-title">My FOSSASIA journey</h2>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                    I started contributing in October 2025, before GSoC. My work grew from
                    Eventyay checkout, permissions, and organizer workflows into live
                    interpretation with VoxBento, the Eventyay Business pricing and billing
                    foundation, and maintenance across FOSSASIA repositories.
                </p>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
                    Along the way, I opened issues and architecture proposals, reviewed
                    contributions, and built shared instructions and skills for AI-assisted
                    coding in Eventyay, VoxBento, and Visdom. Working with mentors and
                    contributors at FOSSASIA Summit brought those collaborations beyond GitHub.
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                    <Link className="link inline-flex items-center gap-1" href="/gsoc/final-report/">
                        Explore what I built <ArrowRight className="size-3.5" />
                    </Link>
                    <a className="link inline-flex items-center gap-1" href="https://github.com/pulls/search?q=is:pr+org:fossasia+state:closed+author:ArnavBallinCode+sort:updated-desc+is:merged" target="_blank" rel="noopener noreferrer">
                        Browse merged contributions <ArrowUpRight className="size-3.5" />
                    </a>
                    <Link className="link inline-flex items-center gap-1" href="/blog/fossasia-summit-bangkok/">
                        FOSSASIA Summit story <ArrowRight className="size-3.5" />
                    </Link>
                </div>
            </section>

            <section className="border-t border-border/60 py-12">
                <h2 className="section-title">Contribution ledger</h2>
                <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
                    {stats.map((s) => (
                        <div key={s.label} className="bg-background p-5">
                            <dd className="text-2xl font-semibold tracking-tight">
                                {s.value}
                            </dd>
                            <dt className="mt-1 text-sm text-muted-foreground">
                                {s.label}
                            </dt>
                        </div>
                    ))}
                </dl>
                <p className="mt-3 text-xs text-muted-foreground">
                    Pulled from the GitHub API at build time ·{' '}
                    <Link href="/gsoc/contributions" className="link">
                        full breakdown
                    </Link>
                </p>
            </section>

            <section className="border-t border-border/60 py-12">
                <h2 className="section-title">The system</h2>
                <ArchitectureDiagram />
                <Link
                    href="/gsoc/project"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                    Read the architecture deep dive{' '}
                    <ArrowRight className="size-3.5" />
                </Link>
            </section>

            <section className="border-t border-border/60 py-12">
                <h2 className="section-title">Timeline · 22 weeks</h2>
                <ol className="relative space-y-4 border-l border-border pl-6">
                    {phases.map((p) => (
                        <li key={p.title} className="relative">
                            <span className="absolute -left-[1.6rem] top-1.5 size-2 rounded-full bg-primary" />
                            <p className="font-mono text-xs text-muted-foreground">
                                {p.date}
                            </p>
                            <p className="font-medium">
                                {p.title}{' '}
                                <span className="font-normal text-muted-foreground">
                                    · {p.detail}
                                </span>
                            </p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="border-t border-border/60 py-12">
                <div className="mb-8 flex items-baseline justify-between">
                    <h2 className="section-title mb-0">Latest notes</h2>
                    <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                        All posts →
                    </Link>
                </div>
                <ul className="divide-y divide-border border-y border-border">
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group block py-4"
                            >
                                <p className="font-mono text-xs text-muted-foreground">
                                    {formatDate(post.date)}
                                </p>
                                <p className="mt-1 font-medium group-hover:text-primary">
                                    {post.title}
                                </p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    {post.summary}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="border-t border-border/60 py-12">
                <div className="mb-8 flex items-baseline justify-between">
                    <h2 className="section-title mb-0">Beyond the code</h2>
                    <Link href="/gallery" className="text-sm text-muted-foreground hover:text-foreground">
                        Gallery →
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {photos.map((p) => (
                        <Link
                            key={p.file}
                            href={`/gallery#${p.place}`}
                            className="overflow-hidden rounded-md"
                        >
                            <Image
                                src={`/gallery/thumbs/${p.place}/${p.file}`}
                                alt={p.caption}
                                width={360}
                                height={270}
                                className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
                            />
                        </Link>
                    ))}
                </div>
                <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                    {trips.map((t) => (
                        <li key={t.place}>
                            <p className="font-medium">{t.title}</p>
                            <p className="text-sm text-muted-foreground">
                                {t.where} · {t.date}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}
