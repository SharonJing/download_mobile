import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../components/Login.vue";
import Home from "../components/Home.vue";
import { getCookie } from "../api/user";
import Android from "../view/home/Android.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", name: "login", component: Login },
  { path: "/home", name: "home", component: Home },
  { path: "/android", name: "android", component: Android },
];
const LOGIN_PAGE_NAME = "login";
const homeName = "home";

const router = new VueRouter({
  routes,
  mode: "hash",
});

router.beforeEach((to, from, next) => {
  if (to.name == LOGIN_PAGE_NAME) {
    const ua = navigator.userAgent.toLowerCase();
    if (/micromessenger/.test(ua) && to.name !== "android") {
      next({
        name: "android",
        query: {
          redirect: to.name,
        },
      });
    } else if (!/micromessenger/.test(ua) && to.name === "android") {
      const { redirect } = to.query;
      next({
        name: redirect || "android",
      });
    } else {
      //如果跳转login
      getCookie().then((res) => {
        console.log(res);
        if (res.data.havecookie) {
          next({
            name: "home", // 跳转到HOME
          });
        } else {
          next();
        }
      });
    }
  } else {
    const ua = navigator.userAgent.toLowerCase();
    if (/micromessenger/.test(ua) && to.name !== "android") {
      next({
        name: "android",
        query: {
          redirect: to.name,
        },
      });
    } else if (!/micromessenger/.test(ua) && to.name === "android") {
      const { redirect } = to.query;
      next({
        name: redirect || "android",
      });
    } else {
      next();
    }
  }
});
export default router;
