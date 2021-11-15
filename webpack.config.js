const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      join: ['lodash', 'join']
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: require.resolve('./src/globals.js'),
        use: 'exports-loader?file,parse=helpers.parse'
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  }
};