import './comets.js'
import './stars.js'
import './scroll.js'
import './scroll_anchors.js'
import './resize.js'

import { update } from 'slidein'

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  const height = window.innerHeight
  const svg = document.querySelector('#canvas')

  const downArrow = document.querySelector('#down-arrow')
  downArrow.addEventListener('click', () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight,
      left: 0,
      behavior: 'smooth',
    })
  })
})