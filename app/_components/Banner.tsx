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
            className="min-h-[calc(100vh-5rem)] flex items-center justify-start relative overflow-hidden pl-8 md:pl-20 lg:pl-32"
        >
            <div className="container max-w-3xl mx-0">
                <div className="overflow-hidden mb-2 flex flex-col items-center">
                    <h1
                        ref={text1}
                        className="text-7xl md:text-8xl lg:text-[8rem] font-anton font-extrabold mb-4 text-primary drop-shadow-lg tracking-tight text-center leading-[0.95]"
                        style={{ letterSpacing: '0.01em' }}
                    >
                        <span className="block">Arnav</span>
                        <span className="block pl-[1.2em]">Angarkar</span>
                    </h1>
                </div>

                <div className="overflow-hidden">
                    <h2
                        ref={text2}
                        className="text-2xl md:text-4xl lg:text-5xl text-gray-400 mb-6 font-light text-left"
                    >
                        Full Stack Developer & AI/ML Engineer
                    </h2>
                </div>

                <div className="overflow-hidden">
                    <p
                        ref={text3}
                        className="text-xl md:text-2xl lg:text-3xl max-w-2xl text-gray-300 text-left"
                    >
                        I build innovative solutions at the intersection of web
                        development and artificial intelligence. From dynamic
                        web applications to ML-powered systems, I bring ideas to
                        life with clean code and cutting-edge technology.
                    </p>
                </div>

                <div className="mt-10 text-left">
                    <a
                        href="mailto:arnav.angarkar20@gmail.com"
                        className="group h-12 px-8 inline-flex justify-center items-center gap-2 text-lg uppercase font-anton tracking-widest outline-none transition-colors relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/80 mt-9 banner-button rounded-[8px] shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="absolute top-[200%] left-0 right-0 h-full bg-white rounded-[50%] group-hover:top-0 transition-all duration-500 scale-150"></span>
                        <span className="z-[1]">Get in Touch</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Banner;
