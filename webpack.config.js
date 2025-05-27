const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react': 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '' }
      ],
    }),
    new webpack.DefinePlugin({
      'process.env.PREACT_APP_FACEBOOK_APP_ID': JSON.stringify(process.env.PREACT_APP_FACEBOOK_APP_ID),
      'process.env.PREACT_APP_FACEBOOK_APP_SECRET': JSON.stringify(process.env.PREACT_APP_FACEBOOK_APP_SECRET),
      'process.env.PREACT_APP_FACEBOOK_PAGE_TOKEN': JSON.stringify(process.env.PREACT_APP_FACEBOOK_PAGE_TOKEN),
      'process.env.PREACT_APP_FACEBOOK_REDIRECT_URI': JSON.stringify(process.env.PREACT_APP_FACEBOOK_REDIRECT_URI),
      'process.env.PREACT_APP_CLOUDINARY_CLOUD_NAME': JSON.stringify(process.env.PREACT_APP_CLOUDINARY_CLOUD_NAME),
      'process.env.PREACT_APP_CLOUDINARY_API_KEY': JSON.stringify(process.env.PREACT_APP_CLOUDINARY_API_KEY),
      'process.env.PREACT_APP_CLOUDINARY_API_SECRET': JSON.stringify(process.env.PREACT_APP_CLOUDINARY_API_SECRET),
      'process.env.PREACT_APP_CLOUDINARY_UPLOAD_PRESET': JSON.stringify(process.env.PREACT_APP_CLOUDINARY_UPLOAD_PRESET),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    port: 3000,
    hot: true,
    open: true,
  },
};
