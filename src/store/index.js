import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    moviesList: null,
    watchLaterList: [],
    page: 1,
    totalPages: null,
  },

  mutations: {
    SET_MOVIES_LIST(state, payload) {
      state.moviesList = payload;
    },

    SET_MOVIE_WATCH_LATER(state, payload) {
      state.watchLaterList = [...state.watchLaterList, payload];
    },

    SET_PAGE(state, payload) {
      state.page = payload;
    },

    SET_TOTAL_PAGES(state, payload) {
      state.totalPages = payload;
    },
  },

  actions: {
    setMoviesList({ commit }, payload) {
      commit('SET_MOVIES_LIST', payload);
    },

    setMovieWatchLater({ commit }, payload) {
      commit('SET_MOVIE_WATCH_LATER', payload);
    },

    setPage({ commit }, payload) {
      commit('SET_PAGE', payload);
    },

    setTotalPages({ commit }, payload) {
      commit('SET_TOTAL_PAGES', payload);
    },
  },
});
