parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return l(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function l(e){if(Array.isArray(e))return o(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=document.querySelector("tbody"),i=document.querySelector(".append-row"),d=document.querySelector(".remove-row"),a=document.querySelector(".append-column"),u=document.querySelector(".remove-column"),s=10,m=2;i.addEventListener("click",function(){c.children.length<s&&(d.disabled=!1,c.append(c.lastElementChild.cloneNode(!0))),c.children.length===s&&(i.disabled=!0)}),d.addEventListener("click",function(){c.children.length>m&&(i.disabled=!1,c.lastElementChild.remove()),c.children.length===m&&(d.disabled=!0)}),a.addEventListener("click",function(){var t=document.querySelectorAll("tr");t[0].children.length<s&&(u.disabled=!1,e(t).forEach(function(e){e.append(e.lastElementChild.cloneNode(!0))})),t[0].children.length===s&&(a.disabled=!0)}),u.addEventListener("click",function(){var t=document.querySelectorAll("tr");t[0].children.length>m&&(a.disabled=!1,e(t).forEach(function(e){e.lastElementChild.remove()})),t[0].children.length===m&&(u.disabled=!0)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.98cb75b7.js.map