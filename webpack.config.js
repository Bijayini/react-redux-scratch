const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebPackPluginConfig = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  mode: 'production',
  entry: ['./src/index.js', './style/style.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader'),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader?cacheDirectory=true',
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'babel-loader?cacheDirectory=true',
      },
    ],
  },
  plugins: [new ExtractTextPlugin('styles.css'), htmlWebPackPluginConfig],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
};
