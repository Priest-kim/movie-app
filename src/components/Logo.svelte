<script>
    import { link } from "svelte-spa-router";

</script>

<a use:link 
    href="/">
    <span>OMDbAPI</span>.COM
</a>

<style lang="scss">
    a {
        display: block;
        font-family: "Oswald", "sans-serif";
        font-size: 30px;
        color : rgba(#fff, .5);
        text-decoration: none;

        span {
            color : #FDC000;
        }
    }
</style>