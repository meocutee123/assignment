import users from "../data/users.js";
const state = {
  users: users,
  currentUser: {},
};
const getters = {
  getAllUsers: (state) => {
    return state.users;
  },
};
const mutations = {
  LOAD_USER: (state, id) => {
    state.currentUser = users.items.find((user) => user.id == id);
    console.log(state.currentUser);
  },
  ADD_USER: (state, user) => {
    state.users.items.push(user);
  },
  UPDATE_USER: (state, user) => {
    let whoToUpdate = state.users.items.find((item) => item.id == user.id);
    whoToUpdate.name = user.name;
    whoToUpdate.status = user.status;
  },
};
const actions = {
  LOAD_USER: (context, id) => {
    context.commit("LOAD_USER", id);
  },
  UPDATE_USER: (context, user) => {
    context.commit("UPDATE_USER", user);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
