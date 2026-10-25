import type { Metadata } from 'next';
import { Contact, SkillsEducation } from './_components/AboutSection';
import ExperienceSection from './_components/ExperienceSection';
import Hero from './_components/Hero';
import ProjectsSection from './_components/ProjectsSection';
import RecognitionSection from './_components/RecognitionSection';

export const metadata: Metadata = {
    alternates: {
        canonical: 'https://angarkar.is-a.dev',
    },
};

export default function Home() {
    return (
        <div className="mx-auto max-w-4xl px-6 [&>*+*]:border-t [&>*+*]:border-border/60">
            <Hero />
            <ExperienceSection />
            <ProjectsSection />
            <RecognitionSection />
            <SkillsEducation />
            <Contact />
        </div>
    );
}
