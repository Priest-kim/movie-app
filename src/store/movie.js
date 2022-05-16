import axios from "axios";
import { writable, get } from "svelte/store";

export const movies = writable([]);

export const searchMovies = async (payload) => {
  const { title, type, year, number } = payload;
  const OMDB_API_KEY = "7035c60c";

  const res = await axios.get(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}`
  );

  const { Search, totalResults } = res.data;

  movies.set(Search);

  const pageLength = Math.ceil(totalResults / number);

  if (pageLength > 1) {
    for (let page = 2; page <= pageLength; page++) {
      if (page > number / 10) break;
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`
      );
      const { Search } = res.data;
      movies.update(($movies) => {
        $movies.push(...Search);
        return $movies;
      });
    }
  }
};
