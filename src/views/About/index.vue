<template>
  <div class="about-container" v-loading="loading || !srcLoaded">
    <iframe
      v-if="src"
      class="about-content"
      :src="src"
      frameborder="0"
      @load="srcLoaded = true"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data () {
    return {
      srcLoaded: false,
    };
  },
  computed: mapState("about", {
    src: "data",
    loading: "loading",
  }),
  created () {
    this.$store.dispatch("about/fetchAbout");
  },
};
</script>

<style scoped lang="less">
.about-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  // 为了loading显示正确
}
.about-content {
  width: 100%;
  height: 100%;
  // iframe默认是行盒
  display: block;
  box-sizing: border-box;
}
</style>
