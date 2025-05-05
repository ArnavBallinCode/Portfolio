'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const experiences = [
    {
        company: 'ISRO Grand Challenge',
        location: 'India',
        title: 'Project Manager | Drone Automation & Integration',
        period: '2025',
        details: [
            'Part of a team in the ISRO Grand Challenge, securing a top 170 rank out of 2000+ teams.',
            'Developed scripts for object detection for safe landing using OpenCV, YOLO, and PyTorch.',
            'Developed MAVLink-based communication, automated flight operations, and built a software mission planner for UAVs.',
            'Created real-time telemetry dashboards, integrated AI-based obstacle avoidance, and deployed automation servers.',
            'Managed hardware assembly, sensor integration, and project execution to deliver a fully functional autonomous drone.',
        ],
    },
    {
        company: 'IISc (Indian Institute of Science)',
        location: 'Bangalore',
        title: 'ML/AI Intern',
        period: 'Dec 2024 - Present',
        details: [
            'Working on a GoK DULT project awarded to Aarnaq, CPDMed TBI, IISc, Bangalore, enhancing and fine-tuning Machine Learning models and algorithms for better image processing and object detection.',
        ],
    },
    {
        company: 'Vocab.AI',
        location: 'Dharwad',
        title: 'ASR Cloud Intern',
        period: 'Jan 2025 - Present',
        details: [
            'Learning and working on Automatic Speech Recognition (ASR) models and deployment on GCP.',
        ],
    },
    {
        company: 'Brahmand - Vishwakosha',
        location: 'Pune',
        title: 'Research Intern',
        period: 'Nov 2024 - Apr 2025',
        details: [
            'Re-developed the Vishwakosha website (https://www.brahmandexploration.com/)—a digital guide to the wonders of the universe.',
            'Enhanced website design and functionality to improve user experience and accessibility.',
        ],
    },
    {
        company: 'Brahmand - YantraSoft',
        location: 'Pune',
        title: 'AI Chatbot Developer',
        period: 'Winter 2024 - Apr 2025',
        details: [
            'Developing an AI-based chatbot to streamline the satellite development process by automating common queries and tasks.',
            'Enhancing chatbot accuracy and responsiveness.',
        ],
    },
];

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            });

            // Animate each experience item with different effects
            experiences.forEach((_, index) => {
                tl.from(`.experience-item-${index}`, {
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out',
                }).to(`.experience-item-${index}`, {
                    scrollTrigger: {
                        trigger: `.experience-item-${index}`,
                        start: 'top 80%',
                        end: 'top 20%',
                        scrub: true,
                    },
                    opacity: 1,
                    y: 0,
                    duration: 1,
                });
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-32 bg-background" id="experience">
            <div
                className="container max-w-5xl mx-auto flex flex-col items-center"
                ref={containerRef}
            >
                <h2 className="text-5xl md:text-7xl font-extrabold mb-16 text-primary text-center">
                    Work Experience
                </h2>
                <div className="space-y-24 w-full">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`experience-item-${index} relative group`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-2xl transform group-hover:scale-105 transition-transform duration-500" />
                            <div className="relative bg-background/20 backdrop-blur-sm p-8 rounded-2xl">
                                <div className="flex flex-wrap justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">
                                            {exp.company}
                                        </h3>
                                        <p className="text-xl text-gray-400 font-mono">
                                            {exp.location}
                                        </p>
                                    </div>
                                    <span className="text-xl text-primary font-mono font-semibold">
                                        {exp.period}
                                    </span>
                                </div>
                                <h4 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6">
                                    {exp.title}
                                </h4>
                                <ul className="space-y-4">
                                    {exp.details.map((detail, i) => (
                                        <li
                                            key={i}
                                            className="text-lg md:text-xl text-gray-300 leading-relaxed"
                                        >
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
