export default defineNuxtRouteMiddleware((to) => {
  // Extract the slug(s) from the route path
  const slugs = to.path.split('/').filter(Boolean) // Split by '/' and remove any empty strings

  // Override slugs to be 'header-dark'
  const darkThemeSlugs = [
    'cookie-policy',
    'terms-conditions',
    'privacy-policy'
  ];

  // If "/slug" then header-light. If "/" or "/slug/slug" then header-hark 
  const theme = slugs.length === 1 && !darkThemeSlugs.includes(slugs[0]) ? 'header-light' : 'header-dark';

  // console.log(`Middleware: ${theme}`)

  // Set theme. Used in components/MainHeader.vue
  to.meta.headerTheme = theme
});
