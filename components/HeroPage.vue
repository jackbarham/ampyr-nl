<template>
  <div class="hero-page">
    <div class="c-bg-grey c-navy">
      <div class="max-w-lg md:max-w-7xl mx-auto pt-20 px-8">
        <div class="md:grid md:gap-20 md:grid-cols-2 md:items-center py-8 md:py-20">

          <div class="relative text-center md:text-left h-1/2 md:h-auto mb-8 md:mb-0">
            <h2 class="text-4xl md:text-5xl lg:text-6xl mb-6">{{ props.content.heading }}</h2>
            <p class="text-lg lg:text-xl font-light mb-6 lg:mb-12">{{ props.content.intro }}</p>
            <Button theme="dark" :link="props.content.buttonLink" :text="props.content.buttonText" />
          </div>

          <div class="relative pb-[100%] ">
            <img class="absolute w-[60%] h-[60%] top-0 right-0 z-40 rounded-full" :src="props.content.image.shape1" alt="">
            <img class="absolute w-[24%] h-[24%] bottom-[10%] right-[10%] z-10 rounded-full" :src="props.content.image.shape2" alt="">
            <img class="absolute w-[42%] h-[42%] bottom-0 left-[10%] z-10 rounded-full" :src="props.content.image.shape3" alt="">
            <div class="absolute w-[50%] h-[70%] bottom-[20%] left-[10%] z-20">
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