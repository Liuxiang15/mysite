<template>
  <Layout>
    <div ref="mainContainer" class="main-container" v-loading="isLoading">
      <BlogDetail :blog="data" v-if="data" />
      <!-- 先加载文章,再加载评论 -->
      <BlogComment v-if="!isLoading" />
    </div>
    <template #right>
      <div class="right-container" v-loading="isLoading">
        <BlogTOC :toc="data.toc" v-if="data" />
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import { getBlog } from "@/api/blog";
import Layout from "@/components/Layout";
import BlogDetail from "./components/BlogDetail";
import BlogTOC from "./components/BlogTOC";
import BlogComment from "./components/BlogComment";
import mainScroll from "../../mixins/mainScroll"
import { titleController } from '@/utils'

export default {
  components: {
    Layout,
    BlogDetail,
    BlogTOC,
    BlogComment,
  },
  mixins: [fetchData(null), mainScroll("mainContainer")],
  methods: {
    async fetchData () {
      let res = await getBlog(this.$route.params.id);
      // res = null; 测试返回数据为空
      if (!res) {
        // 文章不存在
        this.$router.push("/404");
        return;
      }
      titleController.setRouteTitle(res.title)
      return res
    },
    // handleScroll () {
    //   this.$bus.$emit("mainScroll", this.$refs.mainContainer);
    // },
    // handleSetMainScroll (scrollTop) {
    //   this.$refs.mainContainer.scrollTop = scrollTop;
    // },
  },
  // mounted () {
  //   this.$bus.$on("setMainScroll", this.handleSetMainScroll);
  //   this.$refs.mainContainer.addEventListener("scroll", this.handleScroll);
  // },
  // beforeDestroy () {
  //   // 不传dom是undefined，说明要销毁了
  //   this.$bus.$emit("mainScroll");
  //   this.$refs.mainContainer.removeEventListener("scroll", this.handleScroll);
  //   this.$bus.$off("setMainScroll", this.handleSetMainScroll);
  // },
  // 刷新后跳转锚链接
  updated () {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
};
</script>

<style scoped lang="less">
.main-container {
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  width: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>
