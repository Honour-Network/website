import Lazyload from './lazyload.js';
import responsive from './responsive.js';
import handleNavs from './nav.js';
import {getId, onInitScorllListener, returnToBack, showForm, showDemoLink, isMobile} from './utils';

responsive().then(() => {
  getId('loading').style.display = 'none';
  const $backToTop = getId('backToTop');
  const $header = getId('gHeader');
  const $formLink = getId('formLink');
  const $demoLink = getId('demoLink');
  const $demoHeader = getId('demoHeader');
  const $demoHeaderBar = getId('demoHeaderBar');
  // showForm($formLink);
  showDemoLink($demoHeader);
  if(!isMobile()) {
    showDemoLink($demoHeaderBar);
  }
  // showDemoLink($demoLink);
  returnToBack($backToTop);
  handleNavs();
  onInitScorllListener($backToTop, $header);
  /* eslint-disable no-new */
  new Lazyload();
});
