<template>
  <div class="flex items-center justify-center py-4 text-3xl bg-brand-dark text-accent">
    <a aria-label="github link" class="mr-5" href="#">
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'github' }" />
    </a>
    <a aria-label="linkedin link" class="mr-5" href="#">
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }" />
    </a>
    <a aria-label="twitter link" href="#">
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }" />
    </a>
  </div>
</template>

<script>
export default {
 name: 'Footer',
}
</script>
