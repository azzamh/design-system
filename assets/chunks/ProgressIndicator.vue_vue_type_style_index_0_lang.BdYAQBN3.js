import{u as v}from"./index.Dj1ejEfO.js";import{u as h}from"./index.DUP7z69l.js";import{d as y,ax as $,t as k,l as c,o as a,c as o,m as l,G as C,H as N,p as n,R as V,n as S}from"./framework.6Y5hX2by.js";const b={class:"progress-indicator__container"},x=["onClick"],E=y({__name:"ProgressIndicator",props:{modelValue:{type:Number,default:1},direction:{type:String,default:"horizontal"},length:{type:[Number,String],default:6}},emits:["update:modelValue","change"],setup(d,{emit:m}){const t=d,u=m,p=v(t),r=$(k(t,"length"),{nanToZero:!0,method:"parseInt"}),s=h(p,1,r),_=c(()=>{const e=[];return t.direction&&e.push(`progress-indicator--${t.direction}`),e}),g=c(()=>t.direction==="vertical"?{transform:`translateY(calc((100% + .25rem) * ${s.value-1}))`,height:`calc((100% - (.25rem * (${r.value} - 1))) / ${r.value} )`}:{transform:`translateX(calc((100% + .25rem) * ${s.value-1}))`});function f(e){s.value=e,u("change",e)}return(e,z)=>(a(),o("div",{class:S(["progress-indicator",n(_)]),"data-testid":"progress-indicator"},[l("div",b,[(a(!0),o(C,null,N(n(r),i=>(a(),o("div",{key:i,class:"progress-indicator__item","data-testid":"progress-indicator-item",onClick:B=>f(i)},null,8,x))),128))]),l("div",{style:V(n(g)),class:"progress-indicator__item progress-indicator__item--active","data-testid":"progress-indicator-item-active"},null,4)],2))}});export{E as _};