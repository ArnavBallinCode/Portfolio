import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { formatDate, getPosts } from '@/lib/blog';

const WritingSection = () => {
    const allPosts = getPosts();

    // Curate the strongest showcase posts across themes
    const featuredSlugs = [
        'heros-journey',
        'community-bonding',
        'school-me-in-next-five-years',
        'fossasia-summit-bangkok',
    ];

    const featuredPosts = featuredSlugs
        .map((slug) => allPosts.find((p) => p.slug === slug))
        .filter(Boolean) as typeof allPosts;

    const displayPosts = featuredPosts.length > 0 ? featuredPosts : allPosts.slice(0, 4);

    return (
        <section id="writing" className="py-16">
            <h2 className="section-title">Writing</h2>
            <Link
                href="/gsoc"
                className="group mb-8 flex flex-col gap-1 rounded-lg border border-border p-5 transition-colors hover:border-foreground/20 hover:bg-secondary/40 sm:flex-row sm:items-center sm:justify-between"
            >
                <div>
                    <p className="font-medium">My GSoC 2026 journey</p>
                    <p className="text-sm text-muted-foreground">
                        VoxBento’s architecture, every FOSSASIA PR, the final
                        report and photos from Bangkok, Paris and Germany.
                    </p>
                </div>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-foreground" />
            </Link>
            <ul className="divide-y divide-border border-y border-border">
                {displayPosts.map((post) => (
                    <li key={post.slug}>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:gap-4"
                        >
                            <span className="font-mono text-xs text-muted-foreground sm:w-28 sm:shrink-0">
                                {formatDate(post.date)}
                            </span>
                            <div className="flex flex-1 flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
                                <span className="font-medium group-hover:text-primary transition-colors">
                                    {post.title}
                                </span>
                                {post.series && (
                                    <span className="font-mono text-[11px] text-muted-foreground sm:shrink-0">
                                        {post.series}
                                    </span>
                                )}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link
                href="/blog"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
                View all {allPosts.length} posts and school writings <ArrowRight className="size-3.5" />
            </Link>
        </section>
    );
};

export default WritingSection;
