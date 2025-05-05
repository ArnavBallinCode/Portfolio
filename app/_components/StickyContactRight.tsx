'use client';

import React from 'react';

export default function StickyContactRight() {
    return (
        <div className="fixed right-12 bottom-0 hidden lg:flex flex-col items-center gap-8 z-50">
            <div className="flex flex-col items-center gap-4 mb-4">
                <span
                    className="writing-vertical-rl text-primary font-extrabold text-lg tracking-widest mb-2"
                    style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        letterSpacing: '0.2em',
                    }}
                >
                    GET IN TOUCH
                </span>
                <a
                    href="mailto:arnav.angarkar20@gmail.com"
                    className="writing-vertical-rl text-primary text-lg font-bold hover:text-foreground transition-colors tracking-widest"
                    style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                    }}
                >
                    arnav.angarkar20@gmail.com
                </a>
            </div>
            <div className="w-px h-24 bg-primary"></div>
        </div>
    );
}
