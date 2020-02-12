<template>
  <div class="home">
    <h1>vue movie</h1>

    <ul>
      <li v-for="(movie, index) in moviesList" :key="index">
        <img :src="`${imgPath}/${movie.poster_path}`" :alt="movie.original_title">
        <span><b>{{ movie.original_title }}</b></span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Paginator from '../components/Paginator.vue';

import { fetchMovies } from '../api/api';

export default {
  name: 'home',

  components: {
    Paginator,
  },

  data() {
    return {
      imgPath: process.env.VUE_APP_IMAGE_API_URL,
    };
  },

  computed: {
    ...mapState(['moviesList']),
  },

  methods: {
    ...mapActions([
      'setMoviesList',
      'setPage',
    ]),
  },

  async created() {
    const { results } = await fetchMovies(this.$route.query.page);
    this.setMoviesList(results);
  },
};
</script>

<style lang="scss" scoped>
  .home {
  }
</style>
