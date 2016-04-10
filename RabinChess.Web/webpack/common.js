/* eslint-disable */

var autoprefixer      = require('autoprefixer')
var htmlPlugin        = require('html-webpack-plugin')
var path              = require('path')
var copyWebpackPlugin = require('copy-webpack-plugin')
var chessboardjs      = require('chessboardjs')


module.exports = {
  context: path.resolve('./src'),
  entry: './scripts/main.jsx',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /scripts/,
        loader: 'babel',
      },
      {
        test: /\.(jpg|png|svg|woff)$/,
        include: /assets/,
        loader: 'file',
        query: {
          name: 'assets/[hash].[ext]',
        },
      },
      {
        test: /\.json$/,
        include: /assets/,
        loader: 'json',
      },
      {
      test: /\.css$/,
      loader: 'style!css?modules',
      include: /flexboxgrid/,
      },
    ],
  },
  output: {
    filename: '[hash].js',
    path: path.resolve('./build'),
  },
  plugins: [
    new htmlPlugin({
      minify: {
        collapseWhitespace: true,
        removeTagWhitespace: true,
      },
      template: 'index.html',
    }),
    new copyWebpackPlugin([
      {
        from: './../node_modules/chessboardjs/www/img',
        to:   './img'
      }
    ]),
  ],
  postcss: function() {
    return [
      autoprefixer,
    ]
  },
  resolve: {
    alias: {
      assets: path.resolve('./src/assets'),
      styles: path.resolve('./src/styles'),
    },
    extensions: [
      '',
      '.js',
      '.jsx',
      '.json',
      '.sass',
      '.scss',
    ],
  },
}
