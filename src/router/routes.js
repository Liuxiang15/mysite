import Home from "@/views/Home";
import About from "@/views/About";
import Blog from "@/views/Blog";
import Project from "@/views/Project";
import Message from "@/views/Message";

// 命名路由:使用命名路由可以解除系统与路径之间的耦合
// 比如下面的Blog组件，对应的path是/article
export default [
  { name: "Home", path: "/", component: Home },
  { name: "About", path: "/about", component: About },
  { name: "Blog", path: "/article", component: Blog },
  { name: "Project", path: "/project", component: Project },
  { name: "Message", path: "/message", component: Message },
];
