import Vue from "vue";
import Vuex from "vuex";
import product from "./modules/product.js";
import user from "./modules/user.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    whoCanLogIn: [
      {
        name: "admin",
        password: "123",
        role: "admin",
      },
      {
        name: "user",
        password: "123",
        role: "user",
      },
    ],
    logInStatus: false,
  },
  actions: {
    login: (state, user) => {
      let newUser = state.state.whoCanLogIn.filter(function(item) {
        for (var key in user) {
          if (item[key] == undefined || item[key] != user[key]) {
            return false;
          }
          return true;
        }
      });
      if (newUser.length == 1) {
        state.state.logInStatus = true;
        delete newUser[0].password
        let auth = JSON.stringify(newUser[0]);
        localStorage.setItem("auth", auth);
      }
    },
    logout: (state) => {
      state.state.logInStatus = false;
      localStorage.removeItem("auth");
    },
  },
  modules: {
    user,
    product,
  },
});
