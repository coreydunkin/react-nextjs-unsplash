/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com']
  },
  env: {
    API_KEY: process.env.API_KEY
  }
}

module.exports = nextConfig
