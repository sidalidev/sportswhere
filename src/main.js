import Vue from 'vue';
import './plugins/vuetify';
import VueLayers from 'vuelayers';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'vuelayers/lib/style.css'; // needs css-loader

Vue.use(VueLayers);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
