export default class Cloud {
  constructor(elem, speed) {
    this.elem = elem
    this.speed = speed

    // Adjust x bc I'm too lazy to change the XML
    const x = this.elem.getAttribute('x')
    const y = this.elem.getAttribute('y')

    this.initialX = parseInt(x.slice(0, x.length-1), 10)
    this.deltaX = 15

    this.initialY = parseInt(y.slice(0, y.length-1), 10)
    this.deltaY = 10

    this.initialOpacity = 0.75 - Math.random()*0.2
    this.deltaOpacity = -0.025
  }

  // Get current (x, y) of cloud based on percent scrolled
  getX(p) {
    return this.initialX + this.deltaX * p * this.speed
  }

  getY(p) {
    return this.initialY + this.deltaY * p * this.speed
  }

  getOpacity(p) {
    return this.initialOpacity + this.deltaOpacity * (5*p) * this.speed
  }
}