const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.join(__dirname, 'src', 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: path.join(__dirname, 'src', 'public'),
    compress: true,
    port: 18081,
    hot: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.js[x]?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.((s[ac])|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
};
