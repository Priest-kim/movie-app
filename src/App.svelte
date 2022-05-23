<script>
  import { fade } from "svelte/transition"
  import Router,  { location } from "svelte-spa-router";
  import Header from "~/components/Header.svelte";
  import Footer from "~/components/Footer.svelte";
  import routes from "~/routes";
</script>

<Header />
{#key $location}
  <div in:fade>
    <Router {routes} />
  </div>
{/key}
<Footer />
