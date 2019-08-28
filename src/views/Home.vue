<template>
  <div class="home">
    <div class="container">
      <div class="scroll-box">
        <div id="pokemons" v-for="pokemon in allPokemons" :key="pokemon.id">
          {{ pokemon.pokemon_id}}.
          <a
            @click="pokemonPage(pokemon)"
            style="cursor: pointer;"
          >{{ pokemon.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#pokemons {
  margin-left: 50px;
}
.scroll-box {
  height: 1000px;
  overflow-y: scroll;
}
.scroll-box::-webkit-scrollbar {
  width: 0 !important;
}
</style>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  data: function() {
    return {};
  },
  methods: {
    ...mapActions(["fetchPokemon"]),
    pokemonPage(input) {
      this.$router.push("/pokemon/" + input.id);
    }
  },
  created() {
    if (localStorage.getItem("jwt")) {
      this.fetchPokemon();
    } else {
      alert("Sign in to view Pokemon");
      this.$router.push("/login");
    }
  },
  computed: mapGetters(["allPokemons"])
};
</script>
