<template>
  <div class="movie-card">
    <router-link :to="`/movie/${id}`">
      <img :src="`${imgPath}/${img}`" :alt="title">
      <span><b>{{ title }}</b></span>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'movie-card',

  props: {
    id: {
      type: Number,
      required: true,
    },
    title: {
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
  }
</style>
