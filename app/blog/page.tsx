import type { Metadata } from 'next';
import Link from 'next/link';
import { formatDate, getPosts } from '@/lib/blog';

export const metadata: Metadata = {
    title: 'Blog',
    description:
        'Engineering notes by Arnav Angarkar: GSoC 2026, VoxBento, open source and the events along the way.',
    alternates: { canonical: 'https://angarkar.is-a.dev/blog/' },
};

export default function BlogIndex() {
    const posts = getPosts();
    return (
        <div className="mx-auto max-w-2xl px-6 py-16">
            <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
            <p className="mt-3 text-muted-foreground">
                Engineering notes, GSoC updates and write-ups from the events I
                go to.
            </p>
            <ul className="mt-12 space-y-10">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`} className="group block">
                            <p className="font-mono text-xs text-muted-foreground">
                                {formatDate(post.date)}
                                {post.series && (
                                    <span className="text-primary"> · {post.series}</span>
                                )}
                            </p>
                            <h2 className="mt-1.5 text-lg font-medium group-hover:text-primary">
                                {post.title}
                            </h2>
                            <p className="mt-1 leading-relaxed text-muted-foreground">
                                {post.summary}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
