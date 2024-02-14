<template>
  <NuxtLink
    class="block last:mb-0 md:mb-0 bg-white scale-1 lg:hover:scale-[103%] rounded-2xl overflow-hidden group transition-all shadow-lg"
    :to="props.card.full_slug"
  >
    <div class="relative">
      <span class="bg-white text-brand-navy text-xs px-3 py-1 rounded-full absolute z-10 right-4 top-4 capitalize">{{ props.card.content.category }}</span>
      <NuxtImg 
        width="300"
        loading="lazy"
        :src="props.card.content.image.filename" 
        :alt="props.card.content.title" 
        class="w-full h-52 lg:h-60 object-cover" 
      />
    </div>
    <div class="relative p-6 md:h-60 text-brand-navy bg-white group-hover:bg-brand-navy-dark">
      <p class="text-xs mb-4 group-hover:text-white opacity-80">{{ formatDate(props.card.published_at) }}</p>
      <h2 class=" group-hover:text-white text-xl mb-6">{{ props.card.content.title }}</h2>
      <div class="md:absolute md:bottom-6 md:left-6 w-10 h-10 border border-brand-nl rounded-full p-0.5 bg-transparent group-hover:bg-brand-nl">
        <svgo-arrow-right filled class="fill-ps-navy" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  card: {
    type: Object,
    required: true,
  }
})

const { formatDate } = useDateFormat()
</script>