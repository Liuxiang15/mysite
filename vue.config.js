// vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
          "/api": {
          // 需要替换成测试服务器
        target: "http://test.my-site.com",
      },
    },
  },
};
