<template>
  <main class="home">
    <h1>vue movies</h1>

    <Paginator :total="totalPages" :current="page" />

    <ul>
      <li v-for="(movie, index) in moviesList" :key="index">
        <router-link :to="`/movie/${movie.id}`">
          <img :src="`${imgPath}/${movie.poster_path}`" :alt="movie.title">
          <span><b>{{ movie.title }}</b></span>
        </router-link>
      </li>
    </ul>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import { fetchMoviesList } from '../api/api';

import Paginator from '../components/Paginator.vue';

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
  }
</style>
