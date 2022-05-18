<script>
  import { link } from "svelte-spa-router";

  export let movie;
</script>

<style lang="scss">
  .movie {
    display: block;
    width: 200px;
    height: 300px;
    margin: 10px;
    border-radius: 6px;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    .poster {
      width: 100%;
      height: 100%;
      background-color: $color--area;
      background-position: center;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Oswald", sans-serif;
      color: $color--white-5;
      font-size: 20px;
      text-align: center;
    }
    .info {
    }
  }
</style>

<a use:link href="{`/movie/${movie.imdbID}`}" class="movie">
  <div class="poster" style="blackground-image: url({movie.Poster});">
    {#if movie.Poster === "N/A"}
      OMDbAPI<br />
      N/A
    {/if}
  </div>
  <div class="info">
    <div class="poster" style="blackground-image: url({movie.Poster})"></div>
    <div class="year">{movie.Year}</div>
    <div class="title">{movie.Title}</div>
  </div>
</a>
