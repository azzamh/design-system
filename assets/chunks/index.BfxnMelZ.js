const __vite__fileDeps=["assets/chunks/TooltipContainer.C8q50RwL.js","assets/chunks/Tooltip.vue_vue_type_style_index_0_lang.CjhSj1lc.js","assets/chunks/framework.CUNsVCb6.js","assets/chunks/floating-ui.dom.Bv9LQ7l_.js","assets/chunks/index.CcJDaPbe.js","assets/chunks/purify.es.Dhl7IEYe.js","assets/chunks/defu.CMw4_7D2.js","assets/chunks/uniqueId.DWRQqQ_7.js","assets/chunks/toString.CQAYsbsy.js","assets/chunks/baseGetTag.Cu32HCTk.js","assets/chunks/isArray.Dxzbedgu.js","assets/chunks/isSymbol.BOom9x27.js","assets/chunks/isObjectLike.nLWjQ9zq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{$ as f}from"./framework.CUNsVCb6.js";import{u as m}from"./use-singleton.Bf8OpcyB.js";function l(t,e,o=!1){return async function(n){const{default:s}=await f(()=>import("./TooltipContainer.C8q50RwL.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])),r=await m(s),u=n.target,i=u.dataset.tooltipId,d=u.dataset.tooltipEnable!=="false",p=u.dataset.tooltipAction;i&&d&&p.includes(t)&&(r[e](i),o&&n.preventDefault())}}const b=new Map;function y(t,e){const o=Number.isFinite(e.delay)?e.delay:0,a=Number.isFinite(e.debounced)?e.debounced:500,n={isHovered:!1,onMouseEnter(s){n.onHoverOutTimeout&&clearTimeout(n.onHoverOutTimeout),n.isHovered||(n.onHoverInTimeout&&clearTimeout(n.onHoverInTimeout),n.onHoverInTimeout=setTimeout(()=>{e.onHoverIn(s),n.isHovered=!0},o))},onMouseLeave(s){n.onHoverOutTimeout&&clearTimeout(n.onHoverOutTimeout),!n.isHovered&&n.onHoverInTimeout&&clearTimeout(n.onHoverInTimeout),n.isHovered&&(n.onHoverOutTimeout=setTimeout(()=>{e.onHoverOut(s),n.isHovered=!1},a))}};t.addEventListener("mouseenter",n.onMouseEnter,{passive:!0}),t.addEventListener("mouseleave",n.onMouseLeave,{passive:!0}),b.set(t,n)}function A(t){const e=b.get(t);e&&(t.removeEventListener("mouseenter",e.onMouseEnter),t.removeEventListener("mouseleave",e.onMouseLeave))}function E(t,{modifiers:e}){let o;return e.top?o="top":e.bottom&&(o="bottom"),o?e.left?o=`${o}-start`:e.right&&(o=`${o}-end`):e.right?o="right":e.left&&(o="left"),o||(o="top"),e.start&&!o.endsWith("start")?o=`${o}-start`:e.end&&!o.endsWith("end")&&(o=`${o}-end`),o}function H(t,{modifiers:e}){const o=[];return e.manual&&o.push("manual"),e.focus&&o.push("focus"),e.hover&&o.push("hover"),e.click&&o.push("click"),o.join("-")||"focus-hover"}function v(t,e){var o;return typeof e.value=="string"?e.value:t.hasAttribute("title")?t.getAttribute("title"):(o=t.dataset.tooltipText)!=null?o:""}function L(t,{modifiers:e}){return e.white?"white":"black"}const _=l("click","toggle",!0),x=l("hover","show"),M=l("hover","hide"),w=l("focus","show"),I=l("focus","hide");async function c(){const{default:t}=await f(()=>import("./TooltipContainer.C8q50RwL.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]));return await m(t)}const O={async mounted(t,e){var h;const o=await c(),a=H(t,e),n=L(t,e),s=v(t,e),r=E(t,e),u=e.value!==!1&&!!s,i=o.add({target:t,placement:r,text:s,color:n});t.dataset.tooltipId=i,t.dataset.tooltipAction=a,t.dataset.tooltipText=s,t.dataset.tooltipEnable=u?"true":"false",t.removeAttribute("title"),t.addEventListener("click",_),t.addEventListener("focus",w,{passive:!0}),t.addEventListener("blur",I,{passive:!0});const d=Number.parseInt((h=t.dataset.tooltipLong)!=null?h:"500"),p=Number.parseInt(t.dataset.tooltipDebounce);y(t,{onHoverIn:x,onHoverOut:M,delay:e.modifiers.long?d:0,debounced:p})},async updated(t,e){const o=await c(),a=t.dataset.tooltipId,n=H(t,e),s=L(t,e),r=v(t,e),u=E(t,e),i=e.value!==!1&&!!r;t.dataset.tooltipAction=n,t.dataset.tooltipText=r,t.dataset.tooltipEnable=i?"true":"false",o.update(a,{target:t,placement:u,text:r,color:s}),i&&e.value===!0&&o.show(a),i||o.hide(a),t.removeAttribute("title")},async unmounted(t,e){const{default:o}=await f(()=>import("./TooltipContainer.C8q50RwL.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12])),a=await m(o),n=t.dataset.tooltipId,s=v(t,e);a.remove(n),t.removeEventListener("click",_),t.removeEventListener("focus",w),t.removeEventListener("blur",I),t.setAttribute("title",s),A(t),delete t.dataset.tooltipId,delete t.dataset.tooltipAction,delete t.dataset.tooltipText,delete t.dataset.tooltipEnable}},C=O;function T(t){return(t instanceof HTMLElement?[t]:[...document.querySelectorAll(t)]).map(o=>o==null?void 0:o.dataset.tooltipId).filter(Boolean)}async function D(t){const e=T(t),o=await c();for(const a of e)o.show(a)}async function $(t){const e=T(t),o=await c();for(const a of e)o.hide(a)}async function g(t){const e=T(t),o=await c();for(const a of e)o.toggle(a)}export{$ as h,D as s,g as t,C as v};