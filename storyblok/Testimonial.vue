<template>
  <section v-editable="blok" class="testimonial">
    <div class="relative overflow-hidden bg-brand-wheat py-14 md:py-32">
      <div class="absolute w-[460px] h-[460px] -bottom-[160px] rotate-[130deg] md:rotate-0 right-20 md:top-0 md:right-0">
        <svgo-fan-quarter filled />
      </div>
      <div class="relative z-10 max-w-6xl m-auto px-8 pb-32 md:pb-0">
        <div class="md:max-w-xl lg:max-w-3xl text-brand-navy font-neworder">
          <p class="text-2xl md:text-4xl font-medium md:leading-snug mb-10">{{ blok.quote }}</p>
          <p class="text-3xl mb-2">{{ blok.name }}</p>
          <p class="text-2xl">{{ blok.company }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ blok: Object })
</script>