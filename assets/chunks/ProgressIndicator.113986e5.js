import{u as p}from"./index.aa62d5f4.js";import{u as _}from"./index.09847e4e.js";import{u as v,h as g,r as d,_ as f,v as o,b as n,F as m,p as h,s as $,I as y,a as V}from"./framework.0fccce8d.js";import{b}from"./index.9c3046df.js";const N=v({props:{modelValue:{type:Number,default:1},direction:{type:String,default:"horizontal"},length:{type:[Number,String],default:6}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","change"],setup(e,{emit:i}){const c=p(e),t=b(g(e,"length"),{nanToZero:!0,method:"parseInt"}),r=_(c,1,t),l=d(()=>{const s=[];return e.direction&&s.push(`progress-indicator--${e.direction}`),s}),a=d(()=>e.direction==="vertical"?{transform:`translateY(calc((100% + .25rem) * ${r.value-1}))`,height:`calc((100% - (.25rem * (${t.value} - 1))) / ${t.value} )`}:{transform:`translateX(calc((100% + .25rem) * ${r.value-1}))`});function u(s){r.value=s,i("change",s)}return{nums:t,setValue:u,activeStyle:a,classNames:l}}});const I={class:"progress-indicator__container"},S=["onClick"];function k(e,i,c,t,r,l){return o(),n("div",{class:V(["progress-indicator",e.classNames]),"data-testid":"progress-indicator"},[m("div",I,[(o(!0),n(h,null,$(e.nums,a=>(o(),n("div",{key:a,class:"progress-indicator__item","data-testid":"progress-indicator-item",onClick:u=>e.setValue(a)},null,8,S))),128))]),m("div",{style:y(e.activeStyle),class:"progress-indicator__item progress-indicator__item--active","data-testid":"progress-indicator-item-active"},null,4)],2)}const T=f(N,[["render",k]]);export{T as p};