<template>
  <div id="app">
    <h1>APP组件</h1>
    <Avatar
      url="	https://p26-passport.byteacctimg.com/img/user-avatar/f92b36365b9b2b3fe572c0e5082dcfeb~300x300.image"
      :size="100"
    />
    <Avatar
      url="	https://p26-passport.byteacctimg.com/img/user-avatar/f92b36365b9b2b3fe572c0e5082dcfeb~300x300.image"
      :size="100"
    />
  </div>
</template>
<script>
import Avatar from './components/Avatar.vue'
export default {
  name: 'App',
  components: {
    Avatar
  }
}
</script>

