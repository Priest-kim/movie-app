<script>
  import { link } from "svelte-spa-router";

  export let movie;
</script>

<a use:link href="{`/movie/${movie.imdbID}`}"> </a>
