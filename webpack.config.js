var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bespoke.bundle.js',
    path: path.resolve(__dirname, 'js')
  }
};
