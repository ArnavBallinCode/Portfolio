/*
 * Copyright (c) 2024 Arnav Angarkar
 * All rights reserved.
 *
 * No part of this file may be copied, used, modified, or distributed
 * without the express written permission of the copyright holder.
 *
 * For permissions, contact: arnav.angarkar20@gmail.com
 */

import { GENERAL_INFO } from '@/lib/data';
import React from 'react';

export default function StickyEmail() {
    return (
        <div className="fixed right-8 bottom-0 hidden lg:block">
            <div className="flex flex-col items-center gap-6">
                <a
                    href="mailto:arnav.angarkar20@gmail.com"
                    className="writing-vertical-rl text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    arnav.angarkar20@gmail.com
                </a>
                <div className="w-px h-24 bg-gray-600 dark:bg-gray-400"></div>
            </div>
        </div>
    );
}
