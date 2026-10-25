import Link from 'next/link';
import { site } from '@/app/data/profile';
import ThemeToggle from './ThemeToggle';

const LINKS = [
    { name: 'Experience', href: '/#experience', mobile: false },
    { name: 'Projects', href: '/#projects', mobile: false },
    { name: 'Talks', href: '/#talks', mobile: false },
    { name: 'GSoC', href: '/gsoc', mobile: true },
    { name: 'Blog', href: '/blog', mobile: true },
];

const Navbar = () => (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
            <Link href="/" className="whitespace-nowrap font-semibold tracking-tight">
                {site.name}
            </Link>
            <div className="flex items-center gap-3 text-sm sm:gap-5">
                {LINKS.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`text-muted-foreground transition-colors hover:text-foreground ${
                            link.mobile ? '' : 'hidden md:block'
                        }`}
                    >
                        {link.name}
                    </Link>
                ))}
                <a
                    href={site.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-md border border-border px-3 py-1.5 font-medium transition-colors hover:bg-secondary"
                >
                    Résumé
                </a>
                <ThemeToggle />
            </div>
        </nav>
    </header>
);

export default Navbar;
