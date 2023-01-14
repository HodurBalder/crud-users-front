const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'https://crud-users-back.vercel.app',
    },
    publicPath: process.env.NODE_ENV === 'production'  ? '' : ''
})

