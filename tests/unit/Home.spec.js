import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Home from "../../src/views/Home.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Home.vue", () => {
  let state, store, actions, getters, mutations;

  beforeEach(() => {
    state = {
      pokemons: [
        {
          id: 1,
          pokemon_id: 1,
          url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
          shiny_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
          name: "bulbasaur",
          max_cp: 1115,
          base_attack: 118,
          base_defense: 111,
          base_stamina: 128,
          candies_to_evolve: 25,
          distance_for_candy: 3,
          attack_chance: 0.1,
          capture_rate: 0.2,
          flee_rate: 0.1,
          dodge_chance: 0.15,
          max_action_frequency: 1.6,
          min_action_frequency: 0.2
        },
        {
          id: 2,
          pokemon_id: 2,
          url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
          shiny_url:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png",
          name: "ivysaur",
          max_cp: 1699,
          base_attack: 151,
          base_defense: 143,
          base_stamina: 155,
          candies_to_evolve: 100,
          distance_for_candy: 3,
          attack_chance: 0.1,
          capture_rate: 0.1,
          flee_rate: 0.07,
          dodge_chance: 0.15,
          max_action_frequency: 1.6,
          min_action_frequency: 0.2
        }
      ],
      selected: []
    };
    actions = {
      fetchPokemon: jest.fn()
    };
    getters = {
      allPokemons: jest.fn()
    };
    mutations = {
      setPokemon: jest.fn()
    };
    store = new Vuex.Store({
      state,
      actions,
      getters,
      mutations
    });
  });

  it("does something", () => {
    shallowMount(Home, { store, localVue });
    expect(Home.created).toBeDefined();
  });
});
