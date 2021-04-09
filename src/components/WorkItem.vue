<template>
  <section :id="title" class="flex items-center px-8 py-24 mx-10 rounded-md">
    <div class="w-1/3">
      <h2 class="pt-6 text-5xl font-bold text-accent">{{title}}</h2>
      <p class="mt-6 mb-6 mr-6 text-2xl font-light text-accent">{{subtitle}}</p>
      <div class="flex items-center mb-3 font-light">
        <font-awesome-icon class="mr-3 text-2xl" icon="desktop" /> {{frontStack}}
      </div>
      <div class="flex items-center mb-8 font-light">
        <font-awesome-icon class="mr-5 text-2xl" icon="database" /> {{backStack}}
      </div>
      <a :href="href" target="_blank" class="px-6 py-2 transition ease-in-out rounded-md bg-brand-dark hover:bg-brand-light text-accent">Visit</a>
    </div>
    <div class="w-2/3">
      <img
        class="z-0 transition duration-1000 ease-in-out transform rounded-md shadow-lg hover:scale-105 hover:-translate-y-1"
        :src="require(`@/assets/images/${imageFileName}`)"
        alt="spriing dashboard demo"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "WorkItem",
  props: ["id", "title", "subtitle", "frontStack", "backStack", "href", "imageFileName"]
};
</script>

<style scoped>
#Spriing {
  background: linear-gradient(180deg, rgb(241 170 246) 0%, rgb(165 51 173) 80%);
}

#Brewspace {
  background: linear-gradient( 180deg, rgb(109 206 197) 0%, rgb(45 136 127) 80%);
}
</style>
