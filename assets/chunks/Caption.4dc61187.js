import{d as a,g as n,_ as o,o as r,c as i,r as c,n as p}from"./framework.f99460e8.js";import"./Caption.vue_vue_type_style_index_0_lang.4ed993c7.js";const l=a({props:{weight:{type:String,default:"normal"},transform:{type:String,default:"normalcase"},size:{type:String,default:"xs"}},setup(t){return{classNames:n(()=>{const s=["caption"];return t.transform&&s.push(`caption--${t.transform}`),t.weight&&s.push(`caption--${t.weight}`),t.size&&s.push(`caption--${t.size}`),s})}}});function f(t,e,s,m,u,d){return r(),i("span",{"data-testid":"caption",class:p(t.classNames)},[c(t.$slots,"default")],2)}const h=o(l,[["render",f]]);export{h as p};