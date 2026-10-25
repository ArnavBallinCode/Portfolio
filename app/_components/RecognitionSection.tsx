import { ArrowUpRight } from 'lucide-react';
import { awards, events, publications } from '../data/profile';

const RecognitionSection = () => (
    <>
        <section id="talks" className="py-16">
            <h2 className="section-title">Talks & events</h2>
            <ol className="space-y-8">
                {events.map((ev) => (
                    <li
                        key={ev.event}
                        className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-8"
                    >
                        <p className="pt-0.5 font-mono text-xs text-muted-foreground">
                            {ev.date}
                            {ev.upcoming && (
                                <span className="ml-2 rounded bg-primary/10 px-1.5 py-0.5 text-primary">
                                    upcoming
                                </span>
                            )}
                        </p>
                        <div>
                            <h3 className="font-medium">{ev.event}</h3>
                            <p className="text-sm text-muted-foreground">
                                {ev.place} · {ev.role}
                            </p>
                            <ul className="mt-2 space-y-1.5 text-[15px] leading-relaxed">
                                {ev.talks.map((talk) => (
                                    <li key={talk.title}>
                                        {talk.link ? (
                                            <a
                                                href={talk.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group text-muted-foreground transition-colors hover:text-primary"
                                            >
                                                “{talk.title}”
                                                <ArrowUpRight className="ml-0.5 inline size-3.5 align-baseline" />
                                            </a>
                                        ) : (
                                            <span className="text-muted-foreground">
                                                {talk.title}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                ))}
            </ol>
        </section>

        <section id="research" className="py-16">
            <h2 className="section-title">Research</h2>
            <ul className="space-y-6">
                {publications.map((pub) => (
                    <li key={pub.title}>
                        <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium leading-snug transition-colors hover:text-primary"
                        >
                            {pub.title}
                            <ArrowUpRight className="ml-0.5 inline size-3.5 align-baseline" />
                        </a>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                            {'authors' in pub && pub.authors
                                ? `${pub.authors} · `
                                : ''}
                            {pub.venue}
                        </p>
                        {'note' in pub && pub.note && (
                            <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                                {pub.note}
                            </p>
                        )}
                    </li>
                ))}
            </ul>
        </section>

        <section id="awards" className="py-16">
            <h2 className="section-title">Awards & recognition</h2>
            <ul className="divide-y divide-border border-y border-border">
                {awards.map((award) => (
                    <li
                        key={award.title}
                        className="flex flex-col gap-0.5 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                        <div>
                            <span className="font-medium">{award.title}</span>
                            {award.detail && (
                                <span className="text-sm text-muted-foreground">
                                    {' '}
                                    · {award.detail}
                                </span>
                            )}
                        </div>
                        <span className="shrink-0 font-mono text-xs text-muted-foreground">
                            {award.year}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    </>
);

export default RecognitionSection;
