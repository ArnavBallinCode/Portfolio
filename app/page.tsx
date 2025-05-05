/*
 * Copyright (c) 2024 Arnav Angarkar
 * All rights reserved.
 *
 * No part of this file may be copied, used, modified, or distributed
 * without the express written permission of the copyright holder.
 *
 * For permissions, contact: arnav.angarkar20@gmail.com
 */

import AboutMe from './_components/AboutMe';
import Banner from './_components/Banner';
import Experiences from './_components/Experiences';
import ProjectsSection from './_components/ProjectsSection';
import Skills from './_components/Skills';

export default function Home() {
    return (
        <>
            <Banner />
            <AboutMe />
            <Skills />
            <Experiences />
            <ProjectsSection />
        </>
    );
}
