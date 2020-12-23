import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "listUser" */ "../views/Home.vue"),
    props: true,
    // beforeEnter: (to, from, next) => {
    //   if (this.$store.state.authenticated == false) {
    //     next("/login");
    //   } else {
    //     next();
    //   }
    // },
    children: [
      {
        path: "",
        component: () =>
          import(
            /* webpackChunkName: "product" */ "../components/UserTable.vue"
          ),
        props: true,
      },
      {
        path: "user/create",
        name: "Create",
        component: () =>
          import(
            /* webpackChunkName: "create" */ "../components/CreateUser.vue"
          ),
      },
      {
        path: "user/:id/edit",
        name: "Edit",
        component: () =>
          import(/* webpackChunkName: "create" */ "../components/EditUser.vue"),
        props: true,
      },
      {
        path: "/product",
        name: "Product",
        component: () =>
          import(
            /* webpackChunkName: "product" */ "../components/ProductTable.vue"
          ),
        props: true,
      },
      {
        path: "product/createProduct",
        name: "CreateProduct",
        component: () =>
          import(
            /* webpackChunkName: "createProduct" */ "../components/CreateProduct.vue"
          ),
      },
      {
        path: "product/:id/edit",
        name: "EditProduct",
        component: () =>
          import(
            /* webpackChunkName: "EditProduct" */ "../components/EditProduct.vue"
          ),
        props: true,
      },
    ],
  },

  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/NotFound"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
