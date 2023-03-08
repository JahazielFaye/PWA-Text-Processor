const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    		// Entry point for files.
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    		// Output for our bundles.
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        // Plugin to generate an HTML file with script and link tags automatically added to it
      new HtmlWebpackPlugin ({
        template: "./index.html",
        title: "Just Another Text Editor"
      }),
  // Plugin to generate a service worker that uses a specified file as its source
      new InjectManifest ({
        swSrc: "./src-sw.js",
        swDest: "src-sw.js",
      }),
        // Plugin to generate a web app manifest file for the PWA
      new WebpackPwaManifest ({
        fingerprints: false,
      inject: true,
      name: "Just Another Test Editor",
      short_name: "J.A.T.E.",
      description: "Create notes with or without an internet connection!",
      background_color: "#272822",
      theme_color: "#272822",
      start_url: "./",
      publicPath: "./",
      icons: [
        {
          src: path.resolve("src/images/logo.png"),
          sizes: [96,128,192,256,384,512],
          destination: path.join("assets", "icons"),
        },
      ],
      }),
    ],

    module: {
      rules: [
            // Rule to handle CSS files
        {
          test: /\.css$/i,
          use: ["style-loader","css-loader"],
        },
            // Rule to handle JS files
        {
          test: /\.m?js$/,
          exclcude: /node_modules/,
          use: {
            loader: "babel-loader",  // Use the babel loader to transpile JS files
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime",
              ],
            },
          },
        },
      ],
    },
  };
};
