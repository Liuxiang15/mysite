import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { titleController } from "@/utils";

if (!window.VueRouter) { 
  // 不是传统引入，不是用CDN的
  Vue.use(VueRouter); // 使用一个vue插件

}
const router = new VueRouter({
  // 配置
  routes, // 路由匹配规则
  mode: "history",
});
router.afterEach((to, from) => {
  if (to.meta.title) {
    // document.title = to.meta.title
    titleController.setRouteTitle(to.meta.title);
  }
});


export default router;
