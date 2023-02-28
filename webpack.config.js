const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const UnoCSS = require('@unocss/webpack').default
const unocssConfig = require('./unocss.config')
module.exports = {
  devtool: 'source-map',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    disableHostCheck: true,
  },
  module: {
    rules: [
      // js-loader
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: /src/,
      },
      // css/less loader
      {
        test: /\.(le|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    UnoCSS({
      config: unocssConfig,
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.less'],
  },
  // for Webpack 5
  optimization: {
    realContentHash: true,
  },
}
