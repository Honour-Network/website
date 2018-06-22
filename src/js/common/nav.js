import {getId, isMobile, navScroll, showDemoLink} from './utils';

export default () => {
  const $navItems = document.querySelectorAll('#nav .i-nav-main-item');
  const $header = getId('gHeader');
  if (isMobile()) {
    const $nav = getId('nav');
    const $navBtn = getId('gHeaderNav');
    const $navBar = getId('headerBar');
    const $demoHeaderBar = getId('demoHeaderBar');
    $navBtn && $navBtn.addEventListener('click', function () {
      $navBar.style.display = $navBar.style.display === 'block' ? 'none' : 'block';
      document.body.style.overflow = $navBar.style.display === 'block' ? 'hidden' : 'auto';
      if(isMobile()) {
        showDemoLink($demoHeaderBar);
      }
    });
    $nav && $nav.addEventListener('click', function () {
      this.style.display = 'none';
    });
    navScroll($navItems, $header);
  } else {
    navScroll($navItems, $header);
  }
}
