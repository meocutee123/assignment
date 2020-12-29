<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
const defaultLayout = 'default'
export default {
  components: {},
  computed:{
    layout(){
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  }
};
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
  label, legend {
    font-weight: bold;
    color: #42b983;
  }
  a,
  a:hover {
    text-decoration: none;
  }
}

#nav {
  padding: 30px;
}
</style>
