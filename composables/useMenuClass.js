const menuClass = ref('')

export const useMenuClass = () => {
  const setMenuClass = (newClass) => {
    menuClass.value = newClass
  }

  return { menuClass, setMenuClass }
}