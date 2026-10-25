import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
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
        alternates: { canonical: `https://angarkar.is-a.dev/blog/${slug}/` },
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
                <p className="font-mono text-xs text-muted-foreground">
                    {formatDate(post.date)}
                    {post.phase && <span> · {post.phase}</span>}
                </p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    {post.title}
                </h1>
                {post.goal && (
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        <span className="font-medium text-foreground">Goal:</span>{' '}
                        {post.goal}
                    </p>
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
        </article>
    );
}
