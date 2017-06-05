const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const mainScss = new ExtractTextPlugin({filename: 'style.bundle.css', allChunks: true});


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
    },
    {
      test: /\.scss$/,
      use: mainScss.extract({
        fallback: 'style-loader',
        use: ['css-loader?url=false', 'postcss-loader', 'sass-loader']
      })
    }
  ]},
  plugins: [
    new htmlWebpackPlugin({template: './src/index.html'}),
    mainScss,
    new webpack.LoaderOptionsPlugin({options: {postcss: [require('autoprefixer')]}})
  ]
}
