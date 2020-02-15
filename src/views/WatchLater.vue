<template>
  <main class="watch-later">
    <ul>
      <li v-for="(movie, index) in watchLaterList" :key="index">
       <MovieCard
        :id="movie.id"
        :title="movie.title"
        :date="movie.release_date"
        :overview="movie.overview"
        :img="movie.poster_path"
       />
      </li>
    </ul>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import MovieCard from '../components/movies/MovieCard.vue';

export default {
  name: 'watch-later',

  components: {
    MovieCard,
  },

  data() {
    return {
      imgPath: process.env.VUE_APP_IMAGE_API_URL,
    };
  },

  computed: {
    ...mapState(['watchLaterList']),
  },

  methods: {
    ...mapActions([
    ]),
  },

  created() {
  },
};
</script>

<style lang="scss" scoped>
  .watch-later {
    background-color: $main-color;
    min-height: 100vh;

    ul {
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto 0 auto;

      li {
        margin: 10px 0 0 10px;
        @include media-mobile { width: 30%; }
        @include media-mobile-s { width: 45%; }
      }
    }
  }
</style>
