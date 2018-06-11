import './common'
import Bv from 'bideo.js'

const bv = new Bv()

bv.init({
  videoEl: document.querySelector('#video'),
  container: document.querySelector('body'),
  resize: true,
  src: []
})
