import { education, site, skills } from '../data/profile';

export const SkillsEducation = () => (
    <div className="grid gap-16 py-16 sm:grid-cols-[1fr_1.4fr] sm:gap-10">
        <section id="education">
            <h2 className="section-title">Education</h2>
            <p className="font-medium">{education.school}</p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {education.degree}
            </p>
            <p className="mt-2 font-mono text-xs text-muted-foreground">
                {education.period} · {education.detail}
            </p>
        </section>

        <section id="skills">
            <h2 className="section-title">Skills</h2>
            <dl className="space-y-3 text-sm">
                {skills.map((s) => (
                    <div key={s.group} className="grid grid-cols-[8.5rem_1fr] gap-3">
                        <dt className="text-muted-foreground">{s.group}</dt>
                        <dd>{s.items.join(', ')}</dd>
                    </div>
                ))}
            </dl>
        </section>
    </div>
);

export const Contact = () => (
    <section id="contact" className="py-20">
        <h2 className="section-title">Contact</h2>
        <p className="max-w-xl text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
            Looking for a backend, systems or ML engineer? I’d love to talk.
        </p>
        <p className="mt-4 text-muted-foreground">
            Based in {site.location}. Open to roles anywhere in India or
            remote.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a href={`mailto:${site.email}`} className="link font-medium">
                {site.email}
            </a>
            <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
            >
                LinkedIn
            </a>
            <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
            >
                GitHub
            </a>
            <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="link"
            >
                Résumé (PDF)
            </a>
        </div>
    </section>
);
