webpackJsonp([4],{1:function(t,e,n){"use strict";e.a=b,e.b=m,e.c=function(t,e,n="i-nav-main-item",i="i-nav-main-item-active"){Array.from(t).forEach(o=>{o&&o.addEventListener("click",function(){const{windowScroll:o,top:c}=l(),s=b(this.getAttribute("data-target")),a=s.offsetTop-e.offsetHeight;Array.from(t).forEach(t=>{t.className=n}),this.className=n+" "+i,u(c,a)})})},e.g=function(t){t&&t.addEventListener("click",function(){t.style.display="none",b("mc_embed_signup").style.display="block"})},e.f=function(t){t&&t.addEventListener("click",function(){if(m()){let t=b("headerBar");t.style.display="none",document.body.style.overflow="hidden"}let t=b("demoLayer");t&&(t.style.visibility="visible",document.body.style.overflow="hidden",t.addEventListener("click",function(e){if(e.target.className&&e.target.className.indexOf("i-demo-inner")>-1)return!1;t.style.visibility="hidden",document.body.style.overflow="auto"}))})},e.h=function(t){let e=b("whitepaperList");e&&(t&&t.addEventListener("mouseover",function(){e.style.visibility="visible"}),t&&t.addEventListener("mouseout",function(){e.style.visibility="hidden"}))},e.e=function(t){t&&t.addEventListener("click",function(){const t=document.documentElement.scrollTop||document.body.scrollTop;u(t,0)})},e.d=function(t,e){d(t),window.addEventListener("scroll",a()(function(){!function(t){const{top:e}=l(),n="header-with-color";e>0?r(i=t,o=n)||(i.className=""==i.className?o:i.className+" "+o):r(t,n)&&function(t,e){if(r(t,e)){for(var n=" "+t.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+e+" ")>=0;)n=n.replace(" "+e+" "," ");t.className=n.replace(/^\s+|\s+$/g,"")}}(t,n);var i,o}(e),d(t)},300))};var i=n(25),o=(n.n(i),n(27)),c=n.n(o),s=n(28),a=n.n(s);function r(t,e){return 0!=(e=e||"").replace(/\s/g,"").length&&new RegExp(" "+e+" ").test(" "+t.className+" ")}function l(){const t=c()();return{windowScroll:t,top:t.get("top"),winHeight:document.documentElement.clientHeight||document.body.clientHeight}}function d(t){const{top:e,winHeight:n}=l();t.className=e>n?"back-to-top show":"back-to-top hide"}function u(t,e){const{windowScroll:n}=l();Object(i.physics)({from:t,to:e,springStrength:500,friction:1}).start(t=>n.set("top",t))}const f=navigator.userAgent;function b(t){return document.getElementById(t)}function m(){return/Android|webOS|iPhone|iPod|BlackBerry/i.test(f)}e.i=f},12:function(t,e,n){"use strict";var i=n(13),o=n.n(i),c=n(14),s=n(16),a=n(1);Object(c.a)().then(()=>{Object(a.a)("loading").style.display="none";const t=Object(a.a)("backToTop"),e=Object(a.a)("gHeader"),n=Object(a.a)("formLink"),i=(Object(a.a)("demoLink"),Object(a.a)("demoHeader")),c=Object(a.a)("demoHeaderBar"),r=Object(a.a)("whitepaper");Object(a.f)(i),Object(a.b)()?Object(a.g)(n):(Object(a.f)(c),Object(a.h)(r)),Object(a.e)(t),Object(s.a)(),Object(a.d)(t,e),new o.a})},13:function(t,e,n){(function(e){
/*!
 * Lazy Load - JavaScript plugin for lazy loading images
 *
 * Copyright (c) 2007-2017 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   https://appelsiini.net/projects/lazyload
 *
 * Version: 2.0.0-beta.2
 *
 */
var n,i;n=void 0!==e?e:this.window||this.global,i=function(t){"use strict";const e={src:"data-src",srcset:"data-srcset",selector:".lazyload"},n=function(){let t={},e=!1,i=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],i++);let c=function(i){for(let o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e&&"[object Object]"===Object.prototype.toString.call(i[o])?t[o]=n(!0,t[o],i[o]):t[o]=i[o])};for(;i<o;i++){c(arguments[i])}return t};function i(t,i){this.settings=n(e,i||{}),this.images=t||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}if(i.prototype={init:function(){this.loadImages()},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(!this.settings)return;let t=this;this.images.forEach(function(e){let n=e.getAttribute(t.settings.src),i=e.getAttribute(t.settings.srcset);"img"===e.tagName.toLowerCase()?(n&&(e.src=n),i&&(e.srcset=i)):e.style.backgroundImage="url("+n+")"})},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},t.lazyload=function(t,e){return new i(t,e)},t.jQuery){const e=t.jQuery;e.fn.lazyload=function(t){return(t=t||{}).attribute=t.attribute||"data-src",new i(e.makeArray(this),t),this}}return i},t.exports=i(n)}).call(e,n(21))},14:function(t,e,n){"use strict";var i=n(1);e.a=(()=>new Promise(t=>{Object(i.b)()?n.e(1).then(function(e){n(32);const o=document.querySelector("head"),c=parseInt(window.screen.width)/750;if(/Android (\d+\.\d+)/.test(i.i)){var s=parseFloat(RegExp.$1);o.innerHTML+=s>2.3?`<meta name="viewport" content="width=750, minimum-scale=${c}, maximum-scale=${c}">`:'<meta name="viewport" content="width=750">'}else o.innerHTML+='<meta name="viewport" content="width=750, user-scalable=no">';t()}.bind(null,n)).catch(n.oe):(n.e(0).then(function(t){n(33)}.bind(null,n)).catch(n.oe),t())}))},16:function(t,e,n){"use strict";var i=n(1);e.a=(()=>{const t=document.querySelectorAll("#nav .i-nav-main-item"),e=Object(i.a)("gHeader");if(Object(i.b)()){const n=Object(i.a)("nav"),o=Object(i.a)("gHeaderNav"),c=Object(i.a)("headerBar"),s=Object(i.a)("demoHeaderBar");o&&o.addEventListener("click",function(){c.style.display="block"===c.style.display?"none":"block",document.body.style.overflow="block"===c.style.display?"hidden":"auto",Object(i.b)()&&Object(i.f)(s)}),n&&n.addEventListener("click",function(){this.style.display="none"}),Object(i.c)(t,e)}else Object(i.c)(t,e)})},252:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(12)}},[252]);