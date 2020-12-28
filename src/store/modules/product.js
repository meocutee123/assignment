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
    whatToUpdate.status = product.status;
  },
};
const actions = {
  LOAD_PRODUCT: (context, id) => {
    context.commit("LOAD_PRODUCT", id);
  },
  UPDATE_PRODUCT: (context, product) => {
    context.commit("UPDATE_PRODUCT", product);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
