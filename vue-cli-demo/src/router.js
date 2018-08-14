import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
// import Router1 from "./vies/Router1.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/router1",
      name: "router1",
      // component: Router1
      component: ()  => import("./views/Router1.vue")
    }
  ]
});
