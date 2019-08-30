<template>
  <div class="home">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-three-quarters-mobile is-3-desktop">
          <div class="card">
            <!-- Pokemon List -->
            <div class="card-content">
              <b>Pokemon List</b>
              <span style="float: right">
                <img
                  src="https://bankkita.com/images/pokeball-png-19.png"
                  alt="pokeball"
                  style="height: 50px; width: auto;"
                />
              </span>
              <hr />
              <div class="scroll-box">
                <div id="pokemons" v-for="pokemon in allPokemons" :key="pokemon.id">
                  <a
                    @click="pokemonPage(pokemon.id)"
                    style="cursor: pointer; text-align: left;"
                  >{{ pokemon.id}}. {{ pokemon.name }}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column" v-if="pokemon.length === 0">
          <h1 class="title" style="text-align: center;">Select a Pokemon to view its stats!</h1>
        </div>
        <!-- stats -->
        <div class="column" v-if="pokemon.length !== 0">
          <div class="card">
            <div class="card-content">
              <h1 class="title is-1">
                <b>{{ pokemon.name }}</b>
                <span style="float: right">
                  <img :src="pokemon.url" :alt="pokemon.name" style="height: 200px; width: auto;" />
                </span>
              </h1>
              <header class="card-header">
                <h1 class="title">{{ pokemon.type }}</h1>
                <br />
              </header>
              <ul v-for="(stat, label, index) in pokemon.stats" :key="index">
                <p>
                  <b>{{ formatStat(label) }}</b>
                  :
                  {{ stat }}
                </p>
              </ul>
              <ul v-for="(encounter_stat, category) in pokemon.encounter_stats" :key="category">
                <p>
                  <b>{{ formatStat(category) }}</b>
                  : {{ encounter_stat }}
                </p>
              </ul>
            </div>
          </div>
        </div>
        <!-- candy and shiny -->
        <div class="column" v-if="pokemon.length !== 0">
          <div class="card">
            <div class="card-content">
              <h1 class="title is-3">
                <b>Candy Info</b>
                <span style="float: right;">
                  <img
                    src="https://img.rankedboost.com/wp-content/uploads/2016/08/Pokemon-Go-Candies.png"
                    alt="candy"
                    style="height: 50px; width: auto;"
                  />
                </span>
              </h1>
              <hr />
              <ul>
                <p>
                  <b>Candies to Evolve</b>
                  : {{ pokemon.candies_to_evolve}}
                  <br />
                  <b>Distance to walk for candy</b>
                  : {{ pokemon.distance_for_candy }}
                </p>
              </ul>
            </div>
          </div>
          <br />
          <div class="columns">
            <div class="column">
              <div class="card">
                <div class="card-content">
                  <h1 class="title is-3">
                    <b>Shiny Possibilities</b>
                    <span style="float: right;">
                      <img
                        src="https://d1e4pidl3fu268.cloudfront.net/8f7687e5-d6e0-4965-a7da-0be2576df3d9/sparkle.PNG"
                        alt="sparkles"
                        style="height: 50px; width: auto;"
                      />
                    </span>
                  </h1>
                  <hr />
                </div>
                <ul v-for="(chance, index) in formatShiny(pokemon.shiny)" :key="index">
                  <p style="text-align: center;">{{ chance }}</p>
                </ul>
                <br />
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
  border-radius: 10px;
}
.card:hover {
  opacity: 1;
}
h1 {
  color: white;
}
p {
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
    },
    formatShiny(input) {
      let formatted = [];
      for (var k in input) {
        if (input[k] === true) {
          if (k === "evo") {
            formatted.push("Can be acquired through evolution");
          } else if (k === "egg") {
            formatted.push("Can be acquired through an egg");
          } else if (k === "raid") {
            formatted.push("Can be acquired through a raid");
          } else if (k === "wild") {
            formatted.push("Can be caught in the wild");
          }
        }
      }
      if (formatted.length === 0) {
        return "?";
      } else {
        return formatted;
      }
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
