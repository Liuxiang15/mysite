<template>
  <img
    class="avatar-img"
    :src="url"
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      default: 150,
    }
  }
}
</script>

<style scoped>
/* 带有作用域的样式 */
.avatar-img {
  border-radius: 50%;
  /* 保持原有尺寸比例,避免拉伸。但部分内容可能被剪切。 */
  object-fit: cover;
  /* 放在块盒中可能会出现白边 */
  display: block;
}
</style>