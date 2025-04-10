const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = (env = {}) => {
  const isRemote = env.remote === true || env.remote === 'true'

  const publicPath = isRemote
    ? 'https://stevejamerson.github.io/mfe/mfe_app_v17/'
    : 'http://localhost:2002/'

  return {
    mode: 'development',
    entry: './src/index.tsx',
    devServer: isRemote
      ? undefined
      : {
          port: 2002,
          historyApiFallback: true,
        },
    output: {
      filename: '[hash].js',
      publicPath,
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: 'ts-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
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
          react: { singleton: true, eager: true },
          'react-dom': { singleton: true, eager: true },
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  }
}
