import { withPayload } from "@payloadcms/next/withPayload";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'shop.akiralyhalott.hu' }
        ]
    }
};

export default withPayload(nextConfig);
