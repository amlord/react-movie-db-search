export default {
  movieDb: {
    api: {
      baseUrl: process.env.REACT_APP_MOVIE_DB_API_BASE_URL || 'https://api.themoviedb.org',
      key: process.env.REACT_APP_MOVIE_DB_API_KEY || '',
      version: process.env.REACT_APP_MOVIE_DB_API_VERSION || '3',
      language: process.env.REACT_APP_MOVIE_DB_API_LANGUAGE || 'en-GB',
      includeAdult: process.env.REACT_APP_MOVIE_DB_API_ADULT || false,
      endpoints: {
        search: {
          all: 'search/multi',
          movies: 'search/movie',
          people: 'search/person',
          tv: 'search/tv',
        },
      },
    },
  },
};
