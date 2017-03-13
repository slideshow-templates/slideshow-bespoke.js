var path = require('path');

module.exports = {
  entry: {
   'bespoke.cube': './src/index.cube.js',  // gen bespoke.cube.bundle.js
   'bespoke':      './src/index.js',       // gen bespoke.bundle.js
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'js')
  }
};
