<template>
  <div class="home">
    <div class="container">
      <div class="columns">
        <div class="column is-three-quarters-mobile is-one-fourth-desktop">
          <div class="card">
            <header class="card-header-background-color">
              <p class="card-header-title">Pokemon List</p>
            </header>
            <div class="card-content">
              <div class="scroll-box">
                <div id="pokemons" v-for="pokemon in allPokemons" :key="pokemon.id">
                  {{ pokemon.pokemon_id}}.
                  <a
                    @click="pokemonPage(pokemon.id)"
                    style="cursor: pointer;"
                  >{{ pokemon.name }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <header class="card-header">Stats</header>
            <div class="card-content">
              <div v-if="pokemon.length === 0">Select a Pokemon to see its stats</div>
              <div v-else>
                <header class="card-header">
                  <h1 class="title">{{ pokemon.name }}</h1>
                </header>
                <br />
                <ul v-for="(stat, label, index) in pokemon.stats" :key="index">
                  <b>{{ formatStat(label) }}</b>
                  : {{ stat }}
                </ul>
                <br />
                <ul v-for="(encounter_stat, category) in pokemon.encounter_stats" :key="category">
                  <b>{{ formatStat(category) }}</b>
                  : {{ encounter_stat }}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <header class="card-header">Candy Info</header>
            <div class="card-content">
              <div v-if="pokemon.length === 0">Select a Pokemon to see its stats</div>
              <div v-else>
                <ul>
                  <b>Candies to Evolve</b>
                  : {{ pokemon.candies_to_evolve}}
                  <br />
                  <b>Distance to walk for candy</b>
                  : {{ pokemon.distance_for_candy }}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#pokemons {
  margin-left: 50px;
}
.card {
  background-color: black;
  opacity: 0.7;
}
h1 {
  color: white;
}
.scroll-box {
  height: 60vh;
  overflow-y: scroll;
}
.scroll-box::-webkit-scrollbar {
  width: 0 !important;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "home",
  data: function() {
    return {
      pokemon: []
    };
  },
  methods: {
    ...mapActions(["fetchPokemon"]),
    pokemonPage(input) {
      axios.get("/api/pokemon/" + input).then(response => {
        this.pokemon = response.data;
      });
    },
    formatStat(input) {
      let formatted = [];
      for (var i = 0; i < input.split("_").length; i++) {
        let word = input.split("_")[i];
        formatted.push(word.charAt(0).toUpperCase() + word.slice(1));
      }
      return formatted.join(" ");
    }
  },
  created() {
    this.fetchPokemon();
  },
  computed: {
    ...mapGetters(["allPokemons"])
  }
};
</script>
