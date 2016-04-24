var fs = require('fs');
var path = require('path');

module.exports = function(config) {
  config.set({

    basePath: '..',
    logLevel: config.LOG_INFO,

    //////////////////////
    // karma extensions //
    //////////////////////

    // order is important for frameworks
    frameworks: [
      'mocha',
      'chai-sinon',
      'chai-as-promised',
      'chai'
    ],
    files: [
      'test/support/globals.js',
      'test/integration/**/*.js',
      'test/unit/**/*.js'
    ],
    exclude: [],

    ///////////////////
    // preprocessors //
    ///////////////////

    preprocessors: {
      'test/integration/**/*.js': ['webpack', 'sourcemap'],
      'test/unit/**/*.js': ['webpack', 'sourcemap'],
      'test/support/**/*.js': ['webpack', 'sourcemap']
    },

    /////////////
    // webpack //
    /////////////

    webpack: {
      devtool: 'inline-source-map',
      module: {
        preLoaders: [{
          loader: 'babel-loader',
          test: /\.js$/,
          query: {
            presets: ['react', 'es2015']
          }
        }, {
          loader: 'isparta',
          test: /\.js$/,
          exclude: /(test|node_modules)\//
        }]
      },

      // *optional* isparta options: istanbul behind isparta will use it
      isparta: {
        embedSource: true,
        noAutoWrap: true,
        // these babel options will be passed only to isparta and not to babel-loader
        babel: {
          presets: ['react', 'es2015']
        }
      }
    },

    //////////////////////////
    // server configuration //
    //////////////////////////

    hostname: 'localhost',
    protocol: 'http',
    port: 9876,

    ////////////////////////
    // testing / coverage //
    ////////////////////////

    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'html', subdir: 'coverage-html' },
        { type: 'text', subdir: '.', file: 'coverage-detail.txt' },
        { type: 'text-summary', subdir: '.', file: 'coverage-summary.txt' }
      ]
    },

    //////////
    // misc //
    //////////

    colors: true,
    autoWatch: true,
    concurrency: Infinity,
    webpackMiddleware: { noInfo: true },

    ///////////////
    // launchers //
    ///////////////

    browsers: ['Chrome']

  });
};
