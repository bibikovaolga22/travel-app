const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge({
  entry: {
    index: './src/index.js',
    print: './src/print.js',

  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: [

          "style-loader",

          "css-loader",

          "sass-loader",
        ],
      },

    ]
  },


  plugins: [
   
    new HtmlWebpackPlugin({
      title: 'Travel App',
      hash: true,
      template: './src/index.html',
      filename: './index.html',
    }),


  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Client',
    libraryTarget: 'umd',


  },


});
