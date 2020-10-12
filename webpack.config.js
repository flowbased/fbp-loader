const path = require('path');

module.exports = {
  entry: {
    bundle: './examples/require.js',
  },
  output: {
    path: path.resolve(process.cwd(), 'examples'),
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
