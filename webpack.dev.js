const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');
const openBrowser = require('react-dev-utils/openBrowser');

const port = 9000;

console.log(process.env.NODE_ENV);

module.exports = merge(common, {
  mode: 'development',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: `http://localhost:${port}/`,
    chunkFilename: '[name].bundle.js',
  },
  devServer: {
    static: { directory: path.join(__dirname, 'public') },
    port: port,
    hot: true,
    onAfterSetupMiddleware: () => {
      openBrowser(`http://localhost:${port}/`); // abre tab de navegador, amplia funcionalidad reutilizando mismo tab (solo Mac OS X)
    },
    historyApiFallback: true, // dispone del API history HTML5 en el servidor
    proxy: [
      {
        context: ['/enrolament'],
        target: `http://localhost:9401/`, // URL Back localhost (Nueva)
        secure: false,
        changeOrigin: true,
      }
    ],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /^[^_].*(?<!(index))\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\index.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpg|png|gif|svg|mp4|webm|ico)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: './fonts/[hash].[ext]',
        },
      }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
  ],
});
