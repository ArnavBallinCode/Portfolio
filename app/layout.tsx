import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { themeInitScript } from '@/lib/theme';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

const TITLE =
    'Arnav Angarkar – Software Engineer, Distributed Systems & ML | GSoC 2026';
const DESCRIPTION =
    'Arnav Angarkar – CS undergrad at IIIT Dharwad building distributed real-time systems and production ML. Google Summer of Code 2026 @ FOSSASIA, Eventyay maintainer, ISRO IROC All India Rank 3, 4x national hackathon winner.';

export const viewport: Viewport = {
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#ffffff' },
        { media: '(prefers-color-scheme: dark)', color: '#09090b' },
    ],
};

export const metadata: Metadata = {
    title: {
        default: TITLE,
        template: '%s | Arnav Angarkar',
    },
    description: DESCRIPTION,
    keywords: [
        'Arnav Angarkar',
        'Angarkar',
        'Arnav',
        'Anav Angarkar',
        'Arnav Amit Angarkar',
        'angarkar.tech',
        'Arnav Angarkar portfolio',
        'Arnav Angarkar developer',
        'Arnav Angarkar IIIT Dharwad',
        'Arnav Angarkar GSoC',
        'Arnav Angarkar GSoC 2026',
        'Arnav Angarkar FOSSASIA',
        'Arnav Angarkar ISRO',
        'Arnav Angarkar software engineer',
        'distributed systems engineer India',
        'ML infrastructure intern India',
        'GSoC 2026 FOSSASIA',
        'IIIT Dharwad developer',
        'Full Stack Developer India',
        'AI ML developer India',
        'open source developer India',
        'ISRO IROC AIR 3',
        'hackathon winner India',
        'Linux Foundation Scholar',
        'quantum error correction researcher',
        'Arnav Angarkar GitHub',
        'Arnav Angarkar LinkedIn',
        'Arnav Angarkar software engineer',
    ],
    authors: [{ name: 'Arnav Angarkar', url: 'https://angarkar.tech' }],
    creator: 'Arnav Angarkar',
    publisher: 'Arnav Angarkar',
    metadataBase: new URL('https://angarkar.tech'),

    verification: {
        google: 'googleb73ec97d9cf6ea95',
    },
    category: 'technology',
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: 'https://angarkar.tech',
        siteName: 'Arnav Angarkar – Portfolio',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/Pic.jpeg',
                width: 1200,
                height: 630,
                alt: 'Arnav Angarkar',
            },
        ],
    },
    twitter: {
        title: TITLE,
        description: DESCRIPTION,
        card: 'summary_large_image',
        images: ['/Pic.jpeg'],
        creator: '@ArnavAngarkar',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    other: {
        'google-site-verification': 'googleb73ec97d9cf6ea95',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
                <link rel="manifest" href="/manifest.json" />
                <link rel="icon" href="/Pic.jpeg" />
                <link rel="apple-touch-icon" href="/Pic.jpeg" />
            </head>
            <GoogleAnalytics gaId="G-MHLY1LNGY5" />
            <Script
                id="json-ld-structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            '@context': 'https://schema.org',
                            '@type': 'Person',
                            '@id': 'https://angarkar.tech/#person',
                            name: 'Arnav Angarkar',
                            alternateName: [
                                'Arnav Amit Angarkar',
                                'Anav Angarkar',
                                'Arnav A. Angarkar',
                                'Angarkar',
                            ],
                            givenName: 'Arnav',
                            familyName: 'Angarkar',
                            url: 'https://angarkar.tech',
                            image: 'https://angarkar.tech/Pic.jpeg',
                            jobTitle: 'Software Engineer',
                            description:
                                DESCRIPTION,
                            email: 'mailto:arnav.angarkar20@gmail.com',
                            alumniOf: {
                                '@type': 'CollegeOrUniversity',
                                name: 'Indian Institute of Information Technology Dharwad',
                                alternateName: 'IIIT Dharwad',
                                url: 'https://iiitdwd.ac.in',
                            },
                            worksFor: [
                                {
                                    '@type': 'Organization',
                                    name: 'FOSSASIA',
                                    url: 'https://fossasia.org',
                                },
                            ],
                            memberOf: [
                                {
                                    '@type': 'Organization',
                                    name: 'Google Summer of Code',
                                },
                                {
                                    '@type': 'Organization',
                                    name: 'Linux Foundation',
                                },
                            ],
                            award: [
                                'Google Summer of Code 2026 – FOSSASIA',
                                'ISRO IROC Grand Challenge – All India Rank 3',
                                'Linux Foundation Scholarship',
                                'HACKMAZE 2026 – 1st Place',
                                'DevHack 2025 (IIT Dharwad) – 1st Place',
                                'HAL Aerothon 2026 – Runner-up',
                                'ZeroDay MLH 2026 – 1st Place, Open Source Track',
                                'FOSSASIA Summit 2026 – Invited Speaker',
                            ],
                            sameAs: [
                                'https://github.com/ArnavBallinCode',
                                'https://linkedin.com/in/arnav-angarkar',
                                'https://angarkar.tech',
                            ],
                            knowsAbout: [
                                'Distributed Systems',
                                'Real-time Systems',
                                'ML Infrastructure',
                                'Artificial Intelligence',
                                'Machine Learning',
                                'Open Source Software',
                                'Cloud Technologies',
                                'Quantum Computing',
                                'React',
                                'Next.js',
                                'TypeScript',
                                'Python',
                                'Node.js',
                            ],
                            nationality: {
                                '@type': 'Country',
                                name: 'India',
                            },
                        },
                        {
                            '@context': 'https://schema.org',
                            '@type': 'WebSite',
                            '@id': 'https://angarkar.tech/#website',
                            url: 'https://angarkar.tech',
                            name: 'Arnav Angarkar – Portfolio',
                            description:
                                DESCRIPTION,
                            publisher: {
                                '@id': 'https://angarkar.tech/#person',
                            },
                            inLanguage: 'en-US',
                        },
                        {
                            '@context': 'https://schema.org',
                            '@type': 'ProfilePage',
                            '@id': 'https://angarkar.tech/#profilepage',
                            url: 'https://angarkar.tech',
                            name: 'Arnav Angarkar',
                            mainEntity: {
                                '@id': 'https://angarkar.tech/#person',
                            },
                            dateCreated: '2024-01-01',
                            dateModified: new Date()
                                .toISOString()
                                .split('T')[0],
                        },
                        {
                            '@context': 'https://schema.org',
                            '@type': 'BreadcrumbList',
                            itemListElement: [
                                {
                                    '@type': 'ListItem',
                                    position: 1,
                                    name: 'Home',
                                    item: 'https://angarkar.tech',
                                },
                                {
                                    '@type': 'ListItem',
                                    position: 2,
                                    name: 'Projects',
                                    item: 'https://angarkar.tech/#projects',
                                },
                            ],
                        },
                    ]),
                }}
                strategy="beforeInteractive"
            />
            <Script id="hotjar" strategy="afterInteractive">
                {`(function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:6380611,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
            </Script>
            <body className={`${inter.variable} ${mono.variable} font-sans`}>
                <a
                    href="#main"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
                >
                    Skip to content
                </a>
                <Navbar />
                <main id="main">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
