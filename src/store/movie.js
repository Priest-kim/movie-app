import axios from "axios";
import { writable, get } from "svelte/store";
import _unionBy from "lodash/unionBy";

export const movies = writable([]);
export const loading = writable(false);
export const theMovie = writable({});
export const message = writable("Search for the movie title!");

export const searchMovies = async (payload) => {
  if (get(loading)) return;
  loading.set(true);

  let total = 0;

  try {
    const res = await _fetchMovie({
      ...payload,
      page: 1,
    });

    const { Search, totalResults } = res.data;
    movies.set(Search);
    total = totalResults;
  } catch (msg) {
    movies.set([]);
    message.set(msg);
    loading.set(false);
    return;
  }

  const pageLength = Math.ceil(total / 10);

  if (pageLength > 1) {
    for (let page = 2; page <= pageLength; page++) {
      if (page > number / 10) break;
      const res = await _fetchMovie({
        ...payload,
        page,
      });
      const { Search } = res.data;
      movies.update(($movies) => _unionBy($movies, Search, "imdbID"));
    }
  }

  loading.set(false);
};

export const seachMovieWithId = async (id) => {
  if (get(loading)) return;
  loading.set(true);

  const res = await _fetchMovie({ id });
  theMovie.set(res.data);


  loading.set(false);
};

const _fetchMovie = (payLoad) => {
  const { title, type, year, page, id } = payLoad;
  const OMDB_API_KEY = "7035c60c";

  const url = id
    ? `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`;

  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get(url);
      console.log(res.data);

      if (res.data.Error) {
        reject(res.data.Error);
      }

      resolve(res);
    } catch (e) {
      console.log(e.response.status);
      reject(e.msaage);
    }
  });
};
