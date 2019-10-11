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

// Rounds x down to the nearest multiple of 1/n
const roundTo = (x, n) => Math.floor(x * n) / n

// Round floating points to hundreds place
const roundToHundreds = (x) => Math.round(x * 100) / 100

const transformFromPercentage = (p, steps, min, max) =>
  clamp(min + (max - min) * roundTo(p, steps), min, max)

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

// Gradually fade the top background layer to reveal the body's background
const updateBgGradient = (p, topBackgroundElem) =>
  topBackgroundElem.style.opacity = 1 - p

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

const updateElems = ({ sun, moon, clouds, arrow, topBackground }) => {
  const percentToBottom = scrollPercent()

  updateSun(percentToBottom, sun)
  updateMoon(percentToBottom, moon)
  updateClouds(percentToBottom, clouds)
  updateBgGradient(percentToBottom, topBackground)
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

const initialUpdate = ({ sun, moon, clouds, arrow, topBackground }) => {
  const domElems = [sun, moon, arrow, topBackground, ...clouds.map(c => c.elem)]
  for (const elem of domElems) {
    elem.classList.add('no-transition')
  }

  updateElems({ sun, moon, clouds, arrow, topBackground })

  setTimeout(() => {
    for (const elem of domElems) {
      elem.classList.remove('no-transition')
    }

    // Show hidden elements
    sun.setAttribute('display', null)
    moon.setAttribute('display', null)
  }, 0)
}

document.addEventListener('DOMContentLoaded', () => {
  const sun = document.querySelector('#sun')
  const moon = document.querySelector('#moon')
  const arrow = document.querySelector('#down-arrow')
  const topBackground = document.querySelector('#initial-background')
  const clouds = initClouds()

  setTimeout(() => initialUpdate({ sun, moon, clouds, arrow, topBackground }), 0)

  window.addEventListener('scroll', () => {
    updateElems({ sun, moon, clouds, arrow, topBackground })
  })
})
