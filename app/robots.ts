import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://angarkar.is-a.dev/sitemap.xml',
        host: 'https://angarkar.is-a.dev',
    };
}
