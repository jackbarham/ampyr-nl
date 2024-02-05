<template>
  <div v-editable="blok" class="cards-number">
    <div class="bg-brand-navy layout-p-normal">
      <div class="max-w-xl lg:max-w-7xl layout-w-normal">
        <Heading text="light" :copy="blok.heading" />
        <div class="lg:grid lg:grid-cols-3 lg:gap-6">
          <div 
            v-for="(card, index) in blok.cards" 
            :key="index" 
            class="block mb-6 last:mb-0 lg:mb-0 p-6 lg:p-8 bg-brand-navy-dark rounded-lg lg:min-h-[360px] text-brand-wheat"
          >
            <p class="font-neworder text-brand-nl text-xl mb-4">{{ card.number }}</p>
            <h2 class="font-neworder text-2xl lg:text-3xl font-normal tracking-wide mb-6">{{ card.title }}</h2>
            <p class="">{{ card.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>