<template>
  <h1 
    :class="[ isDark ? 'text-brand-navy font-medium' : 'text-brand-wheat font-normal' ]"
    class="text-center text-3xl md:text-4xl lg:text-5xl mb-12 lg:mb-20 max-w-md lg:max-w-full m-auto"
  >{{ props.copy }}</h1>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  copy: {
    type: String,
    required: true,
  },
})

const isDark = computed(() => props.text === 'dark')
</script>