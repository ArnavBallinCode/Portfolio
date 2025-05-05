import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
// import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import StickyEmailLeft from './_components/StickyEmailLeft';
import StickyContactRight from './_components/StickyContactRight';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Arnav Angarkar - Full Stack Developer',
    description:
        'Full Stack Developer specializing in AI/ML, Web Development, and Cloud Technologies',
    metadataBase: new URL('https://arnavangarkar.com'),
    openGraph: {
        title: 'Arnav Angarkar - Full Stack Developer',
        description:
            'Full Stack Developer specializing in AI/ML, Web Development, and Cloud Technologies',
        url: 'https://arnavangarkar.com',
        siteName: 'Arnav Angarkar Portfolio',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        title: 'Arnav Angarkar - Full Stack Developer',
        description:
            'Full Stack Developer specializing in AI/ML, Web Development, and Cloud Technologies',
        card: 'summary_large_image',
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
            <body className={inter.className}>
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
                    <Preloader />
                    {/* <ScrollProgressIndicator /> */}
                    <ParticleBackground />
                </ReactLenis>
            </body>
        </html>
    );
}
