const path = require('path');
const { resolve } = path;

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
  },
};
