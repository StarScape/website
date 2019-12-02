// Toggle CSS transitions on window resize to prevent animation
const toggleTransitions = () => {
  const toggleElems = [
    document.querySelector('#sun'),
    document.querySelector('#moon'),
    ...document.querySelectorAll('.cloud')
  ]
  
  for (let e of toggleElems) {
    e.classList.add('notransition')
    setTimeout(() => e.classList.remove('notransition'), 0)
  }
}

window.addEventListener('resize', () => {
  toggleTransitions()
})