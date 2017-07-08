<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

  header {
    display: flex;
    align-items: center;
    color: white;

    .cssgrid {
      flex: 1;
      text-align: start;
      img {
        max-width: 160px;
        vertical-align: middle;
      }
    }

    nav {
      flex: 4;
      text-align: end;
    }
  }

</style>
