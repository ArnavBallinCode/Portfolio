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
        default: 'Arnav Angarkar – Full Stack Developer & GSoC 2026',
        template: '%s | Arnav Angarkar',
    },
    description:
        'Arnav Angarkar – CS undergrad at IIIT Dharwad, GSoC 2026 @ FOSSASIA, ISRO IROC AIR 3, Linux Foundation Scholar, 4x hackathon winner, published researcher. Full-stack developer specialising in AI/ML, web platforms, and open source.',
    keywords: [
        'Arnav Angarkar',
        'Arnav Angarkar portfolio',
        'angarkar.is-a.dev',
        'GSoC 2026 FOSSASIA',
        'IIIT Dharwad developer',
        'Full Stack Developer India',
        'AI ML developer',
        'open source developer India',
        'ISRO IROC AIR 3',
        'hackathon winner India',
        'Linux Foundation Scholar',
        'quantum error correction researcher',
    ],
    authors: [{ name: 'Arnav Angarkar', url: 'https://angarkar.is-a.dev' }],
    creator: 'Arnav Angarkar',
    metadataBase: new URL('https://angarkar.is-a.dev'),
    alternates: {
        canonical: 'https://angarkar.is-a.dev',
    },
    openGraph: {
        title: 'Arnav Angarkar – Full Stack Developer & GSoC 2026',
        description:
            'Arnav Angarkar – CS undergrad at IIIT Dharwad, GSoC 2026 @ FOSSASIA, ISRO IROC AIR 3, Linux Foundation Scholar, 4x hackathon winner, published researcher.',
        url: 'https://angarkar.is-a.dev',
        siteName: 'Arnav Angarkar',
        locale: 'en_US',
        type: 'website',
        images: [
            {
                url: '/Pic.jpeg',
                width: 1200,
                height: 630,
                alt: 'Arnav Angarkar – Full Stack Developer',
            },
        ],
    },
    twitter: {
        title: 'Arnav Angarkar – Full Stack Developer & GSoC 2026',
        description:
            'Arnav Angarkar – CS undergrad at IIIT Dharwad, GSoC 2026 @ FOSSASIA, ISRO IROC AIR 3, Linux Foundation Scholar, 4x hackathon winner.',
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
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <GoogleAnalytics gaId="G-MHLY1LNGY5" />
            <Script
                id="json-ld-person"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: 'Arnav Angarkar',
                        url: 'https://angarkar.is-a.dev',
                        image: 'https://angarkar.is-a.dev/Pic.jpeg',
                        jobTitle: 'Full Stack Developer',
                        description:
                            'CS undergrad at IIIT Dharwad. GSoC 2026 @ FOSSASIA. ISRO IROC AIR 3. Linux Foundation Scholar. 4x hackathon winner. Published researcher in quantum error correction.',
                        alumniOf: {
                            '@type': 'EducationalOrganization',
                            name: 'IIIT Dharwad',
                        },
                        sameAs: [
                            'https://github.com/ArnavAngarkar',
                            'https://linkedin.com/in/arnav-angarkar',
                        ],
                        knowsAbout: [
                            'Full Stack Development',
                            'Artificial Intelligence',
                            'Machine Learning',
                            'Open Source',
                            'Cloud Technologies',
                            'Quantum Computing',
                        ],
                    }),
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
