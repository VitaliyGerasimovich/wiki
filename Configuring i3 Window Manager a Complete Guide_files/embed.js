!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=126)}({126:function(t,e,n){"use strict";n.r(e);var o=n(16);function i(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function r(t){var e=t.host,n=t.query,o=t.height,i=t.__colors__,r=void 0===i?{}:i,a=document.createElement("iframe");return a.src=e+"/web/iframe.html?"+n,a.name=JSON.stringify({__colors__:r}),a.setAttribute("width","100%"),o&&a.setAttribute("height",o),a.setAttribute("frameborder","0"),a.setAttribute("allowtransparency","true"),a.setAttribute("scrolling","no"),a.setAttribute("tabindex","0"),a.setAttribute("title","Remark42"),a.setAttribute("horizontalscrolling","no"),a.setAttribute("verticalscrolling","no"),a.setAttribute("style","width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"),a}function a(){var t=document.getElementById(window.remark_config.node||o.e);if(t){try{window.remark_config=window.remark_config||{}}catch(t){return void console.error("Remark42: Config object is undefined.")}if(window.remark_config.site_id){window.remark_config.url=(window.remark_config.url||window.location.origin+window.location.pathname).split("#")[0],window.REMARK42=window.REMARK42||{},window.REMARK42.changeTheme=function(t){n.contentWindow.postMessage(JSON.stringify({theme:t}),"*")};var e=Object.keys(window.remark_config).filter((function(t){return"__colors__"!==t})).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(window.remark_config[t])})).join("&"),n=r({host:o.b,query:e,__colors__:window.remark_config.__colors__});t.appendChild(n),window.addEventListener("message",(function(t){try{var e="string"==typeof t.data?JSON.parse(t.data):t.data;e.remarkIframeHeight&&(n.style.height=e.remarkIframeHeight+"px"),e.scrollTo&&window.scrollTo(window.pageXOffset,e.scrollTo+n.getBoundingClientRect().top+window.pageYOffset),Object.prototype.hasOwnProperty.call(e,"isUserInfoShown")&&(e.isUserInfoShown?c.init(e.user||{}):c.close()),e.inited&&(d(),l(document.title))}catch(t){}})),window.addEventListener("hashchange",d),document.addEventListener("click",(function(t){n.contains(t.target)||n.contentWindow.postMessage(JSON.stringify({clickOutside:!0}),"*")}));var a=document.querySelector("title");a&&new MutationObserver((function(t){return l(t[0].target.textContent)})).observe(a,{subtree:!0,characterData:!0,childList:!0});var s="remark-km423lmfdslkm34",c={node:null,back:null,closeEl:null,iframe:null,style:null,init:function(t){var n=this;this.animationStop(),this.style||(this.style=document.createElement("style"),this.style.setAttribute("rel","stylesheet"),this.style.setAttribute("type","text/css"),this.style.innerHTML="\n          #"+s+"-node {\n            position: fixed;\n            top: 0;\n            right: 0;\n            bottom: 0;\n            width: 400px;\n            transition: transform 0.4s ease-out;\n            max-width: 100%;\n            transform: translate(400px, 0);\n          }\n          #"+s+"-node[data-animation] {\n            transform: translate(0, 0);\n          }\n          #"+s+"-back {\n            position: fixed;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: rgba(0,0,0,0.7);\n            opacity: 0;\n            transition: opacity 0.4s ease-out;\n          }\n          #"+s+"-back[data-animation] {\n            opacity: 1;\n          }\n          #"+s+"-close {\n            top: 0px;\n            right: 400px;\n            position: absolute;\n            text-align: center;\n            font-size: 25px;\n            cursor: pointer;\n            color: white;\n            border-color: transparent;\n            border-width: 0;\n            padding: 0;\n            margin-right: 4px;\n            background-color: transparent;\n          }\n          @media all and (max-width: 430px) {\n            #"+s+"-close {\n              right: 0px;\n              font-size: 20px;\n              color: black;\n            }\n          }\n        "),this.node||(this.node=document.createElement("div"),this.node.id=s+"-node"),this.back||(this.back=document.createElement("div"),this.back.id=s+"-back",this.back.onclick=function(){return n.close()}),this.closeEl||(this.closeEl=document.createElement("button"),this.closeEl.id=s+"-close",this.closeEl.innerHTML="&#10006;",this.closeEl.onclick=function(){return n.close()});var i=e+"&page=user-info&&id="+t.id+"&name="+t.name+"&picture="+(t.picture||"")+"&isDefaultPicture="+(t.isDefaultPicture||0),a=r({host:o.b,query:i,height:"100%"});this.node.appendChild(a),this.iframe=a,this.node.appendChild(this.closeEl),document.body.appendChild(this.style),document.body.appendChild(this.back),document.body.appendChild(this.node),document.addEventListener("keydown",this.onKeyDown),setTimeout((function(){n.back.setAttribute("data-animation",""),n.node.setAttribute("data-animation",""),n.iframe.focus()}),400)},close:function(){this.node&&(this.iframe&&this.node.removeChild(this.iframe),this.onAnimationClose(),this.node.removeAttribute("data-animation")),this.back&&this.back.removeAttribute("data-animation"),document.removeEventListener("keydown",this.onKeyDown)},delay:null,events:["","webkit","moz","MS","o"].map((function(t){return t?t+"TransitionEnd":"transitionend"})),onAnimationClose:function(){var t=this,e=this.node;this.node&&(this.delay=window.setTimeout(this.animationStop,1e3),this.events.forEach((function(n){return e.addEventListener(n,t.animationStop,!1)})))},onKeyDown:function(t){27===t.keyCode&&c.close()},animationStop:function(){var t=c;if(t.node)return t.delay&&(clearTimeout(t.delay),t.delay=null),t.events.forEach((function(e){return t.node.removeEventListener(e,t.animationStop,!1)})),t.remove()},remove:function(){var t=c;i(t.node),i(t.back),i(t.style)}}}else console.error("Remark42: Site ID is undefined.")}else console.error("Remark42: Can't find root node.");function d(t){var e=t?"#"+t.newURL.split("#")[1]:window.location.hash;0===e.indexOf("#"+o.c)&&(t&&t.preventDefault(),n.contentWindow.postMessage(JSON.stringify({hash:e}),"*"))}function l(t){n.contentWindow.postMessage(JSON.stringify({title:t}),"*")}}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",a):a()},16:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"e",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return s}));var o=window.remark_config&&window.remark_config.host||"https://remark42.thevaluable.dev",i="remark42",r="/api/v1",a="remark42__comment-",s="remark42__counter"}});