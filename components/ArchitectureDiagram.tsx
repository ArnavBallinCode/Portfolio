import { Fragment } from 'react';
import { architecture, services } from '@/app/data/gsoc';

const ArchitectureDiagram = () => (
    <div
        className="space-y-4 rounded-lg border border-border bg-secondary/30 p-5"
        aria-label="VoxBento architecture. An interpreter browser publishes audio over WHIP to MediaMTX; listener browsers receive it over WHEP. FastAPI coordinates booth state, captions, translation and text-to-speech; Jitsi provides floor monitoring."
    >
        {architecture.map((lane) => (
            <div key={lane.lane}>
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    {lane.lane}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-2">
                    {lane.steps.map((step, i) => (
                        <Fragment key={step}>
                            <span className="rounded-md border border-border bg-background px-2.5 py-1 text-sm font-medium">
                                {step}
                            </span>
                            {i < lane.steps.length - 1 && (
                                <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                                    {lane.links[i] && <span>{lane.links[i]}</span>}
                                    <span aria-hidden>→</span>
                                </span>
                            )}
                        </Fragment>
                    ))}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">{lane.note}</p>
            </div>
        ))}
        <div className="flex flex-wrap gap-1.5 border-t border-border pt-4">
            {services.map((s) => (
                <span key={s} className="tag">
                    {s}
                </span>
            ))}
        </div>
    </div>
);

export default ArchitectureDiagram;
