<template>
  <setion v-editable="blok" class="cards-icon">
    <div class="bg-white layout-p-normal">
      <div class="max-w-xl lg:max-w-7xl layout-w-normal">
        <Heading v-if="blok.heading" text="dark" :copy="blok.heading" />
        <div class="lg:grid lg:grid-cols-3 lg:gap-6">
          <div 
            v-for="(card, index) in blok.cards_icon_items" 
            :key="index" 
            class="block mb-6 last:mb-0 lg:mb-0 p-6 lg:p-8 bg-brand-wheat rounded-lg lg:min-h-[360px]"
          >
            <div class="h-8 w-8 mb-4">
              <component :is="componentMapping[card.icon]" filled class="fill-ps-navy" />
            </div>
            <h2 class="text-brand-navy text-2xl lg:text-3xl tracking-wide mb-4">{{ card.title }}</h2>
            <p class="text-brand-navy">{{ card.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </setion>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
  }
})

import IconWorld from '~/assets/icons/world.svg'
import IconSun from '~/assets/icons/sun.svg'
import IconPlant from '~/assets/icons/plant.svg'

const componentMapping = {
  'IconWorld': IconWorld,
  'IconSun': IconSun,
  'IconPlant': IconPlant
}

</script>