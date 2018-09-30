import TheMovieDb from './TheMovieDb';

const returnedMovies = 'RETURNED_MOVIES';
const fetch = () => Promise.resolve({
  json: () => returnedMovies,
});

describe('API > TheMovieDb', () => {
  const theMovieDb = new TheMovieDb({
    baseUrl: 'https://api.themoviedb.org',
    key: 'API_KEY',
    version: '3',
    language: 'en-GB',
    includeAdult: false,
    endpoints: {
      search: {
        all: 'search/multi',
        movies: 'search/movie',
        people: 'search/person',
        tv: 'search/tv',
      },
    },
  }, fetch);

  it('calls fetch()', async () => {
    const response = await theMovieDb.getMovies('fight');
    expect(response).toBe(returnedMovies);
  });
});
