<template>
  <Placeholder heading="Leadership Team" />
</template>

<script setup>
const { setMenuClass } = useMenuClass()

onMounted(() => {
  setMenuClass('menu-dark')
})
</script>