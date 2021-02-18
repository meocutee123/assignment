import User from "@/api/services/User";
const state = {
  users: [],
  currentUser: [],
};
const getters = {
  getAllUsers: (state) => {
    return state.users;
  },
};
const mutations = {
  LOAD_USER(state, user) {
    state.currentUser = user;
  },
  ADD_USER: (state, user) => {
    state.users.push(user);
  },
  UPDATE_USER: (state, { id, ...user }) => {
    let whoToUpdate = state.users.find((item) => item.id == id);
    whoToUpdate.name = user.name;
    whoToUpdate.status = user.status;
  },
  REMOVE_USER: (state, user) => {
    state.users.splice(
      state.users.findIndex(function(i) {
        return i.id == user;
      }),
      1
    );
  },
  GET_USER: (state, users) => {
    state.users = users;
  },
};
const actions = {
  async LOAD_USER(context, id) {
    const response = await User.get(id)
    context.commit("LOAD_USER", response.data);
  },
  async UPDATE_USER(context, user) {
    await User.update(user);
    context.commit("UPDATE_USER", user);
  },
  async REMOVE_USER(context, id) {
    await User.delete(id);
    context.commit("REMOVE_USER", id);
  },
  async GET_USER(context) {
    const response = await User.all();
    context.commit("GET_USER", response.data);
  },
  async ADD_USER(context, user) {
    await User.post(user);
    context.commit("ADD_USER", user);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
