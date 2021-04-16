<template>
  <div>
    <Hero class="h-90vh" hideArrow="true">
      <div
        class="relative z-20 w-full ml-6 font-bold text-left md:ml-24 text-7xl md:text-8xl text-accent"
      >
        <h1>Let's get in touch</h1>
        <h2 class="mt-8 text-2xl font-light">Shoot me an <a href="mailto:lucas.merat@gmail.com" class="text-white underline hover:text-gray-300">email</a> or reach out on a social network below</h2>
      </div>
    </Hero>
  </div>
</template>

<script>
import Hero from "../components/Hero";

export default {
  name: 'Contact',
  components: {
		Hero,
	},
}
</script>
