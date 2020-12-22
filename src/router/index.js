import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "listUser" */ "../components/Table.vue"),
    props: true,
  },
  {
    path: "/:data",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "product" */ "../components/Table.vue"),
    props: true,
  },
  {
    path: "/create",
    name: "Create",
    component: () =>
      import(/* webpackChunkName: "create" */ "../components/CreateUser.vue"),
  },
  {
    path: "/:id/edit",
    name: "Edit",
    component: () =>
      import(/* webpackChunkName: "create" */ "../components/EditUser.vue"),
      props: true
  },
  {
    path: "/createProduct",
    name: "CreateProduct",
    component: () =>
      import(
        /* webpackChunkName: "createProduct" */ "../components/CreateProduct.vue"
      ),
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
