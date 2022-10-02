!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){var o=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var i={insert:"head",singleton:!1},a=(o(n.i,r,i),r.locals?r.locals:{});n.exports=a},function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a={};function d(n,e,t){for(var o=0;o<e.length;o++){var r={css:e[o][1],media:e[o][2],sourceMap:e[o][3]};a[n][o]?a[n][o](r):a[n].push(h(r,t))}}function c(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,u=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function l(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=u(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,m=0;function h(n,e){var t,o,r;if(e.singleton){var i=m++;t=f||(f=c(e)),o=l.bind(null,t,i,!1),r=l.bind(null,t,i,!0)}else t=c(e),o=p.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e,t){return(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=r()),n=t.base?n+t.base:n,e=e||[],a[n]||(a[n]=[]),d(n,e,t),function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){a[n]||(a[n]=[]),d(n,e,t);for(var o=e.length;o<a[n].length;o++)a[n][o]();a[n].length=e.length,0===a[n].length&&delete a[n]}}}},function(n,e,t){(e=t(3)(!1)).push([n.i,"/**\n * Body CSS\n */\n\nhtml,\nbody {\n  height: 100%;\n}\n\nhtml,\nbody,\ninput,\ntextarea,\nbutton {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n}\n\n\n/**\n * Sidebar CSS\n */\n\n#sidebar {\n  background-color: #2196F3;\n  padding: 15px;\n}\n\n@media (min-width: 768px) {\n  #sidebar {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    width: 180px;\n    height: 100%;\n    padding-top: 30px;\n  }\n}\n\n\n/**\n * Content CSS\n */\n@media (min-width: 768px) {\n  #content {\n    margin-left: 180px;\n  }\n}\n\n.author {\n  font-size: .8rem;\n}\n\n\n.floating-btn {\n  position: fixed;\n  bottom: 50px;\n  right: 50px;\n}\n\n.modal {\n  max-width: 600px;\n  max-height: 300px;\n  margin: 100px auto;\n  overflow-y: auto;\n  background: #fff;\n}\n\n.modal>h1 {\n  text-align: center;\n}\n\n.modal .modal-content {\n  padding: 1rem;\n}\n\n.error {\n  color: red;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.input {\n  width: 90%;\n  padding: 12px 16px;\n  outline: none;\n  border: 1px solid #b9d8e1;\n  border-radius: 12px;\n}\n\n.input:focus {\n  border: 1px solid #0cbbec;\n}\n\n.btn-delete {\n  border: 1px solid #0cbbec;\n  background: none;\n  border-radius: 12px;\n  padding: 8px 10px;\n  transition: all 0.3s ease 0s;\n}\n\n.btn-delete:hover,\n.btn-delete:focus {\n  cursor: pointer;\n  background-color: #2494efac;\n  color: white;\n}\n\n.modal-body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 22px;\n  font-weight: 500;\n  text-align: center;\n  width: 320px;\n  height: 220px;\n  margin: 100px auto;\n  background-color: #fff;\n  border-radius: 20px;\n}\n\n.total-vords {\n  text-decoration: underline;\n}\n\n@media (min-width: 768.98px) {\n  .mui-dropdown__menu {\n    margin: 2px -47px 3px;\n  }\n}",""]),n.exports=e},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(a=o,d=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(d),"/*# ".concat(c," */")),i=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(i).concat([r]).join("\n")}var a,d,c;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o=0;o<n.length;o++){var r=[].concat(n[o]);t&&(r[2]?r[2]="".concat(t," and ").concat(r[2]):r[2]=t),e.push(r)}},e}},function(n,e,t){"use strict";t.r(e);class o{static create(n,e="vords"){return fetch(`https://english-cards-674c2-default-rtdb.firebaseio.com/${e}.json`,{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then(n=>n.json()).then(e=>(n.id=e.name,n)).then(r)}static getVords(n="vords"){return fetch(`https://english-cards-674c2-default-rtdb.firebaseio.com/${n}.json`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(n=>n.json()).then(e=>{let t,o,r=Object.keys(e),a=[];for(let n=0;n<r.length;n++)t=e[r[n]],a.push(t),document.querySelector("#render-vords").insertAdjacentHTML("afterbegin",i(t,n,r[n]));var d;d=a,document.querySelector(".total-vords").innerHTML=d.length,document.querySelectorAll(".input").forEach(e=>{e.addEventListener("input",(function(){a[e.getAttribute("data-index")][e.getAttribute("data-lang")]=e.value,o=a[e.getAttribute("data-index")],(async()=>{await fetch(`https://english-cards-674c2-default-rtdb.firebaseio.com/${n}/${r[e.getAttribute("data-index")]}.json`,{method:"PUT",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}})})()}))})}).then(()=>{document.querySelectorAll(".btn-delete").forEach(e=>{e.addEventListener("click",(function(){o.deleteVords(n,this.getAttribute("data-delete"))}))})})}static updateVords(){document.querySelector("#render-vords").innerHTML=""}static async deleteVords(n,e){fetch(`https://english-cards-674c2-default-rtdb.firebaseio.com/${n}/${e}.json`,{method:"DELETE"}).then(t=>{document.querySelector(`[data-delete=${e}]`).parentNode.parentNode.remove(),o.updateVords(),o.getVords(n)})}static listToHTML(n){return n.length?` \n          <ol>${n.map(n=>`<li>${n.en}</li>`).join("")}</ol>\n          <ol>${n.map(n=>`<li>${n.ru}</li>`).join("")}</ol>\n        `:"<p>not vords</p>"}}function r(n){document.getElementById("list").innerHTML=function(n){return`   \n    <tr>\n      <td>${n.en}</td>\n      <td>${n.ru}</td>\n    </tr>\n  `}(n)}function i(n,e,t){return`\n    <tr>\n      <td>\n        <input value='${n.en}' class="input" data-index='${e}' data-lang='en'>\n      </td>\n      <td>\n        <input value='${n.ru}' class="input" data-index='${e}' data-lang='ru'>\n      </td>\n      <td>\n        <button class="btn-delete" data-delete='${t}'>&#x2715;</button>\n      </td>\n    </tr>\n  `}function a(n){return n.length>1}class d{static show(){var n=document.createElement("div");n.classList.add("modal-body"),mui.overlay("on",n)}static text(n){document.querySelector(".modal-body").innerHTML=`<p>${n}</p>`}}t(0);const c=document.getElementById("form"),s=c.querySelector("#submit"),u=document.querySelector("[data-change-content]"),l=document.querySelectorAll("[data-units] li");let p=c.querySelector("[en-input]"),f=c.querySelector("[ru-input]"),m="vords";function h(){document.querySelector(".go-app").innerHTML=`<a href="../admin/${m}.html" class="mui-btn mui-btn--raised mui-btn--primary">Go app</a>`}d.show(),d.text("Don't forget pick the unit !"),l.forEach((n,e)=>{n.addEventListener("click",(function(){0==e?(document.querySelector("#unit-flag").innerHTML=`Unit ${e+1}`,m="vords",o.updateVords(),o.getVords("vords")):(document.querySelector("#unit-flag").innerHTML=`Unit ${e+1}`,m=`vords0${e}`,o.updateVords(),o.getVords(`vords0${e}`)),h()}))}),u.addEventListener("click",()=>{(class{static toggle(){document.querySelector("[data-content]").classList.toggle("hidden"),document.querySelector("[data-list]").classList.toggle("hidden")}}).toggle(),o.updateVords(),o.getVords(m)}),window.addEventListener("load",o.renderList),c.addEventListener("submit",(function(n){if(n.preventDefault(),a(p.value)&&a(f.value)){let n=p.value[0].toUpperCase()+p.value.slice(1),e=f.value[0].toUpperCase()+f.value.slice(1);const t={en:n.trim(),ru:e.trim()};s.disabled=!0,o.create(t,m).then(()=>{p.value="",f.value="",p.className="",f.className="",s.disabled=!1})}})),h(),p.addEventListener("input",()=>{s.disabled=!a(p.value)}),f.addEventListener("input",()=>{s.disabled=!a(f.value)})}]);