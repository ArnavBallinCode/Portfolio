/*
 * Copyright (c) 2024 Arnav Angarkar
 * All rights reserved.
 *
 * No part of this file may be copied, used, modified, or distributed
 * without the express written permission of the copyright holder.
 *
 * For permissions, contact: arnav.angarkar20@gmail.com
 */

import type { Metadata } from 'next';
import AboutMe from './_components/AboutMe';
import Achievements from './_components/Achievements';
import Banner from './_components/Banner';
import Education from './_components/Education';
import Experiences from './_components/Experiences';
import ProjectsSection from './_components/ProjectsSection';
import Skills from './_components/Skills';

export const metadata: Metadata = {
    title: 'Arnav Angarkar – Full Stack Developer, GSoC 2026, IIIT Dharwad',
    description:
        'Official portfolio of Arnav Angarkar (Angarkar) – Full Stack Developer, Google Summer of Code 2026 @ FOSSASIA, ISRO IROC AIR 3, Linux Foundation Scholar, 4x hackathon winner, published researcher at IIIT Dharwad.',
    alternates: {
        canonical: 'https://angarkar.is-a.dev',
    },
};

export default function Home() {
    return (
        <>
            <Banner />
            <AboutMe />
            <Education />
            <Skills />
            <Experiences />
            <Achievements />
            <ProjectsSection />
        </>
    );
}
