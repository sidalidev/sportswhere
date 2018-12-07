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
        :value="true"
        fixed
      >
        <v-btn
          @click="$router.push('/about')"
          color="teal"
          flat
          value="recent"
        >
          <span>Recent</span>
          <v-icon>history</v-icon>
        </v-btn>

        <v-btn
          @click="$router.push('/')"
          color="teal"
          flat
          value="favorites"
        >
          <span>Favorites</span>
          <v-icon>favorite</v-icon>
        </v-btn>

        <v-btn
          @click="$router.push('map')"
          color="teal"
          flat
          value="nearby"
        >
          <span>Nearby</span>
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
      //
    };
  },
};
</script>
