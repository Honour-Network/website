import Lazyload from './lazyload.js'
import responsive from './responsive.js'
import handleNavs from './nav.js'
import { getId, showForm, returnToBack, onInitScorllListener } from './utils'

responsive().then(() => {
  getId('loading').style.display = 'none'
  const $backToTop = getId('backToTop')
  const $header = getId('gHeader')
  const $formLink = getId("formLink")
  showForm($formLink)
  returnToBack($backToTop)
  handleNavs()
  onInitScorllListener($backToTop, $header)
  /* eslint-disable no-new */
  new Lazyload()
})
