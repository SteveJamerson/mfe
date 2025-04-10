const { DefinePlugin } = require('webpack')

module.exports = {
  mode: 'production',
  devtool: false,
  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
  },
}
