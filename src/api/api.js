import axios from 'axios';

const fetchMoviesList = async (page = 1) => {
  try {
    const { data } = await axios.get(`${process.env.VUE_APP_MOVIE_API_URL}/discover/movie`, {
      params: {
        api_key: process.env.VUE_APP_API_TOKEN,
        page,
      },
    });

    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const fetchMovie = async (id) => {
  try {
    const { data } = await axios.get(`${process.env.VUE_APP_MOVIE_API_URL}/movie/${id}`, {
      params: {
        api_key: process.env.VUE_APP_API_TOKEN,
      },
    });

    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};


export { fetchMoviesList, fetchMovie };
