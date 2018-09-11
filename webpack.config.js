const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'static/'),
    publicPath: '/',
    filename: 'app.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'static/'),
    port: 3000,
    publicPath: 'http://localhost:3000/',
    hotOnly: true,
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
