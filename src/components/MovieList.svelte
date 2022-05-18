<script>
  import { movies } from "~/store/movie";
  import MovieCard from "~/components/MovieCard.svelte";
</script>

<style lang="scss">
  .movie-list {
    margin-top: 30px;
    padding: 10px;
    background-color: $color--area;
    border-radius: 4px;
    text-align: center;
    .movies {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>

<div class="movie-list">
  <div class="movies">
    {#each $movies as movie (movie.imdbID)}
      <MovieCard movie="{movie}" />
    {/each}
  </div>
</div>
