!function(e){function webpackJsonpCallback(r){for(var o,i,a=r[0],c=r[1],u=r[2],s=0,l=[];s<a.length;s++)i=a[s],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&l.push(t[i][0]),t[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(_&&_(r);l.length;)l.shift()();return n.push.apply(n,u||[]),checkDeferredModules()}function checkDeferredModules(){for(var e,r=0;r<n.length;r++){for(var o=n[r],i=!0,a=1;a<o.length;a++){var _=o[a];0!==t[_]&&(i=!1)}i&&(n.splice(r--,1),e=__webpack_require__(__webpack_require__.s=o[0]))}return e}var r={},t={1:0},n=[];function __webpack_require__(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=r,__webpack_require__.d=function(e,r,t){__webpack_require__.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,r){if(1&r&&(e=__webpack_require__(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(__webpack_require__.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)__webpack_require__.d(t,n,function(r){return e[r]}.bind(null,n));return t},__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(r,"a",r),r},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},__webpack_require__.p="";var o=window.webpackJsonp=window.webpackJsonp||[],i=o.push.bind(o);o.push=webpackJsonpCallback,o=o.slice();for(var a=0;a<o.length;a++)webpackJsonpCallback(o[a]);var _=i;n.push([8,2]),checkDeferredModules()}([,,,,,,,,function(e,r,t){e.exports=t(9)},function(e,r,t){"use strict";t.r(r);var n=t(2),o=t.n(n);t(10),t(11);o()(".te-mw-link").on("click",(function(e){e.preventDefault(),void 0!==this.dataset.href&&("#"!==this.dataset.href||"back"!==this.dataset.target?"_self"===this.dataset.target||void 0===this.dataset.target?window.location.href=this.dataset.href:"_blank"!==this.dataset.target&&void 0===this.dataset.href||window.open(this.dataset.href):window.history.back())}))},function(e,r,t){},function(e,r){var t=document.querySelector(".navigation"),n=document.querySelector(".nav-trigger"),o=document.querySelector("#nav-trigger-home");n.addEventListener("click",(function(){t.classList.toggle("is-open"),document.body.style.overflow=t.classList.contains("is-open")?"hidden":""})),window.addEventListener("resize",(function(e){window.innerWidth>=1024&&t.classList.contains("is-open")&&(t.classList.remove("is-open"),document.body.style.overflow="",o.checked=!1)}))}]);