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

import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

export default function Template({ children }: { children: React.ReactNode }) {
    const [showTransition, setShowTransition] = useState(true);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to('.page-transition--inner', {
            yPercent: 0,
            duration: 0.2,
        })
            .to('.page-transition--inner', {
                yPercent: -100,
                duration: 0.2,
            })
            .to('.page-transition', {
                yPercent: -100,
                onComplete: () => setShowTransition(false),
            });
    }, []);

    return (
        <div>
            {showTransition && (
                <div className="page-transition w-full h-full fixed top-0 left-0 bg-background-light z-[5]">
                    <div className="page-transition--inner w-full h-full fixed top-0 left-0 bg-primary z-[5] translate-y-full"></div>
                </div>
            )}
            {children}
        </div>
    );
}
