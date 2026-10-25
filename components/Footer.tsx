import { site } from '@/app/data/profile';

const Footer = () => (
    <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-4xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
            <span>
                &copy; {new Date().getFullYear()} {site.fullName}
            </span>
            <span>Built with Next.js · Hosted on GitHub Pages</span>
        </div>
    </footer>
);

export default Footer;
