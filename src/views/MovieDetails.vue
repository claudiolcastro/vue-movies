<template>
  <main class="movie-details">
    <section v-if="movie" class="container">
      <div class="movie-poster">
        <img :src="`${imgPath}/${movie.poster_path}`" :alt="movie.title">
      </div>

      <div class="movie-info">
        <h1 class="movie-info-title">{{ movie.title }}</h1>

        <p class="movie-info-overview">
          {{ movie.overview }}
        </p>

        <button class="btn-add" v-if="!movieOnWatchLaterList" @click="addMyToMyList">
          <span>+</span>
          Adicionar a minha lista
        </button>

        <button class="btn-remove" v-if="movieOnWatchLaterList" @click="removeFromMyList">
          Remover da minha lista
        </button>
      </div>
    </section>

    <section v-if="trailerId" class="movie-trailer">
      <h2 class="trailers">Trailers</h2>

      <div class="video-box">
        <iframe width='100%' height='400px' :src="trailerUrl"></iframe>
      </div>
    </section>
  </main>
</template>

<script>
import YouTubeSearch from 'youtube-api-search';
import { mapState, mapActions } from 'vuex';

import { fetchMovie } from '../api/api';

export default {
  name: 'movie-details',

  data() {
    return {
      movie: null,
      trailerId: null,
      imgPath: process.env.VUE_APP_IMAGE_API_URL,
    };
  },

  computed: {
    ...mapState(['watchLaterList']),

    movieOnWatchLaterList() {
      return this.watchLaterList.filter(movie => movie.id === this.movie.id).length;
    },

    trailerUrl() {
      return `https://www.youtube.com/embed/${this.trailerId}`;
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

    const term = `${this.movie.title} trailer`;

    YouTubeSearch({ key: process.env.VUE_APP_GOOGLE_API_TOKEN, term }, (videos) => {
      this.trailerId = videos[0].id.videoId;
    });
  },
};
</script>

<style lang="scss" scoped>
  .movie-details {
    background-color: $main-color;
    color: $white;
    display: inline-block;
    min-height: 100vh;
    width: 100%;

    .container {
      display: flex;
      margin: 50px auto 0 auto;
      max-width: 980px;
      @include media-mobile {
        flex-direction: column;
      }

      .movie-info {
        display: flex;
        flex-direction: column;
        margin-left: 30px;
        @include media-mobile {
          margin: 0 auto;
          padding: 15px;
          align-items: center;
        }

        &-title {
          font-size: 32px;
          font-weight: 300;
          text-align: start;
          @include media-mobile { font-size: 26px; }
        }

        &-overview {
          font-size: 16px;
          font-weight: 300;
          line-height: 20px;
          margin-top: 20px;
          max-width: 600px;
          text-align: start;
        }

        .btn-add, .btn-remove {
          background-color: $main-color;
          border: 1px solid $main-color-light;
          color: #fff;
          cursor: pointer;
          display: block;
          margin-top: 20px;
          padding: 6px;
          position: relative;
          text-align: end;
          transition: .3s;
          width: 150px;
          span {
            font-weight: 300;
            font-size: 18px;
            margin-right: 5px;
            position: absolute;
            top: 1px;
            left: 8px;
          }
          &:hover { background-color: #202b36; }
        }
        .btn-remove { width: 140px; }
      }
    }

    .movie-trailer {
      margin-top: 45px;

      h2.trailers {
        font-size: 22px;
        font-weight: 300;
        margin: 0 auto;
        text-align: start;
        border-bottom: 1px solid;
        padding: 14px;
        max-width: 980px;
      }

      .video-box {
        max-width: 768px;
        margin: 50px auto 0 auto;

        @include media-mobile {
          padding: 0 15px;
          iframe { height: auto; }
        }
      }
    }
  }
</style>
