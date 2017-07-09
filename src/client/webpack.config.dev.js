const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const baseConfig = require('./webpack.config.common');

// Development server config
const server = {
  host: 'localhost',
  port: 3600,
};

module.exports = () => webpackMerge(baseConfig(), {
  entry: [
    `webpack-dev-server/client?http://${server.host}:${server.port}`,
    'webpack/hot/only-dev-server',
  ],

  module: {
    rules: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'inline-source-map',

  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true,
    host: server.host,
    port: server.port,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new webpack.NamedModulesPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        frontUrl: JSON.stringify(process.env.PIIKKI_WEB_FRONT_URL || `http://${server.host}:${server.port}`),
        apiUrl: JSON.stringify(process.env.PIIKKI_WEB_API_URL || 'https://piikki-backend-dev.azurewebsites.net'),
        token: 'restricted_token',
      },
    }),
  ],
});
