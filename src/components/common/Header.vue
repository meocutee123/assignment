<template>
  <div class="user fixed-top">
    <b-dropdown id="dropdown-1" right text="User" variant="none">
      <template #button-content>
        <b-avatar src="@/assets/person.png"></b-avatar> <span v-if="isAuth">{{isAuth.name}}</span>
      </template>
      <template #avatar></template>
      <router-link to="/profile">
        <b-dropdown-item>Profile</b-dropdown-item>
      </router-link>
      <b-dropdown-item @click="logout">Logout</b-dropdown-item>
    </b-dropdown>
  </div>
</template>
<script>
import isAuth from '@/mixins/auth.js'
export default {
  mixins: [isAuth],
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
      this.$router.replace("/login");
    },
  },
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
