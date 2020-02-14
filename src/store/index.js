import Vue from 'vue';
import Vuex from 'vuex';

import updateLocalStorage from '../helpers/localStorage/updateLocalStorage';

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

    SET_WATCH_LATER_LIST(state, payload) {
      state.watchLaterList = payload;
    },

    REMOVE_MOVIE_WATCH_LATER(state, payload) {
      state.watchLaterList.splice(payload, 1);
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

    setWatchLaterList({ commit }, payload) {
      commit('SET_WATCH_LATER_LIST', payload);
    },

    setMovieWatchLater({ state, commit }, payload) {
      if (!state.watchLaterList.filter(movie => movie.id === payload.id).length) {
        commit('SET_MOVIE_WATCH_LATER', payload);

        updateLocalStorage('watchLaterList', JSON.stringify(state.watchLaterList));
      }
    },

    removeMovieWatchLater({ state, commit }, payload) {
      const [movie] = state.watchLaterList.filter(m => m.id === payload.id);
      const index = state.watchLaterList.indexOf(movie);
      commit('REMOVE_MOVIE_WATCH_LATER', index);

      updateLocalStorage('watchLaterList', JSON.stringify(state.watchLaterList));
    },

    setPage({ commit }, payload) {
      commit('SET_PAGE', payload);
    },

    setTotalPages({ commit }, payload) {
      commit('SET_TOTAL_PAGES', payload);
    },
  },
});
