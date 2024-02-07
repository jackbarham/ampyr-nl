<template>
  <section v-editable="blok" class="cards-large">
    <div class="bg-white">
      <div class="max-w-7xl layout-w-normal py-14 lg:py-24">
        <div
          v-for="(card, index) in blok.cards"
          :key="index"
          class="p-4 lg:p-6 bg-brand-navy items-center lg:grid lg:grid-cols-2 lg:gap-4 rounded-2xl mb-4 lg:mb-12 last:mb-0"
        >
          <NuxtImg :key="index" :src="card.image.filename" :alt="card.heading" class="w-full h-48 md:h-72 lg:h-96 object-cover rounded-lg" />
          <div class="max-w-lg m-auto pt-6 lg:pt-0 lg:px-12 text-center lg:text-left">
            <h2 class="text-brand-wheat font-normal text-3xl mb-6">{{ card.heading }}</h2>
            <p class="text-brand-whe mb-8">{{ card.text }}</p>
            <Button theme="light" :link="card.button[0].link" :text="card.button[0].label" />
            <!-- <p>{{ card.button[0].link }}</p> -->
          </div>
        </div>
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
</script>