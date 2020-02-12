import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    moviesList: null,
    myMoviesList: [],
    page: 1,
  },

  mutations: {
    SET_MOVIES_LIST(state, payload) {
      state.moviesList = payload;
    },

    SET_MY_MOVIE(state, payload) {
      state.myMoviesList = [...state.myMoviesList, payload];
    },

    SET_PAGE(state, payload) {
      state.page = payload;
    },
  },

  actions: {
    setMoviesList({ commit }, payload) {
      commit('SET_MOVIES_LIST', payload);
    },

    setMyMovie({ commit }, payload) {
      commit('SET_MY_MOVIE', payload);
    },

    setPage({ commit }, payload) {
      commit('SET_PAGE', payload);
    },
  },
});
