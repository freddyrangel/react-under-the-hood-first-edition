var path              = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack           = require('webpack');
var merge             = require('webpack-merge');

var TARGET    = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

module.exports = {
  entry: path.resolve(ROOT_PATH, 'app'),
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: path.resolve(ROOT_PATH, 'app')
      },
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.resolve(ROOT_PATH, 'app')
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ["file-loader"],
        include: path.resolve(ROOT_PATH, 'app')
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'React Under the Hood'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  devServer: {
    historyApiFallback: true,
    inline: true,
    progress: true,
    port: 4000
  }
};
