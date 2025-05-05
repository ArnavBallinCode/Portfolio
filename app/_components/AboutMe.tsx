'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
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
            tl.from('.about-content > *', {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
            });
        },
        { scope: container },
    );

    return (
        <section
            ref={container}
            className="py-24 bg-background pl-8 md:pl-20 lg:pl-32"
            id="about"
        >
            <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-stretch gap-12">
                <div className="about-content w-full md:w-2/3 text-left flex flex-col justify-center">
                    <h2 className="text-6xl md:text-8xl font-extrabold mb-14 text-primary text-left leading-[1.05]">
                        About Me
                    </h2>
                    <p className="text-3xl md:text-4xl mb-10 text-gray-200 text-left leading-snug">
                        Hi! I&apos;m <b>Arnav Amit Angarkar</b>, a passionate
                        Computer Science undergrad at IIIT Dharwad. I love
                        building things that matter—whether it&apos;s automating
                        drones for ISRO, deploying ML models at IISc, or
                        creating web apps for students. I thrive at the
                        intersection of AI, software engineering, and real-world
                        impact.
                    </p>
                    <p className="text-2xl md:text-3xl mb-10 text-gray-300 text-left leading-snug">
                        My journey has taken me from hackathons and open-source
                        bug bounties to research internships and startup
                        projects. I enjoy working on challenging problems,
                        collaborating with diverse teams, and learning new
                        technologies every day.
                    </p>
                    <p className="text-2xl md:text-3xl mb-10 text-gray-300 text-left leading-snug">
                        When I&apos;m not coding, you&apos;ll find me leading on
                        the basketball court, organizing events, or exploring
                        the latest in AI and cloud tech.
                    </p>
                </div>
                <div className="w-full md:w-1/3 h-72 md:h-full max-h-[600px] flex-shrink-0 overflow-hidden shadow-lg border-4 border-primary bg-background rounded-xl flex items-center justify-center">
                    <Image
                        src="/Pic.jpeg"
                        alt="Arnav Angarkar"
                        className="object-cover w-full h-full"
                        draggable="false"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
