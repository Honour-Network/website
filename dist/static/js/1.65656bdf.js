webpackJsonp([1],{211:function(t,e,i){t.exports=i.p+"static/images/head-mask-gray.6dbc6b72.svg"},212:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(n[r]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="("+a[2]+") and ("+i+")"),t.push(a))}},t}},213:function(t,e,i){t.exports=i.p+"static/images/backtop.afb1a5d3.svg"},214:function(t,e,i){t.exports=i.p+"static/images/banner.722249c4.jpg"},215:function(t,e,i){t.exports=i.p+"static/images/pic2.b53eaa44.jpg"},216:function(t,e,i){t.exports=i.p+"static/images/banner-2.23440771.jpg"},217:function(t,e,i){t.exports=i.p+"static/images/life-cycle-bg.8456f22d.svg"},218:function(t,e,i){t.exports=i.p+"static/images/head-mask-white.7ca0dd72.svg"},219:function(t,e,i){t.exports=i.p+"static/images/linked-in.b6a869da.svg"},220:function(t,e){var i={},n=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},o=n(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),r=n(function(){return document.head||document.getElementsByTagName("head")[0]}),a=null,p=0,l=[];function s(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=i[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(g(o.parts[a],e))}else{var p=[];for(a=0;a<o.parts.length;a++)p.push(g(o.parts[a],e));i[o.id]={id:o.id,refs:1,parts:p}}}}function f(t){for(var e=[],i={},n=0;n<t.length;n++){var o=t[n],r=o[0],a={css:o[1],media:o[2],sourceMap:o[3]};i[r]?i[r].parts.push(a):e.push(i[r]={id:r,parts:[a]})}return e}function c(t,e){var i=r(),n=l[l.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),l.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function m(t){t.parentNode.removeChild(t);var e=l.indexOf(t);e>=0&&l.splice(e,1)}function d(t){var e=document.createElement("style");return e.type="text/css",c(t,e),e}function g(t,e){var i,n,o;if(e.singleton){var r=p++;i=a||(a=d(e)),n=h.bind(null,i,r,!1),o=h.bind(null,i,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(t){var e=document.createElement("link");return e.rel="stylesheet",c(t,e),e}(e),n=function(t,e){var i=e.css,n=e.sourceMap;n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([i],{type:"text/css"}),r=t.href;t.href=URL.createObjectURL(o),r&&URL.revokeObjectURL(r)}.bind(null,i),o=function(){m(i),i.href&&URL.revokeObjectURL(i.href)}):(i=d(e),n=function(t,e){var i=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,i),o=function(){m(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");void 0===(e=e||{}).singleton&&(e.singleton=o()),void 0===e.insertAt&&(e.insertAt="bottom");var n=f(t);return s(n,e),function(t){for(var o=[],r=0;r<n.length;r++){var a=n[r];(p=i[a.id]).refs--,o.push(p)}t&&s(f(t),e);for(r=0;r<o.length;r++){var p;if(0===(p=o[r]).refs){for(var l=0;l<p.parts.length;l++)p.parts[l]();delete i[p.id]}}}};var x,b=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function h(t,e,i,n){var o=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=b(e,o);else{var r=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(r,a[e]):t.appendChild(r)}}},221:function(t,e,i){(t.exports=i(212)()).push([t.i,'.i-cycle-item-feature,.i-cycle-list,.i-innovative-content-item-feature,.i-innovative-content-list,.i-nav-main-list,.i-target-item-feature,.i-target-list,.i-team-list{padding:0;margin:0;list-style:none}.g-footer-contact-desc,.g-footer-contact-desc dd,.g-footer-item-title,.g-footer-item p,.i-banner-info-sub-title,.i-banner-info-title,.i-cycle-item-title,.i-cycle-title,.i-dapp-sub-title,.i-dapp-title,.i-dapp-top-text,.i-section-title,.i-target-item-name,.i-target-slogan,.i-team-item-name,.t-item-staff-introduce,.t-item-staff-name,.t-item-staff-position,.t-item-staff-position-desc,.t-item-staff-position-title,.t-item-staff-title{margin:0}.g-footer-contact-desc,.g-footer-contact-desc dd,.i-banner-info-sub-title,.i-banner-info-title{padding:0}.g-footer-copyright,.i-approach-inner,.i-approach-inner-content,.i-approach-inner-content-item-1,.i-approach-inner-content-item-2,.i-approach-inner-content-item-3,.i-approach-inner-content-item-4,.i-assets-inner,.i-assets-item,.i-banner-form-button,.i-banner-form-response,.i-cycle-item-asset,.i-dapp-item,.i-demo,.i-demo-inner-button,.i-demo-inner-text,.i-incentive-inner,.i-incentive-inner-content,.i-innovative-content-asset,.i-mandates-inner,.i-mandates-inner-list,.i-mandates-inner-list-item,.i-nav-icon,.i-nav-main,.i-platform-inner,.i-platform-inner-list,.i-platform-inner-list-item,.i-problems-inner,.i-problems-inner-content,.i-problems-inner-content-img-date,.i-protocol-inner,.i-roadmap-inner,.i-vision-inner,.i-vision-item,.i-whoAreWe-inner,.i-whoAreWe-inner-list,.i-whoAreWe-inner-list-item,.loading{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}*,:after,:before{box-sizing:border-box}@font-face{font-family:ubuntu;src:url("/static/ubuntu-r.woff2") format("woff2"),url("/static/ubuntu-r.woff") format("woff");font-weight:400;font-style:normal}*,:after,:before,body{font-family:ubuntu,sans-serif}body{display:block!important;opacity:1!important;color:#333;overflow-x:hidden}.show{display:block;opacity:1}.hide{display:none;opacity:0}.i-banner-form-input input,.i-banner-form-response .response,.i-banner-mail-title,.i-connect-content,.i-connect-content-btn,.i-nav-main-item,.i-team-btn,.i-team-item-desc,.text-center{text-align:center}.padding20{padding:20px}.header-with-color{background-image:linear-gradient(-180deg,rgba(63,42,159,.9),rgba(57,39,126,.95));box-shadow:0 0 5px rgba(0,0,0,.5)}@keyframes line-scale-pulse-out{0%{transform:scaley(1)}50%{transform:scaley(.4)}to{transform:scaley(1)}}.loading{z-index:100000;position:fixed;top:0;left:0;right:0;bottom:0;background-color:#4324ba}.loading-inner-dot{background-color:#ccc;width:5px;height:35px;border-radius:2px;margin:2px;animation-fill-mode:both;display:inline-block;animation:line-scale-pulse-out .9s -.6s infinite cubic-bezier(.85,.25,.37,.85)}.loading-inner-dot:nth-child(2),.loading-inner-dot:nth-child(4){animation-delay:-.4s!important}.loading-inner-dot:first-child,.loading-inner-dot:nth-child(5){animation-delay:-.2s!important}.container{width:750px;margin:0 auto;padding:0 40px;overflow:hidden}.base-style{padding:120px 40px 40px}.base-style h2{color:#4324ba;margin-bottom:50px}.back-to-top{display:none;z-index:1000;width:100px;height:100px;position:fixed;right:20px;bottom:80px;background:url('+i(213)+') no-repeat 50%;background-size:100%;transition:opacity .5s}.g-header-navbar,.g-header-navbar:after,.g-header-navbar:before{width:32px;height:4px;background-color:#fff}.g-header{z-index:1000000;display:-ms-flexbox;display:flex;position:fixed;top:0;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;width:100%;height:72px;padding:0 40px}.g-header-logo-asset{width:242px;height:40px}.g-header-nav{height:100%;padding:0 40px;margin-right:-40px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.g-header-navbar-show{display:-ms-inline-flexbox;display:inline-flex;margin-left:118px}.g-header-navbar-item{font-size:22px;text-decoration:none;list-style-type:none;margin-left:6px}.g-header-navbar-link{text-decoration:none;color:#fff}.g-header-navbar{cursor:pointer;padding:0;position:relative}.g-header-navbar:after,.g-header-navbar:before{content:"";position:absolute;left:0}.g-header-navbar:before{top:-10px}.g-header-navbar:after{top:10px}.g-header-navbar li{display:none}.g-header-type2{background-image:linear-gradient(-180deg,rgba(63,42,159,.9),rgba(57,39,126,.95))}#headerBar{display:none}.g-footer{background-color:#39277e}.g-footer-inner{height:275px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;color:#fbfbfb;font-size:16px}.g-footer-inner a{color:inherit}.g-footer-placeholder{font-size:16px;line-height:22px}.g-footer-placeholder p{text-decoration:none}.g-footer-item{padding-top:53px;width:100%;margin-right:40px;color:#fbfbfb;font-size:16px}.g-footer-item p{text-align:center;font-size:33px;margin-top:25px}.g-footer-item a{color:inherit;text-decoration:none}.g-footer-item:last-of-type{margin-right:0}.g-footer-item-title{margin-bottom:25px;font-size:42px;line-height:40px;color:#fff;text-align:center;margin-top:39px}.g-footer-contact-desc{text-align:center}.g-footer-fill{width:100%;height:63px}.g-footer-copyright,.g-footer-notices{background-color:#1d0d5e}.g-footer-copyright{font-size:28px;color:#fff;height:72px}.i-section-title{font-size:52px;color:#4324ba;line-height:60px;text-align:center;font-weight:400}.i-section-sub-title{text-align:center;font-size:32px;line-height:36px;margin-top:20px;margin-bottom:0}.u-web{display:none!important}.i-banner{height:942px;background:url('+i(214)+") no-repeat 50%;background-size:cover;position:relative;overflow:hidden}.i-banner-inner{position:absolute;top:0;left:0;right:0;bottom:0;background-image:linear-gradient(-180deg,rgba(63,42,159,.9),rgba(57,39,126,.95))}.i-banner-video{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-o-object-fit:cover;object-fit:cover;height:100%;width:100%}.i-banner-info{margin-top:280px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.i-banner-info-title{width:598px;height:100px;line-height:52px;font-size:44px;color:#fff;text-align:center;margin-bottom:40px}.i-banner-info-divider{width:460px;height:2px;background-color:#fff;opacity:.5;margin-bottom:40px;margin-top:40px}.i-banner-info-sub-title{line-height:52px;font-size:44px;font-weight:400;text-align:center;color:#fff;margin-bottom:94px}.i-banner-mail{display:none;margin-top:30px}.i-banner-mail-title{font-size:28px;color:#fff;line-height:32px;margin-top:0;margin-bottom:62px}.i-banner-form-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.i-banner-form-input{width:560px;margin-bottom:30px}.i-banner-form-input input{width:100%;font-size:32px;color:#333;height:80px;padding:0 40px;background:#fcfcfc;border:2px solid #fcfcfc;border-radius:200px;outline:none}.i-banner-form-input input ::-webkit-input-placeholder{color:#ccc}.i-banner-form-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;border:1px solid #fff;background-color:transparent;border-radius:200px;height:80px;width:560px;outline:none;font-size:32px;color:#fff;transition:.35s}.i-banner-form-button:active{background-color:#fff;color:#333}.i-banner-form-response{margin-top:20px}.i-banner-form-response a{color:#fff}.i-banner-form-response .response{max-width:560px;font-size:32px;color:#fff}div[for=mce-EMAIL]{text-align:center;margin:0!important;padding-top:20px;font-size:32px;width:560px;color:#fff;background-color:transparent!important}.i-demo{visibility:hidden;position:fixed;left:0;top:0;width:100vw;height:100vh;background:rgba(0,0,0,.4);z-index:99;transition:all .2s ease-in-out}.i-demo-inner{width:600px;height:300px;background:#fff;box-shadow:0 0 54px 0 rgba(0,0,0,.5);border-radius:40px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:space-evenly;justify-content:space-evenly;-ms-flex-align:center;align-items:center}.i-demo-inner-text{height:140px;font-size:26px;color:#333;letter-spacing:0;text-align:center}.i-demo-inner-button{background:#4324ba;border-radius:100px;line-height:48px;width:300px;height:60px;border:1px solid #fff;transition:color .35s;text-decoration:none;font-size:22px;letter-spacing:0}.i-demo-inner-button a{color:#fff;text-decoration:none}.i-assets{background-color:#fff;margin:40px 0}.i-assets-inner{-ms-flex-direction:column;flex-direction:column}.i-assets-item-img{-ms-flex:1 1;flex:1 1;width:670px;height:388px}.i-assets-item-img img{-o-object-fit:cover;object-fit:cover;-o-object-position:0 0;object-position:0 0;width:100%;height:100%}.i-assets-item-inner{margin-top:40px;-ms-flex:1 1;flex:1 1;font-family:ubuntu,sans-serif;font-size:32px;color:#4324ba;letter-spacing:0}.i-vision{background-color:#fbfbfb;padding:76px 0}.i-vision-item-inner{font-family:ubuntu,sans-serif;font-size:40px;color:#05bac5;letter-spacing:0}.i-whoAreWe{background-color:#fff;padding:112px 0}.i-whoAreWe-inner{-ms-flex-direction:column;flex-direction:column}.i-whoAreWe-inner-title{font-family:ubuntu-Bold,sans-serif;font-size:52px;color:#ff5c3c;letter-spacing:0;text-align:center}.i-whoAreWe-inner-subTitle{margin-top:20px;font-family:ubuntu,sans-serif;font-size:32px;color:#4324ba;letter-spacing:0;text-align:center}.i-whoAreWe-inner-list{-ms-flex-direction:column;flex-direction:column}.i-whoAreWe-inner-list-item{-ms-flex:1 1;flex:1 1;margin-top:70px;-ms-flex-direction:column;flex-direction:column}.i-whoAreWe-inner-list-item-img{width:320px;height:320px}.i-whoAreWe-inner-list-item-img img{-o-object-fit:cover;object-fit:cover;-o-object-position:0 0;object-position:0 0;width:100%;height:100%}.i-whoAreWe-inner-list-item-title{margin-top:30px;font-family:ubuntu,sans-serif;font-size:36px;color:#4324ba;letter-spacing:0}.i-whoAreWe-inner-list-item-content{margin-top:20px;font-family:ubuntu,sans-serif;font-size:32px;color:#777;letter-spacing:0}.i-problems{background:url("+i(215)+') no-repeat 50%;padding:100px 0}.i-problems-inner{-ms-flex-direction:column;flex-direction:column}.i-problems-inner-title{font-family:ubuntu-Bold,sans-serif;font-size:52px;color:#fff;letter-spacing:0;text-align:center}.i-problems-inner-content{-ms-flex-direction:column;flex-direction:column;margin-top:70px}.i-problems-inner-content-img{margin-top:80px;-ms-flex:1 1;flex:1 1;width:670px;height:536px}.i-problems-inner-content-img-date{display:none;-ms-flex-pack:distribute;justify-content:space-around}.i-problems-inner-content-img-date-item{font-family:HelveticaNeue,sans-serif;font-size:32px;color:#fff}.i-problems-inner-content-img img{-o-object-fit:cover;object-fit:cover;-o-object-position:0 0;object-position:0 0;width:100%;height:100%}.i-problems-inner-content-text{-ms-flex-order:-1;order:-1;font-size:36px}.i-problems-inner-content-text,.i-problems-inner-tip{font-family:ubuntu,sans-serif;color:#fff;letter-spacing:0}.i-problems-inner-tip{margin-top:80px;font-size:32px}.i-approach{background:#fff;padding:100px 0;overflow:hidden}.i-approach-inner{-ms-flex-direction:column;flex-direction:column}.i-approach-inner-title{font-family:ubuntu-Bold,sans-serif;font-size:52px;color:#ff5c3c;letter-spacing:0;text-align:center}.i-approach-inner-img{margin-top:70px;width:670px;height:186px}.i-approach-inner-img img{-o-object-fit:cover;object-fit:cover;-o-object-position:0 0;object-position:0 0;width:100%;height:100%}.i-approach-inner-subTitle{margin-top:80px;font-family:ubuntu-Bold,sans-serif;font-size:52px;color:#4324ba;letter-spacing:0;text-align:center}.i-approach-inner-content{margin-top:40px;-ms-flex-direction:column;flex-direction:column}.i-approach-inner-content-item-1{-ms-flex:1 1;flex:1 1;width:670px;height:330px;margin-top:40px;padding:0 40px;font-family:ubuntu,sans-serif;font-size:48px;color:#fff;letter-spacing:0;text-align:center;background-image:linear-gradient(-135deg,#3f2a9f,#39277e)}.i-approach-inner-content-item-1:before{content:"1";position:absolute;opacity:.15;font-size:248px;color:#fff;font-family:ubuntu,sans-serif}.i-approach-inner-content-item-2{-ms-flex:1 1;flex:1 1;width:670px;height:330px;margin-top:40px;padding:0 40px;font-family:ubuntu,sans-serif;font-size:48px;color:#fff;letter-spacing:0;text-align:center;background-image:linear-gradient(-135deg,#3f2a9f,#39277e)}.i-approach-inner-content-item-2:before{content:"2";position:absolute;opacity:.15;font-size:248px;color:#fff;font-family:ubuntu,sans-serif}.i-approach-inner-content-item-3{-ms-flex:1 1;flex:1 1;width:670px;height:330px;margin-top:40px;padding:0 40px;font-family:ubuntu,sans-serif;font-size:48px;color:#fff;letter-spacing:0;text-align:center;background-image:linear-gradient(-135deg,#3f2a9f,#39277e)}.i-approach-inner-content-item-3:before{content:"3";position:absolute;opacity:.15;font-size:248px;color:#fff;font-family:ubuntu,sans-serif}.i-approach-inner-content-item-4{-ms-flex:1 1;flex:1 1;width:670px;height:330px;margin-top:40px;padding:0 40px;font-family:ubuntu,sans-serif;font-size:48px;color:#fff;letter-spacing:0;text-align:center;background-image:linear-gradient(-135deg,#3f2a9f,#39277e)}.i-approach-inner-content-item-4:before{content:"4";position:absolute;opacity:.15;font-size:248px;color:#fff;font-family:ubuntu,sans-serif}.i-protocol{background:#fbfbfb;padding:100px 0}.i-protocol-inner{-ms-flex-direction:column;flex-direction:column}.i-protocol-inner-title{font-family:ubuntu-Bold,sans-serif;font-size:52px;color:#4324ba;letter-spacing:0;text-align:center}.i-protocol-inner-content{margin-top:20px;font-family:ubuntu,sans-serif;font-size:32px;color:#ff5c3c;letter-spacing:0}.i-protocol-inner-img{width:670px;margin-top:40px;height:188px}.i-protocol-inner-img:last-child{height:280px}.i-protocol-inner-img img{-o-object-fit:cover;object-fit:cover;-o-object-position:0 0;object-position:0 0;width:100%;height:100%}.i-platform{background:#fff;padding:100px 0}.i-platform-inner{-ms-flex-direction:column;flex-direction:column}.i-platform-inner-title{font-family:ubuntu-Bold,sans-serif;font-size:52px;color:#4324ba;letter-spacing:0;text-align:center}.i-platform-inner-subTitle{color:#05bac5;text-align:center}.i-platform-inner-content,.i-platform-inner-subTitle{margin-top:20px;font-family:ubuntu,sans-serif;font-size:32px;letter-spacing:0}.i-platform-inner-content{color:#ff5c3c}.i-platform-inner-img{margin-top:40px;margin-bottom:40px;width:670px;height:291px}.i-platform-inner-img img{-o-object-fit:cover;object-fit:cover;-o-object-position:0 0;object-position:0 0;width:100%;height:100%}.i-platform-inner-list{-ms-flex-align:start;align-items:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}.i-platform-inner-list-item{margin-top:60px;width:335px;-ms-flex-direction:column;flex-direction:column}.i-platform-inner-list-item-img{width:128px;height:128px}.i-platform-inner-list-item-img img{-o-object-fit:cover;object-fit:cover;-o-object-position:0 0;object-position:0 0;width:100%;height:100%}.i-platform-inner-list-item-text{margin-top:36px;width:220px;font-family:ubuntu,sans-serif;font-size:25px;color:#4324ba;letter-spacing:0;text-align:center}.i-mandates{background:#fbfbfb;padding:100px 0}.i-mandates-inner{-ms-flex-direction:column;flex-direction:column}.i-mandates-inner-title{font-family:ubuntu-Bold,sans-serif;font-size:52px;color:#4324ba;letter-spacing:0;text-align:center}.i-mandates-inner-subTitle{margin-top:40px;color:#05bac5;text-align:center}.i-mandates-inner-content,.i-mandates-inner-subTitle{font-family:ubuntu,sans-serif;font-size:32px;letter-spacing:0}.i-mandates-inner-content{margin-top:20px;color:#ff5c3c}.i-mandates-inner-img{margin-top:40px;width:670px;height:317px}.i-mandates-inner-img img{-o-object-fit:cover;object-fit:cover;-o-object-position:0 0;object-position:0 0;width:100%;height:100%}.i-mandates-inner-list{-ms-flex-align:start;align-items:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap}.i-mandates-inner-list-item{margin-top:80px;width:335px;padding:0 10px;-ms-flex-align:start;align-items:flex-start;-ms-flex-direction:column;flex-direction:column}.i-mandates-inner-list-item-title{font-family:ubuntu-MediumItalic,sans-serif;font-size:40px;color:#4324ba;letter-spacing:0}.i-mandates-inner-list-item-content{margin-top:20px;font-family:ubuntu,sans-serif;font-size:40px;color:#05bac5;letter-spacing:0}.i-incentive{background:#fff;padding:100px 0}.i-incentive-inner{-ms-flex-direction:column;flex-direction:column}.i-incentive-inner-title{font-family:ubuntu-Bold,sans-serif;font-size:52px;color:#4324ba;letter-spacing:0;text-align:center}.i-incentive-inner-subTitle{margin-top:40px;font-family:ubuntu,sans-serif;font-size:32px;color:#05bac5;letter-spacing:0;text-align:center}.i-incentive-inner-content{-ms-flex-direction:column;flex-direction:column;margin-top:60px}.i-incentive-inner-content-img{width:670px;height:630px}.i-incentive-inner-content-img img{-o-object-fit:cover;object-fit:cover;-o-object-position:0 0;object-position:0 0;width:100%;height:100%}.i-incentive-inner-content-text{-ms-flex:1 1;flex:1 1;margin-top:40px;font-family:ubuntu,sans-serif;font-size:32px;color:#ff5c3c;letter-spacing:0}.i-roadmap{background:#fbfbfb;padding:100px 0}.i-roadmap-inner{-ms-flex-direction:column;flex-direction:column}.i-roadmap-inner-title{font-family:ubuntu-Bold,sans-serif;font-size:52px;color:#ff5c3c;letter-spacing:0;text-align:center}.i-roadmap-inner-img{margin-top:80px;width:670px;height:1314px}.i-roadmap-inner-img img{-o-object-fit:cover;object-fit:cover;-o-object-position:0 0;object-position:0 0;width:100%;height:100%}.i-dapp{height:1700px;background:url('+i(216)+') no-repeat 50%;background-size:cover;padding:154px 76px 92px}.i-dapp-top-text{font-size:40px;text-align:center;color:#fff;line-height:46px;margin-bottom:30px}.i-dapp-title{font-size:44px;text-align:center;color:#fff;line-height:60px;margin-bottom:20px}.i-dapp-title-formLink{margin-top:140px;color:#fff;text-decoration:none}.i-dapp-title-link{cursor:pointer;text-decoration:none;padding:26px 36px;border:1px solid #fff;border-radius:200px;font-family:ubuntu-Light,sans-serif;font-size:28px;color:#fff;letter-spacing:0;text-align:center}.i-dapp-title-link:focus{background-color:#fff;color:#333}.i-dapp-title-button{color:#fff;text-decoration:none;text-align:center;margin:0 auto;display:block;width:552px;height:80px;line-height:80px;border:2px solid #fff;border-radius:40px;transition:color .35s;font-size:32px}.i-dapp-sub-title{text-align:center;font-size:36px;color:#fff;line-height:62px;margin-bottom:120px}.i-dapp-clearlist_big-word{width:41%;float:left;margin-top:10px;margin-left:42px}.i-dapp-big-word{margin:0;width:auto;font-size:50px;text-align:center;color:#fff}.i-dapp-list{background-color:rgba(0,0,0,.2);height:628px;background-image:linear-gradient(134deg,#3023ae,#c86dd7);width:100%;padding:16px 50px}.i-dapp-item{position:relative;height:290px}.i-dapp-item:first-of-type:after{content:"";position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:80px;height:2px;background-color:hsla(0,0%,100%,.3)}.i-dapp-item-para{font-size:36px;text-align:center;color:#fff;line-height:42px}.i-target{background-color:#fff;padding:100px 40px}.i-target-type-2{padding:0}.i-target-list{padding-top:100px}.i-target-item{display:-ms-flexbox;display:flex;margin-bottom:80px}.i-target-item:last-of-type{margin-bottom:0}.i-target-item-avator{-ms-flex-negative:0;flex-shrink:0;width:200px;margin-right:40px;height:190px}.i-target-item-avator-img{width:100%;height:100%}.i-target-item-name{font-size:40px;color:#4324ba;line-height:48px;margin-bottom:28px}.i-target-item-feature{text-align:left}.i-target-item-feature-item{font-size:32px;color:#999;line-height:36px}.i-target-desc{padding-top:100px;margin-bottom:100px;margin-top:0;font-size:38px;font-weight:400;line-height:46px;text-align:center;color:#4324ba}.i-target-graph{height:324px;margin-bottom:80px}.i-target-graph-img{width:100%;height:100%}.i-target-slogan{font-size:38px;line-height:46px;color:#06bac5;text-align:center}.i-cycle{padding:100px 40px;background-image:linear-gradient(-180deg,rgba(61,37,170,.9),#2c1680)}.i-cycle-inner{background:url('+i(217)+") no-repeat 50%}.i-cycle-title{font-size:38px;text-align:center;color:#fff;font-weight:400;line-height:46px;margin-bottom:80px}.i-cycle-list{padding-left:40px}.i-cycle-item{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:100px}.i-cycle-item:last-of-type{margin-bottom:0}.i-cycle-item:nth-of-type(2n){margin-right:0}.i-cycle-item-asset{-ms-flex-negative:0;flex-shrink:0;width:120px;height:120px;margin-right:80px}.i-cycle-item-asset img{width:120px}.i-cycle-item-title{margin-bottom:20px;font-weight:400;font-size:40px;color:#fff;line-height:48px}.i-cycle-item-feature-text{font-size:32px;color:hsla(0,0%,100%,.8);line-height:36px;font-weight:300}.i-innovative{padding-top:100px;padding-bottom:188px}.i-innovative-content{margin-top:80px}.i-innovative-content-asset{height:292px;margin-bottom:80px}.i-innovative-content-asset img{width:299px}.i-innovative-content-item{margin-bottom:40px}.i-innovative-content-item:last-of-type{margin-bottom:0}.i-innovative-content-item-title{font-size:32px;line-height:36px;font-weight:400;margin-bottom:4px}.i-innovative-content-item-feature>li{font-size:28px;color:#999;line-height:32px}.i-bgGray{background-color:#fbfbfb;padding-top:50px;padding-bottom:50px}.i-team-item-avator:after{background:url("+i(211)+') no-repeat 50%}.i-connect{height:800px;background-color:#4324ba;color:#fff;padding-top:100px}.i-connect .i-section-title{color:#fff}.i-connect-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;padding-top:60px}.i-connect-content-btn{display:inline-block;line-height:74px;width:452px;height:74px;border:2px solid #fff;border-radius:40px;color:#fff;transition:color .35s;font-size:32px;text-decoration:none}.i-connect-content-btn:focus{background-color:#fff;color:#333}.i-connect-content-list{padding-top:96px;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:352px}.i-connect-content-list img{width:60px;height:60px}.i-connect-content-list a{display:inline-block;margin-right:86px;margin-bottom:60px}.i-connect-content-list a:nth-of-type(3n){margin-right:0}.i-connect-content-list a:nth-of-type(n+3){margin-bottom:0}.i-nav{z-index:10000;display:none;position:fixed;opacity:.97;background-image:linear-gradient(-180deg,#3d25aa,#2c1680);left:0;top:0}.i-nav,.i-nav-main{width:100%;height:100vh}.i-nav-main-item{padding-bottom:52px}.i-nav-main-item-active .i-nav-main-link{color:#fff;text-decoration:underline}.i-nav-main-link{color:hsla(0,0%,100%,.4);font-size:40px;line-height:48px;text-decoration:none}.i-nav-icon{cursor:pointer;width:55px;height:55px;background-color:rgba(67,36,186,.9)}.base-style{padding-top:100px;padding-bottom:30px;font-size:28px;line-height:28px;color:#888}.i-team{background-color:#fbfbfb;padding-top:92px;padding-bottom:140px}.i-team-btn{margin:0 auto;display:block;line-height:74px;width:452px;height:74px;border:2px solid #4324ba;border-radius:40px;color:#4324ba;transition:color .35s;font-size:32px;text-decoration:none}.i-team-list{margin-top:34px;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between}.i-team-item{width:316px;height:608px;margin-right:38px}.i-team-item:nth-of-type(2n){margin-right:0}.i-team-item-avator{padding:86px 68px 34px;position:relative}.i-team-item-avator>img{width:200px;height:200px;transition:filter .25s}.i-team-item-avator>img:focus{filter:none}.i-team-item-avator:after{content:"";position:absolute;left:67px;top:85px;width:202px;height:202px;background:url('+i(211)+') no-repeat 50%;background-size:100%}.i-team-item-avator-block:after{display:none}.i-team-item-name{color:#4324ba;font-size:28px;line-height:36px;margin-bottom:10px}.i-team-item-position{font-size:24px;color:#4324ba;line-height:26px;margin-bottom:40px}.i-team-item-office{font-size:24px;line-height:26px;color:#ff5c3c}.t-title{padding:80px 0;border-bottom:1px solid #9d9d9d;font-size:60px;font-weight:bolder;text-align:center;color:#4324ba}.t-item{position:relative;padding:60px 0;border-bottom:1px solid #d9d9d9}.t-item:last-of-type{border-bottom:0}.t-item-avator{position:absolute;left:0;top:60px}.t-item-avator,.t-item-avator>img{width:200px;height:200px}.t-item-avator:after{content:"";position:absolute;left:-1px;top:-1px;width:202px;height:202px;background:url('+i(218)+") no-repeat 50%;background-size:100%}.t-item-avator-linkedin{position:absolute;right:0;bottom:0;width:32px;height:32px;background:url("+i(219)+") no-repeat 50%;background-size:100%;z-index:1000}.t-item-avator-company:after,.t-item-avator-company:before{display:none}.t-item-staff-title{margin-bottom:30px;text-align:center}.t-item-staff-name,.t-item-staff-title{font-size:40px;font-weight:bolder;color:#4324ba;line-height:48px}.t-item-staff-name{margin:0 0 30px 250px}.t-item-staff-position{font-size:32px;font-weight:400;color:#4324ba;line-height:44px;margin:0 0 30px 250px}.t-item-staff-position-title{font-size:32px;color:#ff5c3c;line-height:32px;margin:30px 0}.t-item-staff-position-title>a{color:#ff5c3c}.t-item-staff-position-desc{font-size:32px;color:#ff5c3c;line-height:44px;margin:100px 0 30px}.t-item-staff-position-desc>a{color:#ff5c3c}.t-item-staff-introduce{font-size:32px;color:#777;line-height:44px;margin-bottom:20px}.t-item-staff-companies{width:100%;max-height:158px}.t-item-staff-chart{padding-bottom:150px}.t-item-staff-chart-table{margin-bottom:20px}.t-item-staff-chart-table td{padding:15px}.t-item-staff-chart-canvas{width:100%;height:300px;padding:50px 0}",""])},27:function(t,e,i){var n=i(221);"string"==typeof n&&(n=[[t.i,n,""]]);i(220)(n,{});n.locals&&(t.exports=n.locals)}});