const path = require('path');

module.exports = {
  // input files
  entry: [
    path.resolve(__dirname, './src/index.js'),
    // path.resolve(__dirname, './src/style.scss')
  ],
  // output files
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // module rules
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  // dev server output
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  }
};