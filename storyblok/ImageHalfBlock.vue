<template>
  <div v-editable="blok" class="image-half relative">
    <div :class="backgroundClass">
      <div class="grid grid-cols-1 md:grid-cols-2 items-center">
        <div class="relative overflow-hidden">
          <NuxtImg
            provider="storyblok"
            class="w-full h-[384px] md:h-[640px] lg:h-[768px] object-cover"
            :src="blok.image.filename"
          />
          <svg :class="svgFill" class="svg-curve-down-bottom block md:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 24" preserveAspectRatio="none">
            <path fill="none" d="M0,0 Q50,48 100,0 V24 H0 Z" />
          </svg>
          <svg :class="svgFill" class="svg-curve-down-right hidden md:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 100" preserveAspectRatio="none">
            <path fill="none" d="M0,0 Q48,50 0,100 V100 H24 V0 Z" />
          </svg>
        </div>
        <div class="max-w-xl mx-auto md:mx-0 py-14 px-8 lg:px-20 text-center md:text-left text-brand-navy">
          <span class="inline-block uppercase text-xs tracking-widest mb-4 lg:mb-6">{{ blok.category }}</span>
          <h2 class="text-3xl lg:text-5xl mb-6 lg:mb-8">{{ blok.heading }}</h2>
          <p class="lg:text-xl" :class="{ 'mb-8': blok.button }">{{ blok.text }}</p>
          <Button v-if="blok.button" theme="dark" :link="blok.button[0].link" :text="blok.button[0].label" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })

let backgroundClass = ref('bg-brand-grey')
let svgFill = ref('fill-f-grey')

onMounted(() => {

  // backgroundClass = computed(() => {
  //   return blok?.theme === 'white' ? 'bg-white' : 'bg-brand-grey'
  // })

  // svgFill = computed(() => {
  //   return blok?.theme === 'white' ? 'fill-f-white' : 'fill-f-grey'
  // })

})

</script>