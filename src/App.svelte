<script>
    import Router from "svelte-spa-router";
    import Header from "~/components/Header.svelte"
    import Home from "~/routes/Home.svelte";
    import About from "~/routes/About.svelte";
</script>

<Header/>
<Router routes={{
    '/': Home,
    '/about' : About
}}/>

<style lang="scss"></style>
