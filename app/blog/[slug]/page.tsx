import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { formatDate, getPost, getPosts } from '@/lib/blog';

interface Props {
    params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
    return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) return {};
    return {
        title: post.title,
        description: post.summary,
        alternates: { canonical: `https://angarkar.tech/blog/${slug}/` },
        openGraph: {
            title: post.title,
            description: post.summary,
            type: 'article',
            publishedTime: post.date,
        },
    };
}

export default async function BlogPost({ params }: Props) {
    const { slug } = await params;
    const post = getPost(slug);
    if (!post) notFound();

    return (
        <article className="mx-auto max-w-2xl px-6 py-16">
            <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
                <ArrowLeft className="size-4" /> All posts
            </Link>
            <header className="mt-10">
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                    {post.series && (
                        <>
                            <span>·</span>
                            <span className="text-primary font-medium">{post.series}</span>
                        </>
                    )}
                    {post.phase && (
                        <>
                            <span>·</span>
                            <span>{post.phase}</span>
                        </>
                    )}
                </div>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    {post.title}
                </h1>
                {post.goal && (
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        <span className="font-medium text-foreground">Goal:</span>{' '}
                        {post.goal}
                    </p>
                )}
                {post.originalUrl && (
                    <div className="mt-6 flex flex-col gap-2 rounded-lg border border-border/80 bg-secondary/40 p-3.5 text-sm sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <span className="inline-block size-2 rounded-full bg-emerald-500" />
                            <span>Originally written during school days on Blogger</span>
                        </div>
                        <a
                            href={post.originalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                        >
                            View original post <ExternalLink className="size-3" />
                        </a>
                    </div>
                )}
            </header>
            <div
                className="prose-body mt-10"
                dangerouslySetInnerHTML={{ __html: post.html }}
            />
            {post.series === 'GSoC 2026' && (
                <p className="mt-12 border-t border-border/60 pt-6 text-sm text-muted-foreground">
                    Part of my{' '}
                    <Link href="/gsoc" className="link">
                        GSoC 2026 journey with FOSSASIA
                    </Link>
                    .
                </p>
            )}
            {post.originalUrl && (
                <p className="mt-12 border-t border-border/60 pt-6 text-xs text-muted-foreground">
                    Archived from{' '}
                    <a
                        href={post.originalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link"
                    >
                        Blogs by Arnav Angarkar (Blogger)
                    </a>
                    .
                </p>
            )}
        </article>
    );
}
