<template>
  <div class="image-loader-container">
    <img v-if="!everythingDone" :src="placeholder" class="placeholder" />
    <img
      @load="handleLoad"
      :src="src"
      alt=""
      :style="{
        opacity: originOpacity,
        transition: `${duration}ms`,
      }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 2000,
    },
  },
  data () {
    return {
      originLoaded: false, //  原图是否加载完成
      everythingDone: false, // 是否一切都尘埃落定了
      originOpacity: 0
    };
  },
  methods: {
    handleLoad () {
      this.originLoaded = true
      this.originOpacity = 1
      setTimeout(() => {
        this.everythingDone = true
        this.$emit('load')
      }, this.duration)
    }
  }
}
</script>

<style lang='less' scoped>
@import '~@/styles/mixin.less';
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  // 加入虚化后边边超出
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }

  // css3虚化
  .placeholder {
    filter: blur(2vw);
  }
}
</style>