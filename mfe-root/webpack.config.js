const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    port: 2000,
    historyApiFallback: true,
  },
  output: {
    publicPath: 'http://localhost:2000/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'root',
      remotes: {
        mfeAppV19: 'mfe_app_v19@http://localhost:2001/remoteEntry.js',
        mfeAppV17: 'mfe_app_v17@http://localhost:2002/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': {
          singleton: true,
          eager: true,
        },
        'react-router': {
          singleton: true,
          eager: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
