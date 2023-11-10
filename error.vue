<template>
  <NuxtLayout>
    <div class="c-navy">
      <div class="pt-40">
        <h1 class="text-center c-navy font-semibold text-3xl p-8">{{ error.statusCode }}</h1>
        <button @click="handleError">Home page</button>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>