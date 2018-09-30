import config from 'config';

const getMovies = async (query, page = 1) => {
  const {
    baseUrl, version, key, language, includeAdult, endpoints: { search },
  } = config.movieDb.api;

  const result = await fetch(
    `${baseUrl}/${version}/${search.movies}?api_key=${key}&language=${language}&query=${encodeURI(query)}&page=${page}&include_adult=${includeAdult}`,
  );
  const json = await result.json();

  console.log({ json });
};

export default {
  getMovies,
};
