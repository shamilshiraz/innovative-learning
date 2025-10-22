/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "competent-dinosaurs-c6df949cc3.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
