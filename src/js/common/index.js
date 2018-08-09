import Lazyload from './lazyload.js';
import responsive from './responsive.js';
import handleNavs from './nav.js';
import {getId, onInitScorllListener, returnToBack, showForm, showDemoLink, showWhitepaper, isMobile} from './utils';

responsive().then(() => {
  getId('loading').style.display = 'none';
  const $backToTop = getId('backToTop');
  const $header = getId('gHeader');
  const $formLink = getId('formLink');
  const $demoLink = getId('demoLink');
  const $demoHeader = getId('demoHeader');
  const $demoHeaderBar = getId('demoHeaderBar');
  const $whitepaper = getId('whitepaper');
  showDemoLink($demoHeader);
  if(!isMobile()) {
    showDemoLink($demoHeaderBar);
    showWhitepaper($whitepaper)
  } else {
    showForm($formLink);
  }
  returnToBack($backToTop);
  handleNavs();
  onInitScorllListener($backToTop, $header);
  /* eslint-disable no-new */
  new Lazyload();
});
