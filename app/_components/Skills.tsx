'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react';
import {
    SiC,
    SiCplusplus,
    SiPython,
    SiLatex,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiPostman,
    SiFlask,
    SiStreamlit,
    SiJinja,
    SiDjango,
    SiMongodb,
    SiHuggingface,
    SiScikitlearn,
    SiPrefect,
    SiApacheairflow,
} from 'react-icons/si';

const stack = [
    {
        category: 'Languages',
        items: [
            { name: 'C', icon: <SiC color="#A8B9CC" /> },
            { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
            { name: 'Python', icon: <SiPython color="#3776AB" /> },
            { name: 'LaTeX', icon: <SiLatex color="#008080" /> },
            { name: 'HTML', icon: <SiHtml5 color="#E34F26" /> },
            { name: 'CSS', icon: <SiCss3 color="#1572B6" /> },
            { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
            { name: 'SQL', icon: null },
            { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
        ],
    },
    {
        category: 'Frameworks',
        items: [
            { name: 'Flask', icon: <SiFlask color="#000" /> },
            { name: 'Streamlit', icon: <SiStreamlit color="#FF4B4B" /> },
            { name: 'Jinja', icon: <SiJinja color="#B41717" /> },
            { name: 'Langchain', icon: null },
            { name: 'Django', icon: <SiDjango color="#092E20" /> },
            { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        ],
    },
    {
        category: 'Machine Learning',
        items: [
            { name: 'H2O.ai', icon: null },
            { name: 'MLflow', icon: null },
            { name: 'Hugging Face', icon: <SiHuggingface color="#FFD21F" /> },
            { name: 'scikit-learn', icon: <SiScikitlearn color="#F7931E" /> },
            { name: 'PyMongo', icon: null },
        ],
    },
    {
        category: 'Orchestration & Automation',
        items: [
            { name: 'Prefect', icon: <SiPrefect color="#0096D6" /> },
            { name: 'Airflow', icon: <SiApacheairflow color="#017CEE" /> },
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
            <div className="container max-w-6xl mx-auto flex flex-col items-center px-4 md:px-6">
                <h2 className="text-4xl md:text-6xl font-extrabold mb-12 text-primary text-center">
                    My Stack
                </h2>
                <div className="space-y-8 w-full">
                    {stack.map((cat) => (
                        <div
                            key={cat.category}
                            className="stack-row flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-12 py-8 lg:py-10 border-b-2 border-primary/20 last:border-b-0 transition-all bg-background/80 hover:bg-primary/5 rounded-2xl px-4 lg:px-6"
                        >
                            <div className="w-full lg:w-64 lg:min-w-[200px] lg:pr-8 flex flex-col lg:items-end">
                                <span className="block text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-gray-300 tracking-wide mb-3 text-left lg:text-right">
                                    {cat.category.toUpperCase()}
                                </span>
                                <div
                                    className="hidden lg:block h-full w-1 bg-primary/30 mt-2"
                                    style={{ minHeight: 60 }}
                                />
                            </div>
                            <div className="flex flex-wrap gap-x-6 gap-y-4 lg:gap-x-12 lg:gap-y-8 lg:pl-8 lg:border-l-2 lg:border-primary/20 w-full">
                                {cat.items.map((item) => (
                                    <div
                                        key={item.name}
                                        className="flex items-center gap-2 lg:gap-3 text-lg md:text-xl lg:text-2xl text-gray-100 font-bold"
                                    >
                                        {item.icon && (
                                            <span className="text-2xl md:text-3xl lg:text-4xl">
                                                {item.icon}
                                            </span>
                                        )}
                                        <span>{item.name}</span>
                                    </div>
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
