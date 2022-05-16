import axios from "axios";

export const searchMovies = async (payload) => {
  const { title, type, year, number } = payload;
  const OMDB_API_KEY = "7035c60c";

  const res = await axios.get(
    `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}`
  );

  console.log(res);
};
