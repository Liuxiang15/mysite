<template>
  <div id="app">
    <h1>APP组件</h1>
    <Avatar
      url="	https://p26-passport.byteacctimg.com/img/user-avatar/f92b36365b9b2b3fe572c0e5082dcfeb~300x300.image"
      :size="100"
    />
    <Icon type="home" />
  </div>
</template>
<script>
import Avatar from './components/Avatar.vue'
import Icon from './components/Icon'
export default {
  name: 'App',
  components: {
    Avatar,
    Icon
  }
}
</script>

<style scoped>
.iconfont {
  font-size: 26px;
  color: red;
}
</style>