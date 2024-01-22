<template>
  <section class="numbers">
    <div class="bg-brand-navy layout-p-normal">
      <div class="max-w-6xl layout-w-normal">
        <Heading text="light" copy="Our numbers" />
        <div class="numbers-grid grid grid-cols-1 lg:grid-cols-3 gap-4 text-center">
          <div 
            v-for="(stat, index) in stats" 
            :key="index" 
            class="start-fade-scale mb-12 last:mb-0 lg:mb-0"
          >
            <div class="mb-6">
              <div class="h-10 w-10 mb-4 mx-auto">
              <component :is="stat.icon" filled class="fill-p-orange" />
            </div>
            </div>
            <div class="relative rounded-full w-48 h-48 m-auto flex items-center mb-6">
              <div class="relative z-10 text-center w-48 pt-1">
                <span class="block text-5xl font-medium font-neworder mb-1">{{ stat.heading }}</span>
                <span class="uppercase text-xl block font-neworder">{{ stat.sub }}</span>
              </div>
              <img :src="stat.image" alt="Description" class="absolute w-48 h-48 object-cover rounded-full opacity-50">
            </div>
            <p class="text-sm w-60 mx-auto">{{ stat.text }}</p>
          </div>
        </div>
      </div>
      <div class="numbers-svg">
        <svgo-shape-long filled class="start-reveal-right hidden lg:block pt-20 opacity-80" />
      </div>
    </div>
  </section>
</template>

<script setup>
import IconWorld from '~/assets/icons/world.svg'

const stats = [
  {
    icon: IconWorld,
    heading: '20+',
    sub: 'Years',
    text: 'Our project development team boasts over two decades of valuable experience.',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  {
    icon: IconWorld,
    heading: '€600M',
    sub: 'Investment',
    text: '600M injection fortifies our company and projects, ensuring stability.',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
  {
    icon: IconWorld,
    heading: '5',
    sub: 'Gigawatts',
    text: 'Our EPC team boasts extensive expertise, recently completing a 5GW project.',
    image: 'https://static.jackbarham.com/ampyr/hero.jpg',
  },
]

useAnimation({
  trigger: 'numbers-grid',
  classes: [
    { start: 'start-fade-scale', animate: 'animate-fade-scale' },
  ],
  threshold: 0.2
})

useAnimation({
  trigger: 'numbers-svg',
  classes: [
    { start: 'start-reveal-right', animate: 'amimate-reveal-right' },
  ],
  threshold: 0.7
})
</script>