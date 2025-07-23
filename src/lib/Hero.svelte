<script>
  import Button from "./Button.svelte";
  import Globe from "./Globe.svelte";
  import Header from "./Header.svelte";
</script>

<section class="relative bg-[#0a0e30]">
  <!-- Hero -->
  <div class="relative h-175 md:h-screen overflow-hidden">
    <header
      class="absolute bottom-0 left-0 md:w-[650px] z-999 px-4 md:px-16 py-16"
    >
      <h1 class="text-white text-4xl font-bold lg:text-8xl">
        Your BEST link to the Future of Communications!
      </h1>

      <p class="text-white text-sm md:text-lg my-4">
        Delivering cutting-edge ICT solutions, telecommunications services, and
        innovative products that empower a better, connected life — driving
        technology forward.
      </p>
      <Button text="Contact Us" />
    </header>

    <Globe />
    <div class="bg-gradient"></div>
  </div>
</section>

<style>
  .bg-gradient {
    bottom: 0;
    position: absolute;
    height: 30%;
    width: 100%;
    pointer-events: none;
    z-index: 99;
    background: linear-gradient(
      180deg,
      rgba(255, 254, 254, 0) 0%,
      rgb(10, 14, 48) 80%,
      rgb(10, 14, 48) 100%
    );
  }
</style>
