const path = require('path');

const nextConfig = phase => {
  webpack(config, { webpack });
  config.resolve = {
    alias: {
      pages: path.resolve(__dirname, 'src/pages'),
      utils: path.resolve(__dirname, 'src/utils'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      components: path.resolve(__dirname, 'src/components'),
      styles: path.resolve(__dirname, 'styles'),
      icon: path.resolve(__dirname, 'public/icon'),
      types: path.resolve(__dirname, 'src/types'),
      constants: path.resolve(__dirname, 'src/constants'),
    },
    ...config.resolve,
  };
  return config;
};

module.exports = phase => nextConfig(phase);
