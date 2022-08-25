const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  output: {
    clean: true,
    filename: "[name]-bundle.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, '../dist'),
    },
    client: {
      overlay: true,
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          }
        ]
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    hash: true,
    title: 'Webpack Example App',
    header: 'Webpack Example Title',
    metaDesc: 'Webpack Example Description',
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
  })],
}