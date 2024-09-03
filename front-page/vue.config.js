export default {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://max-api.maicoin.com',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
