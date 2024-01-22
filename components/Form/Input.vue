
<template>
  <div class="relative z-0 mb-8">
    <input 
      :type="props.type" 
      :id="props.name" 
      placeholder=""
      class="block py-3 px-0 w-full text-brand-navy bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:ring-0 peer" 
    />
    <label 
      :for="props.name" 
      class="absolute text-base text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-brand-navy peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6"
    >{{ props.label }}</label>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>