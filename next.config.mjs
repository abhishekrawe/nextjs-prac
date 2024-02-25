/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://media.sproutsocial.com",
      },
    ],
  },
};

export default nextConfig;
