import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ShowPokemon from "./components/ShowPokemon.vue";

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
      path: "/pokemon/:id",
      name: "show",
      component: ShowPokemon
    }
  ]
});
