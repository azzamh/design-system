import{u as p}from"./index.7a96623d.js";import{u as _}from"./index.721d94a9.js";import{e as g}from"./theme.bdd572ce.js";import{m as v,t as f,c as u,_ as h,x as o,p as n,G as m,M as y,N as $,W as V,v as N}from"./framework.f14560cd.js";const k=v({props:{modelValue:{type:Number,default:1},direction:{type:String,default:"horizontal"},length:{type:[Number,String],default:6}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","change"],setup(e,{emit:i}){const c=p(e),t=g(f(e,"length"),{nanToZero:!0,method:"parseInt"}),r=_(c,1,t),l=u(()=>{const s=[];return e.direction&&s.push(`progress-indicator--${e.direction}`),s}),a=u(()=>e.direction==="vertical"?{transform:`translateY(calc((100% + .25rem) * ${r.value-1}))`,height:`calc((100% - (.25rem * (${t.value} - 1))) / ${t.value} )`}:{transform:`translateX(calc((100% + .25rem) * ${r.value-1}))`});function d(s){r.value=s,i("change",s)}return{nums:t,setValue:d,activeStyle:a,classNames:l}}});const C={class:"progress-indicator__container"},S=["onClick"];function b(e,i,c,t,r,l){return o(),n("div",{class:N(["progress-indicator",e.classNames]),"data-testid":"progress-indicator"},[m("div",C,[(o(!0),n(y,null,$(e.nums,a=>(o(),n("div",{key:a,class:"progress-indicator__item","data-testid":"progress-indicator-item",onClick:d=>e.setValue(a)},null,8,S))),128))]),m("div",{style:V(e.activeStyle),class:"progress-indicator__item progress-indicator__item--active","data-testid":"progress-indicator-item-active"},null,4)],2)}const P=h(k,[["render",b]]);export{P as p};