<script>
  import { link, push } from "svelte-spa-router";
  import active from "svelte-spa-router/active";
  import Logo from "~/components/Logo.svelte";

  const menus = [
    {
      href: "/",
      name: "Search",
    },
    {
      href: "/movie/tt4520988",
      name: "Movie",
      path: "/movie/*",
    },
    {
      href: "/about",
      name: "About",
      path: /^\/about/
    },
  ];
</script>

<style lang="scss">
  header {
    padding: 20px 40px;
    background-color: $color--black-90;
    position: sticky;
    top: 0;
    z-index: 9;
    display: flex;
    align-items: flex-end;
    @media #{$mobile} {
      padding: 14px 20px;
    }
    nav {
      margin-left: 40px;
      @media #{$mobile} {
        display: none;
      }
      ul {
        display: flex;

        li {
          margin-left: 10px;

          &:first-child {
            margin-left: 0;
          }

          a {
            text-decoration: none;
            font-size: 14px;
            color: $color--white-50;
            font-weight: 700;
          }
        }
      }
    }
    .user {
      width: 40px;
      height: 40px;
      padding: 6px;
      box-sizing: border-box;
      border-radius: 50%;
      background-color: $color--area;
      cursor: pointer;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 40px;
      margin: auto;
      transition: 0.4s;
      @media #{$mobile} {
        right: 20px;
      }
      &:hover {
        background-color: lighten($color--area, 20%);
      }
      img {
        width: 100%;
      }
    }
  }

  header :global(a.active) {
    color: $color--primary !important;
  }
</style>

<header>
  <Logo />
  <nav>
    <ul>
      {#each menus as { href, name, path } (name)}
        <li>
          <a use:link use:active="{path}" href="{href}">
            {name}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
  <div 
    on:click={(e) =>{
        push('/about?name=Netlify&email=hello@netlify.com&image=%2Fassets%2Fnetlify.png')}}
        class="user"
  >
    <img src="/assets/svelte.png" alt="User" />
  </div>
</header>
