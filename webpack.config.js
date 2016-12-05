var path = require('path');

module.exports={
  context: path.resolve('src'),
  entry: ['./src/index.js'],
  output:{
    path: __dirname,
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
