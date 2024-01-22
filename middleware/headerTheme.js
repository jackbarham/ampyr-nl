export default defineNuxtRouteMiddleware((to, from) => {
  // I need this be dynamic between header header-dark and header-light
  to.meta.headerTheme = to.meta.headerTheme;
})