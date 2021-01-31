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
  mutations: {
    login: (state, user) => {
      let newUser = state.whoCanLogIn.filter(function(item) {
        return user.name == item.name && user.password == item.password
      });
      if (newUser.length == 1) {
        state.logInStatus = true;
        delete newUser[0].password
        let auth = JSON.stringify(newUser[0]);
        localStorage.setItem("auth", auth);
      }
    },
    logout: (state) => {
      state.logInStatus = false;
      localStorage.removeItem("auth");
    },
  },
  actions: {
    login(context, user){
      context.commit("login", user)
    },
    logout(context){
      context.commit("logout")
    }
  },
  modules: {
    user,
    product,
  },
});
