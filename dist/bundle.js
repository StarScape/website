!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=3)}([function(t,e){var n="http://www.w3.org/2000/svg",r=window.innerWidth,i=window.innerHeight,o=function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1))+t},a=function(t,e){var a,l,u=o(0,r),c=o(0,i),s=(a=t,l=e,Math.random()*(l-a+1)+a),d=o(200,255),f="rgb(".concat(d,", ").concat(d,", 255)"),y="rgba(".concat(d,", ").concat(d,", 255, ").concat(1,")"),h=document.createElementNS(n,"g"),m=document.createElementNS(n,"circle");m.setAttributeNS(null,"cx",u),m.setAttributeNS(null,"cy",c),m.setAttributeNS(null,"r",s),m.setAttributeNS(null,"style","fill: ".concat(f,";"));var b=document.createElementNS(n,"circle");return b.setAttributeNS(null,"cx",u),b.setAttributeNS(null,"cy",c),b.setAttributeNS(null,"r",s),b.setAttributeNS(null,"style","fill: ".concat(y,"; filter: url(#blur);")),h.appendChild(b),h.appendChild(m),h};document.addEventListener("DOMContentLoaded",(function(){for(var t=document.querySelector("#bg-layer"),e=0;e<2e3;e++)t.appendChild(a(.15,.2))}))},function(t,e){function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={anim:"fadeleft",delay:0},o=function(t){var e=t.getBoundingClientRect(),n=e.top,r=e.bottom,i=n>=0&&r<=window.innerHeight;return i},a=function(t){var e=function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(i,!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},i);return t["slide-anim"]&&(e.anim=t["slide-anim"].value),t["slide-delay"]&&(e.delay=Number(t["slide-delay"].value)),e};document.addEventListener("DOMContentLoaded",(function(){for(var t=0,e=Array.from(document.getElementsByClassName("header-box"));t<e.length;t++){e[t].classList.add("slide")}for(var n=0,r=Array.from(document.querySelectorAll(".job-company"));n<r.length;n++){r[n].classList.add("slide")}for(var i=0,l=Array.from(document.querySelectorAll(".job .top-header"));i<l.length;i++){var u=l[i];u.classList.add("slide"),u.setAttribute("slide-delay",.25)}for(var c,s=0,d=Array.from(document.querySelectorAll(".job-body"));s<d.length;s++){var f=d[s],y=0,h=!0,m=!1,b=void 0;try{for(var v,p=f.children[Symbol.iterator]();!(h=(v=p.next()).done);h=!0){var g=v.value;if(g.classList.add("slide"),g.setAttribute("slide-delay",y),"P"===g.tagName&&((c=g).children[0]&&"A"===c.children[0].tagName))g.setAttribute("slide-anim","fadeleft");else if("P"===g.tagName)g.setAttribute("slide-anim","fadetop");else if("UL"===g.tagName){g.classList.remove("slide");var w=!0,A=!1,S=void 0;try{for(var N,O=g.children[Symbol.iterator]();!(w=(N=O.next()).done);w=!0){var E=N.value;E.classList.add("slide"),E.setAttribute("slide-anim","fadeleft"),E.setAttribute("slide-delay",y),y+=.05}}catch(t){A=!0,S=t}finally{try{w||null==O.return||O.return()}finally{if(A)throw S}}}else"DIV"===g.tagName&&g.classList.remove("slide");y+=.05}}catch(t){m=!0,b=t}finally{try{h||null==p.return||p.return()}finally{if(m)throw b}}}for(var j=0,L=Array.from(document.querySelectorAll(".tech-container"));j<L.length;j++){var x=L[j],M=0,P=!0,q=!1,C=void 0;try{for(var D,k=x.children[Symbol.iterator]();!(P=(D=k.next()).done);P=!0){var I=D.value;I.classList.add("slide"),I.setAttribute("slide-anim","fadetop"),I.setAttribute("slide-delay",M),M+=.1}}catch(t){q=!0,C=t}finally{try{P||null==k.return||k.return()}finally{if(q)throw C}}}Array.from(document.querySelectorAll(".degree-header img")).forEach((function(t){t.classList.add("slide")})),Array.from(document.querySelectorAll(".degree-header h3")).forEach((function(t){t.classList.add("slide"),t.setAttribute("slide-anim","fadetop")})),Array.from(document.querySelectorAll(".degree-body")).forEach((function(t){var e=.1,n=!0,r=!1,i=void 0;try{for(var o,a=t.children[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var l=o.value;l.classList.add("slide"),l.setAttribute("slide-anim","fadebottom"),l.setAttribute("slide-delay",e),e+=.1}}catch(t){r=!0,i=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}));var T=Array.from(document.getElementsByClassName("slide")),Y=function(){return function(t){for(var e=0;e<t.length;e++){var n=t[e];if(o(n)&&!n.attributes["_slide-anim-triggered"]){var r=a(n.attributes),i=r.anim,l=r.delay;n.style.visibility="visible",n.style.animation="".concat(i," 0.5s ease-in-out"),n.style["animation-delay"]="".concat(l,"s"),n.style["animation-fill-mode"]="forwards",n.setAttribute("_slide-anim-triggered","true")}}}(T)};window.addEventListener("scroll",Y),Y()}))},function(t,e){document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll('a[href^="#"]').forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))}))}))},function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(!(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)))return;var n=[],r=!0,i=!1,o=void 0;try{for(var a,l=t[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){i=!0,o=t}finally{try{r||null==l.return||l.return()}finally{if(i)throw o}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.r(e);var i=function(t){return t*Math.PI/180},o=function(t,e){return Math.floor(Math.random()*(e-t+1))+t},a=function(t,e){return t.map((function(t){return t-e}))},l=function(t){return function(t,e){for(var n=[],r=0;r<t.length;r+=e)n.push(t.slice(r,r+e));return n}(t.slice(1,t.length),2).map((function(t){return parseInt(t,16)}))},u=function(t){var e=r(t,3),n=e[0],i=e[1],o=e[2];return"rgb(".concat(n,", ").concat(i,", ").concat(o,")")};function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(e){var n=e.startx,r=e.starty,a=e.size,l=void 0===a?100:a,u=e.theta,c=e.container;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.speed=45,this.thetaRads=i(u),this.container=c,this.opacity=1,this.elem=document.createElementNS("http://www.w3.org/2000/svg","image"),this.elem.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","svg/comet.svg"),this.elem.setAttributeNS(null,"x",n),this.elem.setAttributeNS(null,"y",r),this.elem.setAttributeNS(null,"opacity",this.opacity),this.elem.setAttributeNS(null,"width",l),this.elem.setAttributeNS(null,"height",l),this.elem.setAttributeNS(null,"transform","rotate(".concat(u,", ").concat(n+l/2,", ").concat(r+l/2,")")),this.container.appendChild(this.elem),this.opacityDelta=o(.002,.005),this.animate()}var e,n,r;return e=t,(n=[{key:"animate",value:function(){var t=Number(this.elem.getAttribute("x"));this.elem.setAttributeNS(null,"x",t+this.speed),this.elem.setAttributeNS(null,"opacity",this.opacity-=this.opacityDelta),this.opacity>.01&&setTimeout(this.animate.bind(this),20)}}])&&c(e.prototype,n),r&&c(e,r),t}(),d=function(t){window.innerWidth;var e,n=window.innerHeight;document.hasFocus()&&(e=.35,Math.random()<=e)&&new s({startx:-100,starty:o(-100,.25*n),size:Math.floor(o(50,90)),theta:o(10,20),container:t})};document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector("#comets-layer");setInterval((function(){return d(t)}),2e3)}));n(0);function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var y=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.elem=e,this.speed=n;var r=this.elem.getAttribute("x"),i=this.elem.getAttribute("y");this.initialX=parseInt(r.slice(0,r.length-1),10),this.deltaX=15,this.initialY=parseInt(i.slice(0,i.length-1),10),this.deltaY=10,this.initialOpacity=.75-.2*Math.random(),this.deltaOpacity=-.025}var e,n,r;return e=t,(n=[{key:"getX",value:function(t){return this.initialX+this.deltaX*t*this.speed}},{key:"getY",value:function(t){return this.initialY+this.deltaY*t*this.speed}},{key:"getOpacity",value:function(t){return this.initialOpacity+this.deltaOpacity*(5*t)*this.speed}}])&&f(e.prototype,n),r&&f(e,r),t}();function h(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var m=a(l("#3e5680"),25),b=function(t){var e=function(t,e,n){var i=r(t,3),o=i[0],a=i[1],l=i[2],u=r(e,3);return[(u[0]-o)*n+o,(u[1]-a)*n+a,(u[2]-l)*n+l]}(l("#f1603a"),m,t);return u(e)},v=function(t){var e=function(t){var e=l("#3e5680"),n=a(e,Math.floor(110*t));return u(n)}(t),n=b(t);document.body.style.background="linear-gradient(to bottom, ".concat(e,", ").concat(n,")"),document.body.style.backgroundAttachment="fixed"},p=function(t){var e,n,r,i,o,a,l,u=t.sun,c=t.moon,s=t.clouds,d=t.arrow,f=(e=document.documentElement,n=document.body,i="scrollHeight",(e[r="scrollTop"]||n[r])/((e[i]||n[i])-e.clientHeight));o=u,l=function(t){return 300+100*t}(a=f/.5),o.setAttributeNS(null,"x","".concat(function(t){return 57+6*t}(a),"%")),o.setAttributeNS(null,"y","".concat(function(t){return 50+50*t}(a),"%")),o.setAttributeNS(null,"width","".concat(l)),o.setAttributeNS(null,"height","".concat(l)),function(t,e){var n=t/.5-1,r=function(t){return 200+50*t}(n);e.setAttributeNS(null,"x","".concat(function(t){return 10+-2*t}(n),"%")),e.setAttributeNS(null,"y","".concat(function(t){return 90+-50*t}(n),"%")),e.setAttributeNS(null,"width","".concat(r)),e.setAttributeNS(null,"height","".concat(r))}(f,c),function(t,e){e.forEach((function(e){e.elem.setAttributeNS(null,"x","".concat(e.getX(t),"%")),e.elem.setAttributeNS(null,"y","".concat(e.getY(t),"%")),e.elem.setAttributeNS(null,"opacity","".concat(e.getOpacity(t)))}))}(f,s),v(f),function(t){window.scrollY>10?(t.style.opacity=0,t.style.visibility="hidden"):(t.style.visibility="visible",t.style.opacity=.6)}(d)};document.addEventListener("DOMContentLoaded",(function(){var t=h(document.querySelectorAll(".cloud")),e=[1,.8,.95,.9],n=t.map((function(t,n){return new y(t,e[n])})),r=document.querySelector("#sun"),i=document.querySelector("#moon"),o=document.querySelector("#down-arrow");!function(t){var e=window.innerWidth/10;t.forEach((function(t){t.elem.setAttributeNS(null,"width","".concat(e)),t.elem.setAttributeNS(null,"height","".concat(e))}))}(n),p({sun:r,moon:i,clouds:n,arrow:o}),r.setAttribute("display",null),i.setAttribute("display",null),window.addEventListener("scroll",(function(){p({sun:r,moon:i,clouds:n,arrow:o})}))}));n(1),n(2);document.addEventListener("DOMContentLoaded",(function(){var t=window.innerWidth,e=window.innerHeight,n=document.querySelector("#canvas");n.setAttribute("width",t),n.setAttribute("height",e),document.querySelector("#down-arrow").addEventListener("click",(function(){window.scrollTo({top:window.scrollY+window.innerHeight,left:0,behavior:"smooth"})}))}))}]);