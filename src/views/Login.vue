<template>
  <v-container>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap align-center>
        <v-flex xs12 sm8 offset-sm2 md6 offset-md3 lg4 offset-lg4>
          <v-card style="margin-bottom:200px;">
            <h1 class="center pa-3">BIG2TINY.COM</h1>
            <hr>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Welcome</h3>
                <div>
                  Welcome to Big2Tiny.com.
                  <br>
                  <br>Login to connect to the members content.
                  <br>
                  <br>
                </div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-btn @click="auth0Login()">
                <v-icon left class="fas fa-sign-in-alt"></v-icon>Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>
<script>
export default {
  name: "Login",
  methods: {
    auth0Login() {
      this.$store.dispatch("auth0Login");

      console.log("we are in auth0Login");
    }
  }
};
</script>
<style lang="scss">
.center {
  text-align: center;
}
</style>
