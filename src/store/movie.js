import axios from "axios";
import { writable, get } from "svelte/store";
import _unionBy from "lodash/unionBy";

export const movies = writable([]);
export const loading = writable(false);
export const theMovie = writable({});

export const searchMovies = async (payload) => {
  if (get(loading)) return;
  loading.set(true);

  const { title, type, year, number } = payload;
  const OMDB_API_KEY = "7035c60c";

  const res = await axios.get(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}`
  );

  const { Search, totalResults } = res.data;

  movies.set(Search);

  const pageLength = Math.ceil(totalResults / 10);

  if (pageLength > 1) {
    for (let page = 2; page <= pageLength; page++) {
      if (page > number / 10) break;
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
      );
      const { Search } = res.data;
      movies.update(($movies) => _unionBy($movies, Search, "imdbID"));
    }
  }

  loading.set(false);
};

export const seachMovieWithId = async (id) => {
  if (get(loading)) return;
  loading.set(true);

  //
  const OMDB_API_KEY = "7035c60c";
  const res = await axios.get(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${id}&plot=full`
  );
  theMovie.set(res.data);

  loading.set(false);
};
