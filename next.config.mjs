/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {},
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'shop.akiralyhalott.hu' },
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'cms.akiralyhalott.hu' },
      { protocol: 'https', hostname: 'admin.akiralyhalott.hu' },
    ],
  },
};

export default nextConfig;
