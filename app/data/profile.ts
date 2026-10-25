export const site = {
    name: 'Arnav Angarkar',
    fullName: 'Arnav Amit Angarkar',
    url: 'https://angarkar.is-a.dev',
    email: 'arnav.angarkar20@gmail.com',
    github: 'https://github.com/ArnavBallinCode',
    linkedin: 'https://www.linkedin.com/in/arnav-angarkar/',
    resume: '/Arnav_Angarkar_Resume.pdf',
    location: 'Pune, India',
    role: 'Software Engineer · Distributed Systems & ML',
    availability: 'Open to opportunities · India or remote',
};

import { github } from './gsoc';

export const stats = [
    { value: 'AIR 3', label: 'ISRO IROC', detail: 'Led our team through the autonomous UAV challenge.' },
    { value: `${github.stats.mergedPullRequests} merged contributions`, label: 'Open-source maintainer', detail: 'VoxBento & Eventyay.' },
    { value: 'ML in production', label: 'Poonawalla Fincorp', detail: 'Built an in-house alternative to a ~₹2 Cr/year vendor service.' },
    { value: '5 wins & podiums', label: 'National hackathons', detail: 'From offline AI to hardware and developer tools.' },
];

export interface Experience {
    org: string;
    role: string;
    period: string;
    location: string;
    link?: string;
    points: string[];
    tech: string[];
}

export const experience: Experience[] = [
    {
        org: 'Google Summer of Code · FOSSASIA',
        role: 'GSoC Contributor, VoxBento',
        period: 'May 2026 – Present',
        location: 'Remote',
        link: '/gsoc',
        points: [
            'Architected VoxBento from scratch: a low-latency, browser-based multilingual interpretation platform for conference-scale events.',
            'Live audio over WebRTC (WHIP/WHEP) through MediaMTX, kept out of Python; FastAPI coordinates booths and async speech-to-text, translation and TTS workers over WebSockets.',
            'Presented it at FOSSASIA Summit 2026, demoed it live at Wikimania Paris 2026, and wrote up the whole journey on this site.',
        ],
        tech: ['WebRTC', 'MediaMTX', 'FastAPI', 'PostgreSQL'],
    },
    {
        org: 'FOSSASIA',
        role: 'Project Maintainer, Eventyay',
        period: 'Oct 2025 – Present',
        location: 'Remote',
        link: 'https://github.com/fossasia/eventyay',
        points: [
            'Maintain Eventyay, a 6k+ star open-source conference platform used by Wikimedia and PyCon.',
            `Authored ${github.repositories.find(repo => repo.name === 'fossasia/eventyay')?.mergedPullRequests ?? 221} merged PRs in Eventyay across ticketing, scheduling, speaker management and platform infrastructure; review contributions and keep production stable.`,
        ],
        tech: ['Django', 'Jinja', 'Vue.js', 'Linux'],
    },
    {
        org: 'IISc · RIMM Lab',
        role: 'ML Systems Intern',
        period: 'Jun 2025 – Dec 2025',
        location: 'Bangalore',
        points: [
            'Built a modular inference system combining MediaPipe landmark detection with segmentation-based garment synthesis for full-body virtual try-on.',
            'Privacy-first inference APIs for edge devices; cut latency through quantization and on-device processing.',
        ],
        tech: ['PyTorch', 'MediaPipe', 'Quantization'],
    },
    {
        org: 'Poonawalla Fincorp',
        role: 'ML/AI Intern',
        period: 'Jun 2025 – Jul 2025',
        location: 'Pune',
        points: [
            'Deployed a self-hosted, distributed ML inference pipeline for identity verification on AWS, replacing a vendor solution valued at ~₹2 Cr/year.',
            'Built self-hosted vector search with sub-50 ms nearest-neighbour latency at production scale, integrated into fraud-prevention workflows.',
        ],
        tech: ['AWS', 'Vector search', 'Python'],
    },
    {
        org: 'QWorld · QIntern 2025',
        role: 'Project Intern & Team Lead',
        period: 'Jun 2025 – Aug 2025',
        location: 'Remote',
        points: [
            'Led a team of 7 building QPlay, a game-based platform for learning quantum computing (Bell states, CHSH, decoherence).',
        ],
        tech: ['Quantum computing', 'Leadership'],
    },
    {
        org: 'ISRO IROC Grand Challenge',
        role: 'Systems Engineer & Team Lead',
        period: 'Nov 2024 – Aug 2025',
        location: 'India',
        points: [
            'Led the team to All India Rank 3 of 2,000+ teams in a 10-month autonomous UAV challenge.',
            'Built a custom MAVLink ground control system with real-time telemetry and 3D flight visualization; sensor fusion and SLAM on a Jetson Nano with Pixhawk, LiDAR and depth cameras.',
            'Computer vision for safe landing zone detection (YOLOv5, Depth Anything, DINOv2), optimized for embedded hardware.',
        ],
        tech: ['C/C++', 'MAVLink', 'Jetson', 'SLAM'],
    },
    {
        org: 'IISc · CPDMed TBI (Aarnaq)',
        role: 'ML Intern',
        period: 'Dec 2024 – Mar 2025',
        location: 'Bangalore',
        points: [
            'Fine-tuned YOLOv8 for number-plate recognition on urban mobility data; optimized with ONNX, FP16 and TensorRT for real-time embedded deployment.',
        ],
        tech: ['YOLOv8', 'ONNX', 'TensorRT'],
    },
    {
        org: 'Brahmand Exploration',
        role: 'Research Intern',
        period: 'Nov 2024 – Apr 2025',
        location: 'Pune',
        points: [
            'Built an NLP chatbot over the company’s satellite-development knowledge base and revamped brahmandexploration.com into a digital encyclopedia.',
        ],
        tech: ['NLP', 'Web'],
    },
];

export interface Talk {
    title: string;
    link?: string;
    slides?: string;
    code?: string;
}

export interface EventEntry {
    event: string;
    place: string;
    date: string;
    role: string;
    upcoming?: boolean;
    talks: Talk[];
}

/** Newest first. */
export const events: EventEntry[] = [
    {
        event: 'OpenTechSummit India 2026',
        place: 'Mumbai · at Devcon 8',
        date: 'Nov 2026',
        role: 'Speaker · 3 sessions',
        upcoming: true,
        talks: [
            {
                title: 'Let the Agent Cook: Building AI-Native Developer Workflows',
                link: 'https://eventyay.com/fossasia/ots2026/talk/CWBR9P/',
                slides: 'https://arnavballincode.github.io/Talks/LetTheAgentCook/',
                code: 'https://github.com/ArnavBallinCode/let-the-agent-cook',
            },
            {
                title: 'VoxBento — When 2 Seconds Matter: Building Real-Time AI Captions and Live Interpretation',
                link: 'https://eventyay.com/fossasia/ots2026/talk/8BTAYL/',
                slides: 'https://arnavballincode.github.io/Talks/OpenTechSummit2026/',
            },
            {
                title: 'Set up Eventyay: Docker Up, PR Out — your first contribution to a real Django + Vue platform',
                link: 'https://eventyay.com/fossasia/ots2026/talk/AKCCWQ/',
            },
        ],
    },
    {
        event: 'Opportunity Open Source Conference 4.0',
        place: 'IIIT Allahabad',
        date: 'Aug 2026',
        role: 'Speaker',
        talks: [
            {
                title: 'From Speech to Speech: Building a Low-Latency Interpretation Platform with Open Source',
                link: 'https://events.canonical.com/event/154/contributions/1010/',
            },
        ],
    },
    {
        event: 'Wikimania 2026',
        place: 'Paris',
        date: 'Jul 2026',
        role: 'Presenter',
        talks: [{ title: 'Live demo of VoxBento and Eventyay' }],
    },
    {
        event: 'FOSSASIA Summit 2026',
        place: 'Bangkok',
        date: 'Mar 2026',
        role: 'Speaker',
        talks: [
            {
                title: 'Talk on Eventyay and real-time multilingual streaming',
            },
        ],
    },
];

export const awards = [
    {
        title: 'All India Rank 3, ISRO IROC Grand Challenge',
        detail: 'Top 3 of 2,000+ teams',
        year: '2025',
    },
    {
        title: '1st Place, MLH ZeroDay Hackathon',
        detail: 'DataMind · Open Source Track',
        year: '2026',
    },
    {
        title: "1st Place, HACKMAZE '26",
        detail: 'Telemetry Power Governor RTL',
        year: '2026',
    },
    {
        title: '4th Place, UIDAI BioChallenge (Face Match)',
        detail: '0.993 AUC, age-invariant face matching',
        year: '2026',
    },
    {
        title: "Runner-up, HAL Aerothon '26",
        detail: 'RagVault',
        year: '2026',
    },
    {
        title: "1st Place, DevHack '25, IIT Dharwad",
        detail: 'CampusDabba, 500+ applicants',
        year: '2025',
    },
    {
        title: 'Winner, Hack2Future',
        detail: 'Only freshman team in the final, 400+ applicants',
        year: '2024',
    },
    {
        title: 'Google Summer of Code Contributor',
        detail: 'FOSSASIA, one of ~1,200 selected globally',
        year: '2026',
    },
    {
        title: 'Linux Foundation Scholar',
        detail: '',
        year: '',
    },
    {
        title: 'Bug bounty acknowledgements',
        detail: 'Netflix, Google, 1Password, Cursor, Udemy',
        year: '2022 – 2025',
    },
];

export const publications = [
    {
        title: 'Predicting BB84 Error Rates from Transmon Calibration Data: Learned Surrogates versus Physical Baselines on a 156-Qubit IBM Heron Processor',
        authors:
            'with Aswath Babu (IIIT Dharwad) · supervised by Aswath Babu and Prof. V. Ravishankar (IIT Delhi)',
        venue: 'Manuscript, 2026',
        note: '25 days, 115 calibration snapshots and 105 BB84 runs on ibm_marrakesh: readout error alone predicts QBER better than ML surrogates (Spearman ρ 0.61 vs 0.47).',
        link: 'https://github.com/ArnavBallinCode/transmon-qkd-ml',
    },
    {
        title: 'Temporal Graph Neural Models for Predicting Organizational Silos in Evolving Communication Networks',
        venue: 'Under review, 2026',
        link: 'https://github.com/ArnavBallinCode/temporal-gnn-silo-prediction',
    },
    {
        title: 'Quantum Error Correction: Understanding from Bell States to Surface Codes',
        venue: 'ResearchGate, 2025',
        link: 'https://www.researchgate.net/publication/392866270_Quantum_Error_Correction_Understanding_from_Bell_States_to_Surface_Codes',
    },
];

export const education = {
    school: 'IIIT Dharwad',
    degree: 'B.Tech, Computer Science & Engineering · Minor in Quantum Computing',
    period: '2024 – 2028',
    detail: 'CGPA 8.81 · Quantum minor 10.00',
};

export const skills = [
    { group: 'Languages', items: ['Python', 'C/C++', 'TypeScript', 'SQL', 'Verilog'] },
    {
        group: 'Systems & Backend',
        items: ['FastAPI', 'Django', 'Redis', 'PostgreSQL', 'WebRTC', 'WebSockets', 'Linux'],
    },
    {
        group: 'ML & AI',
        items: ['PyTorch', 'ONNX', 'TensorRT', 'LangChain', 'Llama.cpp', 'RAG', 'Computer vision'],
    },
    {
        group: 'Infra & Tools',
        items: ['AWS', 'Docker', 'GitHub Actions', 'MLflow', 'Snowflake', 'Next.js'],
    },
    { group: 'Quantum', items: ['Qiskit', 'Cirq', 'QEC', 'BB84 QKD'] },
];
