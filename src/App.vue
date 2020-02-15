<template>
  <div id="app">
    <router-view/>

    <Footer />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import Footer from './components/Footer.vue';

export default {
  components: {
    Footer,
  },

  computed: {
    ...mapState(['watchLaterList']),
  },

  methods: {
    ...mapActions([
      'setWatchLaterList',
    ]),
  },

  created() {
    const watchLaterLocal = JSON.parse(localStorage.getItem('watchLaterList'));
    if (watchLaterLocal) this.setWatchLaterList(watchLaterLocal);
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Open Sans';
  color: $black;
  text-align: center;
}
</style>
