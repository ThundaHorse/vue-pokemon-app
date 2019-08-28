<template>
  <div id="app">
    <div class="jumbotron jumbotron-fluid mt-2">
      <router-link to="/">
        <img
          src="https://fontmeme.com/permalink/190828/dbb9430f5f531e11c61628339e400cb1.png"
          alt="logo"
        />
      </router-link>
    </div>

    <router-view />
  </div>
</template>

<style scoped>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
