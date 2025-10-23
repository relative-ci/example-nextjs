/* @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@ant-design/icons-svg', 'rc-pagination', 'rc-picker', 'rc-util', 'rc-tooltip'],
  turbopack: {
    stats: {
      source: false,
    },
  },
};

export default nextConfig;
