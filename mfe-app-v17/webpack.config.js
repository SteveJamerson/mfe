const { merge } = require('webpack-merge')
const devConfig = require('./webpack.dev')
const prodConfig = require('./webpack.prod')

module.exports = (env = {}) => {
  const isProd = env.production === true || env.production === 'true'

  if (isProd) {
    return merge(devConfig(env), prodConfig)
  }

  return devConfig(env)
}
