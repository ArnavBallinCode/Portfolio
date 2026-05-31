import type { MetadataRoute } from 'next';
import { projects } from './data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
    const projectEntries: MetadataRoute.Sitemap = projects.map((project) => ({
        url: `https://angarkar.is-a.dev/projects/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    return [
        {
            url: 'https://angarkar.is-a.dev',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...projectEntries,
    ];
}
