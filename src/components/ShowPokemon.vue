<template>
  <div class="show">
    <div class="container">
      <div class="display-4">{{ pokemon.name }}</div>
    </div>
    <br />

    <div class="stats">
      <div class="row">
        <div class="col-4">
          <div class="list-group" id="list-tab" role="tablist">
            <a
              class="list-group-item list-group-item-action active"
              id="list-home-list"
              data-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="home"
            >Battle Stats</a>
            <a
              class="list-group-item list-group-item-action"
              id="list-profile-list"
              data-toggle="list"
              href="#list-profile"
              role="tab"
              aria-controls="profile"
            >Candy Info</a>
            <a
              class="list-group-item list-group-item-action"
              id="list-messages-list"
              data-toggle="list"
              href="#list-messages"
              role="tab"
              aria-controls="messages"
            >Encounter Stats</a>
          </div>
        </div>
        <div class="col-8" style="padding-left: 160px;">
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="list-home"
              role="tabpanel"
              aria-labelledby="list-home-list"
            >
              <ul v-for="(stat, label, index) in pokemon.stats" :key="index">
                <b>{{ formatStat(label) }}</b>
                : {{ stat }}
              </ul>
            </div>
            <div
              class="tab-pane fade"
              id="list-profile"
              role="tabpanel"
              aria-labelledby="list-profile-list"
            >
              <ul>
                <li>Candies to Evolve: {{ pokemon.candies_to_evolve}}</li>
                <li>Distance to walk for candy: {{ pokemon.distance_for_candy }}</li>
              </ul>
            </div>
            <div
              class="tab-pane fade"
              id="list-messages"
              role="tabpanel"
              aria-labelledby="list-messages-list"
            >
              <ul
                v-for="(encounter_stat, category) in pokemon.encounter_stats"
                :key="category"
              >{{ formatStat(category) }}: {{ encounter_stat }}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.display-4 {
  text-align: center;
}
.stats {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 600px;
  width: 800px;
  justify-content: center;
  background-repeat: no-repeat;
  border-radius: 5%;
  background: url("http://www.sclance.com/backgrounds/pokedex-background/pokedex-background_1778969.png");
}
.row {
  padding-left: 80px;
  width: auto;
  padding-top: 200px;
  height: 400px;
}
</style>

<script>
import axios from "axios";

export default {
  name: "GetPokemon",
  data: function() {
    return {
      pokemon: []
    };
  },
  created: function() {
    axios.get("/api/pokemon/" + this.$route.params.id).then(response => {
      this.pokemon = response.data;
    });
  },
  methods: {
    formatStat(input) {
      let formatted = [];
      for (var i = 0; i < input.split("_").length; i++) {
        let word = input.split("_")[i];
        formatted.push(word.charAt(0).toUpperCase() + word.slice(1));
      }
      return formatted.join(" ");
    }
  }
};
</script>