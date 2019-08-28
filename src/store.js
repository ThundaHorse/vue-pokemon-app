import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemons: []
  },
  getters: {
    allPokemons: state => state.pokemons
  },
  actions: {
    async fetchPokemon({ commit }) {
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + localStorage.getItem("jwt");
      await axios.get("/api/pokemon").then(response => {
        return commit("setPokemon", response.data);
      });
    }
  },
  mutations: {
    setPokemon: (state, pokemon) => (state.pokemons = pokemon)
  }
});
