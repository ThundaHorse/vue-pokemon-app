import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import pokeModule from "../../store";
import Home from "../src/views/Home.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Home.vue", () => {
  let state;
  let store;
  let actions;

  beforeEach(() => {
    state = {
      pokemons: [],
      selected: []
    };
    actions = {
      fetchPokemon: jest.fn()
    };
    store = new Vuex.Store({
      modules: {
        pokeModule: {
          state,
          getters: pokeModule.getters,
          actions,
          mutations: pokeModule.mutations
        }
      }
    });
  });

  it("does something", () => {
    shallowMount(Home, { store, localVue });
    expect(actions.fetchPokemon).toHaveBeenCalled();
  });
});
