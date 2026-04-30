'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const education = [
    {
        institution: 'Indian Institute of Information Technology, Dharwad',
        degree: 'B.Tech in Computer Science and Engineering',
        period: 'Aug 2024 – Oct 2028',
        highlights: [
            'Focus areas: Machine Learning, Systems Programming, Algorithms.',
        ],
    },
    {
        institution: 'Indian Institute of Information Technology, Dharwad',
        degree: 'Minor in Quantum Information Science & Technology',
        period: 'Aug 2025 – Aug 2028',
        highlights: [
            'Quantum Computing minor covering quantum algorithms, error correction, and quantum information theory.',
        ],
    },
    {
        institution: 'Loyola High School & Junior College, Pune',
        degree: 'SSC',
        period: '2012 – 2022',
        highlights: [
            'PASCH Juku Scholarship Alumni (2021 batch) — awarded for German language excellence.',
            'Member of PASCH – Schulen: Partner der Zukunft, an international network of schools.',
        ],
    },
];

const Education = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            const cards = containerRef.current.querySelectorAll('.edu-card');
            cards.forEach((card) => {
                gsap.from(card, {
                    y: 40,
                    opacity: 0,
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 90%',
                        toggleActions: 'play none none none',
                    },
                });
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-24 bg-background" id="education">
            <div
                className="container max-w-5xl mx-auto px-4"
                ref={containerRef}
            >
                <h2 className="text-5xl md:text-7xl font-extrabold mb-16 text-primary text-center tracking-tight">
                    Education
                </h2>
                <div className="space-y-6">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="edu-card group relative bg-background/50 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-primary/10 hover:border-primary/25 transition-all duration-300"
                        >
                            <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-extrabold text-primary tracking-tight">
                                        {edu.institution}
                                    </h3>
                                    <p className="text-lg md:text-xl font-bold text-gray-200 mt-1 tracking-tight">
                                        {edu.degree}
                                    </p>
                                </div>
                                <span className="text-xs font-mono font-semibold tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                                    {edu.period}
                                </span>
                            </div>
                            <ul className="space-y-2 mt-4">
                                {edu.highlights.map((h, i) => (
                                    <li
                                        key={i}
                                        className="text-sm md:text-base text-gray-400 leading-relaxed pl-4 border-l border-primary/15"
                                    >
                                        {h}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
