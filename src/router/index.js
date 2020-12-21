import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/users/:data",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "listUser" */ "../components/ListUser.vue"),
    props: true,
    children: [
      {
        path: "create",
        name: "createUser",
        component: () =>
          import(
            /* webpackChunkName: "create" */ "../components/CreateUser.vue"
          ),
      },
    ],
  },
  {
    path: "/products/:data",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "product" */ "../components/ListUser.vue"),
    props: true,
    children: [
      {
        path: "create",
        name: "createProduct",
        component: () =>
          import(
            /* webpackChunkName: "create" */ "../components/CreateUser.vue"
          ),
      },
    ],
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
