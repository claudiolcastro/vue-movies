<template>
  <main class="movie-details">
    <div v-if="movie" class="container">
      <h1>{{ movie.title }}</h1>

      <img :src="`${imgPath}/${movie.poster_path}`" :alt="movie.title">

      <p>
        {{ movie.overview }}
      </p>

      <button v-if="!movieOnWatchLaterList" @click="addMyToMyList">
        Assistir mais tarde
      </button>

      <button v-if="movieOnWatchLaterList" @click="removeFromMyList">
        Remover de "Assistir mais tarde"
      </button>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import { fetchMovie } from '../api/api';

export default {
  name: 'movie-details',

  data() {
    return {
      movie: null,
      imgPath: process.env.VUE_APP_IMAGE_API_URL,
    };
  },

  computed: {
    ...mapState(['watchLaterList']),

    movieOnWatchLaterList() {
      return this.watchLaterList.filter(movie => movie.id === this.movie.id).length;
    },
  },

  methods: {
    ...mapActions([
      'setMovieWatchLater',
      'removeMovieWatchLater',
    ]),

    addMyToMyList() {
      this.setMovieWatchLater(this.movie);
    },

    removeFromMyList() {
      this.removeMovieWatchLater(this.movie);
    },
  },

  async created() {
    const result = await fetchMovie(this.$route.params.id);
    this.movie = result;
  },
};
</script>

<style lang="scss" scoped>
  .movie-details {
  }
</style>
