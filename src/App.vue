<template>
  <div id="app">
    <!-- Hero -->
    <section class="hero is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <a href="/">
              <img
                src="https://fontmeme.com/temporary/e0d49cdabd80d369386856cd4dd73628.png"
                alt="logo"
              />
            </a>
          </h1>
        </div>
      </div>
    </section>

    <router-view />
  </div>
</template>

<style>
#app {
  background-image: url("https://i.pinimg.com/originals/1c/a6/e1/1ca6e1c35e2d884230242cc0326dbf28.jpg");
  background-repeat: no-repeat;
  /* background-position: 50% 50%; */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* margin: 0 auto; */
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: auto;
}
.navbar img {
  width: 20%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

<script>
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});
</script>
