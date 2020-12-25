import Vue from "vue";
import Vuex from "vuex";
import users from "@/store/users.js";
import products from "@/store/products.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: users,
    currentUser: {},
    currentProduct: {},
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
      state.currentUser = users.items.find(user => user.id == id);
    },
    LOAD_PRODUCT: (state, id) => {
      state.currentProduct = products.items.find(product => product.id == id);
    },
    UPDATE_USER: (state, user) => {
      let whoToUpdate = state.users.items.find( item => item.id == user.id) ;
      console.log(user);
      console.log(whoToUpdate);
      whoToUpdate.name = user.name
    },
    UPDATE_PRODUCT: (state, product) => {
      let whatToUpdate = state.products.items.find( item => item.id == product.id) 
      whatToUpdate.price = product.price
    }
  },
  actions: {
    LOAD_USER: (context, id) => {
      context.commit('LOAD_USER', id)
    },
    LOAD_PRODUCT: (context, id) => {
      context.commit('LOAD_PRODUCT', id)
    },
    UPDATE_USER: (context, user) => {
      context.commit('UPDATE_USER', user)
    },
    UPDATE_PRODUCT: (context, product) => {
      context.commit('UPDATE_PRODUCT', product)
    }
  },
  modules: {},
});
