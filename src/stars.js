const svgns = "http://www.w3.org/2000/svg"

const randrange = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const floatrange = (min, max) => {
  return (Math.random() * (max - min + 1)) + min;
}

const makeStar = (r1, r2) => {
  const cx = randrange(0, window.innerWidth)
  const cy = randrange(0, window.innerHeight)
  // console.log(window.innerHeight);
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

const genStars = () => {
  const bgLayer = document.querySelector('#bg-layer')
  for (let i = 0; i < 2000; i++) {
    bgLayer.appendChild(makeStar(0.15, 0.2))
  }
}

const clearStars = () => {
  const bgLayer = document.querySelector('#bg-layer')
  bgLayer.innerHTML = ""
}

let t = null

window.addEventListener('resize', () => {
  // regen stars only once resizing is DONE
  if (t) {
    clearTimeout(t)
  }
  t = setTimeout(() => {
    console.log('passed timeout');
    clearStars()
    genStars()
  }, 250)
})

document.addEventListener('DOMContentLoaded', genStars)

