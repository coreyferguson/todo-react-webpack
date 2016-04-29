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

    webpack: require('./webpack'),

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
