<template>
  <div id="app">
    <Home/>
  </div>
</template>
<script>
import Home from '@/views/Home.vue'
export default {
  components: { Home },
  
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  overflow: hidden;
      label{
      font-weight: bold;
      color:  #42b983;
    }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
