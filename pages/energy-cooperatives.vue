<template>
  <Placeholder heading="Energy Cooperatives" />
</template>

<script setup>
const { setMenuClass } = useMenuClass()

onMounted(() => {
  setMenuClass('menu-dark')
})
</script>