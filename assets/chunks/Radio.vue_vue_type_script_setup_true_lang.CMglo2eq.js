import{l as c,as as u,d as h,c as d,m as l,g as f,a as p,p as i,n as m,a4 as _,o as n}from"./framework.6Y5hX2by.js";import{i as g}from"./value.C5X7htjv.js";import{I as v}from"./20.DEYQKeYT.js";function y(e){const{emit:a}=u();return c({get(){return g(e.modelValue,e.value)||e.checked},set(s){a("change",s),s&&a("update:modelValue",e.value)}})}const k={class:"radio__icon"},w={key:1,width:"10",height:"10",viewBox:"0 0 14 10",fill:"none",xmlns:"http://www.w3.org/2000/svg"},b=l("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M3.81581 8.48528L5.23002 9.8995L6.64423 8.48528L13.7153 1.41421L12.3011 0L5.23002 7.07107L1.69449 3.53553L0.280273 4.94975L3.81581 8.48528Z"},null,-1),B=[b],L={key:2,width:"10",height:"10",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},x=l("circle",{cx:"7",cy:"7",r:"6.25"},null,-1),C=[x],V={class:"radio__label"},I=["value","name","disabled"],$=h({__name:"Radio",props:{name:{type:String,default:""},modelValue:{type:void 0,default:!1},value:{type:void 0,default:!0},checked:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},appearance:{type:String,default:"radio"}},emits:["update:modelValue","change"],setup(e){const a=e,o=y(a),s=c(()=>{const t=[];return o.value&&t.push("radio--checked"),a.readonly&&t.push("radio--readonly"),a.disabled&&t.push("radio--disabled"),a.appearance&&t.push(`radio--${a.appearance}`),t});function r(){!a.disabled&&!a.readonly&&(o.value=!0)}return(t,M)=>(n(),d("label",{"data-testid":"radio",class:m(["radio",i(s)]),onClick:_(r,["prevent"])},[l("span",k,[e.appearance==="option"?(n(),f(v,{key:0})):e.appearance==="checkbox"?(n(),d("svg",w,B)):(n(),d("svg",L,C))]),l("span",V,[p(t.$slots,"default",{isChecked:i(o)})]),l("input",{type:"radio",value:i(o),name:e.name,disabled:e.disabled||e.readonly},null,8,I)],2))}});export{$ as _};