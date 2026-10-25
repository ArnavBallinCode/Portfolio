export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    summary: string;
    series?: string;
    phase?: string;
    goal?: string;
    prs: string[];
    originalUrl?: string;
    readTime: string;
}

export interface Post extends PostMeta {
    html: string;
}

export function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC',
    });
}
