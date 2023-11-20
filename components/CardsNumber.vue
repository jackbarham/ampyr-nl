<template>
  <div class="cards-number">
    <div class="c-bg-navy py-14 lg:py-24">
      <div class="max-w-xl lg:max-w-7xl m-auto px-4 md:px-8">
        <h1 class="c-wheat text-center text-3xl md:text-4xl lg:text-5xl mb-12 lg:mb-20 max-w-md lg:max-w-full m-auto">{{ props.content.heading }}</h1>
        <div class="lg:grid lg:grid-cols-3 lg:gap-6">
          <div 
            v-for="(card, index) in props.content.cards" 
            :key="index" 
            class="block mb-6 last:mb-0 lg:mb-0 p-6 lg:p-8 c-bg-navy-dark rounded-lg lg:min-h-[360px] c-wheat"
          >
            <p class="font-no c-orange text-xl mb-4">{{ card.number }}</p>
            <h2 class="text-2xl lg:text-3xl font-normal tracking-wide mb-6">{{ card.heading }}</h2>
            <p class="font-light">{{ card.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
})
</script>