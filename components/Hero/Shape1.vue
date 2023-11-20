<template>
  <div class="relative pb-[100%]">
    <img class="absolute w-[60%] h-[60%] top-0 right-0 z-40 rounded-full" :src="props.shapes.img1" alt="">
    <img class="absolute w-[24%] h-[24%] bottom-[10%] right-[10%] z-10 rounded-full" :src="props.shapes.img2" alt="">
    <img class="absolute w-[42%] h-[42%] bottom-0 left-[10%] z-10 rounded-full" :src="props.shapes.img3" alt="">
    <div class="absolute w-[50%] h-[70%] bottom-[20%] left-[10%] z-20">
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