import{Z as i,a9 as p}from"./framework.ZrRw_Qa4.js";import{s as u}from"./index.0gtRd3rb.js";import{s as c}from"./index.RG0ciQsP.js";import{d}from"./defu.3rjBFRnm.js";async function e(t){var s;if(typeof t=="string")return await e({text:t});if((s=t.type)!=null?s:t.variant)return t.type&&console.warn("`type` on toast was deprecated, use `popup()` instead."),t.variant&&console.warn("`variant` on toast was deprecated, use `popup()` instead."),await c({...t,popupClass:t.toastClass,popupAttrs:t.toastAttrs});t.title&&console.warn("`title` on toast was deprecated, use `text` or `popup()` instead.");const{default:a}=await i(()=>import("./Toast.EDUI96yC.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]));return await u({component:p(a),props:t,duration:t.duration,position:t.position})}async function f(t,a){const s=await e(d({loading:!0,duration:-1,dismissable:!1},typeof t=="string"?{text:t,loadingText:a}:t));function o(n){s.update({props:{loadingText:n}})}return Object.assign(s,{setProgress:o})}const y=Object.assign(e,{withProgress:f});export{y as t};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/Toast.EDUI96yC.js","assets/chunks/Toast.vue_vue_type_style_index_0_lang.SY6EZKj9.js","assets/chunks/framework.ZrRw_Qa4.js","assets/chunks/SpinnerRinggo.vue_vue_type_script_setup_true_lang.izcOzecy.js","assets/chunks/index.61_Emhzr.js","assets/chunks/defu.3rjBFRnm.js","assets/chunks/Button.vue_vue_type_script_setup_true_lang.-nAr7aEh.js","assets/chunks/index.hjpy5ZnQ.js","assets/chunks/Button.vue_vue_type_style_index_0_lang.w40geAFS.js","assets/chunks/16.51Sh7Ci6.js","assets/chunks/index.0gtRd3rb.js","assets/chunks/use-singleton.S6ESmfzN.js","assets/chunks/queue.-V8fDHS_.js","assets/chunks/noop.Uu3q6ZSj.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}