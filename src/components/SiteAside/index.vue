<template>
  <div class="site-aside-container">
    <Avatar
      url="https://p26-passport.byteacctimg.com/img/user-avatar/f92b36365b9b2b3fe572c0e5082dcfeb~300x300.image"
    />
    <h1 class="title">前端小菜鸟</h1>
    <Menu />
    <Contact />
    <p class="footer">备号</p>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style scoped lang="less">
@import '~@/styles/var.less';
.site-aside-container {
  // 宽高由外层容器设置
  width: 100%;
  height: 100%;
  background: @dark;
  padding: 20px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
}
.avatar-container {
  margin: 0 auto;
}
.footer {
  text-align: center;
  font-size: 12px;
}
.title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>
