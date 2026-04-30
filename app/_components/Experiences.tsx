'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const experiences = [
    {
        company: 'FOSSASIA – Google Summer of Code',
        location: 'Remote',
        title: 'GSoC 2026 Intern | Eventyay',
        period: 'May 2026 – Present',
        link: 'https://github.com/fossasia/eventyay',
        details: [
            'Invited speaker at FOSSASIA Summit 2026 — delivered a talk on architecting real-time multilingual streaming infrastructure for open-source event platforms.',
            'Selected as a Google Summer of Code contributor with FOSSASIA, building real-time interpreter audio streaming and synchronized multilingual playback for the Eventyay live streaming platform.',
            'Developing a browser-based interpreter console using WebRTC and Jitsi infrastructure for low-latency translated speech streaming during live events.',
            'Building a multi-language audio player for viewers with automatic and user-adjustable timing offsets to maintain synchronization with YouTube video streams.',
            'Integrating interpretation settings (languages, streams, sync offsets) into the Eventyay admin system and processing interpreter input into scalable HLS streams.',
        ],
    },
    {
        company: 'FOSSASIA',
        location: 'Remote',
        title: 'Open Source Contributor | Eventyay',
        period: 'November 2024 – May 2025',
        link: 'https://github.com/fossasia/eventyay',
        details: [
            'Contributed to the Eventyay event management platform across ticketing flows, talks/schedule pages, event dashboards, and payment workflows.',
            'Resolved critical bugs and implemented features for real events at scale.',
            'Collaborated with global maintainers through code reviews and iterative feedback, following clean commit and backward-compatibility practices.',
        ],
    },
    {
        company: 'Poonawalla Fincorp',
        location: 'Pune, On-site',
        title: 'ML/AI Intern',
        period: 'June 2025 – July 2025',
        details: [
            'Deployed an ML-powered identity verification system integrated into fraud prevention workflows, replacing a commercial solution valued at ~Rs. 2 Cr/year.',
            'Built custom self-hosted data infrastructure for high-speed vector operations and streamlined identity verification.',
            'Optimized algorithmic performance for decision accuracy and inference efficiency at enterprise scale.',
        ],
    },
    {
        company: 'QWorld',
        location: 'Remote',
        title: 'Quantum Intern | Project Lead',
        period: 'June 2025 – Present',
        details: [
            'Leading a QWorld project (PAQ) to build an interactive, game-based learning platform for quantum computing.',
            'Designing modules on Bell states, CHSH inequality, quantum tunneling, decoherence, and quantum foundations.',
            'Managing a cross-functional team of 5 to integrate storytelling, quantum logic, and game mechanics.',
        ],
    },
    {
        company: 'CampusDabba',
        location: 'Dharwad',
        title: 'Founder & CEO',
        period: 'February 2025 – December 2025',
        link: 'https://campusdabba0.netlify.app',
        details: [
            'Founded and scaled a pre-incubated campus marketplace startup for students to buy, sell, and exchange goods and services.',
            'Built the full platform end-to-end — Node.js, TypeScript, Next.js, MongoDB, WebSockets — from first commit to production deployment.',
            'Managed business operations, user acquisition, and product roadmap while leading technical architecture decisions.',
            'Won 1st Place at DevHack \'25 (IIT Dharwad) competing against 500+ applicants across all years.',
        ],
    },
    {
        company: 'IISc (Indian Institute of Science) – RIMM Lab',
        location: 'Bangalore',
        title: 'ML/AI Intern | Smart Mirror Project',
        period: 'June 2025 – December 2025',
        details: [
            'Engineered a hybrid virtual try-on pipeline integrating multiple deep learning models for full-body outfit previews with high photorealism.',
            'Built real-time CV pipelines with MediaPipe and body landmark detection for live webcam-based garment overlay.',
            'Explored Neural Anthropometry for 3D body rendering and adaptive garment fitting for personalized digital fashion.',
            'Designed modular ML APIs and GPU-based inference setups for scalable, high-performance try-on experiences.',
        ],
    },
    {
        company: 'ISRO Grand Challenge – All India Rank 3',
        location: 'India',
        title: 'Project Manager | Command & Control Systems Engineer',
        period: 'November 2024 – Aug 2025',
        details: [
            'Led a team in a 10-month deep-tech initiative to design and deploy a fully autonomous UAV Drone—selected among Top 3 teams from 2000+ nationwide.',
            'Built a custom MAVLink-based GCS with real-time telemetry dashboards, state-aware mission mode transitions, and 3D flight visualizations using WebSockets and Three.js.',
            'Integrated edge-AI hardware (Jetson Nano), Pixhawk, LiDAR, and depth cameras for SLAM-based navigation, dynamic path planning, and autonomous obstacle avoidance.',
            'Developed computer vision pipelines using YOLOv5, Depth Anything, DINOv2, and PyTorch for safe landing zone detection and multi-modal perception.',
        ],
    },
    {
        company: 'IISc – CPDMed TBI (Aarnaq Project)',
        location: 'Bangalore',
        title: 'ML/AI Intern',
        period: 'December 2024 – March 2025',
        details: [
            'Fine-tuned YOLOv8 for Automatic Number Plate Recognition on a GoK-DULT funded urban mobility project.',
            'Built reproducible training pipelines with data versioning, augmentation strategies, and hyperparameter sweeps.',
            'Optimized inference for edge deployment — ONNX export, FP16 quantization, TensorRT acceleration.',
        ],
    },
    {
        company: 'Brahmand Exploration',
        location: 'Pune',
        title: 'Research Intern & AI Developer',
        period: 'November 2024 – April 2025',
        details: [
            'Built and deployed an AI-powered conversational bot using NLP for automated customer query resolution on the company website.',
            'Developed predictive models for internal workflows and contributed to front-end/back-end development with performance optimization.',
            'Revamped brahmandexploration.com into a dynamic digital encyclopedia with improved UX, content accessibility, and site performance.',
        ],
    },
    {
        company: 'Bug Bounty Programs',
        location: 'Remote',
        title: 'Security Researcher',
        period: '2022 – Present',
        details: [
            'Active contributor to the Netflix, Cursor, 1Password, Udemy, and Google Bug Bounty programs, successfully identifying and reporting security vulnerabilities.',
            'Discovered and responsibly disclosed vulnerabilities across web applications, APIs, and authentication flows, earning acknowledgements from security teams.',
            'Developed deep expertise in OWASP Top 10 attack vectors including XSS, IDOR, CSRF, and authentication bypass techniques.',
        ],
    },
];

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            if (!containerRef.current) return;

            // Draw the timeline progress line as you scroll
            if (progressRef.current && timelineRef.current) {
                gsap.fromTo(
                    progressRef.current,
                    { scaleY: 0 },
                    {
                        scaleY: 1,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: timelineRef.current,
                            start: 'top 60%',
                            end: 'bottom 40%',
                            scrub: 0.3,
                        },
                    },
                );
            }

            // Animate each card + dot individually
            experiences.forEach((_, index) => {
                const isLeft = index % 2 === 0;
                const card = `.exp-card-${index}`;
                const dot = `.exp-dot-${index}`;

                // Card slides in from the side
                gsap.from(card, {
                    x: isLeft ? -80 : 80,
                    opacity: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse',
                    },
                });

                // Dot scales up + glows
                gsap.from(dot, {
                    scale: 0,
                    duration: 0.4,
                    ease: 'back.out(3)',
                    scrollTrigger: {
                        trigger: dot,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse',
                    },
                });
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-32 bg-background" id="experience">
            <div
                className="container max-w-6xl mx-auto px-4"
                ref={containerRef}
            >
                <h2 className="text-5xl md:text-7xl font-extrabold mb-20 text-primary text-center tracking-tight">
                    Work Experience
                </h2>

                {/* Timeline wrapper */}
                <div className="relative" ref={timelineRef}>
                    {/* Background track */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-primary/10" />
                    {/* Animated progress fill */}
                    <div
                        ref={progressRef}
                        className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-primary origin-top"
                    />

                    <div className="space-y-12 md:space-y-16">
                        {experiences.map((exp, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                                <div
                                    key={index}
                                    className="relative flex items-start md:items-center"
                                >
                                    {/* Timeline dot */}
                                    <div
                                        className={`exp-dot-${index} absolute left-4 md:left-1/2 -translate-x-1/2 z-10 flex items-center justify-center`}
                                    >
                                        <span className="w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_rgba(74,222,128,0.4)]" />
                                        <span className="absolute w-8 h-8 rounded-full bg-primary/20 animate-ping" />
                                    </div>

                                    {/* Card - alternating sides on desktop, always right on mobile */}
                                    <div
                                        className={`exp-card-${index} ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                                            isLeft
                                                ? 'md:mr-auto md:pr-8'
                                                : 'md:ml-auto md:pl-8'
                                        }`}
                                    >
                                        {/* Period pill */}
                                        <span className="inline-block text-xs font-mono font-semibold tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                                            {exp.period}
                                        </span>

                                        <div className="group relative bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.06)]">
                                            {/* Connector line from dot to card (desktop only) */}
                                            <div
                                                className={`hidden md:block absolute top-8 w-8 h-[2px] bg-primary/20 group-hover:bg-primary/40 transition-colors ${
                                                    isLeft
                                                        ? 'right-0 translate-x-full'
                                                        : 'left-0 -translate-x-full'
                                                }`}
                                            />

                                            <div className="flex flex-wrap items-baseline gap-x-3 mb-1">
                                                <h3 className="text-xl md:text-2xl font-extrabold text-primary tracking-tight">
                                                    {exp.company}
                                                </h3>
                                                <span className="text-xs text-gray-500 font-mono uppercase tracking-widest">
                                                    {exp.location}
                                                </span>
                                            </div>

                                            {exp.link && (
                                                <a
                                                    href={exp.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary/70 hover:text-primary transition-colors text-sm font-mono underline underline-offset-2"
                                                >
                                                    {exp.link.replace(
                                                        'https://',
                                                        '',
                                                    )}
                                                </a>
                                            )}

                                            <h4 className="text-lg md:text-xl font-bold text-gray-200 mt-2 mb-4 tracking-tight">
                                                {exp.title}
                                            </h4>

                                            <ul className="space-y-2">
                                                {exp.details.map(
                                                    (detail, i) => (
                                                        <li
                                                            key={i}
                                                            className="text-sm md:text-base text-gray-400 leading-relaxed pl-4 border-l border-primary/15 hover:border-primary/40 transition-colors"
                                                        >
                                                            {detail}
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experiences;
