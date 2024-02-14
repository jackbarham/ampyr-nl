<template>
  <NuxtLink 
    class="inline-block lg:grid lg:grid-cols-2 bg-white scale-1 lg:hover:scale-[101%] rounded-2xl overflow-hidden group transition-all shadow-lg"
    :to="props.card.full_slug"
  >
    <div class="relative lg:order-2">
      <span class="bg-white text-brand-navy text-xs px-3 py-1 rounded-full absolute z-10 right-4 top-4 capitalize">{{ props.card.content.category }}</span>
      <NuxtImg 
        width="300"
        loading="lazy"
        :src="props.card.content.image.filename" 
        :alt="props.card.content.title" 
        class="w-full h-full object-cover" 
      />
    </div>
    <div class="relative pt-6 pl-6 pr-10 pb-24 md:pb-36 bg-white group-hover:bg-brand-navy-dark text-brand-navy lg:order-1">
      <p class="text-sm mb-6 group-hover:text-white opacity-70">{{ formatDate(props.card.published_at) }}</p>
      <h2 class="group-hover:text-white text-2xl md:text-4xl leading-tight mb-8">{{ props.card.content.title }}</h2>
      <p class="group-hover:text-white">{{ props.card.content.teser }}</p>
      <div class="absolute bottom-6 left-6 w-10 h-10 border border-brand-nl rounded-full p-0.5 bg-transparent group-hover:bg-brand-nl">
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