parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"L/DU":[function(require,module,exports) {

},{"./..\\img\\cafe-store.jpg":[["cafe-store.c43a8f63.jpg","dzVe"],"dzVe"],"./..\\img\\coffeeimg2.jpg":[["coffeeimg2.071e7257.jpg","LMRc"],"LMRc"],"./..\\img\\contact.jpg":[["contact.fb5c715a.jpg","I/J6"],"I/J6"]}],"O8HL":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded",function(){var t=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);t.length>0&&t.forEach(function(t){t.addEventListener("click",function(){var e=t.dataset.target,n=document.getElementById(e);t.classList.toggle("is-active"),n.classList.toggle("is-active")})})});
},{}],"8zAk":[function(require,module,exports) {
var define;
var t;function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(o,n){"function"==typeof t&&t.amd?t([],n()):"object"==("undefined"==typeof module?"undefined":e(module))&&module.exports?module.exports=n():function t(){document&&document.body?o.zenscroll=n():setTimeout(t,9)}()}(this,function(){"use strict";var t=function(t){return t&&"getComputedStyle"in window&&"smooth"===window.getComputedStyle(t)["scroll-behavior"]};if("undefined"==typeof window||!("document"in window))return{};var o=function(e,o,n){o=o||999,n||0===n||(n=9);var i,r=function(t){i=t},u=function(){clearTimeout(i),r(0)},c=function(t){return Math.max(0,e.getTopOf(t)-n)},f=function(n,i,c){if(u(),0===i||i&&i<0||t(e.body))e.toY(n),c&&c();else{var f=e.getY(),a=Math.max(0,n)-f,s=(new Date).getTime();i=i||Math.min(Math.abs(a),o),function t(){r(setTimeout(function(){var o=Math.min(1,((new Date).getTime()-s)/i),n=Math.max(0,Math.floor(f+a*(o<.5?2*o*o:o*(4-2*o)-1)));e.toY(n),o<1&&e.getHeight()+n<e.body.scrollHeight?t():(setTimeout(u,99),c&&c())},9))}()}},a=function(t,e,o){f(c(t),e,o)};return{setup:function(t,e){return(0===t||t)&&(o=t),(0===e||e)&&(n=e),{defaultDuration:o,edgeOffset:n}},to:a,toY:f,intoView:function(t,o,i){var r=t.getBoundingClientRect().height,u=e.getTopOf(t)+r,s=e.getHeight(),l=e.getY(),d=l+s;c(t)<l||r+n>s?a(t,o,i):u+n>d?f(u-s+n,o,i):i&&i()},center:function(t,o,n,i){f(Math.max(0,e.getTopOf(t)-e.getHeight()/2+(n||t.getBoundingClientRect().height/2)),o,i)},stop:u,moving:function(){return!!i},getY:e.getY,getTopOf:e.getTopOf}},n=document.documentElement,i=function(){return window.scrollY||n.scrollTop},r=o({body:document.scrollingElement||document.body,toY:function(t){window.scrollTo(0,t)},getY:i,getHeight:function(){return window.innerHeight||n.clientHeight},getTopOf:function(t){return t.getBoundingClientRect().top+i()-n.offsetTop}});if(r.createScroller=function(t,e,i){return o({body:t,toY:function(e){t.scrollTop=e},getY:function(){return t.scrollTop},getHeight:function(){return Math.min(t.clientHeight,window.innerHeight||n.clientHeight)},getTopOf:function(t){return t.offsetTop}},e,i)},"addEventListener"in window&&!window.noZensmooth&&!t(document.body)){var u="history"in window&&"pushState"in history,c=u&&"scrollRestoration"in history;c&&(history.scrollRestoration="auto"),window.addEventListener("load",function(){c&&(setTimeout(function(){history.scrollRestoration="manual"},9),window.addEventListener("popstate",function(t){t.state&&"zenscrollY"in t.state&&r.toY(t.state.zenscrollY)},!1)),window.location.hash&&setTimeout(function(){var t=r.setup().edgeOffset;if(t){var e=document.getElementById(window.location.href.split("#")[1]);if(e){var o=Math.max(0,r.getTopOf(e)-t),n=r.getY()-o;0<=n&&n<9&&window.scrollTo(0,o)}}},9)},!1);var f=new RegExp("(^|\\s)noZensmooth(\\s|$)");window.addEventListener("click",function(t){for(var o=t.target;o&&"A"!==o.tagName;)o=o.parentNode;if(!(!o||1!==t.which||t.shiftKey||t.metaKey||t.ctrlKey||t.altKey)){if(c){var n=history.state&&"object"==e(history.state)?history.state:{};n.zenscrollY=r.getY();try{history.replaceState(n,"")}catch(t){}}var i=o.getAttribute("href")||"";if(0===i.indexOf("#")&&!f.test(o.className)){var a=0,s=document.getElementById(i.substring(1));if("#"!==i){if(!s)return;a=r.getTopOf(s)}t.preventDefault();var l=function(){window.location=i},d=r.setup().edgeOffset;d&&(a=Math.max(0,a-d),u&&(l=function(){history.pushState({},"",i)})),r.toY(a,null,l)}}},!1)}return r});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./styles/main.scss"),require("./vendorNav"),require("./zenscroll/zenscroll-min");
},{"./styles/main.scss":"L/DU","./vendorNav":"O8HL","./zenscroll/zenscroll-min":"8zAk"}]},{},["Focm"], null)
//# sourceMappingURL=parcel.29d8b591.js.map