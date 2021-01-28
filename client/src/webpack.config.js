const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = (env = {}) => {
  const mode = env.production ? 'production' : 'development';
  const apiUrl = env.production
    ? 'https://xxx.cloudfunctions.net'
    : 'http://localhost:5001/xxx/us-central1';
  return {
    mode,
    entry: './src/index.tsx',
    output: {
      filename: `main${env.production ? '-[contenthash]' : ''}.js`,
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      alias: { 'react-dom': '@hot-loader/react-dom' },
    },
    module: {
      rules: [
        {
          test: /\.(j|t)sx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: ['file-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
      }),
      new webpack.DefinePlugin({
        mode,
        API_URL: JSON.stringify(apiUrl),
      }),
      new InjectManifest({
        swSrc: path.resolve(__dirname, './sw.js'),
      }),
    ],
    devServer: {
      historyApiFallback: true,
    },
  };
};