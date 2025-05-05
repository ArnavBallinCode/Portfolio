import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    const repoStats = await fetch(
        'https://api.github.com/repos/tajmirul/portfolio-2.0',
        {
            next: {
                revalidate: 60 * 60, // 1 hour
            },
        },
    );

    const { stargazers_count, forks_count } =
        (await repoStats.json()) as RepoStats;

    return (
        <footer className="w-full py-6 flex flex-col items-center justify-center text-gray-500 text-sm">
            <div className="mb-2">
                <a
                    href="mailto:arnav.angarkar20@gmail.com"
                    className="hover:text-blue-600 transition-colors"
                >
                    arnav.angarkar20@gmail.com
                </a>
            </div>
            <div>
                &copy; {new Date().getFullYear()} Arnav Amit Angarkar. All
                rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
