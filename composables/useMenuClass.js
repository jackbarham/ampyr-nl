const menuClass = ref('')

export const useMenuClass = () => {
  const setMenuClass = (newClass) => {
    menuClass.value = newClass
    console.log(`usePage ${menuClass.value}`)
  }

  return { menuClass, setMenuClass }
}