const path = require('path');

module.exports = {
  entry: './client/src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './client/dist'),
        // export the bundle as a CommonJS module
    // http://webpack.github.io/docs/configuration.html#output-librarytarget
    // libraryTarget: 'commonjs'
  },

  // do not touch native Node modules (e.g. fs)
  // http://webpack.github.io/docs/configuration.html#target
  target: 'node',

  externals: {
    // define newrelic as an external library
    // http://webpack.github.io/docs/configuration.html#externals
    newrelic: true

  },
  watch: true,
  mode: 'development'
};