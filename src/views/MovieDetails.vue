<template>
  <main class="movie-details">
    <div v-if="movie" class="container">
      <h1>{{ movie.title }}</h1>

      <img :src="`${imgPath}/${movie.poster_path}`" :alt="movie.title">

      <p>
        {{ movie.overview }}
      </p>
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
    ...mapState(['moviesList']),
  },

  methods: {
    ...mapActions([
    ]),
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
