const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'https://crud-users-back.vercel.app',
    compress: true,
    disableHostCheck: true,
    },
    publicPath: process.env.NODE_ENV === 'production'  ? '././' : './'
})

