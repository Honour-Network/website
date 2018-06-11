import { isMobile, navScroll, getId } from './utils'

export default () => {
  const $navItems = document.querySelectorAll('#nav .i-nav-main-item')
  const $header = getId('gHeader')
  //   防止页面没有dom
  if ($navItems.length) {
    if (isMobile()) {
      const $nav = getId('nav')
      const $navBtn = getId('gHeaderNav')
      $navBtn.addEventListener('click', function () {
        $nav.style.display = $nav.style.display === 'block' ? 'none' : 'block'
      })
      $nav.addEventListener('click', function () {
        this.style.display = 'none'
      })
      navScroll($navItems, $header)
    } else {
      navScroll($navItems, $header)
    }
  }
}
