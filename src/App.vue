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
    <router-link to="/logout">Logout</router-link>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  background-image: url("https://i.pinimg.com/originals/1c/a6/e1/1ca6e1c35e2d884230242cc0326dbf28.jpg");
  background-repeat: no-repeat;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.jumbotron {
  background-image: url("https://img.wallpapersafari.com/desktop/1920/1080/20/10/eCxm1k.png");
  background-repeat: no-repeat;
  width: 100%;
}
</style>
