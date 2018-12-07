import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activityLocalization: null,
    activityDescription: null,
    favouriteSport: null,
  },
  mutations: {
    setActivityLocalization(state, localization) {
      state.activityLocalization = localization;
    },
    setActivityDescription(state, description) {
      state.activityDescription = description;
    },
    setFavouriteSport(state, favouriteSport) {
      state.favouriteSport = favouriteSport;
    },
  },
  actions: {
    activityLocalization({ commit }, localization) {
      commit('setActivityLocalization', localization);
    },
    activityDescription({ commit }, description) {
      commit('setActivityDescription', description);
    },
    setFavouriteSport({ commit }, favouriteSport) {
      commit('setFavouriteSport', favouriteSport);
    },
  },
});
