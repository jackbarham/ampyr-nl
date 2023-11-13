<template>
  <Placeholder heading="News & Insights" />
</template>

<script setup>
const { setMenuClass } = useMenuClass()

onMounted(() => {
  setMenuClass('menu-dark')
})
</script>