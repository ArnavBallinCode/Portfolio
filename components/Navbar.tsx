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
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const MENU_LINKS = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'About Me',
        url: '/#about-me',
    },
    {
        name: 'Experience',
        url: '/#my-experience',
    },
    {
        name: 'Projects',
        url: '/#selected-projects',
    },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter();

    // Helper to handle smooth scroll for hash links
    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        url: string,
    ) => {
        if (url.startsWith('/#') || url.startsWith('#')) {
            e.preventDefault();
            const id = url.replace('/#', '').replace('#', '');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
                // Optionally update the hash in the URL
                window.history.replaceState(null, '', `#${id}`);
            } else {
                // If not found, fallback to normal navigation
                router.push(url);
            }
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-primary">
                        Arnav Angarkar
                    </Link>
                    <div className="hidden md:flex space-x-8 items-center">
                        {MENU_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                className="text-gray-300 hover:text-primary transition-colors"
                                onClick={(e) => handleNavClick(e, link.url)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="/Arnav_Angarkar_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 px-5 py-2 rounded-lg bg-primary text-background font-bold shadow hover:bg-primary/80 transition-colors border border-primary"
                        >
                            Download Resume
                        </a>
                    </div>
                    <button
                        className="md:hidden text-gray-300 hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Open menu"
                    >
                        <svg
                            className="w-8 h-8"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Slide-in Menu */}
            <div
                className={`fixed inset-0 z-50 transition-all duration-300 ${
                    isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
            >
                {/* Backdrop */}
                <div
                    className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
                        isMenuOpen
                            ? 'opacity-100'
                            : 'opacity-0 pointer-events-none'
                    }`}
                >
                    {/* Rest of the component content */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
