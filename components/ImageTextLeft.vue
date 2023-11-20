<template>
  <div class="image-text-left">
    <div class="bg-white">
      <div class="relative h-[512px] lg:h-[768px] w-full">

        <div class="start-fade-in absolute z-20 w-full h-full">
          <div class="flex items-center h-full w-full max-w-6xl m-auto p-6">
            <div class="max-w-md c-navy">
              <h2 class="text-4xl lg:text-5xl lg:leading-tight mb-10">{{ props.content.heading }}</h2>
              <p class="mb-10">{{ props.content.text }}</p>
              <Button 
                v-if="props.content.buttonLink" 
                :link="props.content.buttonLink" 
                :text="props.content.buttonText" 
                theme="dark" 
              />
            </div>
          </div>
        </div>
        
        <div class="absolute h-full w-full z-10 bg-gradient-to-r from-[#F4ECDF] to-transparent opacity-100"></div>
        <img 
          :src="props.content.image" 
          :alt="props.content.alt" 
          class="start-scale-out absolute h-full w-full object-cover opacity-80" 
        />
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

useAnimation({
  trigger: 'image-text-left',
  classes: [
    { start: 'start-scale-out', animate: 'animate-scale-out' },
    { start: 'start-fade-in', animate: 'animate-fade-in' },
  ],
  threshold: 0.6
})
</script>

