let title = require('./src/config/index').title

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = title
        return args
      })
  }
}