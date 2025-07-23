<script>
  import Header from "$lib/Header.svelte";
  import Hero from "$lib/Hero.svelte";
  let { children } = $props();
  import "../app.css";
</script>

<Header />
<Hero />
{@render children()}
