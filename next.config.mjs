/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "polygons.space",
        port: "",
        pathname: "/neo/**",
      },
    ],
  },
};

export default nextConfig;
