'use client';

const Footer = () => {
    return (
        <footer className="w-full py-8 flex flex-col items-center justify-center text-gray-500 text-sm border-t border-primary/10">
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
