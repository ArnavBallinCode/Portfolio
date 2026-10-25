import SubNav from '@/components/SubNav';
import { gsocNav } from '../data/gsoc';

export default function GsocLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="mx-auto max-w-4xl px-6 pt-10 pb-20">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Google Summer of Code 2026 · FOSSASIA
            </p>
            <div className="mt-4 border-b border-border/60 pb-3">
                <SubNav items={gsocNav} />
            </div>
            {children}
        </div>
    );
}
