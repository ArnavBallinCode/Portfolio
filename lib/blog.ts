import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { type Post, type PostMeta, formatDate } from './blog-types';

export * from './blog-types';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

function read(file: string): Post {
    const slug = file.replace(/\.md$/, '');
    const { data, content } = matter(
        fs.readFileSync(path.join(BLOG_DIR, file), 'utf8'),
    );
    const wordCount = content.split(/\s+/).filter(Boolean).length;
    const readTime = `${Math.max(1, Math.ceil(wordCount / 220))} min read`;
    return {
        slug,
        title: data.title,
        date: new Date(data.date).toISOString().slice(0, 10),
        summary: data.summary ?? '',
        series: data.series,
        phase: data.phase,
        goal: data.goal,
        prs: data.prs ?? [],
        originalUrl: data.originalUrl ?? data.original_url,
        readTime,
        html: marked.parse(content, { async: false }),
    };
}

/** All posts, newest first. Drop a .md file into content/blog to publish. */
export function getPosts(): Post[] {
    return fs
        .readdirSync(BLOG_DIR)
        .filter((f) => f.endsWith('.md'))
        .map(read)
        .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
    return getPosts().find((p) => p.slug === slug);
}
