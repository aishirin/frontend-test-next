/** @type {import('next').NextConfig} */
const nextImages = require('next-images')


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  async exportPathMap() {
    return {
      '/index.js': { page: '/' },
    }
  },
  
  trailingSlash: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
  
}

module.exports = nextImages({images: {
  disableStaticImages: true,
}},(nextConfig))