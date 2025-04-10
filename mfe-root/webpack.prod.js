const { ModuleFederationPlugin } = require('webpack').container
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  output: {
    publicPath: 'https://stevejamerson.github.io/mfe/',
    clean: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'root',
      remotes: {
        mfeAppV19:
          'mfe_app_v19@https://stevejamerson.github.io/mfe/mfe_app_v19/remoteEntry.js',
        mfeAppV17:
          'mfe_app_v17@https://stevejamerson.github.io/mfe/mfe_app_v17/remoteEntry.js',
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
