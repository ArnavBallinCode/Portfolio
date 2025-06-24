/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Remove swcMinify as it's no longer needed in Next.js 15
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

module.exports = nextConfig;
