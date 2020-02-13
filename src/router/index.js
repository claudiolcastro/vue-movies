import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import MovieDetails from '../views/MovieDetails.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
  ],
});
