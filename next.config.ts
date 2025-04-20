import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // هر درخواستی که به `/api/*` فرستاده شود
        destination: "https://mohoko.pythonanywhere.com/:path*", // به این سرور هدایت شود
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.nomenu.ir",
        port: "",
        pathname: "/image/**",
      },
    ],
  },
};

export default nextConfig;
