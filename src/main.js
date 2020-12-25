import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

import Default from "./layouts/Default";
import Blank from "./layouts/Blank";
Vue.component("default-layout", Default);
Vue.component("blank-layout", Blank);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
