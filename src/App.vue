<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-side-icon @click="left_drawer = !left_drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase"></v-toolbar-title>
      <img height="45px" src="../public/big2tiny-logo.png" alt="Logo">
      <v-spacer></v-spacer>
      <v-btn flat v-if="!this.$store.state.userIsAuthorized" to="/" class="mr-2">
        <v-icon class="fas fa-home"></v-icon>
      </v-btn>
      <v-btn flat v-if="!this.$store.state.userIsAuthorized" to="/about" class="mr-2">
        <v-icon class="fas fa-question-circle"></v-icon>
      </v-btn>
      <v-btn flat v-if="!this.$store.state.userIsAuthorized" to="/contact" class="mr-2">
        <v-icon class="fas fa-envelope"></v-icon>
      </v-btn>
      <v-btn flat v-if="!this.$store.state.userIsAuthorized" to="/members" class="mr-2">
        <v-icon class="fas fa-users"></v-icon>
      </v-btn>
      <v-btn flat @click="auth0Login" v-if="!this.$store.state.userIsAuthorized">
        <v-icon class="fas fa-sign-in-alt"></v-icon>
      </v-btn>
      <v-btn flat @click="logout" v-if="this.$store.state.userIsAuthorized">
        <v-icon class="fas fa-sign-out-alt"></v-icon>
      </v-btn>
      <v-toolbar-side-icon
        v-if="this.$store.state.userIsAuthorized"
        @click="right_drawer = !right_drawer"
      ></v-toolbar-side-icon>
    </v-toolbar>
    <v-navigation-drawer app v-model="left_drawer">
      <v-list class="pa-1">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Main Menu</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in left_items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <!--  -->
    <v-navigation-drawer app right v-model="right_drawer">
      <v-list class="pa-1">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>Secondary Menu</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile v-for="item in right_items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      clientId: process.env.VUE_APP_AUTH0_CONFIG_DOMAIN,
      left_drawer: false,
      right_drawer: false,
      left_items: [
        { title: "Home", icon: "dashboard" },
        { title: "About", icon: "question_answer" }
      ],
      right_items: [
        { title: "open", icon: "open" },
        { title: "open", icon: "open" }
      ]
    };
  },
  methods: {
    auth0Login() {
      this.$store.dispatch("auth0Login");

      console.log("we are in auth0Login");
    },
    logout() {
      this.$store.dispatch("auth0Logout");
      console.log("logging out");
    }
  },
  beforeCreate() {}
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
