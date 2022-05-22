import Home from "./Home.svelte";
import About from "./About.svelte";
import Movie from "./Movie.svelte";
import NotFound from "./NotFound.svelte";

export default {
  "/": Home,
  "/movie/:id": Movie,
  "/about": About,
  "*" : NotFound
};
