'use client';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface Project {
    title: string;
    slug: string;
    github?: string;
    link?: string;
    period: string;
    tech: string[];
    description: string[];
}

export default function ProjectPageClient({ project }: { project: Project }) {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center py-24 bg-background">
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary mb-8 text-center">
                {project.title}
            </h1>
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
                {project.tech.map((tech) => (
                    <span
                        key={tech}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-lg font-bold"
                    >
                        {tech}
                    </span>
                ))}
            </div>
            <ul className="list-disc list-inside text-gray-200 space-y-4 text-xl md:text-2xl max-w-2xl mb-10">
                {project.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                ))}
            </ul>
            <div className="flex flex-wrap gap-4 justify-center">
                {project.github && (
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group h-14 px-10 inline-flex justify-center items-center gap-3 text-2xl uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/80 rounded-xl shadow-lg"
                    >
                        <FaGithub className="text-3xl" />
                        <span className="z-[1]">View on GitHub</span>
                    </a>
                )}
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group h-14 px-10 inline-flex justify-center items-center gap-3 text-2xl uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden border border-primary text-primary hover:bg-primary/10 rounded-xl"
                    >
                        <span className="z-[1]">Visit Live</span>
                        <span className="z-[1] text-xl">→</span>
                    </a>
                )}
            </div>
        </section>
    );
}
