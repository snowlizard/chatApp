const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options:{
          presets:[
            "@babel/env",
            "@babel/react"
          ],
          plugins:[
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-transform-runtime"
          ]
        }
      }, {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }, {
        test: /\.(gif|svg|jpg|png|otf|ttf|mp3)$/,
        loader:'file-loader',
        options:{
          esModule:false,
          outputPath:'misc'
        }
      }]
    },

    performance:{
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }
};