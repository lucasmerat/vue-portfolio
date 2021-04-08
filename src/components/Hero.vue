<template>
  <div class="flex items-center justify-center h-screen top-section home">
    <slot />
    <a class="absolute z-20 text-4xl bounce text-accent bottom-10" href="#main"><font-awesome-icon icon="angle-down" /></a>
  </div>
</template>

<script>
export default {
name: "Hero",
props: ["link", "title"]
}
</script>
