module.exports = {
  // publicPath: 'vue-movies',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "./src/assets/scss/main.scss";
        `,
      },
    },
  },
};
