<template>
  <NuxtLink 
    :to="props.link.url" 
    :class="[isLight ? 'border-white hover:border-brand-nl' : 'border-brand-navy hover:border-brand-nl font-medium' ]"
    class="button inline-block border rounded-full overflow-hidden transition group"
  >
    <span class="flex relative items-center p-2">
      <span 
        :class="[isLight ? 'text-white group-hover:text-brand-navy' : 'text-brand-navy']"
        class="relative z-10 mr-4 ml-4 text-lg font-neworder"
      >{{ props.text }}</span>
      <span class="absolute h-10 w-10 right-2 scale-100 group-hover:scale-[1300%] transition-all duration-500 bg-brand-nl rounded-full"></span>
      <span class="h-10 w-10 relative">
        <svgo-arrow-right filled class="fill-ps-navy" />
      </span>
    </span>
  </NuxtLink>

  <!-- <p class="text-brand-navy">{{ props.link }}</p> -->
</template>

<script setup>
const props = defineProps({
  theme: {
    type: String,
    required: true,
  },
  link: {
    type: Object,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
})

console.log(props.link)

const isLight = computed(() => props.theme === 'light')
</script>