/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Static HTML export for GitHub Pages (`next build` writes ./out).
    output: 'export',
    // GitHub Pages serves /gsoc/ as /gsoc/index.html, so emit folder-style URLs.
    trailingSlash: true,
    // No image optimization server on Pages; images are pre-sized in public/.
    images: { unoptimized: true },
};

module.exports = nextConfig;
