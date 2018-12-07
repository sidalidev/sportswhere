import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Map from './views/Map.vue';
import Sports from './views/Sports.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/sports',
      name: 'sports',
      component: Sports,
    },
    {
      path: '/map',
      name: 'map',
      component: Map,
    },
  ],
});
