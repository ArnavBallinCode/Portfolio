import { ArrowUpRight } from 'lucide-react';
import { experience } from '../data/profile';

const ExperienceSection = () => (
    <section id="experience" className="py-16">
        <h2 className="section-title">Experience</h2>
        <ol className="space-y-10">
            {experience.map((job) => (
                <li
                    key={job.org + job.role}
                    className="grid gap-2 sm:grid-cols-[10rem_1fr] sm:gap-8"
                >
                    <p className="pt-0.5 font-mono text-xs text-muted-foreground">
                        {job.period}
                    </p>
                    <div>
                        <h3 className="font-medium leading-snug">
                            {job.role}
                            <span className="text-muted-foreground"> · </span>
                            {job.link ? (
                                <a
                                    href={job.link}
                                    {...(job.link.startsWith('/')
                                        ? {}
                                        : {
                                              target: '_blank',
                                              rel: 'noopener noreferrer',
                                          })}
                                    className="group inline-flex items-center gap-0.5 hover:text-primary"
                                >
                                    {job.org}
                                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </a>
                            ) : (
                                job.org
                            )}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            {job.location}
                        </p>
                        <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted-foreground">
                            {job.points.map((point) => (
                                <li
                                    key={point}
                                    className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:size-1 before:rounded-full before:bg-muted-foreground/50"
                                >
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                            {job.tech.map((t) => (
                                <span key={t} className="tag">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </li>
            ))}
        </ol>
    </section>
);

export default ExperienceSection;
