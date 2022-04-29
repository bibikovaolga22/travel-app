const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = merge({
  entry: {
    index: './src/index.js',
    print: './src/print.js',

  },
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [


    new HtmlWebpackPlugin({
      title: 'Travel App',
      hash: true,
      template: './src/index.html',
      filename: './index.html',
    }),

    new MiniCssExtractPlugin({ filename: '[name].css' }),



  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Client',
    libraryTarget: 'umd',

  },

});

