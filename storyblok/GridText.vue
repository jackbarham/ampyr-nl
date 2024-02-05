<template>
  <section v-editable="blok" class="grid-text">
    <div class="bg-brand-navy layout-p-normal">
      <div class="max-w-md lg:max-w-5xl layout-w-normal">
        <Heading text="light" copy="The Benefits" />
        <div class="lg:grid lg:grid-cols-3 lg:gap-28 text-center">
          <div 
            v-for="(item, index) in blok.grid_text_items" 
            :key="index" 
            class="start-fade-scale mb-12 last:mb-0 lg:mb-0 px-4 lg:px-0"
          >
            <div class="h-10 w-10 mb-4 mx-auto">
              <component :is="componentMapping[item.icon]" filled class="fill-ps-nl" />
            </div>
            <h2 class="text-brand-nl text-2xl lg:text-4xl font-normal tracking-wide mb-6">{{ item.title }}</h2>
            <p class="">{{ item.text }}</p>
          </div>
        </div>
      </div>
      <div class="grid-text-svg">
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
  }
})

import IconWorld from '~/assets/icons/world.svg'
import IconLeaf from '~/assets/icons/leaf.svg'
import IconHeartHandshake from '~/assets/icons/heart-handshake.svg'

const componentMapping = {
  'IconWorld': IconWorld,
  'IconLeaf': IconLeaf,
  'IconHeartHandshake': IconHeartHandshake
}

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