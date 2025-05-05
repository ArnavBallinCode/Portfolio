'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import gsap from 'gsap';
import { projects } from '../../data/projects';

interface Project {
    title: string;
    slug: string;
    github: string;
    period: string;
    tech: string[];
    description: string[];
}

const Preloader = () => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-32 w-32 border-t-8 border-primary border-solid"></div>
    </div>
);

export default function ProjectPage() {
    const { slug } = useParams();
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Find the project by slug
        const found = projects.find((p) => p.slug === slug);
        setProject(found || null);
        setTimeout(() => setLoading(false), 800); // Simulate loading
    }, [slug]);

    if (loading || !project) return <Preloader />;

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
            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-14 px-10 inline-flex justify-center items-center gap-3 text-2xl uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/80 rounded-xl shadow-lg"
            >
                <FaGithub className="text-3xl" />
                <span className="z-[1]">View on GitHub</span>
            </a>
        </section>
    );
}
