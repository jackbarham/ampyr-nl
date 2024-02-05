<template>
  <section v-editable="blok" class="image-text-left">
    <div class="bg-white image-text-left">
      <div class="relative h-[512px] lg:h-[768px] w-full">

        <div class="start-fade-in absolute z-20 w-full h-full">
          <div class="flex items-center h-full w-full max-w-6xl m-auto p-6">
            <div :class="blok.brow ? 'max-w-2xl' : 'max-w-md'" class="text-brand-navy">
              <p v-if="blok.brow" class="uppercase font-light tracking-widest mb-4 lg:mb-6">{{ blok.brow }}</p>
              <h2 class="text-4xl lg:text-5xl lg:leading-tight mb-10">{{ blok.heading }}</h2>
              <p v-if="blok.text" class="mb-10">{{ blok.text }}</p>
              <Button v-if="blok.button" theme="dark" :link="blok.button[0].link" :text="blok.button[0].label" />
            </div>
          </div>
        </div>

        <div class="absolute h-full w-full z-10 bg-gradient-to-r from-brand-wheat to-transparent opacity-100"></div>
        <NuxtImg :src="blok.image.filename" :alt="blok.image.title ? blok.image.title : ``" class="start-scale-out absolute h-full w-full object-cover opacity-80" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
  },
})

useAnimation({
  trigger: 'image-text-left',
  classes: [
    { start: 'start-scale-out', animate: 'animate-scale-out' },
    { start: 'start-fade-in', animate: 'animate-fade-in' },
  ],
  threshold: 0.6
})
</script>

