import products from "../data/products.js";
const state = {
  products: products,
  currentProduct: {},
};
const getters = {
  getAllProducts: (state) => {
    return state.products;
  },
};
const mutations = {
  LOAD_PRODUCT: (state, id) => {
    state.currentProduct = products.items.find((product) => product.id == id);
  },
  ADD_PRODUCT: (state, product) => {
    state.products.items.push(product);
  },
  UPDATE_PRODUCT: (state, product) => {
    let whatToUpdate = state.products.items.find(
      (item) => item.id == product.id
    );
    whatToUpdate.price = product.price;
    whatToUpdate.updatedDate = product.current;
    whatToUpdate.status = product.status;
  },
  REMOVE_PRODUCT: (state, product) => {
    state.products.items.splice(state.products.items.findIndex(function(i){
      return i.id == product
    }), 1)
  },
};
const actions = {
  LOAD_PRODUCT: (context, id) => {
    context.commit("LOAD_PRODUCT", id);
  },
  UPDATE_PRODUCT: (context, product) => {
    context.commit("UPDATE_PRODUCT", product);
  },
  REMOVE_PRODUCT: (context, product) => {
    context.commit('REMOVE_PRODUCT', product)
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
