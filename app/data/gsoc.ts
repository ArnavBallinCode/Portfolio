import contributions from './github-contributions.json';

export const github = contributions as unknown as {
    generatedAt: string;
    error: string | null;
    allContributionsUrl: string;
    stats: {
        pullRequests: number;
        issues: number;
        repositories: number;
        mergedPullRequests: number;
    };
    repositories: {
        name: string;
        count: number;
        pullRequests: number;
        issues: number;
        mergedPullRequests: number;
    }[];
};

export const gsocNav = [
    { name: 'Overview', href: '/gsoc' },
    { name: 'Project', href: '/gsoc/project' },
    { name: 'Contributions', href: '/gsoc/contributions' },
    { name: 'Final report', href: '/gsoc/final-report' },
];

export const phases = [
    { date: 'Mar 3–9', title: 'FOSSASIA Summit', detail: 'Bangkok' },
    { date: 'May 1–24', title: 'Community Bonding', detail: 'GSoC' },
    { date: 'May 25 – Aug 23', title: 'Coding period', detail: 'Weeks 1–13' },
    { date: 'Jul 21–26', title: 'Wikimania', detail: 'Paris' },
    { date: 'Jul 27 – Aug 5', title: 'FOSSASIA community', detail: 'Germany' },
    { date: 'Aug 24 – Nov 2', title: 'Extended coding', detail: 'Weeks 14–22' },
    { date: 'Nov 2', title: 'Work product due', detail: 'Final report' },
];

export const architecture = [
    {
        lane: 'Live audio path',
        steps: ['Interpreter browser', 'MediaMTX', 'Listener browser'],
        links: ['WebRTC / WHIP', 'WebRTC / WHEP'],
        note: 'Direct media path: Python coordinates it but never touches audio bytes.',
    },
    {
        lane: 'Interpretation pipeline',
        steps: ['RTSP / FFmpeg', 'Speech-to-text', 'Translation', 'Text-to-speech'],
        links: ['', 'final segments', ''],
        note: 'Captions, translations and synthesized speech are pushed to clients over WebSocket.',
    },
];

export const services = [
    'FastAPI · async coordination',
    'WebSocket booth state',
    'PostgreSQL / SQLite',
    'Jitsi floor monitoring',
    'Docker · Linux · Nginx',
];

export const pipeline = [
    {
        step: '01 · Publish',
        title: 'Interpreter microphone',
        body: 'The interpreter booth opens a browser RTCPeerConnection, adds the microphone track and publishes over WebRTC/WHIP.',
    },
    {
        step: '02 · Transport',
        title: 'MediaMTX',
        body: 'MediaMTX receives the WHIP stream, serves it to listeners over WHEP, and exposes an RTSP feed for the processing workers.',
    },
    {
        step: '03 · Listen',
        title: 'Listener browser',
        body: 'Listeners pick a language and open a WHEP session, with an HLS fallback when WebRTC cannot connect.',
    },
];

export const deepDive = [
    {
        title: 'Speech-to-text: a worker per active booth',
        body: 'Each enabled booth gets a worker that reads the MediaMTX RTSP stream through FFmpeg. It supports local faster-whisper and cloud providers (OpenAI, Deepgram, NVIDIA Riva, ElevenLabs): Deepgram streams, the rest process short chunks. Workers keep per-booth session state, track gaps and latency, retry with exponential backoff, and broadcast partial and final captions over WebSocket.',
    },
    {
        title: 'Translation: only when someone is listening',
        body: 'Partial transcripts feed live captions; final segments become durable records and trigger translation. Translation is lazy, running only for languages with interested listeners, and skipped when source and target match. Backends include OpenAI, Anthropic, Gemini, OpenRouter and a local fallback, with per-language semaphores so a busy room cannot overwhelm a provider.',
    },
    {
        title: 'Text-to-speech: optional spoken interpretation',
        body: 'Translated segments can be synthesized server-side with Deepgram Aura or a local Supertonic ONNX model, normalized to 24 kHz mono PCM, and sent with their text in a binary WebSocket bundle for scheduled playback in the browser.',
    },
    {
        title: 'State: fast when transient, durable when it matters',
        body: 'Active interpreter status, chat and booth presence live in an in-memory BoothRegistry guarded by per-booth asyncio locks. Events, rooms, booths, memberships, transcripts and webhook deliveries persist through SQLAlchemy and Alembic (SQLite in development, PostgreSQL in production).',
    },
    {
        title: 'Interpreter handoff without dropping listeners',
        body: 'A coordinator switches the active interpreter over WebSocket. The old WHIP publisher disconnects, MediaMTX accepts the new one, and listeners keep the same endpoint.',
    },
    {
        title: 'Access and deployment',
        body: 'JWT-backed roles separate super admins, event admins, coordinators, interpreters and listeners, checked in both routes and WebSockets; single-use invite tokens give time-bounded booth access. Docker Compose runs the FastAPI portal, MediaMTX, an optional Chromium floor bot and self-hosted Jitsi, with API keys encrypted at rest using Fernet.',
    },
];

export const ecosystem = [
    {
        name: 'VoxBento',
        title: 'Real-time interpretation infrastructure',
        body: 'WHIP publishing, WHEP delivery, RTSP worker feeds, FastAPI coordination, live captions, translation, TTS, auth and role-aware booths.',
        link: 'https://github.com/fossasia/voxbento',
    },
    {
        name: 'Eventyay Business',
        title: 'Tiers and entitlements (in progress)',
        body: 'Versioned tiers, monthly and annual pricing, typed capability entitlements, Free-tier assignment, idempotent usage records and organizer plan visibility. Billing webhooks, charging and upgrades are not wired yet.',
        link: 'https://github.com/fossasia/eventyay-business',
    },
    {
        name: 'Eventyay core',
        title: 'Images, imports and exports',
        body: 'Image uploads validated, EXIF-transposed, stripped of metadata and resized with LANCZOS resampling; schedule and speaker import paths and export reliability.',
        link: 'https://github.com/fossasia/eventyay/pull/5175',
    },
    {
        name: 'Star-Me',
        title: 'Repository discovery automation',
        body: 'Fixed the hanging behaviour and broken selectors in the browser script that walks FOSSASIA repositories and helps users star them.',
        link: 'https://github.com/fossasia/star-me/pull/46',
    },
];

export const vocabulary = [
    'WebRTC',
    'WHIP / WHEP',
    'MediaMTX',
    'RTSP / FFmpeg',
    'Jitsi Meet',
    'FastAPI',
    'WebSockets',
    'asyncio',
    'SQLAlchemy',
    'Alembic',
    'PostgreSQL',
    'faster-whisper',
    'Deepgram',
    'Supertonic ONNX',
    'Docker',
    'Nginx',
];

export const trips = [
    {
        place: 'bangkok',
        title: 'FOSSASIA Summit 2026',
        where: 'Bangkok',
        date: 'Mar 3–9, 2026',
        detail: 'Speaking about Eventyay, hacking at the summit, and meeting the community before GSoC began.',
    },
    {
        place: 'paris',
        title: 'Wikimania 2026 & UNESCO',
        where: 'Paris',
        date: 'Jul 21–26, 2026',
        detail: 'Demoing VoxBento and Eventyay to the Wikimedia community, where multilingual participation is an everyday need.',
    },
    {
        place: 'germany',
        title: 'FOSSASIA community',
        where: 'Germany',
        date: 'Jul 27 – Aug 5, 2026',
        detail: 'Project discussions and time with the FOSSASIA community, including mentor Nils Magnus, Mario, Saksham and Alessandro.',
    },
];
