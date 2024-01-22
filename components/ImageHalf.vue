<template>
  <div class="image-half relative">
    <div :class="backgroundClass">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center">
        <div class="relative overflow-hidden">
          <img :src="props.content.image" alt="Description" class="w-full h-[384px] md:h-[640px] lg:h-[768px] object-cover">
          <svg :class="svgFill" class="svg-curve-down-bottom block md:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 24" preserveAspectRatio="none">
            <path fill="none" d="M0,0 Q50,48 100,0 V24 H0 Z" />
          </svg>
          <svg :class="svgFill" class="svg-curve-down-right hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 100" preserveAspectRatio="none">
            <path fill="none" d="M0,0 Q48,50 0,100 V100 H24 V0 Z" />
          </svg>
        </div>
        <div class="max-w-xl mx-auto md:mx-0 py-14 px-8 lg:px-20 text-center md:text-left text-brand-navy">
          <span class="inline-block uppercase text-xs tracking-widest mb-4 lg:mb-6">{{ props.content.category }}</span>
          <h2 class="text-3xl lg:text-5xl mb-6 lg:mb-8">{{ props.content.heading }}</h2>
          <p class="lg:text-xl" :class="{ 'mb-8': props.content.button }">{{ props.content.text }}</p>
          <Button v-if="props.content.button" theme="dark" :link="props.content.button.link" :text="props.content.button.text" />
        </div>
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

const backgroundClass = computed(() => {
  return props.content.theme === 'white' ? 'bg-white' : 'bg-brand-grey'
})

const svgFill = computed(() => {
  return props.content.theme === 'white' ? 'fill-f-white' : 'fill-f-grey'
})
</script>