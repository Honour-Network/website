import Lazyload from "lazyload";
import responsive from "./responsive.js";
import handleNavs from "./nav.js";
import { getId, returnToBack, onInitScorllListener } from "./utils";

responsive().then(() => {
  getId("loading").style.display = "none";
  const $backToTop = getId("backToTop");
  const $header = getId("gHeader");
  returnToBack($backToTop);
  handleNavs();
  onInitScorllListener($backToTop, $header);
  /* eslint-disable no-new */
  new Lazyload();
});
