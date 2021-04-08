<template>
  <div id="app">
    <NavBar />
    <router-view class="flex-grow" />
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  }
}
</script>

<style scoped>
  #app {
    background-image:
    linear-gradient(to bottom, rgba(0, 0, 0, 0.137), rgba(0, 0, 0, 1)),
    url(./assets/images/sky.jpg);
    background-size: cover;
  }
</style>
