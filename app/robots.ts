export const dynamic = 'force-static';

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://angarkar.tech/sitemap.xml',
        host: 'https://angarkar.tech',
    };
}
