const DEFAULT_ATTRS = {
  anim: 'fadeleft',
  delay: 0,
}

const isVisible = (el) => {
  const rect = el.getBoundingClientRect()
  const elemTop = rect.top
  const elemBottom = rect.bottom

  // Only completely visible elements return true:
  const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight)
  // Partially visible elements return true:
  //isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

const getSlideAttributes = (attr) => {
  const attributes = { ...DEFAULT_ATTRS }
  if (attr['slide-anim']) {
    attributes.anim = attr['slide-anim'].value
  }
  if (attr['slide-delay']) {
    attributes.delay = Number(attr['slide-delay'].value)
  }

  return attributes
}

const checkElements = (slideInElements) => {
  for (let i = 0; i < slideInElements.length; i++) {
    const e = slideInElements[i]

    if (isVisible(e)) {
      const { anim, delay } = getSlideAttributes(e.attributes)

      e.style.visibility = 'visible'
      e.style.animation = `${anim} 0.5s ease-in-out`
      e.style['animation-delay'] = `${delay}s`
      e.style['animation-fill-mode'] = 'forwards'

      // Remove
      slideInElements.splice(i, 1)  
    }
  }
}

const slideInElements = Array.from(document.querySelectorAll('.slide'))
const onScroll = () => checkElements(slideInElements)

onScroll()
window.addEventListener('scroll', onScroll)