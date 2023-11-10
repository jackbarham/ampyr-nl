<template>
  <div class="hero-short">
    <div class="c-bg-navy">
      <div class="relative">
        <div class="flex items-center w-full h-[460px] md:h-[600px] relative z-20">
          <div class="text-center m-auto w-full max-w-xl p-6">
            <h2 class="text-4xl md:text-6xl mb-6 font-normal">{{ props.content.heading }}</h2>
            <p class="mb-6 text-base md:text-lg font-light max-w-md mx-auto">{{ props.content.text }}</p>
          </div>
        </div>
        <img :src="props.content.image" alt="Hero" class="absolute top-0 object-cover w-full h-full opacity-50">
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>