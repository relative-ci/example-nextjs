const { RelativeCiAgentWebpackPlugin } = require('@relative-ci/agent');

module.exports = {
  transpilePackages: ['@ant-design/icons-svg', 'rc-pagination', 'rc-picker', 'rc-util', 'rc-tooltip'],
  webpack: function (config, options) {
    const { dev, isServer } = options;

    if (!dev && !isServer) {
      config.plugins.push(
        new RelativeCiAgentWebpackPlugin(),
      );
    }

    return config;
  }
};
