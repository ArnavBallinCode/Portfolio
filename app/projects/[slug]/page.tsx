import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../data/projects';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return {};

    return {
        title: project.title,
        description: `${project.summary} Built by Arnav Angarkar with ${project.tech.slice(0, 5).join(', ')}.`,
        alternates: {
            canonical: `https://angarkar.tech/projects/${slug}/`,
        },
        openGraph: {
            title: `${project.title} – Arnav Angarkar`,
            description: project.summary,
            url: `https://angarkar.tech/projects/${slug}/`,
            type: 'article',
        },
    };
}

export function generateStaticParams() {
    return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    return (
        <article className="mx-auto max-w-2xl px-6 py-16">
            <Link
                href="/#projects"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
                <ArrowLeft className="size-4" /> All projects
            </Link>

            <header className="mt-10">
                <p className="font-mono text-xs text-muted-foreground">
                    {project.period}
                    {project.badge && (
                        <span className="text-primary"> · {project.badge}</span>
                    )}
                </p>
                <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                    {project.title}
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                    {project.summary}
                </p>

                {(project.github || project.link) && (
                    <div className="mt-6 flex flex-wrap gap-3">
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-9 items-center gap-1.5 rounded-md bg-foreground px-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                            >
                                Visit site <ArrowUpRight className="size-4" />
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-9 items-center gap-2 rounded-md border border-border px-3.5 text-sm font-medium transition-colors hover:bg-secondary"
                            >
                                <FaGithub className="size-4" /> Source
                            </a>
                        )}
                    </div>
                )}
            </header>

            <section className="mt-12">
                <h2 className="section-title">What I built</h2>
                <ul className="space-y-3 leading-relaxed">
                    {project.description.map((point) => (
                        <li
                            key={point}
                            className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:size-1 before:rounded-full before:bg-muted-foreground/50"
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mt-12">
                <h2 className="section-title">Stack</h2>
                <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                        <span key={t} className="tag">
                            {t}
                        </span>
                    ))}
                </div>
            </section>
        </article>
    );
}
