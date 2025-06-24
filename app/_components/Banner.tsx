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
                            textShadow:
                                '0 4px 20px rgba(79, 209, 197, 0.4), 0 0 40px rgba(79, 209, 197, 0.2)',
                            filter: 'drop-shadow(0 0 10px rgba(79, 209, 197, 0.3))',
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
                        className="text-2xl md:text-4xl lg:text-5xl text-gray-300 mb-6 font-medium text-left tracking-wide"
                        style={{
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                        }}
                    >
                        Full Stack Developer & AI/ML Engineer
                    </h2>
                </div>

                <div className="overflow-hidden">
                    <p
                        ref={text3}
                        className="text-lg md:text-xl lg:text-2xl max-w-2xl text-gray-200 text-left leading-relaxed font-light"
                        style={{
                            textShadow: '0 1px 5px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        I build innovative solutions at the intersection of web
                        development and artificial intelligence. From dynamic
                        web applications to ML-powered systems, I bring ideas to
                        life with clean code and cutting-edge technology.
                    </p>
                </div>

                <div className="mt-12 text-left">
                    <a
                        href="mailto:arnav.angarkar20@gmail.com"
                        className="group h-14 px-10 inline-flex justify-center items-center gap-3 text-lg uppercase font-bold tracking-wider outline-none transition-all duration-300 relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 mt-9 banner-button rounded-xl border border-primary/20"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            boxShadow: '0 10px 30px rgba(79, 209, 197, 0.2)',
                        }}
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
