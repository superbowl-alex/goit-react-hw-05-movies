(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[970],{8581:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});n(2791);var r,o=n(168),a=n(225).Z.div(r||(r=(0,o.Z)(["\n  font-size: ",";\n  color: ",";\n  padding: ","px;\n  margin: 0 auto;\n"])),(function(e){return e.theme.fontSizes.xxl}),(function(e){return e.theme.colors.buttonHoverColor}),(function(e){return e.theme.space[4]})),i=n(184),s=function(){return(0,i.jsx)(a,{children:"Something went wrong. Please, try again later"})}},9691:function(e,t,n){"use strict";n.d(t,{Z:function(){return g}});var r,o,a,i,s=n(7689),c=n(9126),u=n(168),l=n(225),f=n(6731),d=l.Z.li(r||(r=(0,u.Z)(["\n  border-radius: ",";\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n  box-shadow: ",";\n  &:hover {\n    transform: scale(1.02);\n  }\n"])),(function(e){return e.theme.radii.large}),(function(e){return e.theme.shadows.middle})),p=(0,l.Z)(f.OL)(o||(o=(0,u.Z)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  > svg {\n    width: 100%;\n    object-fit: cover;\n    fill: ",";\n  }\n"])),(function(e){return e.theme.colors.secondaryBacground})),m=l.Z.img(a||(a=(0,u.Z)(["\n  width: 100%;\n  object-fit: cover;\n"]))),h=l.Z.div(i||(i=(0,u.Z)(["\n  padding: ","px;\n  font-size: ",";\n  color: ",";\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.fontSizes.l}),(function(e){return e.theme.colors.secondaryText})),v=n(184),g=function(e){var t=e.movie,n=t.id,r=t.original_title,o=t.poster_path,a=(0,s.TH)();return(0,v.jsx)(d,{children:(0,v.jsxs)(p,{to:"".concat("/movies","/").concat(n),state:{from:a},children:[o?(0,v.jsx)(m,{src:"https://www.themoviedb.org/t/p/w300".concat(o),alt:r,loading:"lazy"}):(0,v.jsx)(c.boB,{size:400}),(0,v.jsxs)(h,{children:[" ",r]})]})})}},7970:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return be}});var r=n(5861),o=n(885),a=n(4687),i=n.n(a),s=n(2791),c=n(6731);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=n(2982);function m(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=m(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var h=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=m(e))&&(r&&(r+=" "),r+=t);return r},v=["theme","type"],g=["delay","staleId"];function y(e){return"number"===typeof e&&!isNaN(e)}function b(e){return"boolean"===typeof e}function T(e){return"string"===typeof e}function E(e){return"function"===typeof e}function x(e){return T(e)||E(e)?e:null}function O(e){return null!=e}function _(e){return(0,s.isValidElement)(e)||T(e)||E(e)||y(e)}var C={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},w={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function I(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,c=e.collapseDuration,u=void 0===c?300:c;return function(e){var r=e.children,a=e.position,c=e.preventExitTransition,l=e.done,f=e.nodeRef,d=e.isIn,m=o?t+"--"+a:t,h=o?n+"--"+a:n,v=(0,s.useRef)(0);return(0,s.useLayoutEffect)((function(){var e=f.current,t=m.split(" "),n=function n(r){var o;r.target===f.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===v.current&&"animationcancel"!==r.type&&(o=e.classList).remove.apply(o,(0,p.Z)(t)))};!function(){var r;(r=e.classList).add.apply(r,(0,p.Z)(t)),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}()}),[]),(0,s.useEffect)((function(){var e=f.current,t=function t(){e.removeEventListener("animationend",t),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all "+n+"ms",requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()};d||(c?t():(v.current=1,e.className+=" "+h,e.addEventListener("animationend",t)))}),[d]),s.createElement(s.Fragment,null,r)}}function L(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var P={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,(0,p.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},k=function(e){var t=e.theme,n=e.type,r=d(e,v);return s.createElement("svg",f({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))};var Z={info:function(e){return s.createElement(k,f({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return s.createElement(k,f({},e),s.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return s.createElement(k,f({},e),s.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return s.createElement(k,f({},e),s.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return s.createElement("div",{className:"Toastify__spinner"})}};function R(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(E(o)?a=o(i):(0,s.isValidElement)(o)?a=(0,s.cloneElement)(o,i):T(o)||y(o)?a=o:r?a=Z.spinner():function(e){return e in Z}(n)&&(a=Z[n](i))),a}function S(e){var t=(0,s.useReducer)((function(e){return e+1}),0),n=(0,o.Z)(t,2)[1],r=(0,s.useState)([]),a=(0,o.Z)(r,2),i=a[0],c=a[1],u=(0,s.useRef)(null),l=(0,s.useRef)(new Map).current,f=function(e){return-1!==i.indexOf(e)},m=(0,s.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:f,getToast:function(e){return l.get(e)}}).current;function h(e){var t=e.containerId;!m.props.limit||t&&m.containerId!==t||(m.count-=m.queue.length,m.queue=[])}function v(e){c((function(t){return O(e)?t.filter((function(t){return t!==e})):[]}))}function C(){var e=m.queue.shift();I(e.toastContent,e.toastProps,e.staleId)}function w(e,t){var r=t.delay,o=t.staleId,a=d(t,g);if(_(e)&&!function(e){return!u.current||m.props.enableMultiContainer&&e.containerId!==m.props.containerId||l.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,c=a.updateId,f=a.data,p=m.props,h=function(){return v(i)},w=null==c;w&&m.count++;var k,Z,S={toastId:i,updateId:c,data:f,containerId:a.containerId,isLoading:a.isLoading,theme:a.theme||p.theme,icon:null!=a.icon?a.icon:p.icon,isIn:!1,key:a.key||m.toastKey++,type:a.type,closeToast:h,closeButton:a.closeButton,rtl:p.rtl,position:a.position||p.position,transition:a.transition||p.transition,className:x(a.className||p.toastClassName),bodyClassName:x(a.bodyClassName||p.bodyClassName),style:a.style||p.toastStyle,bodyStyle:a.bodyStyle||p.bodyStyle,onClick:a.onClick||p.onClick,pauseOnHover:b(a.pauseOnHover)?a.pauseOnHover:p.pauseOnHover,pauseOnFocusLoss:b(a.pauseOnFocusLoss)?a.pauseOnFocusLoss:p.pauseOnFocusLoss,draggable:b(a.draggable)?a.draggable:p.draggable,draggablePercent:a.draggablePercent||p.draggablePercent,draggableDirection:a.draggableDirection||p.draggableDirection,closeOnClick:b(a.closeOnClick)?a.closeOnClick:p.closeOnClick,progressClassName:x(a.progressClassName||p.progressClassName),progressStyle:a.progressStyle||p.progressStyle,autoClose:!a.isLoading&&(k=a.autoClose,Z=p.autoClose,!1===k||y(k)&&k>0?k:Z),hideProgressBar:b(a.hideProgressBar)?a.hideProgressBar:p.hideProgressBar,progress:a.progress,role:a.role||p.role,deleteToast:function(){var e=L(l.get(i),"removed");l.delete(i),P.emit(4,e);var t=m.queue.length;if(m.count=O(i)?m.count-1:m.count-m.displayedToast,m.count<0&&(m.count=0),t>0){var r=O(i)?1:m.props.limit;if(1===t||1===r)m.displayedToast++,C();else{var o=r>t?t:r;m.displayedToast=o;for(var a=0;a<o;a++)C()}}else n()}};S.iconOut=R(S),E(a.onOpen)&&(S.onOpen=a.onOpen),E(a.onClose)&&(S.onClose=a.onClose),S.closeButton=p.closeButton,!1===a.closeButton||_(a.closeButton)?S.closeButton=a.closeButton:!0===a.closeButton&&(S.closeButton=!_(p.closeButton)||p.closeButton);var j=e;(0,s.isValidElement)(e)&&!T(e.type)?j=(0,s.cloneElement)(e,{closeToast:h,toastProps:S,data:f}):E(e)&&(j=e({closeToast:h,toastProps:S,data:f})),p.limit&&p.limit>0&&m.count>p.limit&&w?m.queue.push({toastContent:j,toastProps:S,staleId:o}):y(r)?setTimeout((function(){I(j,S,o)}),r):I(j,S,o)}}function I(e,t,n){var r=t.toastId;n&&l.delete(n);var o={content:e,props:t};l.set(r,o),c((function(e){return[].concat((0,p.Z)(e),[r]).filter((function(e){return e!==n}))})),P.emit(4,L(o,null==o.props.updateId?"added":"updated"))}return(0,s.useEffect)((function(){return m.containerId=e.containerId,P.cancelEmit(3).on(0,w).on(1,(function(e){return u.current&&v(e)})).on(5,h).emit(2,m),function(){l.clear(),P.emit(3,m)}}),[]),(0,s.useEffect)((function(){m.props=e,m.isToastActive=f,m.displayedToast=i.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:f}}function j(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function N(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function B(e){var t=(0,s.useState)(!1),n=(0,o.Z)(t,2),r=n[0],a=n[1],i=(0,s.useState)(!1),c=(0,o.Z)(i,2),u=c[0],l=c[1],f=(0,s.useRef)(null),d=(0,s.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,s.useRef)(e),m=e.autoClose,h=e.pauseOnHover,v=e.closeToast,g=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){d.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",C),document.addEventListener("touchmove",_),document.addEventListener("touchend",C);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=j(t.nativeEvent),d.y=N(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(){if(d.boundingRect){var t=d.boundingRect,n=t.top,r=t.bottom,o=t.left,a=t.right;e.pauseOnHover&&d.x>=o&&d.x<=a&&d.y>=n&&d.y<=r?O():x()}}function x(){a(!0)}function O(){a(!1)}function _(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,r&&O(),d.x=j(t),d.y=N(t),"x"===e.draggableDirection?d.delta=d.x-d.start:d.delta=d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+d.delta+"px)",n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function C(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",C);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,s.useEffect)((function(){p.current=e})),(0,s.useEffect)((function(){return f.current&&f.current.addEventListener("d",x,{once:!0}),E(e.onOpen)&&e.onOpen((0,s.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;E(e.onClose)&&e.onClose((0,s.isValidElement)(e.children)&&e.children.props)}}),[]),(0,s.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||O();window.addEventListener("focus",x),window.addEventListener("blur",O)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",O))}}),[e.pauseOnFocusLoss]);var w={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&h&&(w.onMouseEnter=O,w.onMouseLeave=x),y&&(w.onClick=function(e){g&&g(e),d.canCloseOnClick&&v()}),{playToast:x,pauseToast:O,isRunning:r,preventExitTransition:u,toastRef:f,eventHandlers:w}}function D(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return s.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},s.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},s.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function z(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=e.hide,i=e.className,c=e.style,l=e.controlledProgress,d=e.progress,p=e.rtl,m=e.isIn,v=e.theme,g=f(f({},c),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:a?0:1});l&&(g.transform="scaleX("+d+")");var y=h("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+v,"Toastify__progress-bar--"+o,u({},"Toastify__progress-bar--rtl",p)),b=E(i)?i({rtl:p,type:o,defaultClassName:y}):h(y,i),T=u({},l&&d>=1?"onTransitionEnd":"onAnimationEnd",l&&d<1?null:function(){m&&r()});return s.createElement("div",f({role:"progressbar","aria-hidden":a?"true":"false","aria-label":"notification timer",className:b,style:g},T))}z.defaultProps={type:w.DEFAULT,hide:!1};var M=function(e){var t=B(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,c=e.children,l=e.autoClose,d=e.onClick,p=e.type,m=e.hideProgressBar,v=e.closeToast,g=e.transition,y=e.position,b=e.className,T=e.style,x=e.bodyClassName,O=e.bodyStyle,_=e.progressClassName,C=e.progressStyle,w=e.updateId,I=e.role,L=e.progress,P=e.rtl,k=e.toastId,Z=e.deleteToast,R=e.isIn,S=e.isLoading,j=e.iconOut,N=e.theme,M=h("Toastify__toast","Toastify__toast-theme--"+N,"Toastify__toast--"+p,u({},"Toastify__toast--rtl",P)),A=E(b)?b({rtl:P,position:y,type:p,defaultClassName:M}):h(M,b),F=!!L,H={closeToast:v,type:p,theme:N},q=null;return!1===i||(q=E(i)?i(H):s.isValidElement(i)?s.cloneElement(i,H):D(H)),s.createElement(g,{isIn:R,done:Z,position:y,preventExitTransition:r,nodeRef:o},s.createElement("div",f(f({id:k,onClick:d,className:A},a),{},{style:T,ref:o}),s.createElement("div",f(f({},R&&{role:I}),{},{className:E(x)?x({type:p}):h("Toastify__toast-body",x),style:O}),null!=j&&s.createElement("div",{className:h("Toastify__toast-icon",u({},"Toastify--animate-icon Toastify__zoom-enter",!S))},j),s.createElement("div",null,c)),q,(l||F)&&s.createElement(z,f(f({},w&&!F?{key:"pb-"+w}:{}),{},{rtl:P,theme:N,delay:l,isRunning:n,isIn:R,closeToast:v,hide:m,type:p,style:C,className:_,controlledProgress:F,progress:L}))))},A=I({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),F=(I({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),I({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),I({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,s.forwardRef)((function(e,t){var n=S(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,c=e.style,l=e.rtl,d=e.containerId;function p(e){var t=h("Toastify__toast-container","Toastify__toast-container--"+e,u({},"Toastify__toast-container--rtl",l));return E(i)?i({position:e,rtl:l,defaultClassName:t}):h(t,x(i))}return(0,s.useEffect)((function(){t&&(t.current=o.current)}),[]),s.createElement("div",{ref:o,className:"Toastify",id:d},r((function(e,t){var n=t.length?f({},c):f(f({},c),{},{pointerEvents:"none"});return s.createElement("div",{className:p(e),style:n,key:"container-"+e},t.map((function(e,n){var r=e.content,o=e.props;return s.createElement(M,f(f({},o),{},{isIn:a(o.toastId),style:f(f({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+o.key}),r)})))})))})));F.displayName="ToastContainer",F.defaultProps={position:C.TOP_RIGHT,transition:A,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:D,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var H,q=new Map,U=[];function Q(){return Math.random().toString(36).substring(2,9)}function V(e){return e&&(T(e.toastId)||y(e.toastId))?e.toastId:Q()}function W(e,t){return q.size>0?P.emit(0,e,t):U.push({content:e,options:t}),t.toastId}function G(e,t){return f(f({},t),{},{type:t&&t.type||e,toastId:V(t)})}function Y(e){return function(t,n){return W(t,G(e,n))}}function X(e,t){return W(e,G(w.DEFAULT,t))}X.loading=function(e,t){return W(e,G(w.DEFAULT,f({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},X.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=T(o)?X.loading(o,n):X.loading(o.render,f(f({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,o){if(null!=t){var a=f(f(f({type:e},s),n),{},{data:o}),i=T(t)?{render:t}:t;return r?X.update(r,f(f({},a),i)):X(i.render,f(f({},a),i)),o}X.dismiss(r)},u=E(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},X.success=Y(w.SUCCESS),X.info=Y(w.INFO),X.error=Y(w.ERROR),X.warning=Y(w.WARNING),X.warn=X.warning,X.dark=function(e,t){return W(e,G(w.DEFAULT,f({theme:"dark"},t)))},X.dismiss=function(e){q.size>0?P.emit(1,e):U=U.filter((function(t){return O(e)&&t.options.toastId!==e}))},X.clearWaitingQueue=function(e){return void 0===e&&(e={}),P.emit(5,e)},X.isActive=function(e){var t=!1;return q.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},X.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=q.get(n||H);return r?r.getToast(e):null}(e,t);if(n){var r=n.props,o=n.content,a=f(f(f({},r),t),{},{toastId:t.toastId||e,updateId:Q()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,W(i,a)}}),0)},X.done=function(e){X.update(e,{progress:1})},X.onChange=function(e){return P.on(4,e),function(){P.off(4,e)}},X.POSITION=C,X.TYPE=w,P.on(2,(function(e){H=e.containerId||e,q.set(H,e),U.forEach((function(e){P.emit(0,e.content,e.options)})),U=[]})).on(3,(function(e){q.delete(e.containerId||e),0===q.size&&P.off(0).off(1).off(5)}));var K,J,$,ee,te=n(2007),ne=n.n(te),re=n(168),oe=n(225),ae=oe.Z.div(K||(K=(0,re.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.space[5]})),ie=oe.Z.form(J||(J=(0,re.Z)(["\n  display: flex;\n  align-items: center;\n  gap: ","px;\n  width: 100%;\n  max-width: 500px;\n  overflow: hidden;\n"])),(function(e){return e.theme.space[2]})),se=oe.Z.button($||($=(0,re.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 48px;\n  padding-left: ","px;\n  padding-right: ","px;\n  background-color: ",";\n  color: ",";\n  font-size: ",";\n  cursor: pointer;\n  outline: none;\n  border-radius: ",";\n  border: ",";\n  border-color: ",";\n\n  &:hover {\n    border-color: ",";\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.colors.buttonColor}),(function(e){return e.theme.colors.primaryText}),(function(e){return e.theme.fontSizes.l}),(function(e){return e.theme.radii.normal}),(function(e){return e.theme.borders.medium}),(function(e){return e.theme.colors.secondaryBacground}),(function(e){return e.theme.colors.secondaryText}),(function(e){return e.theme.colors.buttonHoverColor})),ce=oe.Z.input(ee||(ee=(0,re.Z)(["\n  display: inline-block;\n  height: 48px;\n  width: 100%;\n  font: inherit;\n  font-size: ",";\n  color: ",";\n  border-radius: ",";\n  border: ",";\n  border-color: ",";\n  outline: none;\n  padding-left: ","px;\n  padding-right: ","px;\n\n  &:hover {\n    border-color: ",";\n  }\n\n  &::placeholder {\n    font: inherit;\n    font-size: ",";\n    color: ",";\n  }\n"])),(function(e){return e.theme.fontSizes.l}),(function(e){return e.theme.colors.secondaryText}),(function(e){return e.theme.radii.normal}),(function(e){return e.theme.borders.medium}),(function(e){return e.theme.colors.secondaryBacground}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[3]}),(function(e){return e.theme.colors.secondaryText}),(function(e){return e.theme.fontSizes.s}),(function(e){return e.theme.colors.buttonColor})),ue=n(184),le=function(e){var t=e.onSubmit;return(0,ue.jsx)(ae,{children:(0,ue.jsxs)(ie,{onSubmit:t,children:[(0,ue.jsx)(ce,{type:"text",name:"query",autoComplete:"off",placeholder:"Search movies"}),(0,ue.jsx)(se,{type:"submit",children:"Search"})]})})};le.prjpTypes={onSubmit:ne().func.isRequired};var fe,de=le,pe=n(9691),me=oe.Z.ul(fe||(fe=(0,re.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\n  grid-gap: ","px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])),(function(e){return e.theme.space[4]})),he=function(e){var t=e.movies;return(0,ue.jsx)(me,{children:t.map((function(e){return(0,ue.jsx)(pe.Z,{movie:e},e.id)}))})},ve=n(1414),ge=n(4162),ye=n(8581),be=function(){var e,t=(0,s.useState)(null),n=(0,o.Z)(t,2),a=n[0],u=n[1],l=(0,s.useState)(!1),f=(0,o.Z)(l,2),d=f[0],p=f[1],m=(0,s.useState)(!1),h=(0,o.Z)(m,2),v=h[0],g=h[1],y=(0,c.lr)(),b=(0,o.Z)(y,2),T=b[0],E=b[1],x=null!==(e=T.get("query"))&&void 0!==e?e:"";(0,s.useEffect)((function(){function e(){return(e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,ve.bI)(x);case 3:0===(t=e.sent).length&&X.warn("There are no films matching your search.",{theme:"colored"}),u(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),g(!0),console.log(e.t0);case 12:return e.prev=12,p(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})))).apply(this,arguments)}""!==x&&(p(!0),function(){e.apply(this,arguments)}())}),[x]);return(0,ue.jsxs)("main",{children:[(0,ue.jsx)(de,{onSubmit:function(e){e.preventDefault();var t=e.currentTarget.elements.query.value.trim();""===t&&X.warn("Enter the movie's name you want to search.",{theme:"colored"}),E({query:t})}}),a&&(0,ue.jsx)(he,{movies:a}),v&&(0,ue.jsx)(ye.Z,{}),d&&(0,ue.jsx)(ge.Z,{}),(0,ue.jsx)(F,{})]})}},1414:function(e,t,n){"use strict";n.d(t,{Bt:function(){return v},Y5:function(){return d},bI:function(){return l},wr:function(){return c},y:function(){return m}});var r=n(5861),o=n(4687),a=n.n(o),i=n(1044);i.ZP.defaults.baseURL="https://api.themoviedb.org/3";var s="76ca17943e227c67de15be6c6d3599fa";function c(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.ZP)("/trending/movie/day?api_key=".concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.ZP)("/search/movie?api_key=".concat(s,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.ZP)("/movie/".concat(t,"?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.ZP)("/movie/".concat(t,"/credits?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.ZP)("/movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},888:function(e,t,n){"use strict";var r=n(9047);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=970.a32d1c6b.chunk.js.map