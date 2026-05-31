import type { Metadata } from 'next';
import { Inter, Anton } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import StickyEmailLeft from './_components/StickyEmailLeft';
import StickyContactRight from './_components/StickyContactRight';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });
const anton = Anton({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-anton',
});

export const metadata: Metadata = {
    title: {
        default:
            'Arnav Angarkar – Full Stack Developer, GSoC 2026, IIIT Dharwad',
        template: '%s | Arnav Angarkar',
    },
    description:
        'Arnav Angarkar (Angarkar) – Full Stack Developer & CS undergrad at IIIT Dharwad. Google Summer of Code 2026 @ FOSSASIA. ISRO IROC AIR 3. Linux Foundation Scholar. 4x hackathon winner. Published researcher in quantum error correction. Building AI/ML systems, open-source platforms, and production web applications.',
    keywords: [
        'Arnav Angarkar',
        'Angarkar',
        'Arnav',
        'Anav Angarkar',
        'Arnav Amit Angarkar',
        'angarkar.is-a.dev',
        'Arnav Angarkar portfolio',
        'Arnav Angarkar developer',
        'Arnav Angarkar IIIT Dharwad',
        'Arnav Angarkar GSoC',
        'Arnav Angarkar GSoC 2026',
        'Arnav Angarkar FOSSASIA',
        'Arnav Angarkar ISRO',
        'Arnav Angarkar full stack developer',
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
    authors: [{ name: 'Arnav Angarkar', url: 'https://angarkar.is-a.dev' }],
    creator: 'Arnav Angarkar',
    publisher: 'Arnav Angarkar',
    metadataBase: new URL('https://angarkar.is-a.dev'),
    alternates: {
        canonical: 'https://angarkar.is-a.dev',
    },
    verification: {
        google: 'googleb73ec97d9cf6ea95',
    },
    category: 'technology',
    openGraph: {
        title: 'Arnav Angarkar – Full Stack Developer, GSoC 2026, IIIT Dharwad',
        description:
            'Arnav Angarkar – CS undergrad at IIIT Dharwad. Google Summer of Code 2026 @ FOSSASIA. ISRO IROC AIR 3. Linux Foundation Scholar. 4x hackathon winner. Published researcher. Full-stack developer building AI/ML and open-source platforms.',
        url: 'https://angarkar.is-a.dev',
        siteName: 'Arnav Angarkar – Portfolio',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/Pic.jpeg',
                width: 1200,
                height: 630,
                alt: 'Arnav Angarkar – Full Stack Developer & GSoC 2026',
            },
        ],
    },
    twitter: {
        title: 'Arnav Angarkar – Full Stack Developer, GSoC 2026',
        description:
            'Arnav Angarkar – CS undergrad at IIIT Dharwad. GSoC 2026 @ FOSSASIA. ISRO IROC AIR 3. Linux Foundation Scholar. 4x hackathon winner. Open-source developer.',
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
        <html lang="en">
            <head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#000000" />
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
                            '@id': 'https://angarkar.is-a.dev/#person',
                            name: 'Arnav Angarkar',
                            alternateName: [
                                'Arnav Amit Angarkar',
                                'Anav Angarkar',
                                'Arnav A. Angarkar',
                                'Angarkar',
                            ],
                            givenName: 'Arnav',
                            familyName: 'Angarkar',
                            url: 'https://angarkar.is-a.dev',
                            image: 'https://angarkar.is-a.dev/Pic.jpeg',
                            jobTitle: 'Full Stack Developer',
                            description:
                                'Arnav Angarkar is a full-stack developer and CS undergrad at IIIT Dharwad. Google Summer of Code 2026 contributor at FOSSASIA. ISRO IROC AIR 3. Linux Foundation Scholar. 4x hackathon winner. Published researcher in quantum error correction.',
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
                                'HAL Aerothon – 3rd Place',
                                'FOSSASIA Summit 2026 – Invited Speaker',
                            ],
                            sameAs: [
                                'https://github.com/ArnavBallinCode',
                                'https://linkedin.com/in/arnav-angarkar',
                                'https://angarkar.is-a.dev',
                            ],
                            knowsAbout: [
                                'Full Stack Development',
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
                            '@id': 'https://angarkar.is-a.dev/#website',
                            url: 'https://angarkar.is-a.dev',
                            name: 'Arnav Angarkar – Portfolio',
                            description:
                                'Official portfolio of Arnav Angarkar – Full Stack Developer, GSoC 2026 @ FOSSASIA, IIIT Dharwad.',
                            publisher: {
                                '@id': 'https://angarkar.is-a.dev/#person',
                            },
                            inLanguage: 'en-US',
                        },
                        {
                            '@context': 'https://schema.org',
                            '@type': 'ProfilePage',
                            '@id': 'https://angarkar.is-a.dev/#profilepage',
                            url: 'https://angarkar.is-a.dev',
                            name: 'Arnav Angarkar',
                            mainEntity: {
                                '@id': 'https://angarkar.is-a.dev/#person',
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
                                    item: 'https://angarkar.is-a.dev',
                                },
                                {
                                    '@type': 'ListItem',
                                    position: 2,
                                    name: 'Projects',
                                    item: 'https://angarkar.is-a.dev/#projects',
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
            <body className={`${inter.className} ${anton.variable}`}>
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    <StickyEmailLeft />
                    <StickyContactRight />
                    <Navbar />
                    <main className="relative">{children}</main>
                    <Footer />

                    <CustomCursor />
                    <ParticleBackground />
                </ReactLenis>
            </body>
        </html>
    );
}
