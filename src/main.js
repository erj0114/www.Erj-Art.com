import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Home from "./components/Home";
import Contact from "./components/Contact";
import BootstrapVue from "bootstrap-vue";
import Paintings from "./components/Paintings";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

const routes = [
  { path: "/", component: Home },
  { path: "/Paintings/:size", component: Paintings, props: true },
  { path: "/Contact", component: Contact },
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for `routes: routes`
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
