// Webpack Configuration for development

import path from 'path';
import webpack from 'webpack';

export default {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'src/index'),
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(process.cwd(), 'public', 'js'),
    publicPath: '/js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js(x)?$/,
        use: 'eslint-loader',
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-inline-environment-variables'],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.(s)?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader',
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/i,
        use: 'file-loader',
      },
    ],
  },
  target: 'web',
};
