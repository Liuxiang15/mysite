// 入口文件
import "./mock";
import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less";
import router from "./router";

import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;

import "./eventBus";

// vuex
import store from "./store";
store.dispatch("setting/fetchSetting");

// 注册全局指令
import vLoading from './directives/loading'
import vLazy from './directives/lazy'
Vue.directive('loading', vLoading)
Vue.directive('lazy', vLazy)


new Vue({
  // 配置
  router,
  store,
  render: h => h(App),
}).$mount('#app')
