import Vue from "vue";
import Vuex from "vuex";
import users from "@/store/users.js";
import products from "@/store/products.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: users,
    currenUser: {},
    products: products,
  },
  getters: {
    getAllProduct: state => {
      return state.products
    },
    getAllUser: state => {
      return state.users
    }
  },
  mutations: {
    ADD_USER: (state, user) => {
      state.users.items.push(user);
    },
    ADD_PRODUCT: (state, product) => {
      state.products.items.push(product);
    },
    LOAD_USER: (state, id) => {
      state.currenUser = users.items.find(user => user.id == id);
    },
  },
  actions: {
    LOAD_USER: (context, id) => {
      context.commit('LOAD_USER', id)
    }
  },
  modules: {},
});
