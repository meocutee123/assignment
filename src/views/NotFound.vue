<template>
  <div class="container text-center">
    <h1>404 page not found</h1>
    <p>
      Opps, we coundn't find that page. Try going
      <router-link to="/"
        ><b-button size="sm" variant="warning">Home</b-button></router-link
      >
    </p>
  </div>
</template>
<style lang="scss" scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1{
    font-weight: bolder;
    color: chocolate
  }
}
</style>
