<template>
  <Placeholder heading="At a Glance" />
</template>

<script setup>
const { setMenuClass } = useMenuClass()

onMounted(() => {
  setMenuClass('menu-dark')
})
</script>