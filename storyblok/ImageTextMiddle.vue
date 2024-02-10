<template>
  <section v-editable="blok" class="image-text-middle">
    <div class="bg-brand-wheat">
      <div class="start-circle-out">
        <div class="relative py-28 md:py-40 w-full">
          <div class="relative z-20 w-full h-full">
            <div class="flex items-center h-full w-full max-w-4xl m-auto p-6">
              <div class="text-center text-brand-navy">
                <p v-if="blok.brow" class="uppercase font-light tracking-widest mb-4 lg:mb-6">{{ blok.brow }}</p>
                <h3 class="mb-12 text-2xl lg:text-4xl lg:leading-snug">{{ blok.text }}</h3>
                <Button
                  v-if="blok.button[0]"
                  :link="blok.button[0].link"
                  :text="blok.button[0].label"
                  theme="dark"
                />
              </div>
            </div>
          </div>
          <NuxtImg 
            width="600"
            loading="lazy"
            :src="blok.image.filename" 
            :alt="blok.image.title" 
            class="absolute h-full w-full top-0 object-cover opacity-30" 
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object })

useAnimation({
  trigger: 'image-text-middle',
  classes: [
    { start: 'start-circle-out', animate: 'animate-circle-out' },
  ],
  threshold: 0.5
})
</script>