<template>
  <div class="relative pb-[100%]">
    <img class="absolute w-[28%] h-[28%] top-0 right-0 z-40 rounded-full" :src="props.shapes.img1" alt="">
    <img class="absolute w-[76%] h-[76%] bottom-[0%] right-[5%] z-10 rounded-full" :src="props.shapes.img2" alt="">
    <img class="absolute w-[16%] h-[16%] top-[7%] left-[32%] z-20 rounded-full" :src="props.shapes.img3" alt="">
    <div class="absolute w-[50%] h-[60%] bottom-[30%] left-[0%] rotate-[-160deg] z-10">
      <component :is="props.shapes.svg" filled />
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
</script>