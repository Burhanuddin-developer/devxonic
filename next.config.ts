import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'testweb.devxonic.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
