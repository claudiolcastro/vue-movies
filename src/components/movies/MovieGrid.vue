<template>
  <div class="movie-grid">
    <section class="container">
      <div class="grid-row">
        <slot />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'movie-grid',
};
</script>

<style lang="scss" scoped>
  .movie-grid {
    .container {
      display: block;
      max-width: 1335px;
      margin: 0 auto;

      .grid-row {
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;

        .grid-item {
          -ms-flex: auto;
          flex-basis: 16.66%;
          position: relative;
          padding: 10px;
          box-sizing: border-box;

          @media(max-width: 1073px) { flex-basis: 19.99%; }
          @media(max-width: 815px) { flex-basis: 33.33%; }
          @media(max-width: 555px) { flex-basis: 50%; }
        }

      }
    }
  }
</style>
