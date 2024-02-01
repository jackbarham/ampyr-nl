<template>
  <section v-editable="props.blok" class="image-text-middle">
    <div class="bg-brand-wheat">
      <div class="start-circle-out">
        <div class="relative py-28 md:py-40 w-full">
          <div class="relative z-20 w-full h-full">
            <div class="flex items-center h-full w-full max-w-4xl m-auto p-6">
              <div class="text-center text-brand-navy">
                <p v-if="props.blok.brow" class="uppercase font-light tracking-widest mb-4 lg:mb-6">{{ props.blok.brow }}</p>
                <h3 class="mb-12 text-2xl lg:text-4xl lg:leading-snug">{{ props.blok.text }}</h3>
                <Button
                  v-if="props.blok.button[0]"
                  :link="props.blok.button[0].url"
                  :text="props.blok.button[0].label"
                  theme="dark"
                />
              </div>
            </div>
          </div>
          <NuxtImg :src="props.blok.image.filename" :alt="props.blok.image.title" class="absolute h-full w-full top-0 object-cover opacity-30" />
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

useAnimation({
  trigger: 'image-text-middle',
  classes: [
    { start: 'start-circle-out', animate: 'animate-circle-out' },
  ],
  threshold: 0.5
})
</script>