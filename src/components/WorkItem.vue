<template>
	<section :id="title" class="flex items-center px-8 mx-10 rounded-xl h-144">
		<div class="w-1/3">
			<h2 class="pt-6 text-5xl font-bold">{{ title }}</h2>
			<p class="mt-6 mb-6 mr-6 text-2xl font-light">
				{{ subtitle }}
			</p>
			<div class="flex items-center mb-3 font-light">
				<font-awesome-icon class="mr-3 text-2xl" icon="desktop" />
				<span>{{ frontStack }}</span>
			</div>
			<div class="flex items-center mb-8 font-light">
				<font-awesome-icon class="mr-5 text-2xl" icon="database" />
				<span>{{ backStack }}</span>
			</div>
			<div class="flex flex-none">
        <a
					:href="codeHref"
          v-if="codeHref"
					target="_blank"
					class="px-6 py-2 mr-4 transition ease-in-out border-4 rounded-md border-accent hover:border-yellow-300 hover:text-yellow-300 text-accent"
					>View Code</a>
				<a
					:href="visitHref"
					target="_blank"
					class="px-12 py-2 transition ease-in-out border-4 rounded-md border-accent hover:border-yellow-300 bg-accent hover:bg-yellow-300 text-brand-dark"
					>Visit</a>
			</div>
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
	props: [
		"id",
		"title",
		"subtitle",
		"frontStack",
		"backStack",
		"visitHref",
		"codeHref",
		"imageFileName",
	],
};
</script>

<style scoped>
#Spriing {
	background: linear-gradient(180deg, rgb(14 40 191) 0%, rgb(13 30 58) 80%)
}

#Brewspace {
	background: linear-gradient(180deg, rgb(247 73 12) 0%, rgb(80 26 2) 80%);
}
</style>
