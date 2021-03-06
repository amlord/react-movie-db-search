import config from 'config';

class TheMovieDb {
  /**
   * @constructor
   * @param {Object} apiConfig - MovieDB API config
   * @param {Function} fetch - Fetch API
   */
  constructor(apiConfig = config.movieDb.api, fetch = window.fetch) {
    this.fetch = url => fetch(url);
    this.apiConfig = apiConfig;
  }

  /**
   * Search for movies from search text
   * @param {String} [searchText=] - search text
   * @param {Number} [page=1] - page of results to view
   * @returns {Object} - a list of matching results
   */
  async getMovies(searchText = '', page = 1) {
    const {
      baseUrl, version, key, language, includeAdult, endpoints: { search },
    } = this.apiConfig;

    try {
      const result = await this.fetch(
        `${baseUrl}/${version}/${search.movies}?api_key=${key}&language=${language}&query=${encodeURI(searchText)}&page=${page}&include_adult=${includeAdult}`,
      );

      return result.json();
    } catch (error) {
      return { error };
    }
  }
}

export default TheMovieDb;
