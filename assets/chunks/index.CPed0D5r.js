const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Toast.CDIDcvA_.js","assets/chunks/Toast.vue_vue_type_style_index_0_lang.D8Z1sR1r.js","assets/chunks/framework.6Y5hX2by.js","assets/chunks/SpinnerRinggo.vue_vue_type_script_setup_true_lang.DykR2Iav.js","assets/chunks/index.BKQJazzj.js","assets/chunks/purify.es.CtI8cgZR.js","assets/chunks/defu.CMw4_7D2.js","assets/chunks/Button.vue_vue_type_script_setup_true_lang.B59AAZY4.js","assets/chunks/index.DvWHfs5K.js","assets/chunks/16.C9pgZF1n.js","assets/chunks/index.COOUHSLV.js","assets/chunks/use-singleton.DFe3QzR2.js","assets/chunks/queue.DLTVddtq.js","assets/chunks/noop.DX6rZLP_.js"])))=>i.map(i=>d[i]);
import{Z as i,ab as p}from"./framework.6Y5hX2by.js";import{s as u}from"./index.COOUHSLV.js";import{s as c}from"./index.CdxaJfqo.js";import{d}from"./defu.CMw4_7D2.js";async function r(t){var s;if(typeof t=="string")return await r({text:t});if((s=t.type)!=null?s:t.variant)return t.type&&console.warn("`type` on toast was deprecated, use `popup()` instead."),t.variant&&console.warn("`variant` on toast was deprecated, use `popup()` instead."),await c({...t,popupClass:t.toastClass,popupAttrs:t.toastAttrs});t.title&&console.warn("`title` on toast was deprecated, use `text` or `popup()` instead.");const{default:a}=await i(async()=>{const{default:e}=await import("./Toast.CDIDcvA_.js");return{default:e}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]));return await u({component:p(a),props:t,duration:t.duration,position:t.position})}async function f(t,a){const s=await r(d({loading:!0,duration:-1,dismissable:!1},typeof t=="string"?{text:t,loadingText:a}:t));function e(n){s.update({props:{loadingText:n}})}return Object.assign(s,{setProgress:e})}const y=Object.assign(r,{withProgress:f});export{y as t};