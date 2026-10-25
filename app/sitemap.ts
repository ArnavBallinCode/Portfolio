import type { MetadataRoute } from 'next';
import { getPosts } from '@/lib/blog';
import { projects } from './data/projects';

export const dynamic = 'force-static';

const SITE = 'https://angarkar.is-a.dev';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    const page = (
        path: string,
        priority: number,
        changeFrequency: 'weekly' | 'monthly' = 'monthly',
    ) => ({ url: `${SITE}${path}`, lastModified: now, changeFrequency, priority });

    return [
        page('/', 1, 'weekly'),
        page('/gsoc/', 0.9, 'weekly'),
        page('/gsoc/project/', 0.8),
        page('/gsoc/contributions/', 0.8, 'weekly'),
        page('/gsoc/final-report/', 0.8),
        page('/blog/', 0.8, 'weekly'),
        page('/gallery/', 0.5),
        ...getPosts().map((p) => ({
            url: `${SITE}/blog/${p.slug}/`,
            lastModified: new Date(p.date),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
        ...projects.map((p) => page(`/projects/${p.slug}/`, 0.7)),
    ];
}
