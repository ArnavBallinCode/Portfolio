import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { formatDate, getPosts } from '@/lib/blog';

const WritingSection = () => {
    const posts = getPosts().slice(0, 3);
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
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="group flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-4"
                        >
                            <span className="font-mono text-xs text-muted-foreground sm:w-24 sm:shrink-0">
                                {formatDate(post.date)}
                            </span>
                            <span className="font-medium group-hover:text-primary">
                                {post.title}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link
                href="/blog"
                className="mt-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
                All posts <ArrowRight className="size-3.5" />
            </Link>
        </section>
    );
};

export default WritingSection;
