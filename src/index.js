const width = window.innerWidth
const height = window.innerHeight
const svg = document.querySelector('#canvas')

svg.setAttribute('width', width)
svg.setAttribute('height', height)

const downArrow = document.querySelector('#down-arrow')
downArrow.addEventListener('click', () => {
  window.scrollTo({
    top: window.scrollY + window.innerHeight,
    left: 0,
    behavior: 'smooth',
  })
})