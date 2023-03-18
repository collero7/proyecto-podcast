const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

const path = require('path');
const packageProject = require('./package.json');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: 'production',
  entry: './src/index.jsx',
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'public'), path.resolve(__dirname, 'src')],
    extensions: ['*', '.js', '.json', '.jsx', '.scss'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'js/[name]_' + packageProject.version + '.js',
    chunkFilename: 'js/[id].[chunkhash].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test:/\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /^[^_].*(?<!(index))\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          { 
            loader: 'css-loader',
            options: {
              modules: { 
                localIdentName: '[name]__[local]--[hash:base64:5]',
                exportLocalsConvention: 'camelCase',
              }
            }
          },
          'sass-loader',
        ]
      },
      {
        test: /\index.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|gif|svg|mp4|webm|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 90000,
            fallback: 'file-loader',
            name: '[hash].[ext]',
            outputPath: './assets/images'
          }
        },
        generator: {
          filename: './assets/fonts/[hash][ext]',
        },
      },
      // {
      //   test: /\.(jpg|png|gif|svg|mp4|webm|ico)$/,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: './assets/[name].[ext]',
      //   },
      // },
      {
        test: /\.(woff(2)?|ttf|eot|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: './assets/fonts/[hash][ext]',
        },
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/app.*'],
    }),
    new CopyWebpackPlugin(
      {
        patterns: [
          { from: path.resolve(__dirname, 'public/locale'), to: 'locale' }
        ]
      }
    ),
  ],
  optimization: {
    minimizer: [
      new TerserJSPlugin(),
      new CssMinimizerPlugin(),
    ]
  }
});
