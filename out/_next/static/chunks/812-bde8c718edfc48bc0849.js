(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[812],{31033:function(e,t,r){"use strict";r.d(t,{P:function(){return p}});var n=r(70058),o=r(90063),i=r(2326),a=r(55284),s=r(93105),f=r(73808),c=r(67294);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=e=>c.createElement(n.J,l({focusable:"false","aria-hidden":!0},e),c.createElement("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})),p=(0,o.G)(((e,t)=>{var r=(0,i.m)("CloseButton",e),n=(0,a.Lr)(e),{children:o,isDisabled:f,__css:p}=n,d=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(n,["children","isDisabled","__css"]);return c.createElement(s.m$.button,l({type:"button","aria-label":"Close",ref:t,disabled:f,__css:l({},{outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},r,p)},d),o||c.createElement(u,{width:"1em",height:"1em"}))}));f.Ts&&(p.displayName="CloseButton")},34941:function(e,t,r){"use strict";r.d(t,{O:function(){return a}});var n=r(80658),o=r(67294),i=r(10762);function a(e,t,r,a){var s=(0,i.W)(t);return o.useEffect((()=>{var t,o=null!=(t=(0,n.Pu)(r))?t:document;return o.addEventListener(e,s,a),()=>{o.removeEventListener(e,s,a)}}),[e,r,a,s]),()=>{var t;(null!=(t=(0,n.Pu)(r))?t:document).removeEventListener(e,s,a)}}},38448:function(e,t,r){"use strict";r.d(t,{M:function(){return i}});var n=r(93105),o=r(73808);r(67294);var i=(0,n.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});o.Ts&&(i.displayName="Center")},8931:function(e,t,r){"use strict";r.d(t,{D:function(){return ye}});var n=r(72947);function o(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height,top:t.top,right:t.right,bottom:t.bottom,left:t.left,x:t.left,y:t.top}}function i(e){if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t?t.defaultView:window}return e}function a(e){var t=i(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function s(e){return e instanceof i(e).Element||e instanceof Element}function f(e){return e instanceof i(e).HTMLElement||e instanceof HTMLElement}function c(e){return e?(e.nodeName||"").toLowerCase():null}function l(e){return(s(e)?e.ownerDocument:e.document).documentElement}function u(e){return o(l(e)).left+a(e).scrollLeft}function p(e){return i(e).getComputedStyle(e)}function d(e){var t=p(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function m(e,t,r){void 0===r&&(r=!1);var n=l(t),s=o(e),p=f(t),m={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(p||!p&&!r)&&(("body"!==c(t)||d(n))&&(m=function(e){return e!==i(e)&&f(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:a(e);var t}(t)),f(t)?((h=o(t)).x+=t.clientLeft,h.y+=t.clientTop):n&&(h.x=u(n))),{x:s.left+m.scrollLeft-h.x,y:s.top+m.scrollTop-h.y,width:s.width,height:s.height}}function h(e){return{x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function v(e){return"html"===c(e)?e:e.assignedSlot||e.parentNode||e.host||l(e)}function b(e){return["html","body","#document"].indexOf(c(e))>=0?e.ownerDocument.body:f(e)&&d(e)?e:b(v(e))}function g(e,t){void 0===t&&(t=[]);var r=b(e),n="body"===c(r),o=i(r),a=n?[o].concat(o.visualViewport||[],d(r)?r:[]):r,s=t.concat(a);return n?s:s.concat(g(v(a)))}function y(e){return["table","td","th"].indexOf(c(e))>=0}function w(e){if(!f(e)||"fixed"===p(e).position)return null;var t=e.offsetParent;if(t){var r=l(t);if("body"===c(t)&&"static"===p(t).position&&"static"!==p(r).position)return r}return t}function O(e){for(var t=i(e),r=w(e);r&&y(r)&&"static"===p(r).position;)r=w(r);return r&&"body"===c(r)&&"static"===p(r).position?t:r||function(e){for(var t=v(e);f(t)&&["html","body"].indexOf(c(t))<0;){var r=p(t);if("none"!==r.transform||"none"!==r.perspective||r.willChange&&"auto"!==r.willChange)return t;t=t.parentNode}return null}(e)||t}var x="top",j="bottom",E="right",D="left",L="auto",k=[x,j,E,D],M="start",P="end",A="viewport",q="popper",C=k.reduce((function(e,t){return e.concat([t+"-"+M,t+"-"+P])}),[]),W=[].concat(k,[L]).reduce((function(e,t){return e.concat([t,t+"-"+M,t+"-"+P])}),[]),R=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function T(e){var t=new Map,r=new Set,n=[];function o(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&o(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||o(e)})),n}function B(e){var t;return function(){return t||(t=new Promise((function(r){Promise.resolve().then((function(){t=void 0,r(e())}))}))),t}}var S={placement:"bottom",modifiers:[],strategy:"absolute"};function H(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function z(e){void 0===e&&(e={});var t=e,r=t.defaultModifiers,n=void 0===r?[]:r,o=t.defaultOptions,i=void 0===o?S:o;return function(e,t,r){void 0===r&&(r=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},S),i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],f=!1,c={state:o,setOptions:function(r){l(),o.options=Object.assign(Object.assign(Object.assign({},i),o.options),r),o.scrollParents={reference:s(e)?g(e):e.contextElement?g(e.contextElement):[],popper:g(t)};var f=function(e){var t=T(e);return R.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}(function(e){var t=e.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign(Object.assign(Object.assign({},r),t),{},{options:Object.assign(Object.assign({},r.options),t.options),data:Object.assign(Object.assign({},r.data),t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,o.options.modifiers)));return o.orderedModifiers=f.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,r=e.options,n=void 0===r?{}:r,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:c,options:n}),f=function(){};a.push(s||f)}})),c.update()},forceUpdate:function(){if(!f){var e=o.elements,t=e.reference,r=e.popper;if(H(t,r)){o.rects={reference:m(t,O(r),"fixed"===o.options.strategy),popper:h(r)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<o.orderedModifiers.length;n++)if(!0!==o.reset){var i=o.orderedModifiers[n],a=i.fn,s=i.options,l=void 0===s?{}:s,u=i.name;"function"===typeof a&&(o=a({state:o,options:l,name:u,instance:c})||o)}else o.reset=!1,n=-1}}},update:B((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){l(),f=!0}};if(!H(e,t))return c;function l(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(r).then((function(e){!f&&r.onFirstUpdate&&r.onFirstUpdate(e)})),c}}var N={passive:!0};function I(e){return e.split("-")[0]}function _(e){return e.split("-")[1]}function U(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function V(e){var t,r=e.reference,n=e.element,o=e.placement,i=o?I(o):null,a=o?_(o):null,s=r.x+r.width/2-n.width/2,f=r.y+r.height/2-n.height/2;switch(i){case x:t={x:s,y:r.y-n.height};break;case j:t={x:s,y:r.y+r.height};break;case E:t={x:r.x+r.width,y:f};break;case D:t={x:r.x-n.width,y:f};break;default:t={x:r.x,y:r.y}}var c=i?U(i):null;if(null!=c){var l="y"===c?"height":"width";switch(a){case M:t[c]=Math.floor(t[c])-Math.floor(r[l]/2-n[l]/2);break;case P:t[c]=Math.floor(t[c])+Math.ceil(r[l]/2-n[l]/2)}}return t}var K={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Z(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.offsets,s=e.position,f=e.gpuAcceleration,c=e.adaptive,u=function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:Math.round(t*n)/n||0,y:Math.round(r*n)/n||0}}(a),p=u.x,d=u.y,m=a.hasOwnProperty("x"),h=a.hasOwnProperty("y"),v=D,b=x,g=window;if(c){var y=O(r);y===i(r)&&(y=l(r)),o===x&&(b=j,d-=y.clientHeight-n.height,d*=f?1:-1),o===D&&(v=E,p-=y.clientWidth-n.width,p*=f?1:-1)}var w,L=Object.assign({position:s},c&&K);return f?Object.assign(Object.assign({},L),{},((w={})[b]=h?"0":"",w[v]=m?"0":"",w.transform=(g.devicePixelRatio||1)<2?"translate("+p+"px, "+d+"px)":"translate3d("+p+"px, "+d+"px, 0)",w)):Object.assign(Object.assign({},L),{},((t={})[b]=h?d+"px":"",t[v]=m?p+"px":"",t.transform="",t))}var $={left:"right",right:"left",bottom:"top",top:"bottom"};function F(e){return e.replace(/left|right|bottom|top/g,(function(e){return $[e]}))}var X={start:"end",end:"start"};function Y(e){return e.replace(/start|end/g,(function(e){return X[e]}))}function G(e,t){var r=Boolean(t.getRootNode&&t.getRootNode().host);if(e.contains(t))return!0;if(r){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function J(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Q(e,t){return t===A?J(function(e){var t=i(e),r=l(e),n=t.visualViewport,o=r.clientWidth,a=r.clientHeight,s=0,f=0;return n&&(o=n.width,a=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=n.offsetLeft,f=n.offsetTop)),{width:o,height:a,x:s+u(e),y:f}}(e)):f(t)?function(e){var t=o(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):J(function(e){var t=l(e),r=a(e),n=e.ownerDocument.body,o=Math.max(t.scrollWidth,t.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),i=Math.max(t.scrollHeight,t.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),s=-r.scrollLeft+u(e),f=-r.scrollTop;return"rtl"===p(n||t).direction&&(s+=Math.max(t.clientWidth,n?n.clientWidth:0)-o),{width:o,height:i,x:s,y:f}}(l(e)))}function ee(e,t,r){var n="clippingParents"===t?function(e){var t=g(v(e)),r=["absolute","fixed"].indexOf(p(e).position)>=0&&f(e)?O(e):e;return s(r)?t.filter((function(e){return s(e)&&G(e,r)&&"body"!==c(e)})):[]}(e):[].concat(t),o=[].concat(n,[r]),i=o[0],a=o.reduce((function(t,r){var n=Q(e,r);return t.top=Math.max(n.top,t.top),t.right=Math.min(n.right,t.right),t.bottom=Math.min(n.bottom,t.bottom),t.left=Math.max(n.left,t.left),t}),Q(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function te(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function re(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}function ne(e,t){void 0===t&&(t={});var r=t,n=r.placement,i=void 0===n?e.placement:n,a=r.boundary,f=void 0===a?"clippingParents":a,c=r.rootBoundary,u=void 0===c?A:c,p=r.elementContext,d=void 0===p?q:p,m=r.altBoundary,h=void 0!==m&&m,v=r.padding,b=void 0===v?0:v,g=te("number"!==typeof b?b:re(b,k)),y=d===q?"reference":q,w=e.elements.reference,O=e.rects.popper,D=e.elements[h?y:d],L=ee(s(D)?D:D.contextElement||l(e.elements.popper),f,u),M=o(w),P=V({reference:M,element:O,strategy:"absolute",placement:i}),C=J(Object.assign(Object.assign({},O),P)),W=d===q?C:M,R={top:L.top-W.top+g.top,bottom:W.bottom-L.bottom+g.bottom,left:L.left-W.left+g.left,right:W.right-L.right+g.right},T=e.modifiersData.offset;if(d===q&&T){var B=T[i];Object.keys(R).forEach((function(e){var t=[E,j].indexOf(e)>=0?1:-1,r=[x,j].indexOf(e)>=0?"y":"x";R[e]+=B[r]*t}))}return R}function oe(e,t,r){return Math.max(e,Math.min(t,r))}function ie(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ae(e){return[x,E,j,D].some((function(t){return e[t]>=0}))}var se=z({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=void 0===o||o,s=n.resize,f=void 0===s||s,c=i(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach((function(e){e.addEventListener("scroll",r.update,N)})),f&&c.addEventListener("resize",r.update,N),function(){a&&l.forEach((function(e){e.removeEventListener("scroll",r.update,N)})),f&&c.removeEventListener("resize",r.update,N)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=V({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=void 0===n||n,i=r.adaptive,a=void 0===i||i,s={placement:I(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),Z(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),Z(Object.assign(Object.assign({},s),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},n=t.attributes[e]||{},o=t.elements[e];f(o)&&c(o)&&(Object.assign(o.style,r),Object.keys(n).forEach((function(e){var t=n[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});f(n)&&c(n)&&(Object.assign(n.style,i),Object.keys(o).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=void 0===o?[0,0]:o,a=W.reduce((function(e,r){return e[r]=function(e,t,r){var n=I(e),o=[D,x].indexOf(n)>=0?-1:1,i="function"===typeof r?r(Object.assign(Object.assign({},t),{},{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[D,E].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(r,t.rects,i),e}),{}),s=a[t.placement],f=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=f,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0===a||a,f=r.fallbackPlacements,c=r.padding,l=r.boundary,u=r.rootBoundary,p=r.altBoundary,d=r.flipVariations,m=void 0===d||d,h=r.allowedAutoPlacements,v=t.options.placement,b=I(v),g=f||(b===v||!m?[F(v)]:function(e){if(I(e)===L)return[];var t=F(e);return[Y(e),t,Y(t)]}(v)),y=[v].concat(g).reduce((function(e,r){return e.concat(I(r)===L?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,f=r.allowedAutoPlacements,c=void 0===f?W:f,l=_(n),u=l?s?C:C.filter((function(e){return _(e)===l})):k,p=u.filter((function(e){return c.indexOf(e)>=0}));0===p.length&&(p=u);var d=p.reduce((function(t,r){return t[r]=ne(e,{placement:r,boundary:o,rootBoundary:i,padding:a})[I(r)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:r,boundary:l,rootBoundary:u,padding:c,flipVariations:m,allowedAutoPlacements:h}):r)}),[]),w=t.rects.reference,O=t.rects.popper,P=new Map,A=!0,q=y[0],R=0;R<y.length;R++){var T=y[R],B=I(T),S=_(T)===M,H=[x,j].indexOf(B)>=0,z=H?"width":"height",N=ne(t,{placement:T,boundary:l,rootBoundary:u,altBoundary:p,padding:c}),U=H?S?E:D:S?j:x;w[z]>O[z]&&(U=F(U));var V=F(U),K=[];if(i&&K.push(N[B]<=0),s&&K.push(N[U]<=0,N[V]<=0),K.every((function(e){return e}))){q=T,A=!1;break}P.set(T,K)}if(A)for(var Z=function(e){var t=y.find((function(t){var r=P.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return q=t,"break"},$=m?3:1;$>0;$--){if("break"===Z($))break}t.placement!==q&&(t.modifiersData[n]._skip=!0,t.placement=q,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=void 0===o||o,a=r.altAxis,s=void 0!==a&&a,f=r.boundary,c=r.rootBoundary,l=r.altBoundary,u=r.padding,p=r.tether,d=void 0===p||p,m=r.tetherOffset,v=void 0===m?0:m,b=ne(t,{boundary:f,rootBoundary:c,padding:u,altBoundary:l}),g=I(t.placement),y=_(t.placement),w=!y,L=U(g),k="x"===L?"y":"x",P=t.modifiersData.popperOffsets,A=t.rects.reference,q=t.rects.popper,C="function"===typeof v?v(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):v,W={x:0,y:0};if(P){if(i){var R="y"===L?x:D,T="y"===L?j:E,B="y"===L?"height":"width",S=P[L],H=P[L]+b[R],z=P[L]-b[T],N=d?-q[B]/2:0,V=y===M?A[B]:q[B],K=y===M?-q[B]:-A[B],Z=t.elements.arrow,$=d&&Z?h(Z):{width:0,height:0},F=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},X=F[R],Y=F[T],G=oe(0,A[B],$[B]),J=w?A[B]/2-N-G-X-C:V-G-X-C,Q=w?-A[B]/2+N+G+Y+C:K+G+Y+C,ee=t.elements.arrow&&O(t.elements.arrow),te=ee?"y"===L?ee.clientTop||0:ee.clientLeft||0:0,re=t.modifiersData.offset?t.modifiersData.offset[t.placement][L]:0,ie=P[L]+J-re-te,ae=P[L]+Q-re,se=oe(d?Math.min(H,ie):H,S,d?Math.max(z,ae):z);P[L]=se,W[L]=se-S}if(s){var fe="x"===L?x:D,ce="x"===L?j:E,le=P[k],ue=oe(le+b[fe],le,le-b[ce]);P[k]=ue,W[k]=ue-le}t.modifiersData[n]=W}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,n=e.name,o=r.elements.arrow,i=r.modifiersData.popperOffsets,a=I(r.placement),s=U(a),f=[D,E].indexOf(a)>=0?"height":"width";if(o&&i){var c=r.modifiersData[n+"#persistent"].padding,l=h(o),u="y"===s?x:D,p="y"===s?j:E,d=r.rects.reference[f]+r.rects.reference[s]-i[s]-r.rects.popper[f],m=i[s]-r.rects.reference[s],v=O(o),b=v?"y"===s?v.clientHeight||0:v.clientWidth||0:0,g=d/2-m/2,y=c[u],w=b-l[f]-c[p],L=b/2-l[f]/2+g,k=oe(y,L,w),M=s;r.modifiersData[n]=((t={})[M]=k,t.centerOffset=k-L,t)}},effect:function(e){var t=e.state,r=e.options,n=e.name,o=r.element,i=void 0===o?"[data-popper-arrow]":o,a=r.padding,s=void 0===a?0:a;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i)))&&G(t.elements.popper,i)&&(t.elements.arrow=i,t.modifiersData[n+"#persistent"]={padding:te("number"!==typeof s?s:re(s,k))})},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ne(t,{elementContext:"reference"}),s=ne(t,{altBoundary:!0}),f=ie(a,n),c=ie(s,o,i),l=ae(f),u=ae(c);t.modifiersData[r]={referenceClippingOffsets:f,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:u},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":l,"data-popper-escaped":u})}}]}),fe=r(67294),ce=r(23459),le={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:e=>{var{state:t}=e;t.styles.popper.width=t.rects.reference.width+"px"},effect:e=>{var{state:t}=e;return()=>{var e=t.elements.reference;t.elements.popper.style.width=e.offsetWidth+"px"}}},ue={name:"transformOrigin",enabled:!0,phase:"write",fn:e=>{var{state:t}=e;pe(t)},effect:e=>{var{state:t}=e;return()=>{pe(t)}}},pe=e=>{e.elements.popper.style.setProperty(ce.Dq.transformOrigin.var,(0,ce.mv)(e.placement))},de={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:e=>{var{state:t}=e;me(t)}},me=e=>{var t;if(e.placement){var r=he(e.placement);if(null!=(t=e.elements)&&t.arrow&&r){Object.assign(e.elements.arrow.style,{[r.property]:r.value,width:ce.Dq.arrowSize.varRef,height:ce.Dq.arrowSize.varRef,zIndex:-1});var n={[ce.Dq.arrowSizeHalf.var]:"calc("+ce.Dq.arrowSize.varRef+" / 2)",[ce.Dq.arrowOffset.var]:"calc("+ce.Dq.arrowSizeHalf.varRef+" * -1)"};for(var o in n)e.elements.arrow.style.setProperty(o,n[o])}}},he=e=>e.startsWith("top")?{property:"bottom",value:ce.Dq.arrowOffset.varRef}:e.startsWith("bottom")?{property:"top",value:ce.Dq.arrowOffset.varRef}:e.startsWith("left")?{property:"right",value:ce.Dq.arrowOffset.varRef}:e.startsWith("right")?{property:"left",value:ce.Dq.arrowOffset.varRef}:void 0,ve={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:e=>{var{state:t}=e;be(t)},effect:e=>{var{state:t}=e;return()=>{be(t)}}},be=e=>{if(e.elements.arrow){var t=e.elements.arrow.querySelector("[data-popper-arrow-inner]");t&&Object.assign(t.style,{transform:"rotate(45deg)",background:ce.Dq.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:(0,ce.Ke)(e.placement)})}};function ge(){return(ge=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ye(e){var t,r;void 0===e&&(e={});var{enabled:o=!0,modifiers:i=[],placement:a="bottom",strategy:s="absolute",arrowPadding:f=8,eventListeners:c=!0,offset:l,gutter:u=8,flip:p=!0,boundary:d="clippingParents",preventOverflow:m=!0,matchWidth:h}=e,v=(0,fe.useRef)(null),b=(0,fe.useRef)(null),g=(0,fe.useRef)(null),y=(0,fe.useRef)((()=>{})),w=(0,fe.useCallback)((()=>{o&&v.current&&b.current&&(null==y.current||y.current(),g.current=se(v.current,b.current,{placement:a,modifiers:[ve,de,ue,ge({},le,{enabled:!!h}),ge({name:"eventListeners"},(0,ce.$B)(c)),{name:"arrow",options:{padding:f}},{name:"offset",options:{offset:null!=l?l:[0,u]}},{name:"flip",enabled:!!p,options:{padding:8}},{name:"preventOverflow",enabled:!!m,options:{boundary:d}},...i],strategy:s}),g.current.forceUpdate(),y.current=g.current.destroy)}),[o,a,i,h,c,f,l,u,p,m,d,s]);(0,fe.useEffect)((()=>()=>{var e;v.current||b.current||(null==(e=g.current)||e.destroy(),g.current=null)}),[]);var O=(0,fe.useCallback)((e=>{v.current=e,w()}),[w]),x=(0,fe.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),ge({},e,{ref:(0,n.l)(O,t)})}),[O]),j=(0,fe.useCallback)((e=>{b.current=e,w()}),[w]),E=(0,fe.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),ge({},e,{ref:(0,n.l)(j,t),style:ge({},e.style,{position:s,minWidth:"max-content"})})}),[s,j]),D=(0,fe.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),ge({},function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["size","shadowColor","bg","style"]),{ref:t,"data-popper-arrow":"",style:we(e)})}),[]),L=(0,fe.useCallback)((function(e,t){return void 0===e&&(e={}),void 0===t&&(t=null),ge({},e,{ref:t,"data-popper-arrow-inner":""})}),[]);return{update:null==(t=g.current)?void 0:t.update,forceUpdate:null==(r=g.current)?void 0:r.forceUpdate,transformOrigin:ce.Dq.transformOrigin.varRef,referenceRef:O,popperRef:j,getPopperProps:E,getArrowProps:D,getArrowInnerProps:L,getReferenceProps:x}}function we(e){var{size:t,shadowColor:r,bg:n,style:o}=e,i=ge({},o,{position:"absolute"});return t&&(i["--popper-arrow-size"]=t),r&&(i["--popper-arrow-shadow-color"]=r),n&&(i["--popper-arrow-bg"]=n),i}},23459:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Dq:function(){return i},Ke:function(){return a},mv:function(){return f},$B:function(){return l}});var o=(e,t)=>({var:e,varRef:t?"var("+e+", "+t+")":"var("+e+")"}),i={arrowShadowColor:o("--popper-arrow-shadow-color"),arrowSize:o("--popper-arrow-size","8px"),arrowSizeHalf:o("--popper-arrow-size-half"),arrowBg:o("--popper-arrow-bg"),transformOrigin:o("--popper-transform-origin"),arrowOffset:o("--popper-arrow-offset")};function a(e){return e.includes("top")?"1px 1px 1px 0 var(--popper-arrow-shadow-color)":e.includes("bottom")?"-1px -1px 1px 0 var(--popper-arrow-shadow-color)":e.includes("right")?"-1px 1px 1px 0 var(--popper-arrow-shadow-color)":e.includes("left")?"1px -1px 1px 0 var(--popper-arrow-shadow-color)":void 0}var s={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},f=e=>s[e],c={scroll:!0,resize:!0};function l(e){return"object"===typeof e?{enabled:!0,options:n({},c,e)}:{enabled:e,options:c}}},77658:function(e,t,r){"use strict";r.d(t,{t5:function(){return i}});var n=r(17768),o=["input:not([disabled])","select:not([disabled])","textarea:not([disabled])","embed","iframe","object","a[href]","area[href]","button:not([disabled])","[tabindex]","audio[controls]","video[controls]","*[tabindex]:not([aria-disabled])","*[contenteditable]"].join();function i(e){var t=Array.from(e.querySelectorAll(o));return t.unshift(e),t.filter(n.EB).filter((e=>"none"!==window.getComputedStyle(e).display))}},47248:function(e,t,r){"use strict";r.d(t,{T:function(){return a}});var n=r(84461),o=r(80658),i=r(17768);function a(e,t){void 0===t&&(t={});var{isActive:r=i.H9,nextTick:a,preventScroll:f=!0,selectTextIfInput:c=!0}=t;if(!e||r(e))return-1;function l(){if(e){if(function(){if(null==s){s=!1;try{document.createElement("div").focus({get preventScroll(){return s=!0,!0}})}catch(e){}}return s}())e.focus({preventScroll:f});else if(e.focus(),f)!function(e){for(var{element:t,scrollTop:r,scrollLeft:n}of e)t.scrollTop=r,t.scrollLeft=n}(function(e){var t=(0,n.lZ)(e),r=e.parentNode,o=[],i=t.scrollingElement||t.documentElement;for(;r instanceof HTMLElement&&r!==i;)(r.offsetHeight<r.scrollHeight||r.offsetWidth<r.scrollWidth)&&o.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),r=r.parentNode;i instanceof HTMLElement&&o.push({element:i,scrollTop:i.scrollTop,scrollLeft:i.scrollLeft});return o}(e));(0,i.cK)(e)&&c&&e.select()}else(0,o.ZK)({condition:!0,message:"[chakra-ui]: can't call focus() on `null` or `undefined` element"})}return a?requestAnimationFrame(l):(l(),-1)}var s=null},17768:function(e,t,r){"use strict";r.d(t,{cK:function(){return i},H9:function(){return a},EB:function(){return c},Wq:function(){return l}});var n=r(84461),o=e=>e.hasAttribute("tabindex");function i(e){return s(e)&&"input"===e.tagName.toLowerCase()&&"select"in e}function a(e){return(e instanceof HTMLElement?(0,n.lZ)(e):document).activeElement===e}function s(e){return e instanceof HTMLElement}function f(e){return!(!e.parentElement||!f(e.parentElement))||e.hidden}function c(e){if(!s(e)||f(e)||function(e){return!0===Boolean(e.getAttribute("disabled"))||!0===Boolean(e.getAttribute("aria-disabled"))}(e))return!1;var{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;var r={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in r?r[t]():!!function(e){var t=e.getAttribute("contenteditable");return"false"!==t&&null!=t}(e)||o(e)}function l(e){return!!e&&(s(e)&&c(e)&&!(e=>o(e)&&-1===e.tabIndex)(e))}}}]);