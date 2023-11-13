<template>
  <Placeholder heading="AMPYR Solar Europe" />
</template>

<script setup>
const { setMenuClass } = useMenuClass()

onMounted(() => {
  setMenuClass('menu-dark')
})
</script>