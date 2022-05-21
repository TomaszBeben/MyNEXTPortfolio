/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
    MAIN_PAGE_DATA: 'http://localhost:3000/api/mainpagedata',
    // MONGO_DB_URL: 'mongodb+srv://TomaszBebenDB:xN8geollYEJziw9l@tomaszbebendb.roga1.mongodb.net/shareboard?retryWrites=true&w=majority'
    MONGO_DB_URL: process.env.MONGO_DB_URL
  },
}

module.exports = nextConfig
