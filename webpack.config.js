const webpack = require("webpack");
const path = require("path");
const PugPlugin = require("pug-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "dist/"),
    publicPath: "/",
  },
  plugins: [
    new PugPlugin({
      pretty: "auto",
      //☝🏽 Format HTML (only in dev mode)
      entry: {
        // Insert your PUG templates here
        index: "./src/pages/landing.pug",
        search: "./src/pages/search.pug",
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
