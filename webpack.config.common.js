const webpack = require('webpack');
const { NODE_ENV } = process.env;
const __DEV__ = NODE_ENV === 'development'

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'lib',
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|es6|jsx)$/,
        loaders: __DEV__ ? ['react-hot', 'babel'] : ['babel'],
        exclude: /node_modules/
      },
      {
        test: /\.jpg.*$/,
        loaders: ['url-loader?limit=100000&mimetype=image/jpeg'],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        loader: "style!css!less",
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV),
      },
      '__DEV__': __DEV__,
    })
  ],
}

