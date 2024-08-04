/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
    // ppr: true,
    // reactCompiler: true,
    // devIndicators: {
    //   buildActivity: false,
    // },
  // },
  // devIndicators: {
  //   buildActivity: false,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**/**',
      },
    ],
  },
};

export default nextConfig;
