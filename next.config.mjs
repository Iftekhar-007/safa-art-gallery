/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ibb.co.com"],
    // <-- add this
  },
};

export default nextConfig;
