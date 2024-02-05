<template>
  <section v-editable="blok" class="image-full-curve">
    <div class="bg-white">
      <div class="pt-14 lg:pt-24 px-4 md:px-8">
        <Heading text="dark" :copy="blok.heading" />
      </div>
      <div class="relative h-[384px] md:h-[640px] lg:h-[768px] w-full">
        <svg class="svg-curve-up-bottom-sit-bottom fill-f-wheat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 24" preserveAspectRatio="none">
          <path fill="none" d="M0,24 Q50,0 100,24 V24 H0 Z" />
        </svg>
        <div class="absolute z-10 right-0 bottom-0 hidden md:block">
          <svgo-fan-bottom-right filled class="" />
        </div>
        <img :src="blok.image" alt="Hero" class="start-fade-in absolute h-full w-full object-cover">
      </div>
      <div class="bg-brand-wheat">
        <div class="lg:flex lg:justify-between lg:items-center max-w-xl lg:max-w-7xl m-auto pt-10 pb-14 lg:pt-20 lg:pb-24 px-6 md:px-12">
          <div class="max-w-3xl">
            <p class="text-brand-navy text-center lg:text-left text-lg lg:text-2xl lg:leading-normal font-no mb-8 lg:mb-0">{{ blok.text }}</p>
          </div>
          <div class="flex lg:block justify-center">
            <Button v-if="blok.button" theme="dark" :link="blok.button[0].link" :text="blok.button[0].label" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
  }
})

useAnimation({
  trigger: 'image-full-curve',
  classes: [
    { start: 'start-fade-in', animate: 'animate-fade-in' },
  ],
  threshold: 0.6
})
</script>