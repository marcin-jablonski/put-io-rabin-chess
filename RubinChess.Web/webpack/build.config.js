/* eslint-disable */

var autoprefixer      = require('autoprefixer')
var extractTextPlugin = require('extract-text-webpack-plugin')
var htmlPlugin        = require('html-webpack-plugin')
var path              = require('path')
var webpack           = require('webpack')



module.exports = {
  context: path.join(__dirname, '../src'),
  entry: './scripts/main.jsx',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /scripts/,
        loader: 'babel',
      },
      {
        test: /\.sass$/,
        include: /styles/,
        loader: extractTextPlugin.extract([
          'css?minimize',
          'postcss',
          'sass?indentedSyntax',
        ]),
      },
      {
        test: /\.scss$/,
        include: /styles/,
        loader: extractTextPlugin.extract([
          'css?minimize',
          'postcss',
          'sass',
        ]),
      },
      {
        test: /\.(jpg|png|svg)$/,
        include: /assets/,
        loader: 'file',
        query: {
          name: 'assets/[hash].[ext]',
        },
      },
      {
        test: /\.json$/,
        include: /scripts|assets/,
        loader: 'json',
      },
    ],
  },
  output: {
    filename: '[hash].js',
    path: path.join(__dirname, '../build'),
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new extractTextPlugin('[hash].css'),
    new htmlPlugin({
      minify: {
        collapseWhitespace: true,
        removeTagWhitespace: true,
      },
      template: 'index.html',
    }),
  ],
  postcss: function() {
    return [
      autoprefixer,
    ]
  },
  resolve: {
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