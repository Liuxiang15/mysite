<template>
  <div>
    kColumn
  </div>
</template>

<script>
export default {
  inject: ["data"],
  props: {
    label: {
      type: String,
      default: ""
    },
    prop: String
  },
  created() {
    console.log("in columns.vue", this.label, this.prop, this.data);
  }
};
</script>

<style></style>
