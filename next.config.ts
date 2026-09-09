import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false as any,
  images:{
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
      }
    ],
  },
};

export default nextConfig;
