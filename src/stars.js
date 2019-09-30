const svgns = "http://www.w3.org/2000/svg"
const WIDTH = window.innerWidth
const HEIGHT = window.innerHeight

const randrange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const floatrange = (min, max) => {
  return (Math.random() * (max - min + 1)) + min;
}

const makeStar = (r1, r2) => {
  const cx = randrange(0, WIDTH)
  const cy = randrange(0, HEIGHT)
  const r =  floatrange(r1, r2)
  const rg = randrange(200, 255)
  const color = `rgb(${rg}, ${rg}, 255)`
  const blurColor = `rgba(${rg}, ${rg}, 255, ${0.25, 1.0})`

  const group = document.createElementNS(svgns, 'g');
  const star = document.createElementNS(svgns, 'circle');
  star.setAttributeNS(null, 'cx', cx);
  star.setAttributeNS(null, 'cy', cy);
  star.setAttributeNS(null, 'r',  r);
  star.setAttributeNS(null, 'style', `fill: ${color};` );

  const blur = document.createElementNS(svgns, 'circle');
  blur.setAttributeNS(null, 'cx', cx);
  blur.setAttributeNS(null, 'cy', cy);
  blur.setAttributeNS(null, 'r',  r);
  blur.setAttributeNS(null, 'style', `fill: ${blurColor}; filter: url(#blur);`);

  group.appendChild(blur)
  group.appendChild(star)

  return group
}

document.addEventListener('DOMContentLoaded', () => {
  const bgLayer = document.querySelector('#bg-layer')
  for (let i = 0; i < 2000; i++) {
    bgLayer.appendChild(makeStar(0.15, 0.2))
  }
})

