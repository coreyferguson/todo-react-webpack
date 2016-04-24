
var merge = require('lodash.merge');
var defaultConfig = require('./karma');

module.exports = function(config) {
  var configOverride = merge(defaultConfig, {
    logLevel: config.LOG_INFO,
    singleRun: false,

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

    /**
     * Webpack configuration is different in continuous testing mode so that the proper
     * source and line numbers are reported when errors occur. This is necessary because
     * of: https://github.com/gotwarlost/istanbul/issues/212
     */
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [{
          loader: 'babel-loader',
          test: /\.js$/,
          query: {
            presets: ['es2015']
          }
        }]
      }
    }

  });
  config.set(configOverride);
};
