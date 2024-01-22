<template>
  <section class="hero-short">
    <div class="bg-brand-navy">
      <div class="relative">
        <div class="flex items-center w-full h-[460px] md:h-[600px] relative z-20">
          <div 
            :class="containerClass"
            class="text-center m-auto w-full p-6"
          >
            <h2 
              :class="headingClass"
              class="mb-6 font-normal leading-tight lg:leading-snug"
            >{{ props.content.heading }}</h2>
            <p v-if="props.content.text" class="mb-6 text-base md:text-lg font-light max-w-md mx-auto">{{ props.content.text }}</p>
          </div>
        </div>
        <img :src="props.content.image" alt="Hero" class="absolute top-0 object-cover w-full h-full opacity-50">
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})

const containerClass = computed(() => {
  return props.content.width === 'large' ? 'max-w-6xl' : 'max-w-xl'
})

const headingClass = computed(() => {
  return props.content.width === 'large' ? 'text-4xl lg:text-5xl' : 'text-4xl md:text-6xl'
})
</script>