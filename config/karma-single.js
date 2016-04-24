
var merge = require('lodash.merge');
var defaultConfig = require('./karma');

module.exports = function(config) {
  var configOverride = merge(defaultConfig, {
    logLevel: config.LOG_INFO,
    singleRun: true,

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
        loaders: [{
          loader: 'babel-loader',
          test: /\.js$/,
          query: {
            presets: ['es2015']
          }
        }],
        postLoaders: [{
          loader: 'istanbul-instrumenter',
          test: /\.js$/,
          exclude: /(test|node_modules)\//
        }]
      }
    }
  });
  config.set(configOverride);
};
