<template>
  <section v-editable="props.blok" class="hero-page">
    <div class="bg-brand-grey text-brand-navy">
      <div class="max-w-lg md:max-w-7xl pt-24 md:pt-20 layout-w-normal">
        <div class="grid md:grid-cols-2 items-center pb-12 lg:pb-20">
          <div class="relative text-center md:text-left h-1/2 md:h-auto mb-8 md:mb-0 md:pr-6 lg:pr-8 xl:pr-12">
            <h2 class="text-4xl md:text-5xl lg:text-6xl mb-6">{{ props.blok.heading }}</h2>
            <p class="text-lg lg:text-xl lg:leading-relaxed">{{ props.blok.intro }}</p>
          </div>
          <Variation1 v-if="props.blok.variations[0].type == 1" :shapes="props.blok.variations[0]" />
          <Variation2 v-if="props.blok.variations[0].type == 2" :shapes="props.blok.variations[0]" />
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
const props = defineProps({
  blok: {
    type: Object,
    required: true,
  },
})
</script>