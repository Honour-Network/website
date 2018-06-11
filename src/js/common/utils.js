import { physics } from 'popmotion'
import scroll from 'stylefire/scroll'
import throttle from 'lodash/throttle'

function hasClass (elem, cls) {
  cls = cls || ''
  if (cls.replace(/\s/g, '').length == 0) {
    return false
  } // 当cls没有参数时，返回false
  return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ')
}

function addClass (elem, cls) {
  if (!hasClass(elem, cls)) {
    elem.className = elem.className == '' ? cls : elem.className + ' ' + cls
  }
}

function removeClass (elem, cls) {
  if (hasClass(elem, cls)) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, '') + ' '
    while (newClass.indexOf(' ' + cls + ' ') >= 0) {
      newClass = newClass.replace(' ' + cls + ' ', ' ')
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '')
  }
}
function _getScrollInfo () {
  const windowScroll = scroll()
  const top = windowScroll.get('top')
  const winHeight =
    document.documentElement.clientHeight || document.body.clientHeight
  return {
    windowScroll,
    top,
    winHeight
  }
}

function _setReturnBackClassName ($backToTop) {
  const { top, winHeight } = _getScrollInfo()
  $backToTop.className =
    top > winHeight ? 'back-to-top show' : 'back-to-top hide'
}
function _setHeaderStyle ($header) {
  const { top } = _getScrollInfo()
  const CLASS = 'header-with-color'
  if (top > 0) {
    addClass($header, CLASS)
  } else if (hasClass($header, CLASS)) {
    removeClass($header, CLASS)
  }
}

function _scrollTop (from, to) {
  const { windowScroll } = _getScrollInfo()
  physics({
    from,
    to,
    springStrength: 500,
    friction: 1
  }).start(v => windowScroll.set('top', v))
}

export const ua = navigator.userAgent

/**
 * @param {string} id
 * @returns element
 */
export function getId (id) {
  return document.getElementById(id)
}

/**
 * @returns boolean
 */
export function isMobile () {
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(ua)
}

export function navScroll (
  $navItems,
  $header,
  initClass = 'i-nav-main-item',
  activeClass = 'i-nav-main-item-active'
) {
  Array.from($navItems).forEach(item => {
    item.addEventListener('click', function () {
      const { windowScroll, top } = _getScrollInfo()
      const $node = getId(this.getAttribute('data-target'))
      const currentTop = $node.offsetTop - $header.offsetHeight
      Array.from($navItems).forEach(item => {
        item.className = initClass
      })
      this.className = initClass + ' ' + activeClass
      _scrollTop(top, currentTop)
    })
  })
}

export function showForm ($formLink) {
  $formLink.addEventListener('click', function () {
    $formLink.style.display = 'none'
    getId('mc_embed_signup').style.display = 'block'
  })
}
export function returnToBack ($backToTop) {
  $backToTop.addEventListener('click', function () {
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop
    _scrollTop(scrollTop, 0)
  })
}

// 事件监听
export function onInitScorllListener ($backToTop, $header) {
  _setReturnBackClassName($backToTop)
  window.addEventListener(
    'scroll',
    throttle(function () {
      _setHeaderStyle($header)
      _setReturnBackClassName($backToTop)
    }, 300)
  )
}

