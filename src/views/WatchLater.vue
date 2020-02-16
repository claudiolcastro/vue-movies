<template>
  <main class="watch-later">
    <div class="container">
      <h1>Minha Lista</h1>
      <MovieGrid>
        <div class="grid-item" v-for="(movie, index) in watchLaterList" :key="index">
           <MovieCard
            :id="movie.id"
            :title="movie.title"
            :date="movie.release_date"
            :overview="movie.overview"
            :img="movie.poster_path"
          />
          <button v-show="!watched(movie)" class="watched-btn" @click="markFilm(movie)">
            Marcar como assistido
          </button>
        </div>
      </MovieGrid>
    </div>
  </main>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import MovieGrid from '../components/movies/MovieGrid.vue';
import MovieCard from '../components/movies/MovieCard.vue';

export default {
  name: 'WatchLater',

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
      'markWatched',
    ]),

    watched(movie) {
      return movie.watched;
    },

    markFilm(movie) {
      this.markWatched(movie);
      this.$forceUpdate();
    },
  },

  created() {
  },
};
</script>

<style lang="scss" scoped>
  .watch-later {
    background-color: $main-color;
    display: inline-block;
    min-height: 100vh;
    width: 100%;

    .container {
      margin-top: 30px;

      h1 {
        color: $white;
        font-size: 22px;
        font-weight: 300;
        max-width: 1335px;
        margin: 0 auto 15px auto;
        padding-left: 20px;
        text-align: start;
        @include media-mobile { padding-left: 10px; }
      }

      .watched-btn {
        background-color: $main-color;
        border: 1px solid $main-color-light;
        border-radius: 5px;
        color: $white;
        cursor: pointer;
        transition: .3s;
        &:hover { background-color: #202b36; }
      }
    }
  }
</style>
