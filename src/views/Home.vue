<template>
	<div>
		<Hero class="h-screen">
			<div
				class="relative z-20 w-full ml-6 font-bold text-left md:ml-24 text-7xl md:text-8xl text-accent"
			>
				<h1><span class="block md:inline">Hi,</span> I'm Lucas</h1>
				<h2 class="mt-8 text-2xl font-light">A web developer</h2>
			</div>
		</Hero>
		<div class="w-full main">
			<div class="w-full px-6 pt-64 pb-16 md:w-2/3 md:ml-16">
				<img
					class="border-4 rounded-full shadow-lg h-52 border-brand-light"
					src="../assets/images/headshot.jpg"
					alt=""
				/>
				<h4 class="pt-4 text-4xl font-bold md:text-5xl text-accent">
					I'm a full stack software developer based in Austin, TX
				</h4>
				<p class="mt-6 font-light text-block text-1xl md:text-2xl text-accent">
					Currently, I'm working as a Software Engineer II at
					<a
						class="underline text-brand-light hover:text-brand-dark"
						href="https://www.skillsengine.com"
						>SkillsEngine</a
					>
					- we help colleges better align their curriculum to the job market.
					I've always been passionate about how software can create
					opportunities and improve outcomes in education and beyond. As a
					developer, I strive to always keep the user and product in mind, while
					writing efficient and effective code. It's my mission to continue
					building functional, beautiful applications that people love to use.
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import Hero from "../components/Hero";

export default {
	name: "Home",
	components: {
		Hero,
	},
};
</script>

<style>
.main {
	background-image: url(~@/assets/images/stars.png);
  opacity: .8;
  background-repeat: repeat;
  background-attachment: fixed;
}
html {
	scroll-behavior: smooth;
}

.bounce {
	-moz-animation: bounce 1s 12;
	-webkit-animation: bounce 1s 12;
	animation: bounce 1s 12;
}

@keyframes bounce {
	0%,
	20%,
	50%,
	80%,
	100% {
		transform: translateY(0);
	}
	40% {
		transform: translateY(-30px);
	}
	60% {
		transform: translateY(-15px);
	}
}
</style>
