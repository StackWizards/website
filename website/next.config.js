/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: './',
  images: {
    unoptimized: true
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
