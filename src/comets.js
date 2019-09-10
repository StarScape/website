import {
  randrange,
  radians,
  degrees,
  scrollPercent,
  prob,
} from './util.js'


class Comet {

  constructor({ startx, starty, size=100, theta, container }) {
    this.speed = 45
    this.thetaRads = radians(theta)
    this.container = container
    this.opacity = 1

    this.elem = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    this.elem.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', 'svg/comet.svg');
    this.elem.setAttributeNS(null, 'x', startx);
    this.elem.setAttributeNS(null, 'y', starty);
    this.elem.setAttributeNS(null, 'opacity', this.opacity);

    this.elem.setAttributeNS(null, 'width',  size);
    this.elem.setAttributeNS(null, 'height', size);
    this.elem.setAttributeNS(null, 'transform', `rotate(${theta}, ${startx + size/2}, ${starty + size/2})`);
    this.container.appendChild(this.elem)

    this.opacityDelta = randrange(0.002, 0.005)
    this.animate()
  }

  animate() {
    const x = Number(this.elem.getAttribute('x'))
    this.elem.setAttributeNS(null, 'x', x + this.speed)
    this.elem.setAttributeNS(null, 'opacity', (this.opacity -= this.opacityDelta))

    if (this.opacity > 0.01) {
      setTimeout(this.animate.bind(this), 20)
    }
  }
}

const layer = document.querySelector('#comets-layer')

const spawnComet = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (/*scrollPercent() >= .2 && */ document.hasFocus() && prob(0.35)) {
    new Comet({
      startx: -100,
      starty: randrange(-100, height*0.25),
      size: Math.floor(randrange(50, 90)),
      theta: randrange(10, 20),
      container: layer
    })
  }

  setTimeout(spawnComet, 3000)
}

setTimeout(spawnComet, 2000)

