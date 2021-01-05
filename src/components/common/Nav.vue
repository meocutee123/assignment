<template>
  <nav>
    <div class="logo">
      <img src="@/assets/logo.png" alt="logo" />
    </div>
    <div class="layout-menu" v-for="(layout, index) in layouts" :key="index">
      <b-button
        block
        v-b-toggle="`${index}`"
        variant="none"
        class="text-left d-flex"
      >
        <b-icon :icon="layout.buttonIcon" class="mr-2"></b-icon>
        <span class="mr-auto">{{ layout.buttonTittle }}</span>
      </b-button>
      <b-collapse :id="`${index}`">
        <ul>
          <li v-for="(attr, index) in layout.attrs" :key="index">
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
export default {
  mixins: [isAuth],
  data() {
    return {
      layouts: [
        {
          buttonIcon: "gear-fill",
          buttonTittle: "Settings",
          attrs: [
            {
              linkTo: "Home",
              linkTittle: "Users",
            },
            {
              linkTo: "Product",
              linkTittle: "Products",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    if (this.isAuth) {
      if (this.isAuth.role == "admin") {
        this.autoRun();
      }
    }
  },
  methods: {
    autoRun() {
      this.layouts.push({
        buttonIcon: "calculator-fill",
        buttonTittle: "Manage",
        attrs: [],
      });
    }

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
