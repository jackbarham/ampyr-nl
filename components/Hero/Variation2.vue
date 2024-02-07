<template>
  <div class="relative pb-[100%]">
    <NuxtImg :src="props.shapes.img1.filename" :alt="props.shapes.img1.title ? props.shapes.img1.title : 'alt title needed'" class="absolute w-[28%] h-[28%] top-0 right-0 z-40 rounded-full" />
    <NuxtImg :src="props.shapes.img2.filename" :alt="props.shapes.img2.title ? props.shapes.img2.title : 'alt title needed'" class="absolute w-[76%] h-[76%] bottom-[0%] right-[5%] z-10 rounded-full" />
    <NuxtImg :src="props.shapes.img3.filename" :alt="props.shapes.img3.title ? props.shapes.img3.title : 'alt title needed'" class="absolute w-[16%] h-[16%] top-[7%] left-[32%] z-20 rounded-full" />
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