import Image from 'next/image';
import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { site, stats } from '../data/profile';

const Hero = () => (
    <section className="pt-16 pb-20 sm:pt-24">
        <div className="flex items-center gap-4">
            <Image
                src="/Pic.jpeg"
                alt={site.name}
                width={64}
                height={64}
                priority
                className="size-16 rounded-full object-cover ring-1 ring-border"
            />
            <div>
                <p className="font-medium">{site.name}</p>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
                        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    {site.availability}
                </p>
            </div>
        </div>

        <h1 className="mt-10 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            I build distributed real-time systems and ship ML to production.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            CS undergrad at IIIT Dharwad (minor in Quantum Computing, class of
            2028). Google Summer of Code 2026 contributor and Eventyay
            maintainer at FOSSASIA. Previously ML at IISc and Poonawalla
            Fincorp, and I led our team to All India Rank 3 in ISRO&apos;s IROC
            Grand Challenge.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
                href={site.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
                <Download className="size-4" /> Résumé
            </a>
            <a
                href={`mailto:${site.email}`}
                className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-4 text-sm font-medium transition-colors hover:bg-secondary"
            >
                <Mail className="size-4" /> Email me
            </a>
            <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex size-10 items-center justify-center rounded-md border border-border transition-colors hover:bg-secondary"
            >
                <FaGithub className="size-4" />
            </a>
            <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex size-10 items-center justify-center rounded-md border border-border transition-colors hover:bg-secondary"
            >
                <FaLinkedin className="size-4" />
            </a>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-4">
            {stats.map((stat) => (
                <div key={stat.value} className="bg-background p-5">
                    <dt className="sr-only">{stat.label}</dt>
                    <dd className="text-2xl font-semibold tracking-tight">
                        {stat.value}
                    </dd>
                    <dd className="mt-1 text-sm leading-snug text-muted-foreground">
                        {stat.label}
                    </dd>
                </div>
            ))}
        </dl>

        <a
            href="#projects"
            className="mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
            See selected work <ArrowUpRight className="size-3.5 rotate-90" />
        </a>
    </section>
);

export default Hero;
