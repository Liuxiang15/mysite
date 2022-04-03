<template>
  <div id="app">
    <h1>APP组件</h1>

    <Pager :total="total" :current="current" @pageChange="handlePageChange" />
  </div>
</template>
<script>
import Pager from './components/Pager.vue'
export default {
  name: 'App',
  components: {
    Pager
  },
  data () {
    return {
      total: 302,
      current: 1
    }

  },
  methods: {
    handlePageChange (newPage) {
      this.current = newPage
      console.log('加载当前数据')
    }
  }
}
</script>

<style scoped>
.iconfont {
  font-size: 26px;
  color: red;
}
</style>