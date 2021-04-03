<template>
  <div class="work">
    <Hero title="Check out what I've made">
      <div class="mt-8 text-4xl text-center">
        <span class='mr-1'>$</span><span id="typing" />
      </div>
    </Hero>
    <div id="main">
      Main
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero"
import Typewriter from 'typewriter-effect/dist/core';


export default {
  name: "Work",
  components: {
    Hero
  },
  mounted() {
    let typing = new Typewriter('#typing')

    typing.typeString('cd ../portfolio').start();
  }
}
</script>
