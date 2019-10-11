import Cloud from './Cloud.js'
import {
  scrollPercent,
  hexToRgb,
  rgbToHex,
  hslToRgb,
  rgbToHsl,
  rgbStr,
  darken,
  lerpColor,
  randrange,
  clamp,
} from './util.js'

const gradientTopInitial = '#3e5680'
const gradientBottomInitial = '#f1603a'
const gradientBottomFinal = darken(hexToRgb(gradientTopInitial), 25)

const getGradientBottom = (p) => {
  const rgb1 = hexToRgb(gradientBottomInitial)
  const finalColor = (lerpColor(rgb1, gradientBottomFinal, p))

  return rgbStr(finalColor)
}

const getGradientTop = (p) => {
  const rgb = hexToRgb(gradientTopInitial)
  const finalColor = darken(rgb, Math.floor(p * 110))

  return rgbStr(finalColor)
}

// Rounds x down to the nearest multiple of 1/n
const roundTo = (x, n) => Math.floor(x * n) / n

const roundToHundreds = (x) => Math.round(x * 100) / 100

const transformFromPercentage = (p, steps, min, max) =>
  clamp(min + (max - min) * roundTo(p, steps), min, max)

// Impure functions
const updateSun = (p, elem, initial=false) => {
  const percentSet = p / 0.5

  const x = -transformFromPercentage(percentSet, 6, 0, 5);
  const y = transformFromPercentage(percentSet, 6, 0, 50);
  const scale = transformFromPercentage(percentSet, 6, 1, 2);

  const transform = `translate(${x}%, ${y}%) scale(${scale})`
  elem.style.transform = transform
}

const updateMoon = (p, elem) => {
  const percentRisen = clamp(p / 0.5 - 1, 0, 1)

  const x = -transformFromPercentage(percentRisen, 6, 0, 2);
  const y = -transformFromPercentage(percentRisen, 6, -20, 70);
  const scale = transformFromPercentage(percentRisen, 6, 1, 1.3);

  const transform = `translate(${x}%, ${y}%) scale(${scale})`
  elem.style.transform = transform
}

const updateClouds = (p, clouds) => {
  clouds.forEach(cloud => {
    const x = transformFromPercentage(p, 12, 0, 20)
    const y = transformFromPercentage(p, 12, 0, 10)
    const opacity = 0.7 - transformFromPercentage(p, 12, 0, .6)
    const transform = `translate(${x * cloud.speed}%, ${y * cloud.speed}%)`

    cloud.elem.style.transform = transform
    cloud.elem.style.opacity = opacity * cloud.speed
  })
}

const updateBgGradient = (p) => {
  const gradientTop = getGradientTop(p)
  const gradientBottom = getGradientBottom(p)
  
  document.body.style.background = 
    `linear-gradient(to bottom, ${gradientTop}, ${gradientBottom})`
  document.body.style.backgroundAttachment = 'fixed'
}

const updateArrow = (arrow) => {
  if (window.scrollY > 10) {
    arrow.style.opacity = 0
    arrow.style.visibility = 'hidden'
  }
  else {
    arrow.style.visibility = 'visible'
    arrow.style.opacity = 0.6
  }
}

const updateElems = ({ sun, moon, clouds, arrow }) => {
  const percentToBottom = scrollPercent()

  updateSun(percentToBottom, sun)
  updateMoon(percentToBottom, moon)
  updateClouds(percentToBottom, clouds)
  updateBgGradient(percentToBottom)
  updateArrow(arrow)
}

const initClouds = () => {
  const width = window.innerWidth
  const cloudSize = width / 10
  const cloudElems = [ ...document.querySelectorAll('.cloud') ]
  const cloudSpeeds = [1, 0.8, 0.95, 0.9]

  return cloudElems.map((el, i) => {
    const cloud = new Cloud(el, cloudSpeeds[i])
    cloud.elem.setAttributeNS(null, 'width', `${cloudSize}`)
    cloud.elem.setAttributeNS(null, 'height', `${cloudSize}`)

    return cloud
  })
}

const initialUpdate = ({ sun, moon, clouds, arrow }) => {
  const domElems = [sun, moon, arrow, ...clouds.map(c => c.elem)]
  for (const elem of domElems) {
    elem.classList.add('no-transition')
  }

  updateElems({ sun, moon, clouds, arrow })

  setTimeout(() => {
  for (const elem of domElems) {
    elem.classList.remove('no-transition')
  }
  }, 10)
}

document.addEventListener('DOMContentLoaded', () => {
  const sun = document.querySelector('#sun')
  const moon = document.querySelector('#moon')
  const arrow = document.querySelector('#down-arrow')
  const clouds = initClouds()

  setTimeout(() => initialUpdate({ sun, moon, clouds, arrow }), 0)

  // Show hidden elements
  sun.setAttribute('display', null)
  moon.setAttribute('display', null)

  window.addEventListener('scroll', () => {
    updateElems({ sun, moon, clouds, arrow })
  })
})
