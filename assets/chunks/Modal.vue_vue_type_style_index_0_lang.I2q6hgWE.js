import{_ as D,o as a,c as i,p as o,d as x,l as V,Q as N,z as j,f as h,w as r,T as g,a8 as B,ah as S,q as C,J as c,n as s,g as d,a2 as A,a as f,b as u,t as y,S as E}from"./framework.95PECLjQ.js";import{_ as w}from"./Heading.vue_vue_type_script_setup_true_lang.KGkolaV9.js";import"./Heading.vue_vue_type_style_index_0_lang.w40geAFS.js";import{_ as L}from"./Button.vue_vue_type_script_setup_true_lang.ZHeh2b3E.js";import"./Button.vue_vue_type_style_index_0_lang.w40geAFS.js";import{I as M}from"./16.g7F7HU8t.js";import{u as T}from"./index.BH_KCAlA.js";const _={},I={xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",fill:"none",class:"persona-icon",viewBox:"0 0 24 24"},q=o("path",{fill:"currentColor","fill-rule":"evenodd",d:"M5.703 5.703c.27-.27.71-.27.98 0L12 11.02l5.317-5.317a.693.693 0 1 1 .98.98L12.98 12l5.317 5.317a.693.693 0 1 1-.98.98L12 12.98l-5.317 5.317a.693.693 0 1 1-.98-.98L11.02 12 5.703 6.683a.693.693 0 0 1 0-.98","clip-rule":"evenodd"},null,-1),F=[q];function J(e,v){return a(),i("svg",I,F)}const $=D(_,[["render",J]]),K={key:0,class:"modal--full__content"},P={class:"modal--full__header"},Q={key:0,class:"modal--full__header__dismiss"},Z=x({__name:"Modal",props:{title:{type:String,default:void 0},text:{type:String,default:void 0},modelValue:{type:Boolean,default:!1},dismissable:{type:Boolean,default:!0},size:{type:String,default:"md"},noCloseOnEsc:{type:Boolean,default:!1},banner:{type:Boolean,default:!1},noCloseOnBackdrop:{type:Boolean,default:!1},modalBodyScrollable:{type:Boolean,default:!1},centered:{type:Boolean,default:!1},freeDistraction:{type:Boolean,default:!1},headerClass:{type:[String,Array,Object],default:void 0},dialogClass:{type:[String,Array,Object],default:void 0},contentClass:{type:[String,Array,Object],default:void 0},bodyClass:{type:[String,Array,Object],default:void 0},footerClass:{type:[String,Array,Object],default:void 0}},emits:["update:modelValue","close"],setup(e,{emit:v}){const l=e,k=v,m=T(l),z=V(()=>{const t=[""];return l.size&&t.push(`modal--${l.size}`),l.centered&&t.push("modal--centered"),l.banner&&t.push("modal--banner"),l.freeDistraction&&l.size==="full"&&t.push("modal--free-distraction"),t});function n(t){k("close",t),t.defaultPrevented||(m.value=!1)}function O(t){l.noCloseOnBackdrop||n(t)}return N("Escape",t=>{l.noCloseOnEsc||n(t)},{eventName:"keydown"}),j(m,t=>{t===!1&&E(()=>{k("close",new CustomEvent("close"))})}),(t,b)=>(a(),h(g,{name:"fade",mode:"out-in"},{default:r(()=>[B(o("div",{class:s(["modal",C(z)]),"data-testid":"modal",onClick:O},[c(g,{name:"slide-up",mode:"out-in"},{default:r(()=>[B(o("div",{class:s(["modal__dialog",e.dialogClass]),"data-testid":"modal-dialog"},[e.dismissable&&e.size==="full"&&e.freeDistraction?(a(),i("span",{key:0,"data-testid":"modal-free-distraction-dismiss",class:"modal__dismiss",onClick:n},[c($,{class:"text-state-emphasis dark:text-dark-state-emphasis"})])):d("",!0),o("div",{class:s(["modal__content",e.contentClass]),"data-testid":"modal-content",onClick:b[0]||(b[0]=A(()=>{},["stop"]))},[e.dismissable&&e.size!=="full"?(a(),i("span",{key:0,"data-testid":"modal-dismiss",class:"modal__dismiss",onClick:n},[c(M)])):d("",!0),(t.$slots.header||e.title)&&(e.size!=="full"||e.freeDistraction)?(a(),i("div",{key:1,"data-testid":"modal-header",class:s(["modal__header",e.headerClass])},[f(t.$slots,"header",{},()=>[e.title?(a(),h(w,{key:0,class:"modal__title",element:"h6"},{default:r(()=>[u(y(e.title),1)]),_:1})):d("",!0)])],2)):d("",!0),o("div",{"data-testid":"modal-body",class:s([{"modal__body--scroll":e.modalBodyScrollable},e.size!=="full"||e.freeDistraction?e.bodyClass:"","modal__body"])},[e.size==="full"&&!e.freeDistraction?(a(),i("div",K,[o("div",P,[e.dismissable?(a(),i("span",Q,[c(L,{variant:"link","data-testid":"modal-full-dismiss",onClick:n},{default:r(()=>[c($)]),_:1})])):d("",!0),o("div",{"data-testid":"modal-full-header",class:s(["modal--full__header__title",e.headerClass])},[f(t.$slots,"header",{},()=>[e.title?(a(),h(w,{key:0,class:"modal__title",element:"h6"},{default:r(()=>[u(y(e.title),1)]),_:1})):d("",!0)])],2)]),o("div",{class:s(e.bodyClass)},[f(t.$slots,"body",{},()=>[u(y(e.text),1)])],2)])):f(t.$slots,"default",{key:1},()=>[u(y(e.text),1)])],2),t.$slots.footer&&(e.size!=="full"||e.freeDistraction)?(a(),i("div",{key:2,"data-testid":"modal-footer",class:s(["modal__footer",e.footerClass])},[f(t.$slots,"footer",{close:n})],2)):d("",!0)],2)],2),[[S,C(m)]])]),_:3})],2),[[S,C(m)]])]),_:3}))}});export{Z as _};