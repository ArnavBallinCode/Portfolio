import type { Metadata } from 'next';
import { getPosts } from '@/lib/blog';
import { BlogFilterList } from './BlogFilterList';

export const metadata: Metadata = {
    title: 'Writing & Essays',
    description:
        'Engineering notes, GSoC updates, personal reflections on athletics and rebuilding, and archived science blogs from school days.',
    alternates: { canonical: 'https://angarkar.is-a.dev/blog/' },
};

export default function BlogIndex() {
    const posts = getPosts();
    // Exclude large html string to keep client payload minimal
    const postMetas = posts.map(({ html, ...meta }) => meta);

    return (
        <div className="mx-auto max-w-2xl px-6 py-16">
            <h1 className="text-3xl font-semibold tracking-tight">Writing & Essays</h1>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Engineering deep-dives, GSoC 2026 notes, candid personal essays on athletics
                and resilience, and my early science writings archived from school days.
            </p>
            <BlogFilterList posts={postMetas} />
        </div>
    );
}
