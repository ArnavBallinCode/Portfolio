/*
 * Copyright (c) 2024 Arnav Angarkar
 * All rights reserved.
 *
 * No part of this file may be copied, used, modified, or distributed
 * without the express written permission of the copyright holder.
 *
 * For permissions, contact: arnav.angarkar20@gmail.com
 */

'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState, useEffect } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    // Fix hydration error by ensuring component is mounted
    useEffect(() => {
        setMounted(true);
    }, []);

    useGSAP(
        () => {
            if (!mounted) return;

            const tl = gsap.timeline({
                defaults: {
                    ease: 'power2.inOut',
                },
            });

            // Simple name animation
            tl.to('.name-text span', {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 0.6,
                ease: 'power2.out',
            });

            // Simple fade effect
            tl.to(
                '.name-text',
                {
                    duration: 0.4,
                    ease: 'power2.inOut',
                },
                '<0.5',
            );

            // Animate background panels out
            tl.to('.preloader-panel', {
                delay: 1.2,
                scaleY: 0,
                transformOrigin: 'top',
                duration: 0.6,
                stagger: 0.08,
                ease: 'power2.inOut',
            })
                .to(
                    '.name-text',
                    {
                        opacity: 0,
                        duration: 0.4,
                        ease: 'power2.in',
                    },
                    '<0.2',
                )
                .to(
                    preloaderRef.current,
                    {
                        opacity: 0,
                        pointerEvents: 'none',
                        duration: 0.3,
                    },
                    '<0.2',
                );
        },
        { scope: preloaderRef, dependencies: [mounted] },
    );

    if (!mounted) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex overflow-hidden"
            ref={preloaderRef}
            style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            }}
        >
            {/* Clean background panels */}
            {Array.from({ length: 8 }, (_, i) => (
                <div
                    key={i}
                    className="preloader-panel h-full w-[12.5%] relative"
                    style={{
                        background: `linear-gradient(180deg, 
                            hsl(${220}, 20%, ${15 + i * 1}%) 0%, 
                            hsl(${210}, 25%, ${12 + i * 0.5}%) 100%)`,
                        borderRight:
                            i < 7
                                ? '1px solid rgba(255, 255, 255, 0.05)'
                                : 'none',
                    }}
                />
            ))}

            {/* Professional name text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <p
                    className="name-text flex text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-center leading-none text-white"
                    style={{
                        letterSpacing: '0.1em',
                    }}
                >
                    {[
                        'A',
                        'R',
                        'N',
                        'A',
                        'V',
                        ' ',
                        'A',
                        'N',
                        'G',
                        'A',
                        'R',
                        'K',
                        'A',
                        'R',
                    ].map((letter, index) => (
                        <span
                            key={index}
                            className="inline-block opacity-0"
                            style={{
                                transform: 'translateY(30px)',
                                marginRight: letter === ' ' ? '0.3em' : '0',
                            }}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                    ))}
                </p>
            </div>
        </div>
    );
};

export default Preloader;
