import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

const ProjectsSection = () => (
    <section id="projects" className="py-16">
        <h2 className="section-title">Selected projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((project) => (
                <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="group flex flex-col rounded-lg border border-border p-5 transition-colors hover:border-foreground/20 hover:bg-secondary/40"
                >
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="font-medium">{project.title}</h3>
                        <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </div>
                    {project.badge && (
                        <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-primary">
                            {project.badge}
                        </p>
                    )}
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {project.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.tech.slice(0, 4).map((t) => (
                            <span key={t} className="tag">
                                {t}
                            </span>
                        ))}
                    </div>
                </Link>
            ))}
        </div>

        <h3 className="mt-12 mb-4 text-sm font-medium text-muted-foreground">
            More projects
        </h3>
        <ul className="divide-y divide-border border-y border-border">
            {others.map((project) => (
                <li key={project.slug}>
                    <Link
                        href={`/projects/${project.slug}`}
                        className="group flex flex-col gap-1 py-3 sm:flex-row sm:items-baseline sm:gap-4"
                    >
                        <span className="font-mono text-xs text-muted-foreground sm:w-12 sm:shrink-0">
                            {project.period.slice(-4)}
                        </span>
                        <span className="font-medium group-hover:text-primary sm:shrink-0">
                            {project.title}
                        </span>
                        <span className="min-w-0 text-sm text-muted-foreground sm:truncate">
                            {project.summary}
                        </span>
                    </Link>
                </li>
            ))}
        </ul>
    </section>
);

export default ProjectsSection;
