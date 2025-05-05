/*
 * Copyright (c) 2024 Arnav Angarkar
 * All rights reserved.
 *
 * No part of this file may be copied, used, modified, or distributed
 * without the express written permission of the copyright holder.
 *
 * For permissions, contact: arnav.angarkar20@gmail.com
 */

import React from 'react';
import type { SVGProps } from 'react';

interface SVGRProps {
    title?: string;
}

const SectionFlower: React.FC<SVGProps<SVGSVGElement> & SVGRProps> = (
    props,
) => {
    return (
        <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {props.title && <title>{props.title}</title>}
            <path
                d="M50 10C55 25 65 35 80 40C65 45 55 55 50 70C45 55 35 45 20 40C35 35 45 25 50 10Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
            />
            <circle cx="50" cy="40" r="5" fill="currentColor" />
        </svg>
    );
};

export default SectionFlower;
