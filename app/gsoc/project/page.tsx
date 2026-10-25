import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import { deepDive, ecosystem, pipeline, vocabulary } from '../../data/gsoc';

export const metadata: Metadata = {
    title: 'VoxBento architecture · GSoC 2026',
    description:
        'How VoxBento delivers low-latency multilingual interpretation: WHIP/WHEP over MediaMTX, FastAPI coordination, and STT, translation and TTS workers.',
    alternates: { canonical: 'https://angarkar.is-a.dev/gsoc/project/' },
};

export default function GsocProject() {
    return (
        <>
            <header className="pt-12 pb-14">
                <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                    Interpretation without the distance.
                </h1>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                    Traditional interpretation needs booths, specialist
                    hardware and tricky media routing. VoxBento moves the
                    interpreter booth and the listener into the browser, while
                    keeping a direct media path built for responsive audio.
                </p>
            </header>

            <section className="border-t border-border/60 py-12">
                <h2 className="section-title">Architecture</h2>
                <p className="mb-6 max-w-2xl text-muted-foreground">
                    The one rule: the live audio path stays out of Python.
                    MediaMTX transports audio, FastAPI coordinates people,
                    state and processing, and Jitsi handles floor monitoring.
                </p>
                <ArchitectureDiagram />
            </section>

            <section className="border-t border-border/60 py-12">
                <h2 className="section-title">Interpreter to listener</h2>
                <div className="grid gap-4 sm:grid-cols-3">
                    {pipeline.map((p) => (
                        <div key={p.step} className="rounded-lg border border-border p-5">
                            <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
                                {p.step}
                            </p>
                            <h3 className="mt-2 font-medium">{p.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {p.body}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="border-t border-border/60 py-12">
                <h2 className="section-title">Deep dive</h2>
                <div className="space-y-8">
                    {deepDive.map((d) => (
                        <div key={d.title} className="max-w-2xl">
                            <h3 className="font-medium">{d.title}</h3>
                            <p className="mt-2 leading-relaxed text-muted-foreground">
                                {d.body}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="border-t border-border/60 py-12">
                <h2 className="section-title">Work across FOSSASIA</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    {ecosystem.map((e) => (
                        <a
                            key={e.name}
                            href={e.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group rounded-lg border border-border p-5 transition-colors hover:border-foreground/20 hover:bg-secondary/40"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
                                    {e.name}
                                </p>
                                <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground" />
                            </div>
                            <h3 className="mt-2 font-medium">{e.title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {e.body}
                            </p>
                        </a>
                    ))}
                </div>
            </section>

            <section className="border-t border-border/60 py-12">
                <h2 className="section-title">Stack</h2>
                <div className="flex flex-wrap gap-1.5">
                    {vocabulary.map((v) => (
                        <span key={v} className="tag">
                            {v}
                        </span>
                    ))}
                </div>
            </section>
        </>
    );
}
