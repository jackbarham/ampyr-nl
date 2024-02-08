<template>
  <div v-editable="blok">
    <div class="temp-legal-copy">
      <div class="max-w-3xl mx-auto py-12 md:py-28 px-4">
        <div class="prose prose-base text-brand-navy">
          <p>{{ blok.headline }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ 
  blok: Object, 
  siteConfig: Object
})
</script>