import{t as f}from"./index.601b502e.js";import{u as y}from"./index.800b94f2.js";import{z as x,k as V,b as k,a as B,D as C,u as b}from"./floating-ui.dom.browser.min.62fdc80a.js";import{d as _,f as v,l as T,w as N,k as z,_ as h,a4 as w,a8 as D,o as p,c as d,z as g,r as E,n as M,j,ab as A,D as F,a7 as P,F as R,N as U,A as q,B as I,E as L}from"./framework.6feb5f37.js";import{p as O}from"./index.b2f794d3.js";import{t as G}from"./toString.5230fc0f.js";import"./index.06d37783.js";import"./marked.esm.cc7a9e87.js";import"./commonjsHelpers.042e6b4d.js";import"./vite-browser-external_commonjs-proxy.005f2268.js";import"./isObjectLike.53b0037d.js";import"./isArray.513c67aa.js";import"./isSymbol.4326927f.js";var H=0;function J(e){var n=++H;return G(e)+n}const K=_({props:{modelValue:{type:Boolean,default:!1},color:{type:String,default:"black"},target:{type:Object,default:void 0},placement:{type:String,default:"top"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","show","hide"],setup(e,{emit:n}){const i=y(e),u=v(e,"placement"),s=v(e,"target"),a=f("tooltip"),r=f("arrow"),o=T(()=>{const t=[];return e.color&&t.push(`tooltip--${e.color}`),t});return N(i,t=>{n(t?"show":"hide",s.value)}),z(t=>{if(a.value&&s.value&&r.value){const l=x(s.value,a.value,()=>{V(s.value,a.value,{strategy:"absolute",placement:u.value,middleware:[k(),B(),C(12),b({element:r.value})]}).then(({x:c,y:$,middlewareData:m,placement:S})=>{a.value&&(a.value.dataset.popperPlacement=S,a.value.style.left=`${c||0}px`,a.value.style.top=`${$||0}px`),r.value&&(r.value.style.left=`${m.arrow.x}px`,r.value.style.top=`${m.arrow.y}px`)})});t(l)}},{flush:"post"}),{isShow:i,classNames:o}}});const Q={ref:"arrow",class:"tooltip__arrow","data-popper-arrow":""};function W(e,n,i,u,s,a){return w((p(),d("div",{ref:"tooltip",class:M(["tooltip",e.classNames]),"data-testid":"tooltip"},[g("div",Q,null,512),E(e.$slots,"default")],2)),[[D,e.isShow]])}const X=h(K,[["render",W]]),Y=_({components:{Tooltip:X},directives:{pMd:O},setup(){const e=j(new Map);function n(o){const t=J("tooltip_");return e.value.set(t,A({...o,isShow:!1})),t}function i(o,t){const l=e.value.get(o);l&&(l.target=t.target,l.text=t.text,l.placement=t.placement)}function u(o){e.value.get(o).isShow=!0}function s(o){e.value.get(o).isShow=!1}function a(o){const t=e.value.get(o);t.isShow=!t.isShow}function r(o){e.value.delete(o)}return{items:e,add:n,update:i,show:u,hide:s,toggle:a,remove:r}}}),Z={class:"tooltip-container","data-testid":"tooltip-container"};function ee(e,n,i,u,s,a){const r=F("Tooltip"),o=P("p-md");return p(),d("div",Z,[(p(!0),d(R,null,U(e.items,([t,l])=>(p(),q(r,L({key:t,modelValue:l.isShow,"onUpdate:modelValue":c=>l.isShow=c},l),{default:I(()=>[w(g("span",null,null,512),[[o,l.text,void 0,{inline:!0}]])]),_:2},1040,["modelValue","onUpdate:modelValue"]))),128))])}const fe=h(Y,[["render",ee]]);export{fe as default};