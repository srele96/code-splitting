// get all environment variables from .env file
// must be required before anything else!
// everything below will have access to these variables!
require('dotenv').config();

const path = require('path');
// https://github.com/pmmmwh/react-refresh-webpack-plugin
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  // enable fast refresh
  entry: [
    '@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js',
    path.resolve(__dirname, 'src', 'index.tsx'),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [
                isDevelopment && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: './dist',
    hot: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new ESLintPlugin({
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      files: ['src/**/*.{ts,tsx,js,jsx}'],
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
