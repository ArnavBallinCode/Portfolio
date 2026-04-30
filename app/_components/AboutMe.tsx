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
                    <h2 className="text-6xl md:text-8xl font-extrabold mb-14 text-primary text-left leading-[1.05] tracking-tight">
                        About Me
                    </h2>
                    <p className="text-2xl md:text-3xl mb-8 text-gray-200 text-left leading-snug">
                        <b>Arnav Angarkar</b> &mdash; CS undergrad at IIIT Dharwad.
                        GSoC &apos;26 at FOSSASIA. ISRO IROC AIR 3. Linux
                        Foundation Scholar. 4x hackathon winner. Published
                        researcher in quantum error correction.
                    </p>
                    <p className="text-xl md:text-2xl mb-8 text-gray-400 text-left leading-snug">
                        100+ PRs merged in production open source. Speaker at
                        FOSSASIA Summit 2026. I build full-stack platforms,
                        deploy ML models that replace commercial solutions, and
                        architect real-time streaming infrastructure.
                    </p>
                </div>
                <div className="w-full md:w-1/3 h-72 md:h-full max-h-[600px] flex-shrink-0 overflow-hidden shadow-lg border border-primary/20 bg-background rounded-xl flex items-center justify-center">
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
