<template>
  <footer class="footer-simple bg-[#181F49]">
    <div class="mx-auto max-w-7xl py-12 px-6 text-white text-center">
      <h1 class="font-medium mb-1">AMPYR</h1>
      <p class="text-sm text-gray-500">Copyright &copy; {{ year }} - Footer stuff</p>
    </div>
  </footer>
</template>

<script setup>
  const year = new Date().getFullYear()

  const socialIcons = [
    {
      name: 'Twitter',
      link: 'https://twitter.com/themeship'
    },
    {
      name: 'Instagram',
      link: 'https://twitter.com/themeship'
    },
    {
      name: 'Github',
      link: 'https://twitter.com/themeship'
    },
    {
      name: 'Linkedin',
      link: 'https://twitter.com/themeship'
    },
    {
      name: 'Youtube',
      link: 'https://twitter.com/themeship'
    }
  ]
</script>