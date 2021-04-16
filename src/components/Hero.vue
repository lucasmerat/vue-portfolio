<template>
  <div class="flex items-center justify-center h-screen top-section home">
    <slot />
    <a v-on:click="scroll()" class="absolute z-20 text-4xl cursor-pointer bounce text-accent bottom-10"><font-awesome-icon icon="angle-down" /></a>
  </div>
</template>

<script>

export default {
name: "Hero",
props: ["title"],
methods: {
  scroll: function() {
    document.getElementsByClassName("main")[0].scrollIntoView();
  }
}
}
</script>
