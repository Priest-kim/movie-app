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
    position: relative;

    &:hover {
      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 6px solid $color--primary;
        box-sizing: border-box;
      }
    }
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
      width: 100%;
      height: 66px;
      padding: 14px;
      box-sizing: border-box;
      overflow: hidden;
      position: absolute;
      bottom: 0;
      left: 0;
      .poster {
        position: absolute;
        bottom: 0;
        left: 0;
        transform: scale(2);
        filter: blur(5px);
        &::after {
          content: "";
          background-color: $color--black-50;
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
        }
      }
      .year {
        color: $color--primary;
        position: relative;
        font-size: 12px;
      }

      .title {
        position: relative;
        font-size: 15px;
        font-family: "Oswald", sans-serif;
        color: $color--white;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
</style>

<a use:link href="{`/movie/${movie.imdbID}`}" class="movie">
  <div class="poster" style="background-image: url({movie.Poster});">
    {#if movie.Poster === "N/A"}
      OMDbAPI<br />
      N/A
    {/if}
  </div>
  <div class="info">
    <div class="poster" style="background-image: url({movie.Poster})"></div>
    <div class="year">{movie.Year}</div>
    <div class="title">{movie.Title}</div>
  </div>
</a>
