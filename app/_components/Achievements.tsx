'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const achievements = [
    {
        title: 'FOSSASIA Summit 2026',
        place: 'Speaker',
        description:
            'Invited speaker at one of Asia\'s largest open-source tech conferences. Presented on architecting real-time multilingual streaming infrastructure.',
        image: '/images/achievements/fossasia-summit.svg',
        link: null,
    },
    {
        title: 'ISRO IROC Grand Challenge',
        place: 'AIR 3',
        description:
            'All India Rank 3 in ISRO\'s national autonomous UAV challenge. Led team through 10-month initiative competing against 2000+ teams.',
        image: '/images/achievements/isro.svg',
        link: null,
    },
    {
        title: 'HACKMAZE \'26 — Telemetry Power Governor RTL',
        place: '1st Place',
        description:
            'Telemetry-driven Power Governor RTL IP for dynamic power management in SoCs. Hardware FSM for adaptive power state transitions.',
        image: '/images/achievements/hackmaze.svg',
        link: 'https://github.com/ArnavBallinCode/telemetry-power-governor-rtl',
    },
    {
        title: 'DevHack \'25 — CampusDabba',
        place: '1st Place',
        description:
            'Won first place at DevHack at IIT Dharwad with CampusDabba, competing against 500+ applicants across all years.',
        image: '/images/achievements/devhack.svg',
        link: 'https://campusdabba0.netlify.app',
    },
    {
        title: 'HAL Aerothon — RagVault',
        place: '3rd Place',
        description:
            'Fully offline, privacy-focused RAG system for secure enterprise knowledge management. Zero external API dependencies.',
        image: '/images/achievements/hal-ragvault.svg',
        link: 'https://github.com/ArnavBallinCode/RagVault',
    },
    {
        title: 'Hack2Future \'25',
        place: 'Finalist',
        description:
            'Only freshman team to qualify for the final round out of 400+ applicants. Received special mention.',
        image: '/images/achievements/hack2future.svg',
        link: null,
    },
];

const Achievements = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;
            gsap.from('.achievement-card', {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
                y: 60,
                opacity: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power2.out',
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-24 bg-background" id="achievements">
            <div
                className="container max-w-5xl mx-auto flex flex-col items-center px-4"
                ref={containerRef}
            >
                <h2 className="text-5xl md:text-7xl font-extrabold mb-16 text-primary text-center tracking-tight">
                    Achievements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {achievements.map((item) => (
                        <div
                            key={item.title}
                            className="achievement-card border border-primary/10 rounded-xl overflow-hidden hover:border-primary/25 transition-colors duration-300 group"
                        >
                            <div className="relative w-full h-48 bg-primary/5 flex items-center justify-center overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <span className="absolute top-3 right-3 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full uppercase tracking-wide">
                                    {item.place}
                                </span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-100 mb-2 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed mb-3">
                                    {item.description}
                                </p>
                                {item.link && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                                    >
                                        View Project →
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
