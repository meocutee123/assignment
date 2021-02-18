import api from "../api.js";

export default {
  all() {
    return api.get("users");
  },
  get(id) {
    return api.get(`users/${id}`);
  },
  update({id, ...rest}) {
    return api.put(`users/${id}`, rest);
  },
  delete(id) {
    return api.delete(`users/${id}`);
  },
  post( data) {
    return api.post(`users/`, data);
  },
};
