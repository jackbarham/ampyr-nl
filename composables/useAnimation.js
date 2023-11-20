export default function useAnimation({ 
  trigger, 
  classes, 
  threshold = 0.6 
}) {
  onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          classes.forEach(({ start, animate }) => {
            entry.target.querySelectorAll(`.${start}`).forEach(el => el.classList.add(animate))
          })
        }
      })
    }, { threshold })

    const elementsToAnimate = document.querySelectorAll(`.${trigger}`)
    elementsToAnimate.forEach(el => observer.observe(el))
  })
}