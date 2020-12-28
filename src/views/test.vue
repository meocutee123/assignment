<template>
  <nav>
    <div class="logo">
      <img src="@/assets/logo.png" alt="logo" />
    </div>
    <div class="layout-menu" v-for="layout in layouts" :key="layout.id">
      <b-button
        block
        v-b-toggle.${layout.id}
        variant="none"
        class="text-left d-flex"
      >
        <b-icon :icon="layout.icon" class="mr-2"></b-icon>
        <span class="mr-auto">{{ layout.tittle }}</span>
      </b-button>
      <b-collapse> </b-collapse>
      <b-button block variant="none" class="text-left">
        <b-icon icon="calculator" aria-hidden="true" class="mr-1"></b-icon>
        Manage
      </b-button>
    </div>
  </nav>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      layouts: {
        layout: {
          id: "setting",
          icon: "gear-fill",
          tittle: "Cài đặt",
        },
      },
    };
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>
<style lang="scss" scoped>
button:focus {
  box-shadow: none;
}
nav {
  width: 25vw;
  height: 100vh;
  background-color: #2bb642;
  padding: 10px;
  color: white;
  position: fixed;
  z-index: 10;
  .logo {
    text-align: center;
    margin-bottom: 2rem;
    img {
      max-width: 100px;
    }
  }
  .layout-menu {
    li {
      list-style: none;
      cursor: pointer;
      margin: 10px 0;
    }
    button {
      color: white;
    }

    button:nth-child(1):after {
      display: inline-block;
      margin-top: 0.5rem;
      margin-left: 0.255em;
      vertical-align: 0.255em;
      content: "";
      border-top: 0.3em solid;
      border-right: 0.3em solid transparent;
      border-bottom: 0;
      border-left: 0.3em solid transparent;
    }
  }
}
a {
  text-decoration: none;
  color: white;
}
</style>
