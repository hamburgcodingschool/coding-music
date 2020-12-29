const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  // plugins
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false,
    }),
  ],
  // input files
  entry: [
    path.resolve(__dirname, './src/index.js'),
  ],
  // output files
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  },
  // optimization 
  optimization: {
    minimizer: [
      // minifycss
			new OptimizeCssAssetsPlugin({})
    ]
  },
  // module rules
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.(scss)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  // dev server output
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
};