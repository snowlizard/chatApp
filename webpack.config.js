const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config({path: './.env'});

module.exports = {

    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options:{
          presets:[
            "@babel/env",
            "@babel/react"
          ]
        }
      }, {
        test: /\.(woff|ttf)$/i,
        type: 'asset/resource'
      },
      
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }]

    },

    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      assetModuleFilename: 'assets/[hash][ext][query]'
    },

    plugins: [
      new HtmlWebpackPlugin({ template: path.join(__dirname, "public", "index.html")}),
      new CopyPlugin({
        patterns: [
          {from: "public/assets", to: "assets"}
        ]
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(process.env)
      })
    ],
};