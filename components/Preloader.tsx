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

            // Animate name letters with sexy stagger effect
            tl.to('.name-text span', {
                y: 0,
                opacity: 1,
                rotationX: 0,
                stagger: 0.08,
                duration: 0.6,
                ease: 'back.out(1.7)',
            });

            // Add enhanced glowing pulse effect
            tl.to(
                '.name-text',
                {
                    textShadow:
                        '0 0 40px rgba(79, 209, 197, 1), 0 0 80px rgba(79, 209, 197, 0.8), 0 0 120px rgba(79, 209, 197, 0.6), 0 4px 20px rgba(0, 0, 0, 0.4)',
                    scale: 1.02,
                    duration: 0.6,
                    yoyo: true,
                    repeat: 1,
                    ease: 'power2.inOut',
                },
                '<0.3',
            );

            // Animate background panels out
            tl.to('.preloader-panel', {
                delay: 1.5,
                scaleY: 0,
                transformOrigin: 'top',
                duration: 0.8,
                stagger: {
                    each: 0.1,
                    from: 'random',
                },
                ease: 'power2.inOut',
            })
                .to(
                    '.name-text',
                    {
                        scale: 0.8,
                        opacity: 0,
                        duration: 0.6,
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
                    '<0.4',
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
                background:
                    'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
            }}
        >
            {/* Animated background panels with gradients */}
            {Array.from({ length: 10 }, (_, i) => (
                <div
                    key={i}
                    className="preloader-panel h-full w-[10%] relative"
                    style={{
                        background: `linear-gradient(180deg, 
                            hsl(${190 + i * 5}, 100%, ${15 + i * 2}%) 0%, 
                            hsl(${180 + i * 3}, 95%, ${10 + i * 1.5}%) 50%, 
                            hsl(${170 + i * 2}, 90%, ${8 + i * 1}%) 100%)`,
                        borderRight:
                            i < 9
                                ? '1px solid rgba(79, 209, 197, 0.1)'
                                : 'none',
                    }}
                >
                    {/* Subtle animated overlay */}
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{
                            background: `radial-gradient(circle at ${
                                50 + i * 10
                            }% 50%, rgba(79, 209, 197, 0.3) 0%, transparent 70%)`,
                            animation: `pulse-${i} 2s ease-in-out infinite`,
                            animationDelay: `${i * 0.2}s`,
                        }}
                    />
                </div>
            ))}

            {/* Sexy name text with solid colors and sharp visibility */}
            <div className="absolute inset-0 flex items-center justify-center">
                <p
                    className="name-text flex text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-center leading-none overflow-hidden whitespace-nowrap select-none text-primary"
                    style={{
                        letterSpacing: '0.02em',
                        textShadow:
                            '0 0 20px rgba(79, 209, 197, 0.6), 0 0 40px rgba(79, 209, 197, 0.4), 0 4px 20px rgba(0, 0, 0, 0.3)',
                        filter: 'drop-shadow(0 2px 10px rgba(79, 209, 197, 0.5))',
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
                                transform: 'translateY(100px) rotateX(-90deg)',
                                transformStyle: 'preserve-3d',
                                marginRight: letter === ' ' ? '0.3em' : '0',
                            }}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                    ))}
                </p>
            </div>

            {/* Animated particles */}
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 20 }, (_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float-${i % 3} ${
                                3 + Math.random() * 2
                            }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Custom CSS animations */}
            <style jsx>{`
                @keyframes float-0 {
                    0%,
                    100% {
                        transform: translateY(0px) translateX(0px);
                        opacity: 0.6;
                    }
                    33% {
                        transform: translateY(-20px) translateX(10px);
                        opacity: 1;
                    }
                    66% {
                        transform: translateY(10px) translateX(-10px);
                        opacity: 0.8;
                    }
                }
                @keyframes float-1 {
                    0%,
                    100% {
                        transform: translateY(0px) translateX(0px);
                        opacity: 0.4;
                    }
                    50% {
                        transform: translateY(-30px) translateX(15px);
                        opacity: 0.9;
                    }
                }
                @keyframes float-2 {
                    0%,
                    100% {
                        transform: translateY(0px) translateX(0px);
                        opacity: 0.7;
                    }
                    25% {
                        transform: translateY(15px) translateX(-20px);
                        opacity: 0.5;
                    }
                    75% {
                        transform: translateY(-10px) translateX(20px);
                        opacity: 1;
                    }
                }
                ${Array.from(
                    { length: 10 },
                    (_, i) => `
                    @keyframes pulse-${i} {
                        0%, 100% { opacity: 0.1; transform: scale(1); }
                        50% { opacity: 0.3; transform: scale(1.05); }
                    }
                `,
                ).join('')}
            `}</style>
        </div>
    );
};

export default Preloader;
