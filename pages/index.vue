<template>
  <div>
    <div class="hero absolute top-0 left-0 w-full h-[600px] flex items-center pl-12 lg:pl-20 text-white">
      <div class="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-50 z-10" aria-hidden="true"></div>
      <div class="z-20">
        <h1 class="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">Explore The Heart</h1>
        <h1 class="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">Of Malta: Spinola Bay</h1>
        <p class="text-xl sm:text-2xl lg:text-3xl mt-4">Immerse in Malta's stunning beauty.</p>
      </div>
    </div>
    <div class="pt-[600px]">
      <h2 class="text-2xl sm:text-3xl lg:text-5xl font-bold mt-4 text-black px-12 lg:px-20">Things to Do in Malta:</h2>
    </div>
  </div>
</template>

<script>
export default {
  // your script here
};
</script>

<style scoped>
.hero {
  background-image: url('~/assets/spinola_bay.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
