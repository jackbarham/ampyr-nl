<template>
  <section class="hero-short">
    <div class="bg-brand-grey">
      <div class="flex items-center w-full h-[460px] md:h-[600px] relative z-20">
        <div class="max-w-xl text-center m-auto w-full p-6">
          <h2 class="text-4xl text-brand-navy md:text-6xl mb-6 font-normal leading-tight lg:leading-snug">{{ props.title }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>