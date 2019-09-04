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
} from './util.js'

// Constants
const sunInitialY = 50
const sunDeltaY = 50

const sunInitialX = 57
const sunDeltaX = 6

const sunInitialSize = 300
const sunDeltaSize = 100

const moonInitialX = 10
const moonDeltaX = -2

const moonInitialY = 90
const moonDeltaY = -50

const moonInitialSize = 200
const moonDeltaSize = 50

const gradientTopInitial = '#3e5680'
const gradientBottomInitial = '#f1603a'
const gradientBottomFinal = darken(hexToRgb(gradientTopInitial), 25)

// Pure functions
const getSunX = (p) => sunInitialX + sunDeltaX*p
const getSunY = (p) => sunInitialY + sunDeltaY*p
const getSunSize = (p) => sunInitialSize + sunDeltaSize*p

const getMoonX = (p) => moonInitialX + moonDeltaX*p
const getMoonY = (p) => moonInitialY + moonDeltaY*p
const getMoonSize = (p) => moonInitialSize + moonDeltaSize*p

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

// Impure functions
const updateSun = (p, elem) => {
  const percentSet = p / 0.5
  const size = getSunSize(percentSet)

  elem.setAttributeNS(null, 'x', `${getSunX(percentSet)}%`);
  elem.setAttributeNS(null, 'y', `${getSunY(percentSet)}%`);
  elem.setAttributeNS(null, 'width', `${size}`);
  elem.setAttributeNS(null, 'height', `${size}`);
}

const updateMoon = (p, elem) => {
  const percentRisen = p / 0.5 - 1
  const size = getMoonSize(percentRisen)

  // elem.setAttributeNS(null, 'x', `${200 - width/2}`);
  elem.setAttributeNS(null, 'x', `${getMoonX(percentRisen)}%`);
  elem.setAttributeNS(null, 'y', `${getMoonY(percentRisen)}%`);
  elem.setAttributeNS(null, 'width', `${size}`);
  elem.setAttributeNS(null, 'height', `${size}`);
}

const initClouds = (clouds) => {
  const width = window.innerWidth
  const cloudSize = width / 6
  clouds.forEach(cloud => {
    cloud.elem.setAttributeNS(null, 'width', `${cloudSize}`)
    cloud.elem.setAttributeNS(null, 'height', `${cloudSize}`)
  })
}

const updateClouds = (p, clouds) => {
  clouds.forEach(cloud => {
    cloud.elem.setAttributeNS(null, 'x', `${cloud.getX(p)}%`)
    cloud.elem.setAttributeNS(null, 'y', `${cloud.getY(p)}%`)
    cloud.elem.setAttributeNS(null, 'opacity', `${cloud.getOpacity(p)}`)
  })
}

const updateBgGradient = (p) => {
  const gradientTop = getGradientTop(p)
  const gradientBottom = getGradientBottom(p)
  
  document.body.style.background = 
    `linear-gradient(to bottom, ${gradientTop}, ${gradientBottom})`
  document.body.style.backgroundAttachment = 'fixed'
}

const updateElems = ({ sun, moon, clouds }) => {
  const percentToBottom = scrollPercent()

  updateSun(percentToBottom, sun)
  updateMoon(percentToBottom, moon)
  updateClouds(percentToBottom, clouds)
  updateBgGradient(percentToBottom)
}

const main = () => {
  const cloudElems = [ ...document.querySelectorAll('.cloud') ]
  const cloudSpeeds = [1, 0.8, 0.95, 0.9]
  const clouds = cloudElems.map((el, i) => new Cloud(el, cloudSpeeds[i]))

  const sun = document.querySelector('#sun')
  const moon = document.querySelector('#moon')

  initClouds(clouds)
  updateElems({ sun, moon, clouds })

  // Show hidden elements
  sun.setAttribute('display', null)
  moon.setAttribute('display', null)

  window.addEventListener('scroll', () => {
    updateElems({ sun, moon, clouds })
  })
}

main()