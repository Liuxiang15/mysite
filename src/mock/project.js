import Mock from "mockjs";

Mock.mock(/^\/api\/project\/?$/, "get", {
  code: 0,
  msg: "",
  "data": [
    {
      id: 1,
      name: '响应式demo',
      "url": "http://43.138.42.2/media_query_demo/",
      "github": "https://github.com/Liuxiang15/media-query-demo",
      "description": ["用来练习媒体查询的一个响应式demo"],
      thumb: "@image(300x250, @color, #fff, @natural)",
    },
    {
      id: 2,
      name: '每日优鲜C端',
      "url": "https://github.com/Liuxiang15/vue-mall-app",
      "github": "https://github.com/Liuxiang15/vue-mall-app",
      "description": ["模仿每日优鲜购买水果的C端项目"],
      thumb: "@image(300x250, @color, #fff, @natural)",
    },
    {
      id: 3,
      name: '每日优鲜后台管理系统',
      "url": "https://github.com/Liuxiang15/vue-mall-admin",
      "github": "https://github.com/Liuxiang15/vue-mall-admin",
      "description": ["每日优鲜的后台管理系统"],
      thumb: "@image(300x250, @color, #fff, @natural)",
    },
    {
      id: 4,
      name: 'vue3TODO管理demo',
      "url": "https://github.com/Liuxiang15/vue3-todo-mvc",
      "github": "https://github.com/Liuxiang15/vue3-todo-mvc",
      "description": ["练习vue的一个demo"],
      thumb: "@image(300x250, @color, #fff, @natural)",
    },
    {
      id: 5,
      name: 'codebase',
      "url": "https://github.com/Liuxiang15/codebase",
      "github": "https://github.com/Liuxiang15/codebase",
      "description": ["前端开发中的一些积累"],
      thumb: "@image(300x250, @color, #fff, @natural)",
    },
    {
      id: 6,
      name: 'react入门学习',
      "url": "https://github.com/Liuxiang15/react-learn",
      "github": "https://github.com/Liuxiang15/react-learn",
      "description": ["学习react的一个demo"],
      thumb: "@image(300x250, @color, #fff, @natural)",
    },
  ],
});
