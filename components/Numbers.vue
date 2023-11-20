<template>
  <div class="numbers">
    <div class="c-bg-navy py-14 lg:py-24">
      <div class="max-w-6xl m-auto px-4 md:px-8">
        <h1 class="text-white text-center text-3xl md:text-4xl lg:text-5xl mb-12 lg:mb-20 max-w-md lg:max-w-full m-auto">Our Numbers</h1>
        <h2 class="text-center text-2xl font-light">Component in development</h2>
      </div>
      <svgo-test2 filled class="start-reveal-right hidden lg:block pt-20 opacity-80" />
    </div>
  </div>
</template>

<script setup>
// const props = defineProps({
//   content: {
//     type: Object,
//     required: true,
//   },
// })
useAnimation({
  trigger: 'numbers',
  classes: [
    { start: 'start-reveal-right', animate: 'amimate-reveal-right' },
    { start: 'start-fade-scale', animate: 'animate-fade-scale' },
  ],
  threshold: 0.6
})
</script>