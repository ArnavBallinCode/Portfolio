'use client';

import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
    const toggle = () => {
        const root = document.documentElement;
        root.classList.add('theme-switching');
        const next = root.classList.contains('dark') ? 'light' : 'dark';
        root.classList.toggle('dark', next === 'dark');
        localStorage.setItem('theme', next);
        requestAnimationFrame(() =>
            requestAnimationFrame(() =>
                root.classList.remove('theme-switching'),
            ),
        );
    };

    return (
        <button
            type="button"
            onClick={toggle}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
            className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
            <Sun className="hidden size-4 dark:block" />
            <Moon className="size-4 dark:hidden" />
        </button>
    );
};

export default ThemeToggle;
