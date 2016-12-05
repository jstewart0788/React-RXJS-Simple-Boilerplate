var path = require('path');

module.exports={
  context: path.resolve('src'),
  entry: ['./index.js'],
  output:{
    path: path.resolve('build'),
    publicPath:  '/',
    filename: 'bundle.js'
  },
  module: {
    loaders:[{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  resolve:{
    extensions: ['', '.js']
  },
  devServer: {
    contentBase:'./'
  }
}
