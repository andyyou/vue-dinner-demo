var path = require('path')

var config = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  }
}

module.exports = config
