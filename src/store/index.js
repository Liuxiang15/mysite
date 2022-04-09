// import Vuex from "vuex";
// for tree-shaking
import { Store, install } from "vuex";

import Vue from "vue";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "./project";


if (!window.Vuex) {
  // 不是传统引入，不是用CDN的
  install(Vue);
}


export default new Store({
  modules: {
    banner,
    setting,
    about,
    project,
  },
  strict: true,
});
