import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    summary: string;
    series?: string;
    phase?: string;
    goal?: string;
    prs: string[];
}

export interface Post extends PostMeta {
    html: string;
}

function read(file: string): Post {
    const slug = file.replace(/\.md$/, '');
    const { data, content } = matter(
        fs.readFileSync(path.join(BLOG_DIR, file), 'utf8'),
    );
    return {
        slug,
        title: data.title,
        date: new Date(data.date).toISOString().slice(0, 10),
        summary: data.summary ?? '',
        series: data.series,
        phase: data.phase,
        goal: data.goal,
        prs: data.prs ?? [],
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

export function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
    });
}
