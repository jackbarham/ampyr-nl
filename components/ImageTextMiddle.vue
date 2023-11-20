<template>
  <div class="image-text-middle">
    <div class="c-bg-wheat">
      <div class="start-circle-out">

        <div class="relative h-[512px] lg:h-[640px] w-full">
          <div class="absolute z-20 w-full h-full">
            <div class="flex items-center h-full w-full max-w-4xl m-auto p-6">
              <div class="text-center c-navy">
                <h3 class="mb-12 text-2xl lg:text-4xl lg:leading-snug">{{ props.content.text }}</h3>
                <Button 
                  v-if="props.content.button" 
                  :link="props.content.button.link" 
                  :text="props.content.button.text" 
                  theme="dark" 
                />
              </div>
            </div>
          </div>
          <img src="https://static.jackbarham.com/ampyr/hero.jpg" alt="Hero" class="absolute h-full w-full object-cover opacity-50">
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

useAnimation({
  trigger: 'image-text-middle',
  classes: [
    { start: 'start-circle-out', animate: 'animate-circle-out' },
  ],
  threshold: 0.6
})
</script>