<template>
  <div id="app">
    <router-view :key="$route.path"/>
  </div>
</template>
<script>
export default {
  
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
    }a, a:hover{
    color: #fff;
    text-decoration: none;
  }
}

#nav {
  padding: 30px;

}
</style>
