const origin = 'http://kjgxyun-ft.cpic.com.cn'

// eslint-disable-next-line no-undef
module.exports = {
  publicPath: '/app', // 根路径

  devServer: {
    overlay: { // 让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    host: 'localhost',
    port: '8001',
    https: false,
    open: true,
    hotOnly: true,
    proxy: { // 配置跨域代理，只有一个代理
      '/emp/api': {
        target: origin + '/emp',
        changeOrigin: true, // 跨域
        // ws: true, // websocket支持
        secure: false,
        pathRewrite: {  // 重写
          '^/emp': ''
        }

      }
    }

  }
}
