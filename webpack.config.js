const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM();

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  context: __dirname,
  entry: {
    server: './src/server.js',
    client: './src/client.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-chunk.js',
    libraryTarget: 'umd',
  },
  node: {
    setImmediate: false,
  },
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? 'source-map' : 'none',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      m: 'mithril',
    }),
    isDev
      ? new BrowserSyncPlugin({
          host: 'localhost',
          port: 3000,
          server: { baseDir: ['public'] },
        })
      : null,
    new StaticSiteGeneratorPlugin({
      paths: ['/', '/about'],
      entry: 'server',
      globals: {
        window: dom.window,
        document: dom.document,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ].filter(Boolean),
};
