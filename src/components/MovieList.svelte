<script>
  import { movies, loading, message } from "~/store/movie";
  import MovieCard from "~/components/MovieCard.svelte";
  import Loader from "~/components/Loader.svelte";
</script>

<style lang="scss">
  .movie-list {
    margin-top: 30px;
    padding: 10px;
    background-color: $color--area;
    border-radius: 4px;
    text-align: center;
    &.no-result {
      padding: 70px 0;
    }
    .movies {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .message {
      color: $color--primary;
      font-size: 20px;
      text-align: center;
    }
  }
</style>

<div class="movie-list" class:no-result="{!$movies.lenght}">
  {#if $loading}
    <Loader />
  {/if}
  <div class="message">
    {$message}
  </div>
  <div class="movies">
    {#each $movies as movie (movie.imdbID)}
      <MovieCard movie="{movie}" />
    {/each}
  </div>
</div>
