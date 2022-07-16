/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  plugins: [
    require('cssnano')({
      preset: 'default',
    }),
  ],
}

module.exports = nextConfig
