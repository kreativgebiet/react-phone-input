const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.config.common')

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
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
    'react-dom': 'ReactDOM',
    'classnames': 'classnames',
    'lodash/findIndex': 'lodash/findIndex',
    'lodash/some': 'lodash/some',
    'lodash/reduce': 'lodash/reduce',
    'lodash/find': 'lodash/find',
    'lodash/debounce': 'lodash/debounce',
    'lodash/memoize': 'lodash/memoize',
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
