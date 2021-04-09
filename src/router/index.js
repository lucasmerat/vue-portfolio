import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Work from "../views/Work.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/work", name: "About", component: Work },
  { path: "/contact", name: "About", component: Contact },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
