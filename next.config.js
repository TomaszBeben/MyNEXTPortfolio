/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    MAIN_PAGE_DATA: 'http://localhost:3000/api/mainpagedata'
  },
}

module.exports = nextConfig
