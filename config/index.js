export default {
  movieDb: {
    api: {
      baseUrl: process.env.REACT_APP_MOVIE_DB_API_BASE_URL || 'https://api.themoviedb.org',
      key: process.env.REACT_APP_MOVIE_DB_API_KEY || '',
    },
  },
};
