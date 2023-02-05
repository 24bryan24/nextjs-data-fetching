/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
    // serverComponentsExternalPackages: ["react-slick"]
  },
};

module.exports = nextConfig;
