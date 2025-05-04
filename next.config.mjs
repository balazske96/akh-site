import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {},
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'shop.akiralyhalott.hu' },
      { protocol: 'https', hostname: 'akiralyhalott.blob.core.windows.net' },
    ],
  },
};

export default withPayload(nextConfig);
