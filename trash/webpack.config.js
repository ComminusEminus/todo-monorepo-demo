const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
      },
    ],
  });
  if (config.resolve) {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({

      }),
    ];
  };
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};

/*

// Optional
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },

*/