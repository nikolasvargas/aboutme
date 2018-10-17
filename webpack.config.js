const webpack = require('webpack');
const path = require('path');
const cssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
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
                use: [ cssExtractPlugin.loader, "css-loader" ]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg*.*)$/,
                use: {
                  loader: 'file-loader',
                  options: {}
                }
            }
        ]
    },
    plugins: [ new cssExtractPlugin({ filename: 'bundle.css' }) ],
    resolve: {
        extensions: [ '.js', '.jsx' ],
        alias: {
            modules: path.resolve(__dirname, 'node_modules')
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3333
    }
}
