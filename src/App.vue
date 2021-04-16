<template>
	<div id="app">
		<NavBar />
		<router-view class="flex-grow" />
		<Footer />
	</div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
	name: "App",
	components: {
		NavBar,
		Footer,
	},
};
</script>

<style>
#app {
  background: linear-gradient(to bottom, rgba(0, 0, 0, .1) 0%, rgba(0, 0, 0, 1) 100vh), url(~@/assets/images/sky.jpg);

	background-repeat: repeat-x;
	animation: animatedBackground 50s linear infinite;
}

@keyframes animatedBackground {
	from { background-position: 0 0; }
	to { background-position: 100% 0; }
}
</style>
