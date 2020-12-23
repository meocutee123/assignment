import Vue from "vue";
import Vuex from "vuex";
import users from "@/store/users.js";
import products from "@/store/products.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: users,
    userDetail: {},
    products: products,
    authenticated: false
  },
  mutations: {
    AUTH: (state, status) => {
      state.authenticated == status;
    },
    ADD_USER: (state, user) => {
      state.users.items.push(user);
    },
    ADD_PRODUCT: (state, product) => {
      state.products.items.push(product);
    },
    // EDIT_USER: (state, id) => {
    //   state.userDetail = users.items.find(user => user.id == id);
    // },
    // EDIT_PRODUCT: (state, id, product) => {
    //   state.products[id] = product;
    // },
    // EDIT_PRODUCT: (state, product) => {

    // },
  },
  actions: {},
  modules: {},
});
