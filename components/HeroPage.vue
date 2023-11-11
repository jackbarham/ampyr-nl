<template>
  <div class="hero-page">
    <div class="c-bg-grey c-navy">
      <div class="max-w-xl lg:max-w-7xl mx-auto pt-24 lg:pt-20 px-8">
        <div class="h-[640px] lg:h-[768px] lg:grid lg:gap-12 lg:grid-cols-2 lg:items-center">

          <div class="relative text-center lg:text-left h-1/2 lg:h-auto ">
            <h2 class="text-4xl md:text-6xl mb-6">{{ props.content.heading }}</h2>
            <p class="text-base lg:text-lg font-light mb-6 lg:mb-12">{{ props.content.intro }}</p>
            <Button theme="dark" :link="props.content.buttonLink" :text="props.content.buttonText" />
          </div>

          <div class="relative h-1/2 lg:h-full ">
            <img class="absolute w-44 h-44 lg:w-96 lg:h-96 top-10 right-0 z-40 rounded-full" :src="props.content.image.shape1" alt="">
            <img class="absolute w-24 h-24 lg:w-40 lg:h-40 bottom-4 right-8 lg:bottom-32 lg:right-8 z-10 rounded-full" :src="props.content.image.shape2" alt="">
            <img class="absolute w-36 h-36 lg:w-64 lg:h-64 bottom-10 left-6 lg:bottom-20 lg:left-0 z-10 rounded-full" :src="props.content.image.shape3" alt="">
            <div class="absolute w-44 h-44 lg:w-96 lg:h-96 bottom-24 left-16 lg:bottom-48 lg:left-16 z-20">
              <component :is="props.content.svg" filled />
            </div>
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