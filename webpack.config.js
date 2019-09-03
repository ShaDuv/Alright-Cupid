const webpack = require('webpack');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // enters at index.jsx
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    resolve(__dirname, "src") + "/index.jsx"
  ],

  // creates a bundle in "build" folder
  output: {
    filename: 'app.bundle.js',
    path: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  // this lets us not worry about file extensions js vs jsx
  resolve: {
    extensions: ['.js', '.jsx']
  },

  devtool: '#source-map',

  devServer: {
    hot: true,
    contentBase: resolve(__dirname, 'build'),
    publicPath: '/'
  },

  module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: [
              "es2015",
              "react"
            ],
            plugins: [
              "react-hot-loader/babel"
            ]
          }

        },

      ],
    },

      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
          template:'template.ejs',
          appMountId: 'react-app-root',
          title: 'Social-Clone',
          filename: resolve(__dirname, "build", "index.html"),
        }),
      ]

  };
