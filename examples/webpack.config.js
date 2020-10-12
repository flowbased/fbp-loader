const path = require('path');

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, './require.js'),
  },
  output: {
    path: __dirname,
    filename: '[name].js',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.fbp$/,
        use: [
          {
            loader: './index.js',
          },
        ],
      },
    ],
  },
};
