'use client';

import { useState } from 'react';
import Link from 'next/link';
import { formatDate, type PostMeta } from '@/lib/blog-types';

interface Props {
    posts: PostMeta[];
}

type FilterCategory = 'all' | 'gsoc' | 'personal' | 'school';

export function BlogFilterList({ posts }: Props) {
    const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');

    const filteredPosts = posts.filter((post) => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'gsoc') return post.series === 'GSoC 2026';
        if (activeFilter === 'personal') {
            return (
                post.series === 'Personal Reflections' ||
                post.series === 'School Days & Reflections'
            );
        }
        if (activeFilter === 'school') {
            return (
                Boolean(post.originalUrl) ||
                post.series?.includes('School Days')
            );
        }
        return true;
    });

    const gsocCount = posts.filter((p) => p.series === 'GSoC 2026').length;
    const personalCount = posts.filter(
        (p) =>
            p.series === 'Personal Reflections' ||
            p.series === 'School Days & Reflections',
    ).length;
    const schoolCount = posts.filter(
        (p) => Boolean(p.originalUrl) || p.series?.includes('School Days'),
    ).length;

    return (
        <div>
            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap gap-2">
                <button
                    onClick={() => setActiveFilter('all')}
                    className={`rounded-full px-3.5 py-1 text-xs font-medium transition-colors ${
                        activeFilter === 'all'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-muted-foreground hover:text-foreground'
                    }`}
                >
                    All ({posts.length})
                </button>
                <button
                    onClick={() => setActiveFilter('gsoc')}
                    className={`rounded-full px-3.5 py-1 text-xs font-medium transition-colors ${
                        activeFilter === 'gsoc'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-muted-foreground hover:text-foreground'
                    }`}
                >
                    GSoC & Engineering ({gsocCount})
                </button>
                <button
                    onClick={() => setActiveFilter('personal')}
                    className={`rounded-full px-3.5 py-1 text-xs font-medium transition-colors ${
                        activeFilter === 'personal'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-muted-foreground hover:text-foreground'
                    }`}
                >
                    Personal Essays ({personalCount})
                </button>
                <button
                    onClick={() => setActiveFilter('school')}
                    className={`rounded-full px-3.5 py-1 text-xs font-medium transition-colors ${
                        activeFilter === 'school'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-muted-foreground hover:text-foreground'
                    }`}
                >
                    School Days & Science ({schoolCount})
                </button>
            </div>

            {/* Posts List */}
            <ul className="mt-10 space-y-10">
                {filteredPosts.map((post) => (
                    <li key={post.slug} className="group">
                        <Link href={`/blog/${post.slug}`} className="block">
                            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted-foreground">
                                <span>{formatDate(post.date)}</span>
                                <span>·</span>
                                <span>{post.readTime}</span>
                                {post.series && (
                                    <>
                                        <span>·</span>
                                        <span className="font-medium text-primary">
                                            {post.series}
                                        </span>
                                    </>
                                )}
                                {post.originalUrl && (
                                    <>
                                        <span>·</span>
                                        <span className="inline-flex items-center gap-0.5 text-[11px] text-emerald-600 dark:text-emerald-400">
                                            School Days on Blogger
                                        </span>
                                    </>
                                )}
                            </div>
                            <h2 className="mt-1.5 text-lg font-medium tracking-tight group-hover:text-primary transition-colors">
                                {post.title}
                            </h2>
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                                {post.summary}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
