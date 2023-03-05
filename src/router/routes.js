import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";

import NotFound from "@/views/NotFound.vue";

configure({
  trickleSpeed: 20,
  showSpinner: false,
});

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

function getPageComponent(pageCompResolver) {
  return async () => {
    start();
    // vue-cli在打包阶段注入变量，方便在浏览器使用
    if (process.env.NODE_ENV === "development") {
      await delay(2000);
    }
    const comp = await pageCompResolver();
    done();
    return comp;
  };
}

// 命名路由:使用命名路由可以解除系统与路径之间的耦合
// 比如下面的Blog组件，对应的path是/article
export default [
  {
    name: "Home",
    path: "/",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "home" */ "@/views/Home")
    ),
    meta: {
      title: "首页",
    },
  },
  {
    name: "About",
    path: "/about",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "about" */ "@/views/About")
    ),
    meta: {
      title: "关于我",
    },
  },
  {
    name: "Blog",
    path: "/article",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "blog" */ "@/views/Blog")
    ),
    meta: {
      title: "文章",
    },
  },
  {
    name: "CategoryBlog",
    path: "/article/cate/:categoryId",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "blog" */ "@/views/Blog")
    ),
    meta: {
      title: "文章",
    },
  },
  {
    name: "BlogDetail",
    path: "/article/:id",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "blogdetail" */ "@/views/Blog/Detail")
    ),
    meta: {
      title: "文章详情",
    },
  },
  {
    name: "Project",
    path: "/project",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "project" */ "@/views/Project")
    ),
    meta: {
      title: "项目&效果",
    },
  },
  {
    name: "Message",
    path: "/message",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "message" */ "@/views/Message")
    ),
    meta: {
      title: "留言板",
    },
  },
  {
    name: "KTable",
    path: "/ktable",
    component: getPageComponent(() =>
      import(/* webpackChunkName: "message" */ "@//components/KTable/test.vue")
    ),
    meta: {
      title: "留言板",
    },
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound,
  },
];
