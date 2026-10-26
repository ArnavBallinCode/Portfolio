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
        <nav className="mx-auto grid max-w-4xl grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 px-6 py-2 sm:flex sm:h-14 sm:justify-between sm:py-0">
            <Link href="/" className="order-1 whitespace-nowrap font-semibold tracking-tight">
                {site.name}
            </Link>
            <div className="order-3 col-span-2 flex items-center gap-5 text-sm sm:order-2 sm:ml-auto">
                {LINKS.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`inline-flex min-h-11 items-center text-muted-foreground transition-colors hover:text-foreground sm:min-h-0 ${
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
            </div>
            <div className="order-2 sm:order-3"><ThemeToggle /></div>
        </nav>
    </header>
);

export default Navbar;
