<template>
  <div class="site-aside-container">
    <!-- 仓库数据先开始为空 -->
    <template v-if="data">
      <Avatar :url="data.avatar" />
      <h1 class="title">{{ data.siteTitle }}</h1>
      <Menu />
      <Contact />
    </template>

    <!-- <p class="footer">备号</p> -->
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Contact from "./Contact";
import { mapState } from "vuex";

export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
  computed: mapState("setting", ["data"]),
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
