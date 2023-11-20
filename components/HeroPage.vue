<template>
  <div class="hero-page">
    <div class="c-bg-grey c-navy">
      <div class="max-w-lg md:max-w-7xl mx-auto pt-20 px-8">
        <div class="md:grid md:grid-cols-2 md:items-center pt-8 pb-12 md:pt-4 lg:pb-20 lg:pt-4">

          <div class="relative text-center md:text-left h-1/2 md:h-auto mb-8 md:mb-0 md:pr-6 lg:pr-8 xl:pr-36">
            <h2 class="text-4xl md:text-5xl lg:text-6xl mb-6">{{ props.content.heading }}</h2>
            <p class="text-lg lg:text-xl font-light mb-6 lg:mb-12">{{ props.content.intro }}</p>
            <Button theme="dark" :link="props.content.buttonLink" :text="props.content.buttonText" />
          </div>

          <HeroShape1 v-if="props.content.shapes.type === 1" :shapes="props.content.shapes" />
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