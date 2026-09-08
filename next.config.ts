import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
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
