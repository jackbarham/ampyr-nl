<template>
  <div class="cards-icon">

    <div class="bg-white py-14 lg:py-24">
      <div class="max-w-xl lg:max-w-7xl m-auto px-4 md:px-8">
        <h1 class="c-navy text-center text-3xl md:text-4xl lg:text-5xl mb-12 lg:mb-20 max-w-md lg:max-w-full m-auto">{{ props.content.heading }}</h1>
        <div class="lg:grid lg:grid-cols-3 lg:gap-6">
          <div 
            v-for="(card, index) in props.content.cards" 
            :key="index" 
            class="block mb-6 last:mb-0 lg:mb-0 p-6 lg:p-8 c-bg-wheat rounded-lg lg:min-h-[360px]"
          >
            <div class="h-8 w-8 mb-4">
              <component :is="card.icon" filled class="fill-p-navy" />
            </div>
            <h2 class="c-navy text-2xl lg:text-3xl tracking-wide mb-4">{{ card.heading }}</h2>
            <p class="c-navy font-light">{{ card.text }}</p>
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