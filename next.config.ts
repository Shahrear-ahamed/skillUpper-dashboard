/* eslint-disable @typescript-eslint/no-explicit-any */
// import type { NextConfig } from "next";

// // pwa
// const withPWA = require("next-pwa")({
//   dest: "public",
//   disable: process.env.NODE_ENV === "development",
//   register: true,
//   skipWaiting: true,
// });

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactStrictMode: true,
//   swcMinify: true,
// };

// export default withPWA(nextConfig);

import { NextConfig } from "next";
import PWA from "next-pwa";

const withPWA = PWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
} satisfies NextConfig;

export default withPWA(nextConfig as any);
