const path = require('path');
const { resolve, join } = path;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    all: [
      './modules/header/header.js',
      './modules/body/body.js',
      './modules/footer/footer.js',
    ],
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  },
  output: {
    path: resolve(__dirname, 'public'),
    filename: '[name].bundle.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    port: 8564,
    static: {
      directory: path.resolve(__dirname, './public'),
    },
    compress: true,
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              disable: true,
            },
          },
        ],
      },
    ],
  },
};
