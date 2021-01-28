const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');

const config = {
  entry: {
    app: './app.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      fingerprints: false,
      name: 'Frogtown Farm Admin Site',
      short_name: 'Frogtown Farm',
      description: 'Inventory, directory, map, and time logging.',
      background_color: '#F8F9FA',
      theme_color: '#F8F9FA',
      'theme-color': '#F8F9FA',
      start_url: '/',
      icons: [
        {
          src: path.resolve(
          "../public/logo512.png"),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('assets', 'icons'),
        },
      ],
    }),
  ],
};

module.exports = config;
