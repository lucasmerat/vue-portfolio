<template>
  <div class="flex items-center justify-center py-6 text-5xl text-accent">
    <a aria-label="github link" class="mr-8" target="_blank" href="https://github.com/lucasmerat/">
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github-square' }" />
    </a>
    <a aria-label="linkedin link" class="mr-8" target="_blank" href="https://www.linkedin.com/in/lucas-merat">
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" />
    </a>
    <a aria-label="email me" class="mr-5" href="mailto:lucas.merat@gmail.com">
      <font-awesome-icon icon="envelope-square" />
    </a>
  </div>
</template>

<script>
export default {
 name: 'Footer',
}
</script>
