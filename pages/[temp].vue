<template>
  <Placeholder :heading="slug" />
</template>

<script setup>
const route = useRoute()
const slug = route.params.temp
</script>