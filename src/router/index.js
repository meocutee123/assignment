import Vue from "vue";
import VueRouter from "vue-router";

// import authRouter from './checkAuth.js'

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "listUser" */ "../views/Home.vue"),
    props: true,
    children: [
      {
        path: "",
        name: 'Home',
        component: () =>
          import(
            /* webpackChunkName: "table" */ "@/components/tables/User.vue"
          ),
        props: true,
      },
      {
        path: "user/create",
        name: "Create",
        component: () =>
          import(
            /* webpackChunkName: "create" */ "@/components/forms/user/Create.vue"
          ),
      },
      {
        path: "user/:id/edit",
        name: "Edit",
        component: () =>
          import(
            /* webpackChunkName: "edit" */ "@/components/forms/user/Edit.vue"
          ),
        props: true,
      },
      {
        path: "/product",
        name: "Product",
        component: () =>
          import(
            /* webpackChunkName: "product" */ "@/components/tables/Product.vue"
          ),
        props: true,
      },
      {
        path: "product/createProduct",
        name: "CreateProduct",
        component: () =>
          import(
            /* webpackChunkName: "createProduct" */ "@/components/forms/product/Create.vue"
          ),
      },
      {
        path: "product/:id/edit",
        name: "EditProduct",
        component: () =>
          import(
            /* webpackChunkName: "editProduct" */ "@/components/forms/product/Edit.vue"
          ),
        props: true,
      },
      {
        path: "/test",
        name: "test",
        meta: { layout: "blank" },
        component: () =>
          import(/* webpackChunkName: "notFound" */ "@/views/test"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    meta: { layout: "blank" },
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    meta: { layout: "blank" },
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
  let isAuth = sessionStorage.getItem("auth");
  if (to.name !== "Login" && !isAuth) next({ name: "Login" });
  else next();
});

export default router;
