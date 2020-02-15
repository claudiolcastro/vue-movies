import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import MovieDetails from '../views/MovieDetails.vue';
import WatchLater from '../views/WatchLater.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/movie/:id',
      name: 'movie-details',
      component: MovieDetails,
    },
    {
      path: '/watch-later',
      name: 'watch-later',
      component: WatchLater,
    },
  ],
});
