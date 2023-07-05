/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 1872474823,
    NEXT_PUBLIC_ZEGO_SERVER_ID:  "d9605f790f568dba83b7c493ae7df370",
  },
  images: {
    domains: ["localhost"]
  }
};

module.exports = nextConfig;
