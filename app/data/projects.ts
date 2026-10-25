export interface Project {
    title: string;
    slug: string;
    /** One-line pitch shown on cards. */
    summary: string;
    period: string;
    tech: string[];
    description: string[];
    github?: string;
    link?: string;
    /** Award or recognition shown as a badge. */
    badge?: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        title: 'VoxBento',
        slug: 'voxbento',
        summary:
            'Low-latency, browser-based multilingual interpretation for virtual and hybrid events. Built from scratch for GSoC 2026.',
        github: 'https://github.com/fossasia/voxbento',
        link: 'https://voxbento.com',
        period: 'May 2026 – Present',
        badge: 'GSoC 2026',
        featured: true,
        tech: ['WebRTC', 'MediaMTX', 'FastAPI', 'Jitsi', 'PostgreSQL'],
        description: [
            'Architected VoxBento from scratch as a Google Summer of Code 2026 contributor with FOSSASIA: browser-based, low-latency multilingual interpretation for virtual and hybrid events.',
            'Interpreters publish over WebRTC/WHIP to MediaMTX and listeners play over WHEP (with HLS fallback); the live audio path never passes through Python.',
            'FastAPI coordinates events, booths and roles, and runs per-booth speech-to-text workers (faster-whisper, Deepgram and others) fed by RTSP/FFmpeg, with lazy translation and on-demand TTS pushed over WebSockets.',
            'Transient booth state lives in an in-memory registry with per-booth asyncio locks; durable records persist in PostgreSQL via SQLAlchemy and Alembic. Interpreter handoff happens without listeners changing endpoints.',
            'Presented the architecture at FOSSASIA Summit 2026 and gave a live demo at Wikimania Paris 2026. The full write-up lives at angarkar.is-a.dev/gsoc.',
        ],
    },
    {
        title: 'DataMind',
        slug: 'datamind',
        summary:
            'Natural-language data agent where every answer carries its evidence: the executed SQL, bound parameters, result rows and Snowflake query ID.',
        github: 'https://github.com/ArnavBallinCode/ZeroDay',
        period: '2026',
        badge: '1st · ZeroDay MLH',
        featured: true,
        tech: ['Python', 'Gemma', 'Ollama', 'Snowflake', 'SQL'],
        description: [
            'Open-source natural-language data agent. Won 1st place in the Open Source Track at the ZeroDay MLH national hackathon (2026).',
            'Google Gemma, running locally via Ollama, turns a question into a constrained semantic plan; deterministic code validates it and compiles it into parameterized, read-only, allowlisted SQL.',
            'Snowflake computes the answer, and every response ships with its evidence: executed SQL, bound parameters, result rows and the Snowflake query ID.',
            'Semantic YAML data model and a CI quality gate keep the agent auditable and reproducible.',
        ],
    },
    {
        title: 'RagVault',
        slug: 'ragvault',
        summary:
            'Fully offline, privacy-first enterprise RAG system. Document intelligence with zero data leaving the network.',
        github: 'https://github.com/ArnavBallinCode/RagVault',
        period: '2026',
        badge: "Runner-up · HAL Aerothon '26",
        featured: true,
        tech: ['Python', 'FastAPI', 'LangChain', 'Llama.cpp', 'ChromaDB'],
        description: [
            'Built a fully offline, privacy-first enterprise RAG system: no external API calls, no cloud, no data leaving the network. Runner-up at HAL Aerothon ’26.',
            'Quantized local LLM inference via Llama.cpp, vector search with ChromaDB and orchestration with LangChain behind a FastAPI service.',
            'Multi-format document ingestion and department-scoped access control so teams only query their own documents.',
        ],
    },
    {
        title: 'Transmon-QKD-ML',
        slug: 'transmon-qkd-ml',
        summary:
            'How well does vendor calibration data predict BB84 error rates? A 25-day hardware study on a 156-qubit IBM Heron processor.',
        github: 'https://github.com/ArnavBallinCode/transmon-qkd-ml',
        period: '2025 – Present',
        badge: 'Research · IIIT Dharwad & IIT Delhi',
        featured: true,
        tech: ['Qiskit', 'IBM Quantum', 'Python', 'scikit-learn', 'GitHub Actions'],
        description: [
            'Research supervised by Aswath Babu (IIIT Dharwad) and Prof. V. Ravishankar (IIT Delhi), written up with Aswath Babu as "Predicting BB84 Error Rates from Transmon Calibration Data: Learned Surrogates versus Physical Baselines on a 156-Qubit IBM Heron Processor".',
            'Over 25 days, logged 115 calibration snapshots (17,940 per-qubit records) of the IBM Heron r2 processor ibm_marrakesh and ran 105 BB84 experiments plus 90 Bell-state tests, collected by an automated GitHub Actions pipeline.',
            'Showed that the Monte-Carlo training simulator has an exact closed form at the label-noise ceiling (R² 0.989 vs 0.990), so ML surrogates trained on it cannot add information.',
            'On hardware, calibrated readout error alone predicts QBER with Spearman ρ = 0.61 and median error 0.0076, against ρ = 0.47 and 16 false abort flags for the simulation-trained random forest.',
            'Measured large calibration drift (median Jaccard 0.25 for the top-10 qubits across snapshots under a day apart) and recommended latest readout calibration plus a short pre-flight check for qubit selection. Data and code are open.',
        ],
    },
    {
        title: 'CerebrumAI',
        slug: 'cerebrumai-healthcare-triage',
        summary:
            'Offline-first multimodal healthcare triage engine with quantized LLMs, deployable on a Jetson Nano.',
        github: 'https://github.com/Cerebrum-Ai/Cerebrum-web-frontend',
        period: 'Jan 2025 – Mar 2025',
        featured: true,
        tech: ['Flask', 'Llama.cpp', 'ChromaDB', 'PyTorch', 'Flutter', 'Supabase'],
        description: [
            'Built a privacy-first triage system for early detection of mental and cognitive disorders from multimodal inputs (text, image, voice).',
            'Modular architecture with quantized LLMs (Phi-2, Bio-Medical LLaMA-3-8B) and runtime model switching.',
            'Offline-first, on-device inference via Llama.cpp on low-resource hardware (Jetson Nano, laptops, Linux servers).',
            'LangChain backend with prompt routing and ChromaDB vector search; Supabase for auth and data; Flutter and React frontends.',
        ],
    },
    {
        title: 'Telemetry Power Governor',
        slug: 'telemetry-power-governor',
        summary:
            'Configurable Verilog RTL IP for telemetry-driven dynamic power management in SoCs.',
        github: 'https://github.com/ArnavBallinCode/telemetry-power-governor-rtl',
        period: '2026',
        badge: "1st · HACKMAZE '26",
        featured: true,
        tech: ['Verilog', 'RTL', 'FSM', 'SoC'],
        description: [
            'Configurable Verilog RTL IP for telemetry-driven dynamic power management in SoCs. Won 1st place at the HACKMAZE ’26 national hackathon.',
            'Multi-state hardware FSM that drives adaptive power-state transitions from live telemetry.',
        ],
    },
    {
        title: 'CampusDabba',
        slug: 'campusdabba',
        summary:
            'Pre-incubated campus marketplace startup I founded. Raised 2,500 USD in seed funding.',
        github: 'https://github.com/ArnavBallinCode/CampusDabba_Final',
        link: 'https://campusdabba0.netlify.app',
        period: 'Feb 2025 – Dec 2025',
        badge: "1st · DevHack '25",
        tech: ['Django', 'PostgreSQL', 'WebSockets', 'JWT'],
        description: [
            'Founded and ran a pre-incubated campus marketplace for students to buy, sell and exchange goods and services; raised 2,500 USD in seed funding.',
            'Built the full-stack platform (Django, Jinja, PostgreSQL) with real-time chat over WebSockets and JWT-secured APIs.',
            'Won 1st place at DevHack ’25, IIT Dharwad (500+ applicants).',
        ],
    },
    {
        title: 'Customer Service Conversation Analyzer',
        slug: 'customer-service-analyzer',
        summary:
            'Real-time call analysis: speech-to-text, sentiment and automated SOP compliance checks.',
        github: 'https://github.com/ArnavBallinCode/Stt_an',
        period: '2024',
        tech: ['Python', 'Whisper', 'BERTweet', 'NLP'],
        description: [
            'Real-time conversation analysis for customer service calls.',
            "Speech-to-text with OpenAI's Whisper and sentiment analysis with BERTweet.",
            'Automated SOP compliance checking and speaker diarization.',
        ],
    },
    {
        title: 'AutoML-MLOps Platform Prototype',
        slug: 'automl-mlops-platform',
        summary:
            'End-to-end AutoML prototype with experiment tracking, orchestration and an LLM guidance bot.',
        period: '2024',
        tech: ['H2O.ai', 'MLflow', 'Prefect', 'Streamlit', 'LangChain'],
        description: [
            'End-to-end AutoML platform with automated training, experiment tracking and task orchestration.',
            'Streamlit interface with an LLM-based bot that guides users through the workflow.',
        ],
    },
    {
        title: 'Dynamic API for NoSQL Query',
        slug: 'dynamic-api-nosql',
        summary:
            'Backend API for single and bulk MongoDB upserts with flexible filters.',
        github: 'https://github.com/ArnavBallinCode/Dynamic-API-NoSQL',
        period: '2024',
        tech: ['Python', 'PyMongo', 'MongoDB'],
        description: [
            'Backend API for single and bulk upsert operations in MongoDB, with user-specified collections, filters and update fields.',
            'Validation of required fields and meaningful error handling for unstructured input.',
        ],
    },
    {
        title: 'Binary Classification Web App',
        slug: 'binary-classification-app',
        summary:
            'Streamlit app comparing SVM, logistic regression and random forest classifiers on any dataset.',
        github: 'https://github.com/ArnavBallinCode/Binary-Classification-App',
        period: '2024',
        tech: ['Python', 'Streamlit', 'scikit-learn'],
        description: [
            'Streamlit web app that predicts binary outcomes using SVM, logistic regression and random forest classifiers.',
        ],
    },
    {
        title: 'BMP Image Filter',
        slug: 'bmp-image-filter',
        summary:
            'Command-line tool in C applying grayscale, sepia, reflection and blur filters.',
        period: '2024',
        tech: ['C', 'Makefile'],
        description: [
            'Command-line tool in C that applies grayscale, sepia, reflection and blur filters to BMP images, built with a Makefile.',
        ],
    },
];
