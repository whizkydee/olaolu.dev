const { LANDING_PORT } = require('../config')
const manifest = require('./public/manifest.json')

module.exports = {
  productionSourceMap: false,
  devServer: { port: LANDING_PORT },

  pwa: { themeColor: manifest.theme_color },
  chainWebpack(config) {
    const FILE_RE = /\.(vue|js|ts|svg)$/
    config.module.rule('svg').issuer(file => !FILE_RE.test(file))
    config.module
      .rule('svg-component')
      .test(/\.svg$/)
      .issuer(file => FILE_RE.test(file))
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader')
  },
}
