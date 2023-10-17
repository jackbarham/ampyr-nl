<template>
  <footer class="footer-simple bg-white">
    <div class="border-t-2 border-gray-100">
      <div class="mx-auto max-w-7xl py-12 px-6">
        <div class="sm:flex sm:flex-row-reverse justify-between items-center text-center sm:text-left">
          <div class="flex justify-center mb-8 sm:mb-0">
            <a :href="icon.link" v-for="(icon, index) in socialIcons" :key="index" class="mx-2 sm:mx-0 sm:ml-3 p-3 rounded bg-zinc-700 hover:bg-purple-700">
              <!-- <nuxt-icon :name="icon.name" class="h-6 w-6 block text-white" /> -->
            </a>
          </div>
          <div>
            <h1 class="font-medium mb-1">AMPYR</h1>
            <p class="text-sm text-gray-500">Copyright &copy; {{ year }} - Footer stuff</p>
          </div>
          
        </div>
      </div>
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