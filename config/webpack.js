
module.exports = {
  devtool: 'inline-source-map',
  module: {
    preLoaders: [{
      loader: 'babel-loader',
      test: /\.jsx?$/,
      exclude: /node_modules/,
      query: {
        presets: ['react', 'es2015']
      }
    }, {
      loader: 'isparta-loader',
      test: /\.jsx?$/,
      exclude: /(test|node_modules)\//
    }, {
      loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
      test: /\.scss$/
    }]
  },
  isparta: {
    embedSource: true,
    noAutoWrap: true,
    babel: {
      presets: ['react', 'es2015']
    }
  }
};
