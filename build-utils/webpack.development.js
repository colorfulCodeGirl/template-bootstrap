/* eslint-disable linebreak-style */
const path = require('path');

module.exports = {
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    publicPath: 'build',
    writeToDisk: true,
  },
};
