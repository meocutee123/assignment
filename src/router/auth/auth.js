const admin = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "listUser" */ "@/views/Home.vue"),
    props: true,
    children: [
      {
        path: "",
        name: "Home",
        meta: {
          role: ["admin"],
        },
        component: () =>
          import(/* webpackChunkName: "table" */ "@/views/user/list/User.vue"),
        props: true,
      },
      {
        path: "user/create",
        name: "Create",
        meta: {
          role: ["admin", "user"],
        },
        component: () =>
          import(
            /* webpackChunkName: "create" */ "@/views/user/form/Create.vue"
          ),
      },
      {
        path: "user/:id/edit",
        name: "Edit",
        component: () =>
          import(/* webpackChunkName: "edit" */ "@/views/user/form/Edit.vue"),
        props: true,
      },
      {
        path: "/product",
        name: "Product",
        meta: {
          role: ["admin"],
        },
        component: () =>
          import(
            /* webpackChunkName: "product" */ "@/views/product/list/Product.vue"
          ),
        props: true,
      },
      {
        path: "product/createProduct",
        name: "CreateProduct",
        meta: {
          role: ["admin"],
        },
        component: () =>
          import(
            /* webpackChunkName: "createProduct" */ "@/views/product/form/Create.vue"
          ),
      },
      {
        path: "product/:id/edit",
        meta: {
          role: ["admin"],
        },
        name: "EditProduct",
        component: () =>
          import(
            /* webpackChunkName: "editProduct" */ "@/views/product/form/Edit.vue"
          ),
        props: true,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "blank",
    },
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
const user = [
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "listProduct" */ "@/views/Home.vue"),
    props: true,
    children: [
      {
        path: "",
        name: "Product",
        meta: {
          role: ["admin"],
        },
        component: () =>
          import(
            /* webpackChunkName: "table" */ "@/views/product/list/Product.vue"
          ),
        props: true,
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "blank",
    },
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
const routesDefault = [
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "blank",
    },
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
export default { admin, user, routesDefault };
