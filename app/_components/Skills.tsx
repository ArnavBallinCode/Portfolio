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
    SiPytorch,
    SiTensorflow,
    SiPandas,
    SiNumpy,
    SiJupyter,
    SiKeras,
    SiOpencv,
    SiDocker,
    SiAmazonwebservices,
    SiGooglecloud,
    SiGit,
    SiLinux,
    SiTypescript,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiSupabase,
    SiVercel,
    SiNetlify,
} from 'react-icons/si';

const stack = [
    {
        category: 'Programming Languages',
        items: [
            { name: 'Python', icon: <SiPython color="#3776AB" /> },
            { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
            { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
            { name: 'C', icon: <SiC color="#A8B9CC" /> },
            { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
            { name: 'SQL', icon: null },
            { name: 'LaTeX', icon: <SiLatex color="#008080" /> },
        ],
    },
    {
        category: 'Machine Learning & AI',
        items: [
            { name: 'PyTorch', icon: <SiPytorch color="#EE4C2C" /> },
            { name: 'TensorFlow', icon: <SiTensorflow color="#FF6F00" /> },
            { name: 'Keras', icon: <SiKeras color="#D00000" /> },
            { name: 'scikit-learn', icon: <SiScikitlearn color="#F7931E" /> },
            { name: 'Hugging Face', icon: <SiHuggingface color="#FFD21F" /> },
            { name: 'OpenCV', icon: <SiOpencv color="#5C3EE8" /> },
            { name: 'LangChain', icon: null },
            { name: 'Llama.cpp', icon: null },
            { name: 'ChromaDB', icon: null },
            { name: 'YOLO', icon: null },
            { name: 'OpenAI Whisper', icon: null },
            { name: 'BERTweet', icon: null },
        ],
    },
    {
        category: 'Data Science & Analytics',
        items: [
            { name: 'Pandas', icon: <SiPandas color="#150458" /> },
            { name: 'NumPy', icon: <SiNumpy color="#013243" /> },
            { name: 'Matplotlib', icon: null },
            { name: 'Seaborn', icon: null },
            { name: 'Plotly', icon: null },
            { name: 'Jupyter', icon: <SiJupyter color="#F37626" /> },
            { name: 'Google Colab', icon: null },
            { name: 'Streamlit', icon: <SiStreamlit color="#FF4B4B" /> },
        ],
    },
    {
        category: 'MLOps & Cloud',
        items: [
            { name: 'MLflow', icon: null },
            { name: 'H2O.ai', icon: null },
            { name: 'Prefect', icon: <SiPrefect color="#0096D6" /> },
            { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
            { name: 'AWS', icon: <SiAmazonwebservices color="#FF9900" /> },
            { name: 'Google Cloud', icon: <SiGooglecloud color="#4285F4" /> },
        ],
    },
    {
        category: 'Web Development',
        items: [
            { name: 'React', icon: <SiReact color="#61DAFB" /> },
            { name: 'Next.js', icon: <SiNextdotjs color="#000000" /> },
            { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
            { name: 'Express.js', icon: <SiExpress color="#000000" /> },
            { name: 'Flask', icon: <SiFlask color="#000000" /> },
            { name: 'Django', icon: <SiDjango color="#092E20" /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
            { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
            { name: 'CSS3', icon: <SiCss3 color="#1572B6" /> },
        ],
    },
    {
        category: 'Databases & Tools',
        items: [
            { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
            { name: 'Supabase', icon: <SiSupabase color="#3ECF8E" /> },
            { name: 'PyMongo', icon: null },
            { name: 'Git', icon: <SiGit color="#F05032" /> },
            { name: 'Linux', icon: <SiLinux color="#FCC624" /> },
            { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
            { name: 'Jinja2', icon: <SiJinja color="#B41717" /> },
        ],
    },
    {
        category: 'Deployment & Hosting',
        items: [
            { name: 'Vercel', icon: <SiVercel color="#000000" /> },
            { name: 'Netlify', icon: <SiNetlify color="#00C7B7" /> },
            { name: 'Ngrok', icon: null },
            { name: 'CI/CD', icon: null },
            { name: 'Monitor.py', icon: null },
            { name: 'WebSockets', icon: null },
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
