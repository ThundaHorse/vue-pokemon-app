<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/home">
          <img src="https://bankkita.com/images/pokeball-png-19.png" alt="pokeball" />
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="/login">Log In</a>
          <a class="navbar-item" href="/logout">Log Out</a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light" href="/login">Log in</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- Jumbo -->
    <section class="hero is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            <img
              src="https://fontmeme.com/temporary/e0d49cdabd80d369386856cd4dd73628.png"
              alt="logo"
            />
          </h1>
        </div>
      </div>
    </section>

    <router-view />
  </div>
</template>

<style scoped>
#app {
  background-image: url("https://i.pinimg.com/originals/1c/a6/e1/1ca6e1c35e2d884230242cc0326dbf28.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
