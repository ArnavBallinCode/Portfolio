'use client';
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function StickyEmailLeft() {
    return (
        <div className="fixed left-8 bottom-0 hidden lg:flex flex-col items-center gap-8 z-50">
            <div className="flex flex-col items-center gap-6 mb-4">
                <a
                    href="https://github.com/arnavballincode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-primary hover:text-foreground transition-colors"
                    aria-label="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/arnav-angarkar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl text-primary hover:text-foreground transition-colors"
                    aria-label="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="mailto:arnav.angarkar20@gmail.com"
                    className="text-3xl text-primary hover:text-foreground transition-colors"
                    aria-label="Email"
                >
                    <FaEnvelope />
                </a>
            </div>
            <div className="w-px h-24 bg-primary"></div>
        </div>
    );
}
