<template>
  <main class="home">
    <div class="paginator-top">
      <Paginator :total="totalPages" :current="page" />
    </div>

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

    <div class="paginator-bottom">
      <Paginator :total="totalPages" :current="page" />
    </div>
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
    display: inline-block;
    min-height: 100vh;
    width: 100%;

    .paginator-top {
      display: flex;
      justify-content: flex-end;
      max-width: 1335px;
      margin: 15px;
      @include media-mobile {
        display: none;
      }
    }

    .paginator-bottom {
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }
  }
</style>
