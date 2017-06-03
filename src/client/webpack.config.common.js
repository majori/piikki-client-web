const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = () => ({
  entry: [
    'babel-polyfill',
    './src/index.jsx',
  ],

  context: __dirname,

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '..', '..', 'dist', 'public'),
  },

  resolve: {
    extensions: ['.jsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          limit: 100000,
          name: 'assets/img/[name].[ext]',
        },
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          minetype: 'application/font-woff',
          name: 'assets/fonts/[name].[ext]',
        },
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),

    new webpack.DefinePlugin({
      'process.env': {
        frontUrl: JSON.stringify(process.env.PIIKKI_WEB_FRONT_URL || 'http://localhost:3600'),
        backendUrl: JSON.stringify(process.env.PIIKKI_WEB_BACKEND_URL || 'http://localhost:5000'),
        token: JSON.stringify(process.env.PIIKKI_WEB_TOKEN || 'restricted_token'),
        apiUrl: JSON.stringify(process.env.PIIKKI_WEB_API_URL || 'https://piikki-backend-dev.azurewebsites.net/api/v1'),
      },
    }),
  ],
});
