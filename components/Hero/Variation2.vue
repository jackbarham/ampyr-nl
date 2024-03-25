<template>
  <div class="relative pb-[100%]">
    <NuxtImg 
      width="250"
      height="250"
      :src="props.shapes.img1.filename" 
      :alt="props.shapes.img1.alt" 
      class="absolute w-[28%] h-[28%] top-0 right-0 z-40 rounded-full" 
    />
    <NuxtImg 
      width="400"
      height="400"
      :src="props.shapes.img2.filename" 
      :alt="props.shapes.img1.alt" 
      class="absolute w-[76%] h-[76%] bottom-[0%] right-[5%] z-10 rounded-full" 
    />
    <NuxtImg 
      width="200"
      height="200"
      :src="props.shapes.img3.filename" 
      :alt="props.shapes.img1.alt" 
      class="absolute w-[16%] h-[16%] top-[7%] left-[32%] z-20 rounded-full" 
    />
    <div class="absolute w-[50%] h-[60%] bottom-[30%] left-[0%] rotate-[-160deg] z-10">
      <component :is="ShapeHero1" filled />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  shapes: {
    type: Object,
    required: true,
  },
})

import ShapeHero1 from '~/assets/icons/shape-hero-1.svg'
</script>