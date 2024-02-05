<template>
  <section v-editable="blok" class="statistics">
    <div class="bg-brand-navy layout-p-normal">
      <div class="max-w-6xl layout-w-normal">
        <Heading text="light" :copy="blok.heading" />
        <div class="statistics-grid grid grid-cols-1 lg:grid-cols-3 gap-4 text-center">
          <div
            v-for="(stat, index) in blok.stats"
            :key="index"
            class="start-fade-scale mb-12 last:mb-0 lg:mb-0"
          >
            <div class="mb-6">
              <img class="w-10 h-10 m-auto mb-4" :src="stat.flag" :alt="stat.country" />
              <p class="font-light uppercase text-sm tracking-widest">{{ stat.country }}</p>
            </div>
            <div class="relative rounded-full w-48 h-48 m-auto flex items-center mb-6">
              <div class="relative z-10 text-center w-48">
                <span class="block text-5xl font-medium font-neworder mb-1">{{ stat.mw }}</span>
                <span class="uppercase text-2xl block font-neworder mb-2">mw</span>
                <span class="block uppercase text-sm font-light tracking-widest">{{ stat.projects }} projects</span>
              </div>
              <img :src="stat.image.filename" alt="Description" class="absolute w-48 h-48 object-cover rounded-full opacity-50">
            </div>
            <div class="mb-4">
              <p class="font-neworder text-2xl mb-1" :class="stat.color">{{ stat.development }}<span class="text-lg uppercase font-light">mw</span></p>
              <p class="font-light uppercase text-xs tracking-widest">Under development</p>
            </div>
            <div class="mb-0">
              <p class="font-neworder text-2xl mb-1" :class="stat.color">{{ stat.construction }}<span class="text-lg uppercase font-light">mw</span></p>
              <p class="font-light uppercase text-xs tracking-widest">Under construction</p>
            </div>
          </div>
        </div>
      </div>
      <div class="statistics-svg">
        <svgo-shape-long filled class="start-reveal-right hidden lg:block pt-20 opacity-80" />
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
  trigger: 'statistics-grid',
  classes: [
    { start: 'start-fade-scale', animate: 'animate-fade-scale' },
  ],
  threshold: 0.2
})

useAnimation({
  trigger: 'statistics-svg',
  classes: [
    { start: 'start-reveal-right', animate: 'amimate-reveal-right' },
  ],
  threshold: 0.7
})
</script>