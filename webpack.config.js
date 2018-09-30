const HtmlWebPackPlugin = require('html-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const path = require('path');

const webpack = require('webpack');
const dotenv = require('dotenv');

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html',
});

// read `.env` file & parse contents to a key-value pair object
const env = dotenv.config().parsed;

// prepend keys from 'env' with 'process.env.'
const envKeys = Object.keys(env).reduce((prev, next) => {
  const previous = { ...prev };
  previous[`process.env.${next}`] = JSON.stringify(env[next]);
  return previous;
}, {});

module.exports = {
  entry: './src/index.jsx',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      containers: path.resolve(__dirname, 'src/containers/'),
      api: path.resolve(__dirname, 'src/api/'),
      config: path.resolve(__dirname, 'config/'),
    },
    plugins: [
      new DirectoryNamedWebpackPlugin(true),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js(x)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [htmlPlugin, new webpack.DefinePlugin(envKeys)],
};
