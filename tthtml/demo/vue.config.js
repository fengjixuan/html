const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
 devServer:{
  open:true,
  host:'localhost',
  proxy: { 
    [process.env.VUE_APP_BASE_V1]: { // 代理标识, 如果出现了这个就代表需要代理
      target: process.env.VUE_APP_SERVICE_URL_V1,
      changeOrigin : true,
      pathRewrite: {
        ['^'+ process.env.VUE_APP_BASE_V1]: '' // 重写路由, 把想替换掉的路由地址替换为空或者别的
      }
    },
    [process.env.VUE_APP_BASE_V2]: { // 代理标识, 如果出现了这个就代表需要代理
      target: process.env.VUE_APP_SERVICE_URL_V2,
      changeOrigin : true,
      pathRewrite: {
        ['^'+ process.env.VUE_APP_BASE_V2]: '' // 重写路由, 把想替换掉的路由地址替换为空或者别的
      }
    }
  }
 }
})


