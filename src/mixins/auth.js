const isAuth = {
  computed: {
    isAuth() {
      let isAuth = JSON.parse(localStorage.getItem("auth"));
      return isAuth;
    },
  },
};

export default isAuth;
