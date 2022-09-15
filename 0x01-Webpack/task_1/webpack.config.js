const path = require('path');
const { resolve } = path;

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    path: resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  mode: 'production',
};
