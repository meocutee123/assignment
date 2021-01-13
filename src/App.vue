<template>
  <div id="app">
    <component :is="layout">
     <transition name="fade" mode="out-in">
        <router-view />
     </transition>
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
  height: 100vh;
  label, legend {
    font-weight: bold;
    color: #41b883;
  }
  a,
  a:hover {
    text-decoration: none;
  }
}

#nav {
  padding: 30px;
}
.btn-41b883{
  background-color: #41b983;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(1em);
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
</style>
