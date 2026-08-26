import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow opening the dev server from other devices on the LAN (phone testing).
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.16.*.*", "172.20.*.*"],
};

export default nextConfig;
