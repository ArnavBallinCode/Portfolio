'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    items: { name: string; href: string }[];
}

const SubNav = ({ items }: Props) => {
    const pathname = usePathname().replace(/\/$/, '') || '/';
    return (
        <nav className="-mx-1 flex gap-1 overflow-x-auto pb-1 text-sm">
            {items.map((item) => {
                const active = pathname === item.href;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        className={`whitespace-nowrap rounded-md px-3 py-1.5 transition-colors ${
                            active
                                ? 'bg-secondary font-medium text-foreground'
                                : 'text-muted-foreground hover:text-foreground'
                        }`}
                    >
                        {item.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default SubNav;
