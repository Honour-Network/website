webpackJsonp([8],{1:function(e,t,n){"use strict";t.a=f,t.b=function(){return/Android|webOS|iPhone|iPod|BlackBerry/i.test(m)},t.c=function(e,t,n="i-nav-main-item",o="i-nav-main-item-active"){Array.from(e).forEach(i=>{i&&i.addEventListener("click",function(){const{windowScroll:i,top:a}=l(),s=f(this.getAttribute("data-target")),c=s.offsetTop-t.offsetHeight;Array.from(e).forEach(e=>{e.className=n}),this.className=n+" "+o,u(a,c)})})},t.f=function(e){e&&e.addEventListener("click",function(){e.style.display="none",f("mc_embed_signup").style.display="block"})},t.e=function(e){e&&e.addEventListener("click",function(){const e=document.documentElement.scrollTop||document.body.scrollTop;u(e,0)})},t.d=function(e,t){d(e),window.addEventListener("scroll",c()(function(){!function(e){const{top:t}=l(),n="header-with-color";t>0?r(o=e,i=n)||(o.className=""==o.className?i:o.className+" "+i):r(e,n)&&function(e,t){if(r(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}}(e,n);var o,i}(t),d(e)},300))};var o=n(25),i=(n.n(o),n(27)),a=n.n(i),s=n(28),c=n.n(s);function r(e,t){return 0!=(t=t||"").replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")}function l(){const e=a()();return{windowScroll:e,top:e.get("top"),winHeight:document.documentElement.clientHeight||document.body.clientHeight}}function d(e){const{top:t,winHeight:n}=l();e.className=t>n?"back-to-top show":"back-to-top hide"}function u(e,t){const{windowScroll:n}=l();Object(o.physics)({from:e,to:t,springStrength:500,friction:1}).start(e=>n.set("top",e))}const m=navigator.userAgent;function f(e){return document.getElementById(e)}t.g=m},12:function(e,t,n){"use strict";var o=n(13),i=n.n(o),a=n(14),s=n(16),c=n(1);Object(a.a)().then(()=>{Object(c.a)("loading").style.display="none";const e=Object(c.a)("backToTop"),t=Object(c.a)("gHeader"),n=Object(c.a)("formLink");Object(c.f)(n),Object(c.e)(e),Object(s.a)(),Object(c.d)(e,t),new i.a})},121:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(12);var o=n(4);n(218),n(228),n(241),n(242);const i={title:{text:"The allocation of HNA tokens",x:"center"},tooltip:{trigger:"item",formatter:"{b}<br/> {c} ({d}%)"},label:{show:!1},series:[{name:"The allocation of HNA tokens",type:"pie",radius:"75%",center:["50%","60%"],data:[{value:728e6*.55,name:"Token Available For Sales"},{value:182e5,name:"Social Give Back"},{value:728e5,name:"Community & Industry Development"},{value:7644e4,name:"Company Reserve"},{value:16016e4,name:"Team, Founders, Advisors,\n Partners &Marketing Expenses"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},a={title:{text:"The proceed be used for",x:"center"},tooltip:{trigger:"item",formatter:"{b}<br/> {c} ({d}%)"},series:[{name:"The proceed be used for",type:"pie",radius:"75%",center:["50%","60%"],data:[{value:4368e4,name:"Develop MVP of FundTech Platform"},{value:728e6*.34,name:"Continuous Development & Maintenance Of \nHonour Network FundTech Platform"},{value:2184e5,name:"Operations, Administration & Accounting"},{value:1456e5,name:"Sales & Marketing"},{value:728e5,name:"Legal & Compliance"}],itemStyle:{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};o.init(document.getElementById("canvas1"),{},{width:700,height:300,renderer:"canvas",devicePixelRatio:1}).setOption(i),o.init(document.getElementById("canvas2"),{},{width:700,height:300,renderer:"canvas",devicePixelRatio:1}).setOption(a)},13:function(e,t,n){(function(t){
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
var n,o;n=void 0!==t?t:this.window||this.global,o=function(e){"use strict";const t={src:"data-src",srcset:"data-srcset",selector:".lazyload"},n=function(){let e={},t=!1,o=0,i=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],o++);let a=function(o){for(let i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t&&"[object Object]"===Object.prototype.toString.call(o[i])?e[i]=n(!0,e[i],o[i]):e[i]=o[i])};for(;o<i;o++){a(arguments[o])}return e};function o(e,o){this.settings=n(t,o||{}),this.images=e||document.querySelectorAll(this.settings.selector),this.observer=null,this.init()}if(o.prototype={init:function(){this.loadImages()},loadAndDestroy:function(){this.settings&&(this.loadImages(),this.destroy())},loadImages:function(){if(!this.settings)return;let e=this;this.images.forEach(function(t){let n=t.getAttribute(e.settings.src),o=t.getAttribute(e.settings.srcset);"img"===t.tagName.toLowerCase()?(n&&(t.src=n),o&&(t.srcset=o)):t.style.backgroundImage="url("+n+")"})},destroy:function(){this.settings&&(this.observer.disconnect(),this.settings=null)}},e.lazyload=function(e,t){return new o(e,t)},e.jQuery){const t=e.jQuery;t.fn.lazyload=function(e){return(e=e||{}).attribute=e.attribute||"data-src",new o(t.makeArray(this),e),this}}return o},e.exports=o(n)}).call(t,n(21))},14:function(e,t,n){"use strict";var o=n(1);t.a=(()=>new Promise(e=>{Object(o.b)()?n.e(1).then(function(t){n(32);const i=document.querySelector("head"),a=parseInt(window.screen.width)/750;if(/Android (\d+\.\d+)/.test(o.g)){var s=parseFloat(RegExp.$1);i.innerHTML+=s>2.3?`<meta name="viewport" content="width=750, minimum-scale=${a}, maximum-scale=${a}">`:'<meta name="viewport" content="width=750">'}else i.innerHTML+='<meta name="viewport" content="width=750, user-scalable=no">';e()}.bind(null,n)).catch(n.oe):(n.e(0).then(function(e){n(33)}.bind(null,n)).catch(n.oe),e())}))},16:function(e,t,n){"use strict";var o=n(1);t.a=(()=>{const e=document.querySelectorAll("#nav .i-nav-main-item"),t=Object(o.a)("gHeader");if(Object(o.b)()){const n=Object(o.a)("nav"),i=Object(o.a)("gHeaderNav"),a=Object(o.a)("headerBar");i&&i.addEventListener("click",function(){a.style.display="block"===a.style.display?"none":"block"}),n&&n.addEventListener("click",function(){this.style.display="none"}),Object(o.c)(e,t)}else Object(o.c)(e,t)})}},[121]);