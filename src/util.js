// Returns % scrolled down the page
export const scrollPercent = () => {
  const h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'
  return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
}

export const radians = (degrees) => degrees * Math.PI / 180.0

export const degrees = (radians) => radians * 180.0 / Math.PI

// Returns true with probability p
// 0.1
export const prob = p => Math.random() <= p

export const diff = (p1, p2) => {
  return [p2[0] - p1[0], p2[1] - p1[1]];
}

export const norm = (v) => Math.sqrt(v[0]*v[0] + v[1]*v[1]);

export const normalize = (v) => {
  const normv = norm(v);
  return v.map(p => p / normv);
}

export const randrange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const avg = (...args) => args.reduce((a, b) => a + b) / args.length

// Confine n to the range [x, y]
export const confine = (n, x, y) => {
  if (n > y) return y
  else if (n < x) return x
  return n
}

export const darken = (rgb, amount) => rgb.map(n => n - amount)

// Cuts arr into pieces of size n
// chunk([1, 2, 3, 4, 5], 2) -> [[1, 2], [3, 4], [5]]
const chunk = (arr, n) => {
  let chunks = []
  for (let i = 0; i < arr.length; i += n) {
    chunks.push(arr.slice(i, i + n));
  }
  return chunks
}

// Convert hex string to [r, g, b] array: #9ac0ff -> [154, 192, 255]
export const hexToRgb = (hstr) => {
  const rgb = chunk(hstr.slice(1, hstr.length), 2)
  return rgb.map(hex => parseInt(hex, 16))
}

export const rgbStr = ([r, g, b]) => `rgb(${r}, ${g}, ${b})`

// Convert [r, g, b] array to hex string: #9ac0ff -> [154, 192, 255]
export const rgbToHex = (rgb) => `#${rgb.map(n => Math.floor(n).toString(16)).join('')}`

export const lerpColor = ([r1, g1, b1], [r2, g2, b2], p) => [
  (r2 - r1) * p + r1,
  (g2 - g1) * p + g1,
  (b2 - b1) * p + b1
]

export const rgbToHsl = ([r, g, b]) => {
  r /= 255, g /= 255, b /= 255;

  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }

  return [ h, s, l ];
}

export const hslToRgb = ([h, s, l]) => {
  let r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    }

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    let p = 2 * l - q;

    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return [ r * 255, g * 255, b * 255 ];
}