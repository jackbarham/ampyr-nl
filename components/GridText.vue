<template>
  <div class="grid-text">
    <div class="bg-brand-navy layout-p-normal">
      <div class="max-w-md lg:max-w-5xl layout-w-normal">
        <Heading text="light" copy="The Benefits" />
        <div class="lg:grid lg:grid-cols-3 lg:gap-28 text-center">
          <div 
            v-for="(item, index) in items" 
            :key="index" 
            class="start-fade-scale mb-12 last:mb-0 lg:mb-0 px-4 lg:px-0"
          >
            <div class="h-10 w-10 mb-4 mx-auto">
              <component :is="item.icon" filled class="fill-p-orange" />
            </div>
            <h2 class="text-brand-nl text-2xl lg:text-4xl font-normal tracking-wide mb-6">{{ item.heading }}</h2>
            <p class="">{{ item.text }}</p>
          </div>
        </div>
      </div>
      <div class="statistics-svg">
        <svgo-shape-long filled class="start-reveal-right hidden lg:block pt-20 opacity-80" />
      </div>
    </div>
  </div>
</template>

<script setup>
import IconWorld from '~/assets/icons/world.svg'
import IconLeaf from '~/assets/icons/leaf.svg'
import IconheartHandshake from '~/assets/icons/heart-handshake.svg'

const items = [
  {
    icon: IconWorld,
    heading: 'Benefit One',
    text: 'Ac odio tempor orci dapibus ultrices in iaculis. Eget egestas purus viverra accumsan in nisl nisi scelerisque.',
  },
  {
    icon: IconLeaf,
    heading: 'Benefit Two',
    text: 'Ac odio tempor orci dapibus ultrices in iaculis. Eget egestas purus viverra accumsan in nisl nisi scelerisque.',
  },
  {
    icon: IconheartHandshake,
    heading: 'Benefit Three',
    text: 'Ac odio tempor orci dapibus ultrices in iaculis. Eget egestas purus viverra accumsan in nisl nisi scelerisque.',
  },
]

useAnimation({
  trigger: 'grid-text',
  classes: [
    { start: 'start-fade-scale', animate: 'animate-fade-scale' },
  ],
  threshold: 0.2
})

useAnimation({
  trigger: 'grid-text-svg',
  classes: [
    { start: 'start-reveal-right', animate: 'amimate-reveal-right' },
  ],
  threshold: 0.7
})
</script>