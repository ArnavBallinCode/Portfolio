'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const experiences = [
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
        company: 'ISRO Grand Challenge',
        location: 'India',
        title: 'Project Manager | Drone Automation & Integration',
        period: 'January 2025 – Present',
        details: [
            'Developing a fully autonomous drone solution—Top 28 of 2000+ teams nationally.',
            'Built object detection systems using OpenCV, YOLOv5, and PyTorch for safe landing.',
            'Designed MAVLink-based GCS, real-time telemetry dashboards, and 3D flight visualizations.',
            'Integrated Jetson Nano, Pixhawk, LiDAR, Depth Camera for AI navigation, SLAM, and obstacle avoidance.',
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
        company: 'Vocab.AI',
        location: 'Dharwad',
        title: 'ASR Cloud Intern',
        period: 'January 2025',
        details: [
            'Worked on Automatic Speech Recognition (ASR) models and explored deployment workflows on Google Cloud Platform.',
            'Gained experience in acoustic modeling and cloud-native ML practices.',
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
