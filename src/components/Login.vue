<template>
  <div class="login">
    <div class="container">
      <ul v-for="error in errors" :key="error">
        <li>{{ error }}</li>
      </ul>
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h5 class="card-title text-center">Sign In</h5>
              <form class="form-signin" v-on:submit.prevent="submit()">
                <div class="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    v-model="email"
                    class="form-control"
                    placeholder="Email address"
                    required
                    autofocus
                  />
                  <label for="inputEmail">Email address</label>
                </div>

                <div class="form-label-group">
                  <input
                    type="password"
                    v-model="password"
                    id="inputPassword"
                    class="form-control"
                    placeholder="Password"
                    required
                  />
                  <label for="inputPassword">Password</label>
                </div>
                <button
                  class="btn btn-lg btn-primary btn-block text-uppercase"
                  v-on:click="submit()"
                  type="submit"
                >Sign in</button>
                <hr class="my-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  created: function() {
    if (localStorage.getItem("jwt")) {
      alert("You are already signed in!");
      this.$router.push("/");
    }
  },
  methods: {
    submit() {
      let params = {
        email: this.email,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;

          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          setTimeout(() => {
            this.$router.push("/");
          }, 2000);
        })
        .catch(error => {
          this.errors = ["Invalid password or email"];
          this.email = "";
          this.password = "";
        });
    }
  }
};
</script>