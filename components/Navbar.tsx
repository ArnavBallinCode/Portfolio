import Link from 'next/link';
import { site } from '@/app/data/profile';

const LINKS = [
    { name: 'Experience', href: '/#experience' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Awards', href: '/#awards' },
    { name: 'Contact', href: '/#contact' },
];

const Navbar = () => (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
            <Link href="/" className="font-semibold tracking-tight">
                {site.name}
            </Link>
            <div className="flex items-center gap-6 text-sm">
                {LINKS.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        className="hidden text-muted-foreground transition-colors hover:text-foreground sm:block"
                    >
                        {link.name}
                    </a>
                ))}
                <a
                    href={site.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-border px-3 py-1.5 font-medium transition-colors hover:bg-secondary"
                >
                    Résumé
                </a>
            </div>
        </nav>
    </header>
);

export default Navbar;
