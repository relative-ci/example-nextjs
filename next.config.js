const RelativeCIAgentPlugin = require('@relative-ci/webpack-plugin');

module.exports = {
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
