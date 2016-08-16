const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.config.common')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();

module.exports = merge(common, {
  devtool: 'eval',
  devServer: {
    publicPath: 'http://localhost:8181/',
    port: '8181',
    host: '0.0.0.0',
    colors: true,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: 'dist'
  },
  plugins: [
    new DashboardPlugin(dashboard.setData),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      templateContent: '<div id="root"></div>',
    }),
  ]
})
