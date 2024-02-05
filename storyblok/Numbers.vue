<template>
  <section v-editable="blok" class="numbers">
    <div class="bg-brand-navy layout-p-normal">
      <div class="max-w-6xl layout-w-normal">
        <Heading text="light" :copy="blok.copy" />
        <div class="numbers-grid grid grid-cols-1 lg:grid-cols-3 gap-4 text-center">
          <div
            v-for="(stat, index) in blok?.number_stats"
            :key="index"
            class="start-fade-scale mb-12 last:mb-0 lg:mb-0"
          >
            <div class="mb-6">
              <div class="h-10 w-10 mb-4 mx-auto">
                <!-- convert stat.icon[0] to object nbot string -->
              <component :is="componentMapping[stat.icon[0]]" filled class="fill-p-orange" />
            </div>
            </div>
            <div class="relative rounded-full w-48 h-48 m-auto flex items-center mb-6">
              <div class="relative z-10 text-center w-48 pt-1">
                <span class="block text-5xl font-medium font-neworder mb-1">{{ stat.heading }}</span>
                <span class="uppercase text-xl block font-neworder">{{ stat.sub }}</span>
              </div>
              <NuxtImg provider="storyblok" :src="stat.image.filename" :alt="stat.heading" class="absolute w-48 h-48 object-cover rounded-full opacity-50" />
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
defineProps({ blok: Object})

import IconCalendar from '~/assets/icons/calendar.svg'
import IconLandmark from '~/assets/icons/landmark.svg'
import IconPlug from '~/assets/icons/plug.svg'

const componentMapping = {
  'IconCalendar': IconCalendar,
  'IconLandmark': IconLandmark,
  'IconPlug': IconPlug
}

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