<template>
  <div class="home">
    <div id="pokemons" v-for="pokemon in allPokemons" :key="pokemon.id">
      {{ pokemon.pokemon_id}}.
      <a
        @click="pokemonPage(pokemon)"
        style="cursor: pointer;"
      >{{ pokemon.name }}</a>
    </div>
  </div>
</template>

<style scoped>
#pokemons {
  margin-left: 50px;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  data: function() {
    return {};
  },
  computed: mapGetters(["allPokemons"]),
  methods: {
    ...mapActions(["fetchPokemon"]),
    pokemonPage(input) {
      this.$router.push("/pokemon/" + input.id);
    }
  },
  created() {
    this.fetchPokemon();
  }
};
</script>
