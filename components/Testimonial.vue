<template>
  <div class="testimonial">
    <div class="relative overflow-hidden c-bg-wheat py-12 md:py-24">
      <div class="absolute w-[460px] h-[460px] -bottom-[160px] rotate-[130deg] md:rotate-0 right-20 md:top-0 md:right-0">
        <svgo-fan-quarter filled />
      </div>
      <div class="relative z-10 max-w-6xl m-auto px-8 pb-32 md:pb-0">
        <div class="md:max-w-xl lg:max-w-3xl c-navy font-no">
          <p class="text-2xl md:text-4xl font-medium md:leading-snug mb-10">{{ testimonial.quote }}</p>
          <p class="text-3xl mb-2">{{ testimonial.name }}</p>
          <p class="text-2xl">{{ testimonial.company }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const testimonial = {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      name: 'Name Surname',
      company: 'Company',
    }
</script>