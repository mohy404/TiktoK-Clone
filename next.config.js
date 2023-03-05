/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },


  reactStrictMode: true,
  images: {
    domains: ["scontent.fcai20-4.fna.fbcdn.net", "lh3.googleusercontent.com"],
  }
}
 

module.exports = nextConfig
