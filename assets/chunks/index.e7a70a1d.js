import{U as d}from"./framework.4146f201.js";import{u as f}from"./use-singleton.c43946bb.js";function u(t,e,o=!1){return async function(s){const{default:n}=await d(()=>import("./TooltipContainer.b16dc491.js"),["assets/chunks/TooltipContainer.b16dc491.js","assets/chunks/index.d72d8958.js","assets/chunks/index.c7fdaaa0.js","assets/chunks/framework.4146f201.js","assets/chunks/index.86298ba5.js","assets/chunks/floating-ui.dom.546cdae4.js","assets/chunks/index.ed319991.js","assets/chunks/marked.esm.bd0bcd16.js","assets/chunks/commonjsHelpers.de833af9.js","assets/chunks/vite-browser-external_commonjs-proxy.0726eb50.js","assets/chunks/toString.314d06e3.js","assets/chunks/isObjectLike.53b0037d.js","assets/chunks/isArray.513c67aa.js","assets/chunks/isSymbol.4326927f.js"]),i=await f(n),c=s.target,r=c.dataset.tooltipId,y=c.dataset.tooltipEnable!=="false",I=c.dataset.tooltipAction;y&&I.includes(t)&&(i[e](r),o&&s.preventDefault())}}function h(t,{modifiers:e}){let o;return e.top?o="top":e.bottom&&(o="bottom"),o?e.left?o=`${o}-start`:e.right&&(o=`${o}-end`):e.right?o="right":e.left&&(o="left"),o||(o="top"),e.start&&!o.endsWith("start")?o=`${o}-start`:e.end&&!o.endsWith("end")&&(o=`${o}-end`),o}function E(t,{modifiers:e}){const o=[];return e.manual&&o.push("manual"),e.focus&&o.push("focus"),e.hover&&o.push("hover"),e.click&&o.push("click"),o.join("-")||"focus-hover"}function p(t,e){var o;return typeof e.value=="string"?e.value:t.hasAttribute("title")?t.getAttribute("title"):(o=t.dataset.tooltipText)!=null?o:""}function m(t,{modifiers:e}){return e.white?"white":"black"}const _=u("click","toggle",!0),T=u("hover","show"),w=u("hover","hide"),L=u("focus","show"),A=u("focus","hide");async function l(){const{default:t}=await d(()=>import("./TooltipContainer.b16dc491.js"),["assets/chunks/TooltipContainer.b16dc491.js","assets/chunks/index.d72d8958.js","assets/chunks/index.c7fdaaa0.js","assets/chunks/framework.4146f201.js","assets/chunks/index.86298ba5.js","assets/chunks/floating-ui.dom.546cdae4.js","assets/chunks/index.ed319991.js","assets/chunks/marked.esm.bd0bcd16.js","assets/chunks/commonjsHelpers.de833af9.js","assets/chunks/vite-browser-external_commonjs-proxy.0726eb50.js","assets/chunks/toString.314d06e3.js","assets/chunks/isObjectLike.53b0037d.js","assets/chunks/isArray.513c67aa.js","assets/chunks/isSymbol.4326927f.js"]);return await f(t)}const x={async mounted(t,e){const o=await l(),a=E(t,e),s=m(t,e),n=p(t,e),i=h(t,e),c=e.value!==!1&&!!n,r=o.add({target:t,placement:i,text:n,color:s});t.dataset.tooltipId=r,t.dataset.tooltipAction=a,t.dataset.tooltipText=n,t.dataset.tooltipEnable=c?"true":"false",t.removeAttribute("title"),t.addEventListener("click",_),t.addEventListener("mouseenter",T,{passive:!0}),t.addEventListener("mouseleave",w,{passive:!0}),t.addEventListener("focus",L,{passive:!0}),t.addEventListener("blur",A,{passive:!0})},async updated(t,e){const o=await l(),a=t.dataset.tooltipId,s=E(t,e),n=m(t,e),i=p(t,e),c=h(t,e),r=e.value!==!1&&!!i;t.dataset.tooltipAction=s,t.dataset.tooltipText=i,t.dataset.tooltipEnable=r?"true":"false",o.update(a,{target:t,placement:c,text:i,color:n}),r&&e.value===!0&&o.show(a),r||o.hide(a),t.removeAttribute("title")},async beforeUnmount(t,e){const{default:o}=await d(()=>import("./TooltipContainer.b16dc491.js"),["assets/chunks/TooltipContainer.b16dc491.js","assets/chunks/index.d72d8958.js","assets/chunks/index.c7fdaaa0.js","assets/chunks/framework.4146f201.js","assets/chunks/index.86298ba5.js","assets/chunks/floating-ui.dom.546cdae4.js","assets/chunks/index.ed319991.js","assets/chunks/marked.esm.bd0bcd16.js","assets/chunks/commonjsHelpers.de833af9.js","assets/chunks/vite-browser-external_commonjs-proxy.0726eb50.js","assets/chunks/toString.314d06e3.js","assets/chunks/isObjectLike.53b0037d.js","assets/chunks/isArray.513c67aa.js","assets/chunks/isSymbol.4326927f.js"]),a=await f(o),s=t.dataset.tooltipId,n=p(t,e);a.remove(s),t.removeEventListener("click",_),t.removeEventListener("mouseenter",T),t.removeEventListener("mouseleave",w),t.removeEventListener("focus",L),t.removeEventListener("blur",A),t.setAttribute("title",n),delete t.dataset.tooltipId,delete t.dataset.tooltipAction,delete t.dataset.tooltipText,delete t.dataset.tooltipEnable}},P=x;function v(t){return(t instanceof HTMLElement?[t]:[...document.querySelectorAll(t)]).map(o=>o==null?void 0:o.dataset.tooltipId).filter(Boolean)}async function g(t){const e=v(t),o=await l();for(const a of e)o.show(a)}async function C(t){const e=v(t),o=await l();for(const a of e)o.hide(a)}async function D(t){const e=v(t),o=await l();for(const a of e)o.toggle(a)}export{C as h,x as p,g as s,D as t,P as v};