!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(t,o,n){"use strict";n.r(o);var r=()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu");e.addEventListener("click",()=>{t.classList.toggle("active-menu")}),t.addEventListener("click",()=>{let e=event.target;(e.classList.contains("close-btn")||e!==t)&&(e=e.closest(".close-btn"),t.classList.toggle("active-menu"))})};var a=countTimer;var c=()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",e=>{let n=e.target;n=n.closest(".service-header-tab"),n&&t.forEach((e,r)=>{e===n&&(e=>{for(let n=0;n<o.length;n++)e===n?(t[n].classList.add("active"),o[n].classList.remove("d-none")):(t[n].classList.remove("active"),o[n].classList.add("d-none"))})(r)})})};var l=()=>{const e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-content")),o=document.querySelector(".portfolio-dots");let n,r,a=0;const c=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)};(()=>{for(let t=0;t<e.length;t++)r=document.createElement("li"),r.classList.add("dot"),o.append(r)})();let s=document.querySelectorAll(".dot");s[0].classList.add("dot-active");const i=()=>{c(e,a,"portfolio-item-active"),c(s,a,"dot-active"),a++,a>=e.length&&(a=0),l(e,a,"portfolio-item-active"),l(s,a,"dot-active")},u=(e=3e3)=>{n=setInterval(i,e)};t.addEventListener("click",t=>{t.preventDefault();let o=t.target;o.matches(".portfolio-btn, .dot")&&(c(e,a,"portfolio-item-active"),c(s,a,"dot-active"),o.matches("#arrow-right")?a++:o.matches("#arrow-left")?a--:o.matches(".dot")&&s.forEach((e,t)=>{e===o&&(a=t)}),a>=e.length?a=0:a<0&&(a=e.length-1),l(e,a,"portfolio-item-active"),l(s,a,"dot-active"))}),t.addEventListener("mouseover",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)}),t.addEventListener("mouseout",e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()}),u(1500)};var s=()=>{const t=document.querySelectorAll(".command__photo");let o=[];for(let e=0;e<t.length;e++)o[e]=t[e].getAttribute("src");t.forEach((t,n)=>{e.target;t.addEventListener("mouseenter",e=>{e.target.src=e.target.dataset.img}),t.addEventListener("mouseleave",e=>{e.target.src=o[n]})})};var i=(e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),n=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),a=document.querySelector(".calc-count"),c=document.getElementById("total");document.getElementById("calc").querySelectorAll("input").forEach(e=>{e.addEventListener("input",()=>{e.value=e.value.replace(/[\D]/g,"")})});const l=()=>{let t=0,l=1,s=1;const i=o.options[o.selectedIndex].value,u=+n.value;a.value>1&&(l+=(a.value-1)/10),r.value&&r.value<5?s*=2:r.value&&r.value<10&&(s*=1.5),i&&u&&(t=Math.ceil(e*i*u*l*s)),function({duration:e,draw:t,timing:o}){let n=performance.now();requestAnimationFrame((function r(a){let c=(a-n)/e;c>1&&(c=1);let l=o(c);t(l),c<1&&requestAnimationFrame(r)}))}({duration:300,timing:e=>e,draw(e){c.textContent=Math.floor(e*t)}})};t.addEventListener("change",e=>{const t=e.target;(t.matches("select")||t.matches("input"))&&l()})};var u=()=>{o(document.getElementById("form1")),o(document.getElementById("form2")),o(document.getElementById("form3"));const e=document.createElement("div"),t=document.createElement("div");function o(o){let r=[...o.elements].filter(e=>"button"!==e.tagName.toLowerCase()&&"button"!==e.type);r.forEach(e=>{e.addEventListener("input",()=>{"user_phone"===e.name?e.value=e.value.replace(/[^0-9\+]/,""):"user_name"===e.name?e.value=e.value.replace(/[^а-яё ]/gi,""):"user_message"===e.name?e.value=e.value.replace(/[^а-яё0-9.,;:!?@#/$№\-)(=`<>|}{}\+\]["'_*&^ ]/gi,""):"user_email"===e.name&&(e.value=e.value.replace(/[^a-z0-9\.@\.\_]/gi,""))})}),o.addEventListener("submit",a=>{a.preventDefault(),o.append(e),o.append(t),t.classList.add("spinner-grow","text-light"),e.textContent="Загрузка...";const c=new FormData(o);let l={};c.forEach((e,t)=>{l[t]=e}),n(l).then(o=>{if(200!==o.status)throw new Error("status network not 200");t.classList.remove("spinner-grow"),e.textContent="Спасибо! Мы скоро с вами свяжемся!"}).catch(t=>{e.textContent="Что-то пошло не так...",console.error(t)}),r.forEach(e=>{e.value=""})})}e.style.cssText="font-size: 2rem; color: white;";const n=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};(function(e){let t=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds"),r=setInterval((function(){let a=function(){let t=(new Date(e).getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),n=Math.floor(t/60%60),r=Math.floor(t/60/60);return Math.floor(t/60/60/24),{timeRemaining:t,hours:r,minutes:n,seconds:o}}();t.textContent=a.hours<10?"0"+a.hours:a.hours,o.textContent=a.seconds<10?"0"+a.seconds:a.seconds,n.textContent=a.minutes<10?"0"+a.minutes:a.minutes,a.timeRemaining<0&&(clearInterval(r),t.textContent="00",o.textContent="00",n.textContent="00")}),1e3)})("2 september 2020 00:00:00"),r(),a(),c(),l(),s(),i(100),u()}]);