const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devServer: {
    port: 2002,
    historyApiFallback: true,
  },
  output: {
    filename: '[hash].js',
    publicPath: 'http://localhost:2002/',
    clean: true,
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
      name: 'mfe_app_v17',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App',
      },
      shared: {
        react: {
          singleton: true,
          eager: true,
          // requiredVersion: '17.0.2'
        },
        'react-dom': {
          singleton: true,
          eager: true,
          // requiredVersion: '17.0.2',
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
}
