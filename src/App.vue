<template>
  <v-app>
    <v-toolbar
      app
    >
      <v-toolbar-title
        class="headline text-uppercase"
      >
        <span>Sportswhere</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
      <v-bottom-nav
        :active.sync="bottomNav"
        :value="true"
        fixed
      >
        <v-btn
          @click="$router.push('/about')"
          color="teal"
          flat
          value="sports"
        >
          <span>Sports</span>
          <v-icon>accessibility_new</v-icon>
        </v-btn>

        <v-btn
          @click="$router.push('/')"
          color="teal"
          flat
          value="home"
        >
          <span>Accueil</span>
          <v-icon>home</v-icon>
        </v-btn>

        <v-btn
          @click="$router.push('map')"
          color="teal"
          flat
          value="map"
        >
          <span>Carte</span>
          <v-icon>map</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      bottomNav: 'home',
    };
  },
};
</script>
