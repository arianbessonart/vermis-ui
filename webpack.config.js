
var path = require('path');

var config = {
  context: path.join(__dirname, "client/src"),
  entry: './index.js',
  output: {
    path:'./',
    filename: 'bundle.js',
  },

  devServer: {
    inline: true,
    port: 8080
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};

module.exports = config;
