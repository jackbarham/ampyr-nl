<template>
  <div class="md:flex justify-center items-center text-center mb-6 md:mb-8">
    <p class="text-brand-navy mx-1 mb-4 md:mb-2 text-sm tracking-wider uppercase">Filter by:</p>
    <div class="flex flex-wrap justify-center items-center">
      <span 
        :class="{ 'bg-brand-nl !border-brand-nl': currentCategory === '' }"
        class="block mx-1 mb-2 text-brand-navy text-xs px-3 py-1 rounded-full border border-brand-navy capitalize hover:cursor-pointer"
        @click="updateCategory('')"
      >All projects</span>
      <span 
        v-for="category in uniqueCategories" 
        :key="category" 
        class="block mx-1 mb-2 text-brand-navy text-xs px-3 py-1 rounded-full border border-black capitalize hover:cursor-pointer" 
        :class="{ 'bg-brand-nl !border-brand-nl': currentCategory === category }"
        @click="updateCategory(category)"
      >{{ category }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  uniqueCategories: Array,
  currentCategory: String
})

const emit = defineEmits(['update-category'])

function updateCategory(category) {
  emit('update-category', category)
}
</script>