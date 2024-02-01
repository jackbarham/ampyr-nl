<template>
  <div class="pt-40">
    <h1 class="text-center c-navy font-semibold text-2xl p-8">{{ props.heading }}</h1>
  </div>
</template>

<script setup>
  const props = defineProps({
    heading: {
      type: String,
      required: true,
    },
  })
</script>