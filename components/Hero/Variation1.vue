<template>
  <div class="relative pb-[100%]">
    <NuxtImg 
      width="350"
      height="350"
      :src="props.shapes.img1.filename" 
      :alt="props.shapes.img1.alt" 
      class="absolute w-[60%] h-[60%] top-0 right-0 z-40 rounded-full" 
    />
    <NuxtImg 
      width="150"
      height="150"
      :src="props.shapes.img2.filename" 
      :alt="props.shapes.img1.alt" 
      class="absolute w-[24%] h-[24%] bottom-[10%] right-[10%] z-10 rounded-full" 
    />
    <NuxtImg 
      width="250"
      height="250"
      :src="props.shapes.img3.filename" 
      :alt="props.shapes.img1.alt" 
      class="absolute w-[42%] h-[42%] bottom-0 left-[5%] z-10 rounded-full" 
    />
    <div class="absolute w-[50%] h-[70%] bottom-[20%] left-[10%] z-20">
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