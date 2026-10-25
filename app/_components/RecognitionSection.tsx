import { ArrowUpRight } from 'lucide-react';
import { awards, publications, talks } from '../data/profile';

const RecognitionSection = () => (
    <>
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

        <div className="grid gap-16 py-16 sm:grid-cols-2 sm:gap-10">
            <section id="talks">
                <h2 className="section-title">Talks</h2>
                <ul className="space-y-5">
                    {talks.map((talk) => (
                        <li key={talk.event}>
                            <p className="font-medium">{talk.event}</p>
                            <p className="text-sm text-muted-foreground">
                                {talk.place} · {talk.note}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>

            <section id="writing">
                <h2 className="section-title">Research</h2>
                <ul className="space-y-5">
                    {publications.map((pub) => (
                        <li key={pub.title}>
                            <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group font-medium leading-snug hover:text-primary"
                            >
                                {pub.title}
                                <ArrowUpRight className="ml-0.5 inline size-3.5 align-baseline" />
                            </a>
                            <p className="text-sm text-muted-foreground">
                                {pub.venue}
                            </p>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    </>
);

export default RecognitionSection;
