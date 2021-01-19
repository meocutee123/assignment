import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      requiresAuth: true,
      role: ["admin", "user"],
    },
    component: () =>
      import(
        /* webpackChunkName: "product" */ "@/views/product/list/Product.vue"
      ),
    props: true,
  },
  {
    path: "/user/create",
    name: "Create",
    meta: {
      requiresAuth: true,
      role: ["admin"],
    },
    component: () =>
      import(/* webpackChunkName: "create" */ "@/views/user/form/Create.vue"),
  },
  {
    path: "/user/:id/edit",
    name: "Edit",
    meta: {
      requiresAuth: true,
      role: ["admin"],
    },
    component: () =>
      import(/* webpackChunkName: "edit" */ "@/views/user/form/Edit.vue"),
    props: true,
  },
  {
    path: "/user",
    name: "User",
    meta: {
      requiresAuth: true,
      role: ["admin"],
    },
    component: () =>
      import(/* webpackChunkName: "product" */ "@/views/user/list/User.vue"),
    props: true,
  },
  {
    path: "/product/createProduct",
    name: "CreateProduct",
    meta: {
      requiresAuth: true,
      role: ["admin"],
    },
    component: () =>
      import(
        /* webpackChunkName: "createProduct" */ "@/views/product/form/Create.vue"
      ),
  },
  {
    path: "/product/:id/edit",
    meta: {
      requiresAuth: true,
      role: ["admin"],
    },
    name: "EditProduct",
    component: () =>
      import(
        /* webpackChunkName: "editProduct" */ "@/views/product/form/Edit.vue"
      ),
    props: true,
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "blank",
      requiresAuth: false,
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    meta: {
      requiresAuth: false,
      layout: "blank",
    },
    component: () =>
      import(/* webpackChunkName: "notFound" */ "@/views/NotFound"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  let isAuth = JSON.parse(localStorage.getItem("auth"));
  if (to.name !== "Login" && !isAuth) {
    sessionStorage.setItem("redirectPath", to.path);
    next({ name: "Login" });
  } else {
    if (isAuth && to.path == "/login") {
      next(from.path);
    } else {
      if (!to.matched.some((record) => record.meta.requiresAuth)) {
        next();
      } else {
        if (to.meta.role.includes(isAuth.role)) {
          next();
        } else {
          next({ name: "notFound" });
        }
      }
    }
  }

});

export default router;
