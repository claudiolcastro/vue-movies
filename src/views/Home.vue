<template>
  <main class="home">
    <h1>vue movies</h1>

    <Paginator :total="totalPages" :current="page" />

    <MovieGrid>
      <MovieCard
        class="grid-item"
        v-for="(movie, index) in moviesList"
        :key="index"
        :id="movie.id"
        :title="movie.title"
        :date="movie.release_date"
        :overview="movie.overview"
        :img="movie.poster_path"
      />
    </MovieGrid>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import { fetchMoviesList } from '../api/api';

import MovieGrid from '../components/movies/MovieGrid.vue';
import MovieCard from '../components/movies/MovieCard.vue';
import Paginator from '../components/Paginator.vue';

export default {
  name: 'home',

  components: {
    MovieGrid,
    MovieCard,
    Paginator,
  },

  data() {
    return {
      imgPath: process.env.VUE_APP_IMAGE_API_URL,
    };
  },

  computed: {
    ...mapState(['moviesList', 'page', 'totalPages']),
  },

  methods: {
    ...mapActions([
      'setMoviesList',
      'setPage',
      'setTotalPages',
    ]),
  },

  async created() {
    const { results, page, total_pages } = await fetchMoviesList(this.$route.query.page);

    this.setMoviesList(results);
    this.setPage(page);
    this.setTotalPages(total_pages);
  },

  watch: {
    '$route.query.page'() {
      this.$router.go();
    },
  },
};
</script>

<style lang="scss" scoped>
  .home {
    background-color: $main-color;
    min-height: 100vh;
  }
</style>
