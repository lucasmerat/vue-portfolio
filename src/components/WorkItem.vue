<template>
	<section :id="title" class="mx-10 rounded-xl">
		<h2 class="pt-6 ml-8 text-4xl font-bold md:text-6xl md:mb-0">
			{{ title }}
		</h2>
		<div
			class="flex flex-col-reverse items-center grid-cols-3 p-8 md:pb-28 md:grid lg:min-h-144"
		>
			<div class="col-span-1">
				<p class="mt-4 mb-6 mr-6 text-xl font-light md:mt-0 md:text-2xl">
					{{ subtitle }}
				</p>
				<div class="flex items-center mb-3 font-light">
					<font-awesome-icon class="mr-3 text-xl md:text-2xl" icon="desktop" />
					<span>{{ frontStack }}</span>
				</div>
				<div class="flex items-center mb-8 font-light">
					<font-awesome-icon class="mr-5 text-xl md:text-2xl" icon="database" />
					<span>{{ backStack }}</span>
				</div>
				<div class="flex flex-none">
					<a
						:href="codeHref"
						v-if="codeHref"
						target="_blank"
						class="px-3 py-2 mr-4 transition ease-in-out border-4 rounded-md sm:px-6 border-accent hover:border-yellow-300 hover:text-yellow-300 text-accent"
						>View Code</a
					>
					<a
						:href="visitHref"
						target="_blank"
						class="px-8 py-2 transition ease-in-out border-4 rounded-md sm:px-12 border-accent hover:border-yellow-300 bg-accent hover:bg-yellow-300 text-brand-dark"
						>Visit</a
					>
				</div>
			</div>
			<div class="col-span-2">
				<img
					class="z-0 transition duration-1000 ease-in-out transform rounded-md shadow-lg hover:scale-105 hover:-translate-y-1"
					:src="require(`@/assets/images/${imageFileName}`)"
					alt="spriing dashboard demo"
				/>
			</div>
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
	background: linear-gradient(180deg, rgb(14 40 191) 0%, rgb(13 30 58) 80%);
}

#Brewspace {
	background: linear-gradient(180deg, rgb(247 73 12) 0%, rgb(80 26 2) 80%);
}
</style>
