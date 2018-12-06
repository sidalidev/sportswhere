<template>
  <ion-app>
    <ion-header>
      <ion-toolbar
        color="primary"
      >
        <ion-title>Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content
      padding
    >Home page
      <ion-button
        @click="goBackHome()"
        full
      >Go Back!</ion-button>
    </ion-content>
  </ion-app>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goToAbout() {
      this.$router.push('about');
    },
  },
};
</script>
