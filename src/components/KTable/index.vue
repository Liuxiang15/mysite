<template>
  <div>
    <header>
      <span v-for="header in headerNames" :key="header">{{ header }}</span>
    </header>
    <slot></slot></div
></template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  provide() {
    return {
      data: this.data
    };
  },
  data() {
    return {
      headerNames: []
    };
  },
  mounted() {
    // 通过$children获得子组件数据
    console.log("created", this.$children);
    this.headerNames = this.$children.map(c => c.label);
    console.log(this.headerNames);
  }
};
</script>

<style></style>
