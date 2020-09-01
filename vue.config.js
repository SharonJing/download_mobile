const BASE_URL = process.env.NODE_ENV === "production" ? "./" : "./";
module.exports = {
  publicPath: BASE_URL,
  lintOnSave: true,
  productionSourceMap: false,
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 8082,
    proxy: {
      "/UserInfo": {
        target: "http://192.168.21.39:89",
        ws: true,
        changeOrigin: true,
      },
      "/VideoInfo/GetList": {
        target: "http://192.168.21.39:89",
        ws: true,
        changeOrigin: true,
      },
      "/VideoInfo/Download": {
        target: "http://192.168.21.39:89",
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
