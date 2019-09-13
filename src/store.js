import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const state = {
  pokemons: [],
  selected: []
};
const getters = {
  allPokemons: state => state.pokemons
};
const actions = {
  async fetchPokemon({ commit }) {
    await axios.get("/api/pokemon").then(response => {
      commit("setPokemon", response.data);
    });
  }
};
const mutations = {
  setPokemon: (state, pokemon) => (state.pokemons = pokemon)
};
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
