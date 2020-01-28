const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, '..', '/dist'),
    filename: '[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }, 
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]

      }

    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    watchContentBase: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    historyApiFallback: true
  }
};