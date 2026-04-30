'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';
import {
    SiC,
    SiCplusplus,
    SiPython,
    SiJavascript,
    SiFlask,
    SiDjango,
    SiMongodb,
    SiHuggingface,
    SiScikitlearn,
    SiPytorch,
    SiTensorflow,
    SiOpencv,
    SiDocker,
    SiGooglecloud,
    SiGit,
    SiLinux,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiSupabase,
} from 'react-icons/si';

const stack = [
    {
        category: 'Languages',
        items: [
            { name: 'Python', icon: <SiPython color="#3776AB" /> },
            { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
            { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
            { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
            { name: 'C', icon: <SiC color="#A8B9CC" /> },
        ],
    },
    {
        category: 'AI / ML',
        items: [
            { name: 'PyTorch', icon: <SiPytorch color="#EE4C2C" /> },
            { name: 'TensorFlow', icon: <SiTensorflow color="#FF6F00" /> },
            { name: 'scikit-learn', icon: <SiScikitlearn color="#F7931E" /> },
            { name: 'Hugging Face', icon: <SiHuggingface color="#FFD21F" /> },
            { name: 'OpenCV', icon: <SiOpencv color="#5C3EE8" /> },
            { name: 'LangChain', icon: null },
            { name: 'YOLO', icon: null },
        ],
    },
    {
        category: 'Web & Backend',
        items: [
            { name: 'React', icon: <SiReact color="#61DAFB" /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
            { name: 'Django', icon: <SiDjango color="#092E20" /> },
            { name: 'Flask', icon: <SiFlask /> },
            { name: 'Tailwind', icon: <SiTailwindcss color="#06B6D4" /> },
        ],
    },
    {
        category: 'Infra & Tools',
        items: [
            { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
            { name: 'GCP', icon: <SiGooglecloud color="#4285F4" /> },
            { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
            { name: 'Supabase', icon: <SiSupabase color="#3ECF8E" /> },
            { name: 'Git', icon: <SiGit color="#F05032" /> },
            { name: 'Linux', icon: <SiLinux color="#FCC624" /> },
        ],
    },
];

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Skills = () => {
    const container = useRef(null);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            });
            tl.from('.stack-row', {
                x: -100,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
            });
        },
        { scope: container },
    );

    if (!mounted) return null;

    return (
        <section id="skills" ref={container} className="py-24 bg-background">
            <div className="container max-w-5xl mx-auto flex flex-col items-center px-4 md:px-6">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-12 text-primary text-center tracking-tight">
                    Stack
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {stack.map((cat) => (
                        <div
                            key={cat.category}
                            className="stack-row border border-primary/10 rounded-xl p-6 hover:border-primary/25 transition-colors duration-300"
                        >
                            <h3 className="text-sm font-bold text-primary/60 uppercase tracking-widest mb-4">
                                {cat.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {cat.items.map((item) => (
                                    <span
                                        key={item.name}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-primary/5 rounded-lg text-sm text-gray-200 font-medium"
                                    >
                                        {item.icon && (
                                            <span className="text-lg">
                                                {item.icon}
                                            </span>
                                        )}
                                        {item.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
