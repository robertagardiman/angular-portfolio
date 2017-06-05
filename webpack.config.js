const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/app.module.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {rules: [
    {
      test: /\.html$/,
      use: [{loader: 'html-loader'}]
    }
  ]},
  plugins: [
    new htmlWebpackPlugin({template: './src/index.html'})
  ]
}
