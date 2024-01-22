<template>
  <div class="cards-icon">
    <div class="bg-white layout-p-normal">
      <div class="max-w-xl lg:max-w-7xl layout-w-normal">
        <Heading v-if="props.content.heading" text="dark" :copy="props.content.heading" />
        <div class="lg:grid lg:grid-cols-3 lg:gap-6">
          <div 
            v-for="(card, index) in props.content.cards" 
            :key="index" 
            class="block mb-6 last:mb-0 lg:mb-0 p-6 lg:p-8 bg-brand-wheat rounded-lg lg:min-h-[360px]"
          >
            <div class="h-8 w-8 mb-4">
              <component :is="card.icon" filled class="fill-p-navy" />
            </div>
            <h2 class="text-brand-navy text-2xl lg:text-3xl tracking-wide mb-4">{{ card.heading }}</h2>
            <p class="text-brand-navy">{{ card.text }}</p>
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