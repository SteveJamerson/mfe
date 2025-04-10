const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = (env) => {
  const isLocal = env.local === true || env.local === 'true'

  const remoteV19 = isLocal
    ? 'http://localhost:2001/remoteEntry.js'
    : 'https://stevejamerson.github.io/mfe/mfe_app_v19/remoteEntry.js'

  const remoteV17 = isLocal
    ? 'http://localhost:2002/remoteEntry.js'
    : 'https://stevejamerson.github.io/mfe/mfe_app_v17/remoteEntry.js'

  return {
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
        name: 'root',
        remotes: {
          mfeAppV19: `mfe_app_v19@${remoteV19}`,
          mfeAppV17: `mfe_app_v17@${remoteV17}`,
        },
        shared: {
          react: { singleton: true, eager: true },
          'react-dom': { singleton: true, eager: true },
          'react-router': { singleton: true, eager: true },
        },
      }),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
    ],
  }
}
