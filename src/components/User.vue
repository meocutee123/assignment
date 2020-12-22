<template>
  <div class="user fixed-top">
    <b-dropdown id="dropdown-1" right text="User" variant="none">
      <template #button-content>
        <b-avatar src="@/assets/person.png"></b-avatar> Settings
      </template>
      <template #avatar></template>
      <b-dropdown-item
        ><router-link
          to="{createProduct}"
          >Hồ sơ</router-link
        ></b-dropdown-item
      >
      <b-dropdown-item><router-link to="/">Thoát </router-link></b-dropdown-item>
     
    </b-dropdown>
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  }
};
</script>

<style lang="scss" scoped>
button:focus {
  box-shadow: none;
}
.user {
  margin: 0 0 10px 10px;
  padding: 5px 0; 
  background-color: white;
  text-align: end;
  z-index: 5;

  a {
    color: black !important;
    text-decoration: none;
  }

}
</style>
