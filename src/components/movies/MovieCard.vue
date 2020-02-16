<template>
  <div class="movie-card">
    <router-link class="wrapper" :to="`/movie/${id}`">
      <span class="movie-year">{{ releaseYear }}</span>
      <img class="movie-poster" :src="`${imgPath}/${img}`" :alt="title">
      <span class="movie-title">{{ title }}</span>
      <div class="info-shadow"></div>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'MovieCard',

  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    overview: {
      type: String,
      default: null,
    },
    img: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      imgPath: process.env.VUE_APP_IMAGE_API_URL,
    };
  },

  computed: {
    ...mapState([]),

    releaseYear() {
      const fullDate = new Date(this.date);
      return fullDate.getFullYear();
    },
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
  .movie-card {
    width: auto;

    .wrapper {
      position: relative;

      .movie {

        &-year {
          background-color: $main-color;
          border-radius: 3px;
          color: $white;
          font-size: 12px;
          font-weight: 600;
          margin: 5px;
          padding: 5px;
          position: absolute;
          opacity: 0;
          transition: .3s;
        }

        &-poster {
          width: 100%;
        }

        &-title {
          color: $white;
          font-size: 18px;
          font-weight: 300;
          position: absolute;
          left: 10px;
          bottom: 20px;
          opacity: 0;
          transition: .3s;
          z-index: 1;
        }
      }

      .info-shadow {
        background: linear-gradient(180deg,hsla(0,0%,100%,0) -10%,#222 60%,#000);
        bottom: 5px;
        display: block;
        height: 90px;
        opacity: 0;
        position: absolute;
        transition: 0.3;
        width: 100%;
      }

      &:hover {
        .movie-title, .movie-year { opacity: 1; }
        .info-shadow { opacity: .4; }
      }
    }
  }
</style>
