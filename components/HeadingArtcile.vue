<template>
  <h1 class="text-2xl lg:text-5xl lg:leading-tight font-medium text-brand-navy-dark mb-8 lg:mb-12">{{ title }}</h1>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>