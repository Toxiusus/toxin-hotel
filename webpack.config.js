const webpack = require("webpack");
const path = require("path");
const PugPlugin = require("pug-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  plugins: [
    new PugPlugin({
      entry: {
        // define many page templates here
        index: "src/pages/landing.pug", // => dist/index.html
      },
      js: {
        // JS output filename
        filename: "js/[name].[contenthash:8].js",
      },
      css: {
        // CSS output filename
        filename: "css/[name].[contenthash:8].css",
      },
    }),
    new FaviconsWebpackPlugin("./src/assets/favicon.ico"),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(s?css|sass)$/,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.(ico|png|jp?g|webp|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name].[hash:8][ext][query]",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]", // сохраняет изображения в папку fonts
        },
      },
    ],
  },
};
