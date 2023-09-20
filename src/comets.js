import {
  randrange,
  radians,
  degrees,
  scrollPercent,
  prob,
} from './util.js'

const comet = ({ speed, startx, starty, size=100, theta, container }) => {
  console.log('comet');
  const elem = document.createElementNS('http://www.w3.org/2000/svg', 'image')
  elem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'svg/comet.svg')
  elem.setAttributeNS(null, 'x', startx)
  elem.setAttributeNS(null, 'y', starty)

  elem.setAttributeNS(null, 'transform', `rotate(${theta}, ${startx + size/2}, ${starty + size/2})`)
  elem.setAttributeNS(null, 'width',  size)
  elem.setAttributeNS(null, 'height', size)

  elem.classList.add('comet')
  elem.style.transition = `transform ${speed}s linear`

  // Prevent transform from being immediately applied
  setTimeout(() =>
    elem.style.transform = `translate(${Math.cos(radians(theta)) * 200}vw, ${Math.sin(radians(theta)) * 200}vw)`
  , 0)

  container.appendChild(elem)
  elem.addEventListener('transitionend', () => {
    elem.remove()
  })
}


const spawnComet = (layer) => {
  const height = window.innerHeight;

  if (/*scrollPercent() >= .2 && */ document.hasFocus() && prob(0.4)) {
    comet({
      speed: randrange(0.9, 1.1),
      startx: -100,
      starty: randrange(-5, height*0.175),
      size: Math.floor(randrange(50, 90)),
      theta: randrange(5, 20),
      container: layer
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const layer = document.querySelector('#comets-layer')
  setInterval(() => spawnComet(layer), 2000)
})
