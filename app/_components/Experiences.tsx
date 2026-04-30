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
        location: 'On-site',
        title: 'ML/AI Intern',
        period: 'June 2025 – Aug 2025',
        details: [
            'Engineered a cutting-edge machine learning pipeline that revolutionized operational workflows, achieving breakthrough improvements in automation and data processing efficiency.',
            'Developed and deployed a model that delivered an annual business cost savings of over ₹2 Crore + by driving process optimization and resource allocation.',
            'Collaborated closely with interdisciplinary teams to integrate AI-driven solutions that enhanced both accuracy and scalability across key business operations.',
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
        location: 'Remote',
        title: 'Founder & CEO',
        period: 'January 2025 – Present',
        link: 'https://campusdabba0.netlify.app',
        details: [
            'Founded and leading CampusDabba, a dynamic campus marketplace for students to buy, sell, and exchange goods/services.',
            'Built the entire platform from concept to deployment using Node.js, TypeScript, Express.js, MongoDB, React, and Next.js.',
            'Implemented secure user authentication, real-time chat functionality using WebSockets, and optimized backend APIs.',
            'Successfully launched the platform and managing business operations, user acquisition, and product development.',
        ],
    },
    {
        company: 'IISc (Indian Institute of Science) – RIMM Lab',
        location: 'Bangalore',
        title: 'ML/AI Intern | Smart Mirror Project',
        period: 'March 2025 – Present',
        details: [
            'Developing a Virtual Try-On system using real-time body landmark detection and computer vision.',
            'Implemented garment overlay using webcam input, with segmentation-based garment alignment.',
            'Built lightweight multimodal AI pipelines optimized for edge devices with privacy-first design.',
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
            'Contributed to a GoK-DULT funded urban mobility project using advanced ML-based object detection.',
            'Optimized CV pipelines and trained detection models for enhanced visual processing.',
        ],
    },
    {
        company: 'Brahmand - Vishwakosha',
        location: 'Pune',
        title: 'Research Intern',
        period: 'November 2024 – April 2025',
        details: [
            'Revamped https://www.brahmandexploration.com/ to create a dynamic digital encyclopedia of the cosmos.',
            'Improved user experience, content accessibility, and site performance.',
        ],
    },
    {
        company: 'Brahmand - YantraSoft',
        location: 'Pune',
        title: 'AI Chatbot Developer',
        period: 'Winter 2024 – April 2025',
        details: [
            'Designed and implemented an AI chatbot to streamline the satellite development knowledge base.',
            'Improved NLP response accuracy and user engagement through iterative model refinement.',
        ],
    },
    {
        company: 'Bug Bounty Programs',
        location: 'Remote',
        title: 'Security Researcher',
        period: '2022 – 2025',
        details: [
            'Active contributor to the Netflix, Cursor, 1Password, Udemy, and Google Bug Bounty programs, successfully identifying and reporting security vulnerabilities.',
            'Discovered and responsibly disclosed vulnerabilities across web applications, APIs, and authentication flows, earning acknowledgements from security teams.',
            'Developed deep expertise in OWASP Top 10 attack vectors including XSS, IDOR, CSRF, and authentication bypass techniques.',
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
                <h2 className="text-5xl md:text-7xl font-extrabold mb-16 text-primary text-center tracking-tight">
                    Work Experience
                </h2>
                <div className="space-y-16 w-full">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className={`experience-item-${index} relative group`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-xl transform group-hover:scale-[1.02] transition-transform duration-300" />
                            <div className="relative bg-background/30 backdrop-blur-sm p-8 rounded-xl border border-primary/10 group-hover:border-primary/25 transition-colors duration-300">
                                <div className="flex flex-wrap justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-extrabold text-primary mb-1 tracking-tight">
                                            {exp.company}
                                        </h3>
                                        <p className="text-base text-gray-500 font-mono tracking-wide uppercase">
                                            {exp.location}
                                        </p>
                                        {exp.link && (
                                            <a
                                                href={exp.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary hover:text-primary/80 transition-colors text-lg font-medium underline"
                                            >
                                                {exp.link.replace(
                                                    'https://',
                                                    '',
                                                )}
                                            </a>
                                        )}
                                    </div>
                                    <span className="text-sm text-primary/80 font-mono font-semibold tracking-wide">
                                        {exp.period}
                                    </span>
                                </div>
                                <h4 className="text-xl md:text-2xl font-bold text-gray-200 mb-4 tracking-tight">
                                    {exp.title}
                                </h4>
                                <ul className="space-y-3">
                                    {exp.details.map((detail, i) => (
                                        <li
                                            key={i}
                                            className="text-base md:text-lg text-gray-400 leading-relaxed pl-4 border-l-2 border-primary/20"
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
