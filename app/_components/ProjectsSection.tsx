'use client';

import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { projects } from '../data/projects';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ProjectsSection = () => {
    const container = useRef(null);

    useGSAP(
        () => {
            if (!container.current) return;
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            });
            tl.fromTo(
                '.project-row',
                { x: 100, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
            );
        },
        { scope: container },
    );

    const renderProjects = () => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {projects.map((project) => (
                <div
                    key={project.title}
                    className="project-row bg-background/95 border-2 border-primary/20 p-6 rounded-2xl shadow-lg backdrop-blur-sm hover:bg-primary/10 transition-all opacity-100 h-full"
                >
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <h3 className="text-2xl font-extrabold text-primary mb-2">
                                {project.title}
                            </h3>
                            <span className="text-sm text-gray-400 font-mono font-semibold block mb-2">
                                {project.period}
                            </span>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 transition-colors text-sm font-medium underline block mb-4"
                                >
                                    🌐 {project.link.replace('https://', '')}
                                </a>
                            )}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.slice(0, 3).map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {project.tech.length > 3 && (
                                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                                        +{project.tech.length - 3} more
                                    </span>
                                )}
                            </div>
                            <ul className="list-disc list-inside text-gray-200 space-y-2 text-base mb-4">
                                {project.description
                                    .slice(0, 2)
                                    .map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                            </ul>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-primary hover:text-primary/80 transition-colors font-bold"
                                >
                                    Live Demo →
                                </a>
                            )}
                            <a
                                href={`/projects/${project.slug}`}
                                className="text-primary text-lg font-extrabold hover:text-primary/80 transition-colors"
                            >
                                View Details →
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <section
            ref={container}
            className="py-32 bg-background min-h-screen"
            id="projects"
        >
            <div className="container max-w-5xl mx-auto flex flex-col items-center px-4">
                <h2 className="text-5xl md:text-7xl font-extrabold mb-16 text-primary text-center">
                    Projects
                </h2>
                {renderProjects()}
            </div>
        </section>
    );
};

export default ProjectsSection;
