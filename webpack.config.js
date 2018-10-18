const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = (env, argv) => {
  let plugins = [
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    })
  ]

  if (argv.mode === 'production') {
    plugins.push(
      new HtmlWebpackPlugin({
        hash: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          removeComments: true
        },
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/index.html')
      })
    );
    plugins.push(new UglifyJSPlugin({ extractComments: true }));
  }

  return {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
      path: path.resolve(__dirname, 'public/'),
      filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    watchOptions: {
      poll: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader"
          ]
        },
        {
          test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
          use: {
            loader: 'file-loader',
            options: {}
          }
        }
      ]
    },
    plugins,
    resolve: {
      extensions: ['.js', '.jsx'],
      alias: {
        modules: path.resolve(__dirname, 'node_modules')
      }
    },
    devServer: {
      contentBase: path.join(__dirname, 'public/'),
      port: 3333
    }
  }
}
