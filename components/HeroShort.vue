<template>
  <section class="hero-short">
    <div class="bg-brand-navy">
      <div class="relative">
        <div class="flex items-center w-full h-[460px] md:h-[600px] relative z-20">
          <div :class="containerClass" class="max-w-xl text-center m-auto w-full p-6">
            <h2 v-if="props.content.category" class="text-3xl md:text-5xl mb-6 font-normal leading-tight lg:leading-snug">{{ props.content.category }}</h2>
            <h2 v-else :class="headingClass" class="mb-6 font-normal leading-tight lg:leading-snug">{{ props.content.title }}</h2>
            <div v-if="props.content.text" class="mb-6 text-base md:text-lg font-light max-w-md mx-auto">{{ props.content.text }}</div>
          </div>
        </div>
        <NuxtImg 
          width="600"
          quality="90"
          :src="props.content.image.filename" 
          :alt="props.content.title" 
          class="absolute top-0 object-cover w-full h-full opacity-50" 
        />
      </div>
    </div>
  </section>
</template>

<script setup>
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