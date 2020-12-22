import Vue from 'vue'
import Vuex from 'vuex'
import users from '@/store/users.js'
 import products from '@/store/products.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: users,
    products: products
  },
  mutations: {
    ADD_USER: (state, user) => {
      state.users.items.push(user)
    },
    ADD_PRODUCT: (state, product) => {
      state.products.items.push(product)
    },
    EDIT_USER: (state, id, user) => {
      state.users[id] = user
    },
    // EDIT_PRODUCT: (state, product) => {

    // },

  },
  actions: {
  },
  modules: {
  }
})
