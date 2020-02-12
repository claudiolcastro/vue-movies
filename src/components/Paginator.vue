<template>
  <div class="paginator">
    <router-link
      class="prev"
      :to="previous"
      :class="{off: current === 1}"
    >previous</router-link>

    <ul class="selectable-pages">
      <li
        v-for="(page, index) in selectablePages"
        :key="index"
        class="pg-item"
        :class="{active: current === page}"
      >
        <router-link :to="linkPage(page)">
          {{ page }}
        </router-link>
      </li>
    </ul>

    <router-link
      class="next"
      :to="next"
      :class="{off: current === total}"
    >next</router-link>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Paginator',

  props: {
    total: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
  },

  computed: {
    selectablePages() {
      const pages = [];
      for (let i = 1; i <= this.total; i++) pages.push(i);

      if (this.current === 1) return pages.slice(0, 3);

      return pages.slice(this.current - 2, this.current + 1);
    },

    next() {
      if (this.current === this.total) {
        return { query: { ...this.$route.query } };
      }
      const pagina = this.current + 1;
      return { query: { ...this.$route.query, page: pagina } };
    },

    previous() {
      if (this.current === 1) {
        return { query: { ...this.$route.query } };
      }
      const pagina = this.current - 1;
      return { query: { ...this.$route.query, page: pagina } };
    },
  },

  methods: {
    ...mapActions([
      'setPage',
    ]),

    linkPage(page) {
      return { query: { ...this.$route.query, page } };
    },
  },

  created() {
  },
};
</script>

<style lang="scss" scoped>
</style>
