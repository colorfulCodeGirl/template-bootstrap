const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    compress: true,
    publicPath: "build",
    writeToDisk: true
  },
  entry: "./src/main.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build/js"),
    publicPath: "build"
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function() {
                return [require("autoprefixer")];
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "../css/styles.css"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
