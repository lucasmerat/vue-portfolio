<template>
  <div class="work">
    <Hero title="Check out what I've made">

      <div class="relative z-20 w-full ml-6 font-bold text-left md:ml-24 text-7xl md:text-7xl text-accent">
        <h1>Check out what I've made</h1>
        <h2 class="mt-4 text-4xl">
          <span class="mr-2">$</span><span id="typing" />
        </h2>
      </div>
    </Hero>
    <div class="pt-16 text-white main">
      <WorkItem
        title="Spriing"
        subtitle="Helps job seekers track and manage their job search in a sleek dashboard"
        frontStack="React, Redux, Ant Design, TailwindCSS"
        backStack="Node, Express, MongoDB, Heroku"
        visitHref="https://www.spriing.app"
        imageFileName="spriing.png"
      />

      <WorkItem
        class="mt-16"
        title="Brewspace"
        subtitle="A social app to log beers and discover new favorites"
        frontStack="jQuery, AJAX, Handlebars, MaterializeCSS"
        backStack="Node, Express, mySQL, Sequelize"
        visitHref="https://brewspace.herokuapp.com/"
        codeHref="https://github.com/lucasmerat/BrewSpace/"
        imageFileName="brew.png"
      />
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero"
import WorkItem from "../components/WorkItem"
import Typewriter from 'typewriter-effect/dist/core';


export default {
  name: "Work",
  components: {
    Hero,
    WorkItem,
  },
  mounted() {
    let typing = new Typewriter('#typing')

    typing.typeString('cd ../portfolio').start();
  }
}
</script>
