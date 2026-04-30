'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const container = useRef(null);
    const text1 = useRef(null);
    const text2 = useRef(null);
    const text3 = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();
            tl.from(text1.current, {
                y: 100,
                opacity: 0,
                duration: 0.8,
                delay: 0.5,
            })
                .from(
                    text2.current,
                    {
                        y: 100,
                        opacity: 0,
                        duration: 0.8,
                    },
                    '-=0.3',
                )
                .from(
                    text3.current,
                    {
                        y: 100,
                        opacity: 0,
                        duration: 0.8,
                    },
                    '-=0.3',
                );
        },
        { scope: container },
    );

    return (
        <section
            ref={container}
            className="min-h-screen flex items-center justify-start relative overflow-hidden px-6 md:px-12 lg:px-16 pt-20 md:pt-24"
        >
            <div className="container max-w-full mx-0 w-full">
                <div className="overflow-visible mb-4 flex flex-col items-start w-full">
                    <h1
                        ref={text1}
                        className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 text-primary drop-shadow-2xl tracking-tighter text-left leading-[0.85] font-sans w-full"
                        style={{
                            letterSpacing: '-0.05em',
                        }}
                    >
                        <span className="block transform hover:scale-105 transition-transform duration-300">
                            Arnav
                        </span>
                        <span className="block pl-[0.3em] transform hover:scale-105 transition-transform duration-300">
                            Angarkar
                        </span>
                    </h1>
                </div>

                <div className="overflow-hidden">
                    <h2
                        ref={text2}
                        className="text-2xl md:text-4xl lg:text-5xl text-gray-300 mb-6 font-medium text-left tracking-tight"
                    >
                        GSoC &apos;26 @ FOSSASIA · Speaker · 4x Hackathon Winner
                    </h2>
                </div>

                <div className="overflow-hidden">
                    <p
                        ref={text3}
                        className="text-lg md:text-xl lg:text-2xl max-w-2xl text-gray-400 text-left leading-relaxed font-light"
                    >
                        Full-stack engineer and ML researcher. I ship
                        production open source, build autonomous systems, and
                        deploy models that replace million-dollar solutions.
                    </p>
                </div>

                <div className="mt-12 text-left">
                    <a
                        href="mailto:arnav.angarkar20@gmail.com"
                        className="group h-14 px-10 inline-flex justify-center items-center gap-3 text-lg uppercase font-bold tracking-wider outline-none transition-all duration-300 relative overflow-hidden bg-primary text-primary-foreground hover:scale-105 hover:shadow-lg hover:shadow-primary/20 mt-9 banner-button rounded-lg border border-primary/30"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="absolute top-[200%] left-0 right-0 h-full bg-white/10 rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
                        <span className="z-[1] font-semibold">
                            Get in Touch
                        </span>
                        <span className="z-[1] text-xl">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Banner;
