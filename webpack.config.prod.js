const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.config.common')

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
}

const reactDomExternal = {
  root: 'ReactDOM',
  commonjs2: 'react-dom',
  commonjs: 'react-dom',
  amd: 'react-dom',
}

module.exports = merge(common, {
  entry: {
    'react-phone-input': './src/index.js',
  },
  output: {
    path: 'lib',
    filename: 'index.js',
    library: 'ReactPhoneInput',
    libraryTarget: 'umd',
  },
  externals: [{
    'react': reactExternal,
    'react-dom': reactDomExternal,
  }],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
      },
    }),
    new webpack.optimize.DedupePlugin(),
  ],
})
