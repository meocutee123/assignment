import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ListUser",
    component: () =>
      import(/* webpackChunkName: "listUser" */ "../components/ListUser.vue"),
  },
  {
    path: "/create",
    name: "Create",
    component: () =>
      import(/* webpackChunkName: "create" */ "../components/CreateUser.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: () =>
          import(
            /* webpackChunkName: "notFound" */ "../views/NotFound"
          ),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
