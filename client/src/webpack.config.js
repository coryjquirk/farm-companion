var webpack = require('webpack');

// adding plugins to your configuration
module.exports = {
  //...
  plugins: [
    new webpack.InjectManifest({
        swSrc: './service-worker.js'
      }),
   
  ]
};