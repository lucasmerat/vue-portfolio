<template>
  <div>
    <nav
      class="absolute z-10 flex justify-between w-full px-4 mt-6 text-3xl md:px-10 md:text-2xl"
    >
      <router-link
        to="/"
        exact
        active-class="border-b-2 border-accent"
        class="text-accent hover:text-yellow-200"
        >Lucas Merat</router-link
      >
      <div class="hidden md:block">
        <router-link
          to="/work"
          active-class="border-b-2 border-accent"
          class="mr-6 text-accent hover:text-yellow-200"
          >Work</router-link
        >
        <router-link
          to="/contact"
          active-class="border-b-2 border-accent"
          class="mr-6 text-accent hover:text-yellow-200"
          >Contact</router-link
        >
      </div>

      <div class="flex items-center sm:hidden">
        <button
          v-on:click="navBarOpen = !navBarOpen"
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-accent hover:text-yellow-200"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <!--
            Icon when menu is closed.
          -->
          <svg
            class="block w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <!--
            Icon when menu is open.
          -->
          <!-- <svg class="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg> -->
        </button>
      </div>
    </nav>
      <transition name="fade">
        <div
          v-if="navBarOpen"
          class="absolute z-10 flex flex-col ml-10 text-2xl sm:hidden top-20"
        >
          <router-link
            to="/work"
            active-class="border-b-2 border-accent"
            class="text-accent hover:text-yellow-200"
            >Work</router-link
          >
          <router-link
            to="/contact"
            active-class="border-b-2 border-accent"
            class="text-accent hover:text-yellow-200"
            >Contact</router-link
          >
        </div>
      </transition>
    </div>
</template>

<script>
export default {
  name: "NavBar",
  data: function() {
    return {
      navBarOpen: false,
    };
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
