const origin = 'https://kjgxyun-ft.cpic.com.cn'

module.exports = {
  publicPath: '/app',//根路径

  devServer: {
    overlay: { //让浏览器 overlay 同时显示警告和错误
      warnings: true,
      errors: true
    },
    host: 'localhost',
    port: '8081',
    https: false,
    open: true,
    hotOnly: true,
    proxy: { //配置跨域代理，只有一个代理
      '/emp': {
        target: this.origin + '/emp/api',
        changeOrigin: true,
        ws: true, //websocket支持
        secure: false,
        pathRewrite: {
          '^/emp': ''
        }

      }
    }

  }
}
