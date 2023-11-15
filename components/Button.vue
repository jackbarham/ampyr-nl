<template>
  <NuxtLink v-if="props.theme === 'light'" :to="props.link" class="button inline-block border border-white hover:border-[#FFBFA6] rounded-full group overflow-hidden">
    <span class="flex relative items-center p-2">
      <span class="relative z-10 text-white group-hover:c-navy mr-4 ml-4 text-lg f-new-order">{{ props.text }}</span>
      <span class="absolute h-10 w-10 right-2 scale-100 group-hover:scale-[1300%] transition-all duration-500 c-bg-nederland rounded-full"></span>
      <span class="h-10 w-10 relative">
        <svgo-arrow-right filled class="fill-p-navy" />
      </span>
    </span>
  </NuxtLink>
  <NuxtLink v-if="props.theme === 'dark'" :to="props.link" class="button inline-block border border-navy hover:border-[#FFBFA6] rounded-full group transition overflow-hidden">
    <span class="flex relative items-center p-2">
      <span class="relative z-10 c-navy group-hover:c-navy mr-4 ml-4 text-lg font-medium f-new-order">{{ props.text }}</span>
      <span class="absolute h-10 w-10 right-2 scale-100 group-hover:scale-[1300%] transition-all duration-500 c-bg-nederland rounded-full"></span>
      <span class="h-10 w-10 relative">
        <svgo-arrow-right filled class="fill-p-navy" />
      </span>
    </span>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps({
    theme: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  });
</script>