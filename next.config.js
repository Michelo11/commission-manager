/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com', 'st3.depositphotos.com', 'avatars.githubusercontent.com']
  },
}

module.exports = nextConfig