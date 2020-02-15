<template>
  <main class="watch-later">
    <MovieGrid>
      <MovieCard
        class="grid-item"
        v-for="(movie, index) in watchLaterList"
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

import MovieGrid from '../components/movies/MovieGrid.vue';
import MovieCard from '../components/movies/MovieCard.vue';

export default {
  name: 'watch-later',

  components: {
    MovieGrid,
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
  }
</style>
