import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ShowPokemon from "./components/ShowPokemon.vue";
import Login from "./components/Login.vue";
import Logout from "./components/Logout.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  hash: false,
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/logout",
      name: "logout",
      component: Logout
    },
    {
      path: "/pokemon/:id",
      name: "show",
      component: ShowPokemon
    }
  ]
});
