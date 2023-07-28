/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './site/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  devtool: 'source-map',
  mode: isDevelopment ? 'development' : 'production',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: {},
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    static: './dist',
    devMiddleware: {
      writeToDisk: true,
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: './site/index.html' })],
};
