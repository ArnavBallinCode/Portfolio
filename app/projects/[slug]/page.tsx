import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '../../data/projects';
import ProjectPageClient from './_components/ProjectPageClient';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};

    return {
        title: `${project.title} – Arnav Angarkar`,
        description: `${project.description[0]} Built by Arnav Angarkar using ${project.tech.slice(0, 5).join(', ')}.`,
        alternates: {
            canonical: `https://angarkar.is-a.dev/projects/${slug}`,
        },
        openGraph: {
            title: `${project.title} – Arnav Angarkar`,
            description: project.description[0],
            url: `https://angarkar.is-a.dev/projects/${slug}`,
            type: 'article',
        },
    };
}

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    return <ProjectPageClient project={project} />;
}
