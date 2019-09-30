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
  // const isVisible = elemTop < window.innerHeight && elemBottom >= 0
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

const revealElements = (slideInElements) => {
  for (let i = 0; i < slideInElements.length; i++) {
    const e = slideInElements[i]

    if (isVisible(e) && !e.attributes['_slide-anim-triggered']) {
      const { anim, delay } = getSlideAttributes(e.attributes)

      e.style.visibility = 'visible'
      e.style.animation = `${anim} 0.5s ease-in-out`
      e.style['animation-delay'] = `${delay}s`
      e.style['animation-fill-mode'] = 'forwards'

      // Mark as animated
      e.setAttribute('_slide-anim-triggered', 'true')
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const headers = Array.from(document.getElementsByClassName('header-box'))
  for (const header of headers) {
    header.classList.add('slide')
  }

  // Give some slides to elements bc I am too lazy to set that shit in HTML
  const jobTitles = Array.from(document.querySelectorAll('.job-company'))
  for (const title of jobTitles) {
    title.classList.add('slide')
  }

  const jobSubheaders = Array.from(document.querySelectorAll('.job .top-header'))
  for (const subheader of jobSubheaders) {
    subheader.classList.add('slide')
    subheader.setAttribute('slide-delay', 0.25)
  }

  // Does el have an <a> as its first child?
  const firstChildAnchor = (el) => el.children[0] && el.children[0].tagName === 'A'

  const jobBodies = Array.from(document.querySelectorAll('.job-body'))
  for (const body of jobBodies) {
    let delay = 0

    for (const child of body.children) {
      child.classList.add('slide')
      child.setAttribute('slide-delay', delay);

      if (child.tagName === 'P' && firstChildAnchor(child)) {
        child.setAttribute('slide-anim', 'fadeleft');
      }
      else if (child.tagName === 'P') {
        child.setAttribute('slide-anim', 'fadetop');
      }
      // else if (child.contains('header')) {
      // }
      else if (child.tagName === 'UL') {
        child.classList.remove('slide');

        for (const li of child.children) {
          li.classList.add('slide');
          li.setAttribute('slide-anim', 'fadeleft');
          li.setAttribute('slide-delay', delay);
          delay += 0.05
        }
      }
      else if (child.tagName === 'DIV') {
        child.classList.remove('slide')
      }

      delay += 0.05
    }
  }

  const techIconContainers = Array.from(document.querySelectorAll('.tech-container'))
  for (const container of techIconContainers) {
    let delay = 0

    for (let child of container.children) {
      child.classList.add('slide')
      child.setAttribute('slide-anim', 'fadetop')
      child.setAttribute('slide-delay', delay)
      delay += 0.1
    }
  }

  Array.from(document.querySelectorAll('.degree-header img')).forEach(img => {
    img.classList.add('slide')
    // img.setAttribute('slide-anim', 'fadetop')
  })
    
  Array.from(document.querySelectorAll('.degree-header h3')).forEach(h3 => {
    h3.classList.add('slide')
    h3.setAttribute('slide-anim', 'fadetop')
  })

  Array.from(document.querySelectorAll('.degree-body')).forEach(body => {
    let delay = 0.1
    for (const elem of body.children) {
      elem.classList.add('slide')
      elem.setAttribute('slide-anim', 'fadebottom')
      elem.setAttribute('slide-delay', delay)
      delay += 0.1
    }
  })

  const slideInElements = Array.from(document.getElementsByClassName('slide'))
  const onScroll = () => revealElements(slideInElements) 
  window.addEventListener('scroll', onScroll)
  onScroll()
})
