<template>
  <div class="flex items-center justify-center h-screen shadow-lg top-section home">
    <div class="relative z-20 flex flex-col items-center text-6xl text-accent">
      <h1>{{title}}</h1>
      <div class="mt-4 wave">👋</div>
    </div>
    <a class="absolute z-20 text-4xl bounce text-accent bottom-10" :href="link"><font-awesome-icon icon="angle-down" /></a>
  </div>
</template>

<script>
export default {
name: "Hero",
props: ["link", "title"]
}
</script>
