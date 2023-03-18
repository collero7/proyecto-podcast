const path = require('path');
const webpack = require('webpack');

console.log('Running webpack for environment: ' + process.env.environment);
module.exports = {
  entry: {
    bundle: path.resolve(__dirname, 'src/index.jsx'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env", '@babel/preset-react'],
            plugins: [
              "@babel/plugin-transform-runtime",
              "@babel/plugin-syntax-dynamic-import",
              "@babel/plugin-proposal-class-properties",
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
            ]
          }
        },
        resolve: {
          extensions: ['.js', '.jsx'],
          alias: {
            '@config': path.resolve(__dirname, 'src/config'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@routes': path.resolve(__dirname, 'src/routes'),
            '@services': path.resolve(__dirname, 'src/services'),
            '@store': path.resolve(__dirname, 'src/services/redux'),
            '@theme': path.resolve(__dirname, 'src/theme'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@assets': path.resolve(__dirname, 'src/assets'),
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.environment),
    }),
  ]
}