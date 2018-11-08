'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
   'babel-polyfill', path.join(__dirname, 'client')
  ],
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: [
  ],

  module: {
    rules: [
      {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
         loader: 'babel-loader',
         options: { presets: ["react", "es2015", "stage-0"] }
       }]
     },
     {
       test: /\.json?$/,
       use: [{
         loader : 'json-loader'
       }]
      },
      {
        test: /\.(css)$/,
        use: [ 'style-loader','css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS
        ]
      }
    ]
  }
};
