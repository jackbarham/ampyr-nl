<template>
  <div class="relative pb-[100%]">
    <img class="absolute w-[64%] h-[64%] top-0 right-0 z-40 rounded-full" :src="props.shapes.img1" alt="">
    <img class="absolute w-[34%] h-[34%] bottom-[0%] right-[0%] z-10 rounded-full" :src="props.shapes.img2" alt="">
    <img class="absolute w-[26%] h-[26%] bottom-[16%] left-[5%] z-10 rounded-full" :src="props.shapes.img3" alt="">
    <div class="absolute w-[45%] h-[65%] bottom-[10%] left-[20%] rotate-[325deg] z-20">
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