<template>
  <nav>
    <div class="logo">
      <img src="@/assets/logo.png" alt="logo" />
    </div>
    <div class="nav-menu" v-for="(nav, index) in navLayout" :key="index">
      <b-button
        block
        v-b-toggle="`${index}`"
        variant="none"
        class="text-left d-flex"
      >
        <b-icon :icon="nav.buttonIcon" class="mr-2"></b-icon>
        <span class="mr-auto">{{ nav.buttonTittle }}</span>
      </b-button>
      <b-collapse :id="`${index}`">
        <ul>
          <li v-for="(attr, index) in nav.attrs" :key="index">
            <router-link :to="{ name: attr.linkTo }">{{
              attr.linkTittle
            }}</router-link>
          </li>
        </ul>
      </b-collapse>
    </div>
  </nav>
</template>
<script>
import { mapState } from "vuex";
import isAuth from "@/mixins/auth.js";
import { navLayout } from "./nav.js";
export default {
  mixins: [isAuth],
  data() {
    return {
      navLayout: navLayout,
      test: () =>{
        let foo = {...navLayout}
        return foo
      }
    };
  },
  mounted() {
    if (this.isAuth) {
      var filters = {
        role: this.isAuth.role,
      };

      for (var i = 0; i < this.navLayout.length; i++) {
        this.navLayout[i].attrs = this.navLayout[i].attrs.filter(function(
          item
        ) {
          for (var key in filters) {
            if (item[key] === undefined) {
              return false;
            }
            if (!item[key].includes(filters[key])) {
              return false;
            }
          }
          return true;
        });
      }

      this.navLayout = this.navLayout.filter(function(item) {
        for (var key in filters) {
          if (item[key] === undefined) {
            return false;
          }
          if (!item[key].includes(filters[key])) {
            return false;
          }
        }
        return true;
      });
    }
  },
  destroyed() {

  },
  methods: {},
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
  .nav-menu {
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
