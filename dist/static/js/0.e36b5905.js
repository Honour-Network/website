webpackJsonp([0],{16:function(t,e,i){var o=i(86);"string"==typeof o&&(o=[[t.i,o,""]]);i(84)(o,{});o.locals&&(t.exports=o.locals)},76:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var a=this[n][0];"number"==typeof a&&(o[a]=!0)}for(n=0;n<e.length;n++){var r=e[n];"number"==typeof r[0]&&o[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),t.push(r))}},t}},77:function(t,e,i){t.exports=i.p+"static/images/backtop.afb1a5d3.svg"},78:function(t,e,i){t.exports=i.p+"static/images/banner.1f49b2e6.jpg"},79:function(t,e,i){t.exports=i.p+"static/images/banner-2.23440771.jpg"},80:function(t,e,i){t.exports=i.p+"static/images/life-cycle-bg.8456f22d.svg"},81:function(t,e,i){t.exports=i.p+"static/images/head-mask-gray.6dbc6b72.svg"},82:function(t,e,i){t.exports=i.p+"static/images/head-mask-white.7ca0dd72.svg"},83:function(t,e,i){t.exports=i.p+"static/images/linked-in.b6a869da.svg"},84:function(t,e){var i={},o=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},n=o(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),a=o(function(){return document.head||document.getElementsByTagName("head")[0]}),r=null,p=0,s=[];function l(t,e){for(var o=0;o<t.length;o++){var n=t[o],a=i[n.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](n.parts[r]);for(;r<n.parts.length;r++)a.parts.push(g(n.parts[r],e))}else{var p=[];for(r=0;r<n.parts.length;r++)p.push(g(n.parts[r],e));i[n.id]={id:n.id,refs:1,parts:p}}}}function f(t){for(var e=[],i={},o=0;o<t.length;o++){var n=t[o],a=n[0],r={css:n[1],media:n[2],sourceMap:n[3]};i[a]?i[a].parts.push(r):e.push(i[a]={id:a,parts:[r]})}return e}function c(t,e){var i=a(),o=s[s.length-1];if("top"===t.insertAt)o?o.nextSibling?i.insertBefore(e,o.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),s.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function d(t){t.parentNode.removeChild(t);var e=s.indexOf(t);e>=0&&s.splice(e,1)}function m(t){var e=document.createElement("style");return e.type="text/css",c(t,e),e}function g(t,e){var i,o,n;if(e.singleton){var a=p++;i=r||(r=m(e)),o=b.bind(null,i,a,!1),n=b.bind(null,i,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(t){var e=document.createElement("link");return e.rel="stylesheet",c(t,e),e}(e),o=function(t,e){var i=e.css,o=e.sourceMap;o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var n=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(n),a&&URL.revokeObjectURL(a)}.bind(null,i),n=function(){d(i),i.href&&URL.revokeObjectURL(i.href)}):(i=m(e),o=function(t,e){var i=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,i),n=function(){d(i)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else n()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");void 0===(e=e||{}).singleton&&(e.singleton=n()),void 0===e.insertAt&&(e.insertAt="bottom");var o=f(t);return l(o,e),function(t){for(var n=[],a=0;a<o.length;a++){var r=o[a];(p=i[r.id]).refs--,n.push(p)}t&&l(f(t),e);for(a=0;a<n.length;a++){var p;if(0===(p=n[a]).refs){for(var s=0;s<p.parts.length;s++)p.parts[s]();delete i[p.id]}}}};var x,h=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function b(t,e,i,o){var n=i?"":o.css;if(t.styleSheet)t.styleSheet.cssText=h(e,n);else{var a=document.createTextNode(n),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(a,r[e]):t.appendChild(a)}}},86:function(t,e,i){(t.exports=i(76)()).push([t.i,'.g-header-navbar,.i-advantage-list,.i-cycle-item-feature,.i-cycle-list,.i-develop-item-feature,.i-develop-list,.i-innovative-content-item-feature,.i-innovative-content-list,.i-nav-main-list,.i-now-list,.i-roadmap-list,.i-social-item-feature,.i-target-item-feature,.i-target-list,.i-team-list{padding:0;margin:0;list-style:none}.g-footer-contact-desc,.g-footer-contact-desc dd,.g-footer-item-title,.g-footer-item p,.i-banner-info-sub-title,.i-banner-info-title,.i-cycle-item-title,.i-cycle-title,.i-dapp-sub-title,.i-dapp-title,.i-dapp-top-text,.i-roadmap-item-title,.i-section-title,.i-service-item-para,.i-social-item-title,.i-target-item-name,.i-target-slogan,.i-team-item-name,.t-item-staff-introduce,.t-item-staff-name,.t-item-staff-position,.t-item-staff-position-desc{margin:0}.g-footer-contact-desc,.g-footer-contact-desc dd,.i-banner-info-sub-title,.i-banner-info-title{padding:0}.i-banner-form-button,.i-banner-form-response,.i-cycle-item-asset,.i-dapp-item,.i-innovative-content-asset,.i-nav-icon,.i-now-item-asset,.i-target-item-avator,.i-vision-item,.loading{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}*,:after,:before{box-sizing:border-box}@font-face{font-family:ubuntu;src:url("/static/ubuntu-r.woff2") format("woff2"),url("/static/ubuntu-r.woff") format("woff");font-weight:400;font-style:normal}body{display:block!important;opacity:1!important;font-family:ubuntu,sans-serif;color:#333;overflow-x:hidden}.show{display:block;opacity:1}.hide{display:none;opacity:0}.g-footer-copyright,.i-banner-form-response .response,.i-banner-mail-title,.i-connect-content,.i-connect-content-btn,.i-develop-item-asset,.i-target-item-feature,.i-team-item-desc,.text-center{text-align:center}.padding20{padding:20px}.header-with-color{background-image:linear-gradient(-270deg,#784ade,#4324ba);box-shadow:0 0 5px rgba(0,0,0,.5)}@keyframes line-scale-pulse-out{0%{transform:scaley(1)}50%{transform:scaley(.4)}to{transform:scaley(1)}}.loading{z-index:100000;position:fixed;top:0;left:0;right:0;bottom:0;background-color:#4324ba}.loading-inner-dot{background-color:#ccc;width:5px;height:35px;border-radius:2px;margin:2px;animation-fill-mode:both;display:inline-block;animation:line-scale-pulse-out .9s -.6s infinite cubic-bezier(.85,.25,.37,.85)}.loading-inner-dot:nth-child(2),.loading-inner-dot:nth-child(4){animation-delay:-.4s!important}.loading-inner-dot:first-child,.loading-inner-dot:nth-child(5){animation-delay:-.2s!important}.container{width:1170px;margin:0 auto}.back-to-top{cursor:pointer;width:70px;height:70px;position:fixed;bottom:94px;background:url('+i(77)+") no-repeat 50%;background-size:100%;transition:opacity .5s}.base-style{padding-top:30px;padding-bottom:30px;font-size:20px;line-height:28px;color:#888}.base-style h2{color:#333;margin-bottom:50px}.base-style ol{padding-left:0}.g-header{z-index:1000000;position:fixed;top:0;width:100%;height:90px;padding:0 30px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.g-header-logo-asset{width:217px;height:36px}.g-header-navbar{display:-ms-inline-flexbox;display:inline-flex}.g-header-navbar-item{margin-right:25px}.g-header-navbar-item:last-of-type{margin-right:0}.g-header-navbar-link{color:#fff;font-size:22px;text-decoration:none}.g-header-type2{z-index:10000000;background-image:linear-gradient(270deg,#784ade,#4324ba)}.g-footer{background-color:#39277e}.g-footer-inner{height:275px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;color:#fbfbfb;font-size:16px}.g-footer-inner a{color:inherit}.g-footer-placeholder{font-size:16px;line-height:22px}.g-footer-item{padding-top:53px;width:360px;margin-right:40px}.g-footer-item:last-of-type{margin-right:0}.g-footer-item-title{margin-bottom:25px;font-size:24px;line-height:28px;color:#fff}.g-footer-copyright{height:60px;line-height:60px;background-color:#1d0d5e;color:#fff;font-size:16px}.i-section-title{font-size:46px;color:#4324ba;line-height:53px;text-align:center;font-weight:400}.i-section-title-type2{color:#ff5c3c}.i-section-sub-title{text-align:center;font-size:32px;line-height:37px;margin-top:11px;margin-bottom:0}.u-mobile{display:none!important}.i-banner{height:780px;background:url("+i(78)+") no-repeat 50%;background-size:cover;position:relative;overflow:hidden}.i-banner-inner{position:absolute;top:0;left:0;right:0;bottom:0;background-color:rgba(67,36,186,.9)}.i-banner-video{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-o-object-fit:cover;object-fit:cover;height:100%;width:100%}.i-banner-info{margin-top:214px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.i-banner-info-title{line-height:54px;font-size:47px;color:#fff;text-align:center}.i-banner-info-divider{width:230px;height:1px;background-color:#fff;opacity:.5;margin-top:26px;margin-bottom:15px}.i-banner-info-sub-title{line-height:53px;font-size:47px;font-weight:400;text-align:center;color:#fff;margin-bottom:122px}.i-banner-info-btn{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;color:#fff;outline:none;cursor:pointer;border:1px solid #fff;border-radius:100px;padding:18px 24px;transition:color .35s}.i-banner-info-btn:hover{background-color:#fff;color:#333}.i-banner-mail-title{font-size:22px;color:#fff;line-height:26px;margin-top:0;margin-bottom:34px}.i-banner-form-wrapper{display:-ms-flexbox;display:flex}.i-banner-form-input{width:265px;margin-right:18px}.i-banner-form-input input{width:100%;font-size:16px;color:#333;height:16px;padding:19px 24px;background:#fcfcfc;border:1px solid #fcfcfc;border-radius:100px;outline:none}.i-banner-form-input input ::-webkit-input-placeholder{color:#ccc}.i-banner-form-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;border:1px solid #fff;background-color:transparent;border-radius:100px;height:40px;width:104px;font-size:16px;color:#fff;transition:.35s}.i-banner-form-button:hover{background-color:#fff;color:#333}.i-banner-form-response{margin-top:10px}.i-banner-form-response a{color:#fff}.i-banner-form-response .response{max-width:500px;font-size:18px;color:#fff}div[for=mce-EMAIL]{padding-top:10px;width:265px;color:#fff;background-color:transparent!important}.i-vision{background-color:#fbfbfb;height:250px}.i-vision-inner{display:-ms-flexbox;display:flex}.i-vision-item{width:560px;height:250px}.i-vision-item-inner{width:370px;height:87px;font-size:26px}.i-service{padding-top:111px}.i-service-list{padding-top:70px;padding-bottom:100px}.i-service-item{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.i-service-item:last-of-type{margin-bottom:0}.i-service-item-left .i-service-item-desc{margin-right:40px}.i-service-item-left .i-service-item-asset1,.i-service-item-left .i-service-item-asset3{border-left:2px solid}.i-service-item-right .i-service-item-desc{margin-left:40px}.i-service-item-right .i-service-item-asset2{border-right:2px solid}.i-service-item-desc{width:560px;height:324px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;color:#ff5c3c}.i-service-item-title{margin:0 0 23px;font-size:30px;font-weight:400;line-height:35px}.i-service-item-para{color:#666;line-height:26px}.i-advantage{background-color:#fbfbfb;padding-top:100px;padding-bottom:131px}.i-advantage-list{padding-top:78px}.i-advantage-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:62px}.i-advantage-item:last-of-type{margin-bottom:0}.i-advantage-item-asset{margin-right:76px;-ms-flex-negative:0;flex-shrink:0;width:84px;height:84px}.i-advantage-item-title{color:#4324ba;font-weight:400;font-size:28px;margin:0 0 12px}.i-advantage-item-para{font-size:22px;line-height:26px;margin:0}.i-now{padding-top:90px;padding-bottom:85px}.i-now-list{padding-top:121px}.i-now-item{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:122px}.i-now-item:last-of-type{margin-bottom:0}.i-now-item-asset{width:360px;height:152px;margin-right:40px}.i-now-item-asset img{width:130px;height:130px}.i-now-item-assets{width:483px}.i-now-item-title{font-size:30px;color:#ff5c3c;font-weight:400;line-height:35px;margin-top:0;margin-bottom:25px}.i-now-item-para{font-size:22px;line-height:26px}.i-dapp{height:880px;background:url("+i(79)+') no-repeat 50%;background-size:cover;padding:110px 0 120px}.i-dapp-title,.i-dapp-top-text{font-size:40px;text-align:center;color:#fff;line-height:46px}.i-dapp-title{margin-bottom:32px}.i-dapp-sub-title{text-align:center;font-size:30px;color:#fff;line-height:30px;margin-bottom:80px}.i-dapp-big-word{margin:0;width:auto;font-size:70px;text-align:center;color:#fff}.i-dapp-list{background-color:rgba(0,0,0,.2);background-image:linear-gradient(134deg,#3023ae,#c86dd7);display:-ms-flexbox;display:flex;width:100%}.i-dapp-clearlist{width:100%;margin-top:32px;margin-bottom:32px}.i-dapp-item{width:50%;position:relative}.i-dapp-item:first-of-type:after{content:"";position:absolute;right:0;top:50%;transform:translateY(-50%);width:1px;height:83px;background-color:hsla(0,0%,100%,.3)}.i-dapp-item-para{width:370px;height:145px;font-size:26px;text-align:center;color:#fff;line-height:30px}.i-target{background-color:#fff;padding-top:100px;padding-bottom:79px}.i-target-type-2{background-color:#fbfbfb;padding-top:0;padding-bottom:163px}.i-target-list{padding-top:82px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.i-target-item{width:360px}.i-target-item-avator{width:360px;height:342px;margin-bottom:21px}.i-target-item-avator-img{width:100%;height:100%}.i-target-item-name{font-size:26px;color:#4324ba;text-align:center;line-height:30px;height:58px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:41px}.i-target-item-feature-item{font-size:22px;line-height:30px}.i-target-desc{padding-top:111px;margin-bottom:119px;font-size:32px;font-weight:400;line-height:37px;text-align:center;color:#4324ba}.i-target-graph{padding:0 5px 106px}.i-target-graph-img{width:100%;height:100%}.i-target-slogan{text-align:center;font-size:32px;color:#06bac5}.i-cycle{padding-top:101px;height:1080px;background-image:linear-gradient(-180deg,rgba(61,37,170,.9),#2c1680)}.i-cycle-inner{height:100%;background:url('+i(80)+') no-repeat 50%}.i-cycle-title{font-size:40px;text-align:center;padding:0 5px;color:#fff;font-weight:400;line-height:46px;margin-bottom:40px}.i-cycle-list{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:105px;padding-right:105px}.i-cycle-item{-ms-flex-negative:0;flex-shrink:0;margin-right:240px;width:360px}.i-cycle-item:nth-of-type(2n){margin-right:0}.i-cycle-item-asset{width:360px;height:260px;margin-bottom:5px}.i-cycle-item-asset img{width:130px;height:130px}.i-cycle-item-assets{height:200px}.i-cycle-item-title{margin-bottom:18px;font-size:25px;color:#fff;text-align:center;line-height:29px}.i-cycle-item-feature-text{font-size:20px;color:hsla(0,0%,100%,.8);line-height:24px;font-weight:300;text-align:center}.i-innovative{padding-top:171px;padding-bottom:138px}.i-innovative-content{margin-top:93px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.i-innovative-content-asset{margin-right:40px;width:460px;height:420px}.i-innovative-content-asset img{width:280px;height:280px}.i-innovative-content-item{margin-bottom:29px}.i-innovative-content-item:last-of-type{margin-bottom:0}.i-innovative-content-item-title{font-size:26px;line-height:30px;font-weight:400;margin-bottom:3px}.i-innovative-content-item-feature>li{font-size:22px;color:#777;line-height:26px}.i-roadmap{background-color:#fbfbfb;padding-top:129px;padding-bottom:180px}.i-roadmap-asset{margin-top:89px;margin-bottom:59px;padding:0 5px;height:227px}.i-roadmap-asset>img{width:100%;height:100%}.i-roadmap-list{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.i-roadmap-item{width:260px;margin-right:40px}.i-roadmap-item:last-of-type{margin-right:0}.i-roadmap-item-title{font-size:26px;color:#ff5c3c;line-height:30px;height:112px}.i-roadmap-item-desc{font-size:18px;color:#333;line-height:24px;margin-bottom:8px}.i-develop{padding-top:104px;padding-bottom:112px}.i-develop-list{margin-top:65px;padding-top:67px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.i-develop-item{width:360px;margin-right:40px}.i-develop-item:last-of-type{margin-right:0}.i-develop-item-asset{width:360px;height:200px}.i-develop-item-asset img{width:158px;height:158px}.i-develop-item-title{margin-top:15px;margin-bottom:19px;font-size:24px;line-height:28px;text-align:center}.i-develop-item-feature>li{text-align:center;font-size:22px;color:#999;line-height:36px}.i-team{background-color:#fbfbfb;padding-top:82px;padding-bottom:113px}.i-team-list{margin-top:38px;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between}.i-team-item{width:260px;height:454px;margin-right:40px;position:relative}.i-team-item:nth-of-type(4n){margin-right:0}.i-team-item-avator{padding:50px 50px 60px;position:relative}.i-team-item-avator>img{width:160px;height:160px;transition:-webkit-filter .25s;transition:filter .25s;transition:filter .25s,-webkit-filter .25s;position:relative}.i-team-item-avator>img:hover{-webkit-filter:none;filter:none}.i-team-item-avator:after{content:"";position:absolute;left:50px;top:50px;width:160px;height:160px;background:url('+i(81)+') no-repeat 50%;background-size:100%}.i-team-item-avator-block>img{border-radius:0}.i-team-item-name{color:#4324ba;font-size:20px;line-height:24px}.i-team-item-position{font-size:16px;color:#4324ba;line-height:18px;margin-top:11px;margin-bottom:20px}.i-team-item-office{font-size:16px;color:#ff5c3c;line-height:18px}.i-social{padding-top:115px;padding-bottom:62px}.i-social-list{margin-top:68px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.i-social-item{margin-right:40px;width:560px}.i-social-item:last-of-type{margin-right:0}.i-social-item-asset{height:412px;margin-bottom:30px}.i-social-item-asset>img{width:100%}.i-social-item-desc{margin-bottom:36px}.i-social-item-desc:last-of-type{margin-bottom:0}.i-social-item-descs{margin-bottom:45px}.i-social-item-title{font-size:26px;color:#4324ba;font-weight:400;line-height:30px;margin-bottom:1px}.i-social-item-feature>li{font-size:22px;color:#777;line-height:26px}.i-social-item-feature>li:last-of-type{margin-bottom:0}.i-connect{height:616px;background-color:#4324ba;color:#fff;padding-top:120px}.i-connect .i-section-title{color:#fff}.i-connect-content{padding-top:50px}.i-connect-content-btn{display:inline-block;line-height:47px;width:226px;height:47px;border:1px solid #fff;border-radius:25px;color:#fff;transition:color .35s;font-size:16px;text-decoration:none}.i-connect-content-btn:hover{background-color:#fff;color:#333}.i-connect-content-list{padding-top:110px}.i-connect-content-list img{width:40px;height:40px}.i-connect-content-list a{display:inline-block;margin-right:33px}.i-connect-content-list a:last-of-type{margin-right:0}.i-nav-main-item:after,.i-nav-main-item:before{content:"";width:1px;height:50%;background-color:hsla(0,0%,85%,.5);position:absolute}.i-nav{position:fixed;top:50%;left:-186px;transition:.35s;transform:translateY(-50%);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.i-nav:hover{left:0}.i-nav-main{width:186px;background-color:rgba(67,36,186,.9);padding:12px 30px}.i-nav-main-item{padding-top:13px;padding-bottom:13px;position:relative}.i-nav-main-item:first-of-type:before,.i-nav-main-item:last-of-type:after{opacity:0}.i-nav-main-item:after{left:-15px;top:50%}.i-nav-main-item:before{left:-15px;top:0}.i-nav-main-item-active .i-nav-main-link{position:relative;color:#fff}.i-nav-main-item-active .i-nav-main-link:before{position:absolute;left:-17.5px;top:50%;transform:translateY(-50%);content:"";width:5px;height:5px;border-radius:100%;background-color:#d8d8d8}.i-nav-main-link{color:hsla(0,0%,100%,.5);font-size:15px;text-decoration:none}.i-nav-icon{cursor:pointer;width:55px;height:55px;background-color:rgba(67,36,186,.9)}.t-list{padding-top:150px}.t-item{padding:80px 0;display:-ms-flexbox;display:flex;border-bottom:1px solid #9d9d9d;-ms-flex-pack:justify;justify-content:space-between}.t-item:last-of-type{border-bottom:0}.t-item-avator{position:relative;margin-right:40px}.t-item-avator,.t-item-avator:after,.t-item-avator>img{width:260px;height:260px}.t-item-avator:after{content:"";position:absolute;left:0;top:0;background:url('+i(82)+") no-repeat 50%;background-size:100%}.t-item-avator-linkedin{position:absolute;right:0;bottom:0;width:36px;height:36px;background:url("+i(83)+") no-repeat 50%;background-size:100%;z-index:1000}.t-item-avator-company:after,.t-item-avator-company:before{display:none}.t-item-staff{-ms-flex:1 1 0%;flex:1 1 0%}.t-item-staff-name{font-size:30px;color:#4324ba;line-height:35px;margin-bottom:5px}.t-item-staff-position{font-size:20px;font-weight:400;color:#4324ba;line-height:24px;margin-bottom:11px}.t-item-staff-position-desc{font-size:20px;color:#ff5c3c;line-height:30px;margin-bottom:20px}.t-item-staff-position-desc>a{color:#ff5c3c}.t-item-staff-introduce{font-size:20px;color:#777;letter-spacing:.33px;line-height:30px;margin-bottom:20px}.t-item-staff-companies{width:100%;max-height:250px}",""])}});