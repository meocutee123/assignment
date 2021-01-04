const isAuth = {
  computed: {
    isAuth() {
      let isAuth = JSON.parse(localStorage.getItem("auth"));
      return isAuth;
    },
  },
  mounted(){
    if(this.isAuth.role=='admin'){
      this.fields.push(
        {
          label: "Thao tác",
          key: "id",
        },
      )
    }
  },
};

export default isAuth;
