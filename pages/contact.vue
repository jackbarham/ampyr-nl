<template>
  <Placeholder heading="Contact" />
</template>

<script setup>
const { setMenuClass } = useMenuClass()

onMounted(() => {
  setMenuClass('menu-dark')
})
</script>