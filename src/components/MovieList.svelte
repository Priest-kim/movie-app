<script>
  import { movies } from "~/store/movie";
  import MovieCard from "~/MovieCard.svelte";
</script>

<div class="movie-list">
  <div class="movies">
    {#each $movies as movie (movie.imdbID)}
      <MovieCard movie="{movie}" />
    {/each}
  </div>
</div>
