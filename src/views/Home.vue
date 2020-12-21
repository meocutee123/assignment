<template>
  <div id="home">
    <b-row>
      <b-col cols="3">
        <Nav />
      </b-col>
      <b-col>
        <b-row>
        <b-col cols="12">
         <User/>
        </b-col>
        <b-col cols="12">
        <div class="content">
          <router-view :key="$route.path"/>
        </div>
        </b-col>
      </b-row>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import User from "@/components/User.vue";
export default {  
  name: "home",
  components: { Nav, User},
};
</script>
<style lang="scss" scope>
.content{
    margin-top: 70px;
}
</style>
