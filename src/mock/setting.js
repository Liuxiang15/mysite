import Mock from "mockjs";
Mock.mock("/api/setting", "get", {
  code: 0,
  msg: "",
  data: {
    avatar: "https://p26-passport.byteacctimg.com/img/user-avatar/f92b36365b9b2b3fe572c0e5082dcfeb~300x300.image",
    siteTitle: "我的个人空间",
    github: "https://github.com/Liuxiang15/",
    qq: "2321081882",
    weixin: "helloworld001",
    weixinQrCode:
      "https://xesfile.xesimg.com/programme/python_assets/62b0a895c045d96ff7f411bf419e672d.png",
    mail: "thss15_liux@163.com",
    // icp: "黑ICP备17001719号",
    githubName: "Liuxiang15",
    favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
  },
});
