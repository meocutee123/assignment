import Vue from "vue";
import VueRouter from "vue-router";
import auth from "./auth/auth.js";
Vue.use(VueRouter);

let isAuth = JSON.parse(localStorage.getItem("auth"));
const routes = [];

if (isAuth) {
  switch (isAuth.role) {
    case "admin":
      for (var i = 0; i < auth.admin.length; i++) {
        routes.push(auth.admin[i]);
      }
      break;
    case "user":
      for (var j = 0; j < auth.user.length; j++) {
        routes.push(auth.user[j]);
      }
      break;
  }
}

if (!isAuth) {
  for (var d = 0; d < auth.routesDefault.length; d++) {
    routes.push(auth.routesDefault[d]);
  }
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  let isAuth = localStorage.getItem("auth");
  if (to.name !== "Login" && !isAuth) {
    sessionStorage.setItem("redirectPath", to.path);
    next({ name: "Login" });
  } else next();

  if (isAuth && to.path == "/login") {
    next(from.path);
  }
});

export default router;
