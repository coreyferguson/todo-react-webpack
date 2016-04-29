
'use strict';

let webpackConfig = require('./webpack');
let overrideConfig = {
  entry: './src/index.js',
  externals: [
    'react',
    'react-dom',
    'bluebird',
    'superagent'
  ],
  watch: true
};

module.exports = {
  build: Object.assign({}, webpackConfig, overrideConfig, {
    output: {
      path: 'dist/',
      filename: 'todo.js',
      libraryTarget: 'amd'
    }
  })
};
