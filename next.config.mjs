import RelativeCIAgentPlugin from '@relative-ci/webpack-plugin';
 
/* @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@ant-design/icons-svg', 'rc-pagination', 'rc-picker', 'rc-util', 'rc-tooltip'],
  webpack: function (config, options) {
    const { dev, isServer } = options;

    if (!dev && !isServer) {
      config.plugins.push(
        new RelativeCIAgentPlugin(),
      );
    }

    return config;
  }
};

export default nextConfig;
