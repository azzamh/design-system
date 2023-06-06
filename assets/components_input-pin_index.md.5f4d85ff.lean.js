import{p as I}from"./chunks/Input.e1d0f6fd.js";import{t as k,e as E,s as N}from"./chunks/theme.96d0fdcb.js";import{u as R}from"./chunks/use-focus.ae494a4f.js";import{m as w,t as B,r as P,c as v,_ as $,K as T,x as h,p as g,G as O,V as U,H as K,L as G,a2 as F,a5 as D,v as L,M as s,I as r,F as y,z as M,u as C,Y as p,i as j}from"./chunks/framework.91e0efa6.js";import"./chunks/index.ce054078.js";import"./chunks/commonjsHelpers.042e6b4d.js";import"./chunks/utils-6ba05f5b.79940067.js";import"./chunks/index.a3ecab28.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/toNumber.09abc7f0.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/isObjectLike.53b0037d.js";const z=w({components:{pInput:I},inheritAttrs:!1,props:{modelValue:{type:String,default:""},length:{type:[Number,String],default:5},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","clear"],setup(e,{emit:l}){const d=k("root"),n=E(B(e,"length")),a=P([...e.modelValue.padEnd(n.value)].slice(0,n.value)),c=v(()=>{const t=[];return e.disabled&&t.push("input-pin--disabled"),e.readonly&&t.push("input-pin--readonly"),e.error&&t.push("input-pin--error","state--error"),t}),{next:u,prev:o}=R(d,!1),m=v({get(){return[...e.modelValue.padEnd(n.value)].slice(0,n.value)},set(t){const _=t.map(b=>b||" ").join("").trimEnd();l("update:modelValue",_)}});N(a,m,{deep:!0});function A(t){return a.value.at(t)}function S(t,_){const f=_.target.value;a.value[t]=f,d.value&&(f?u():o())}function V(t){t.target.select()}function q(t){d.value&&!t.target.value.trim()&&o()}function x(t){a.value=[...t.clipboardData.getData("Text")].slice(0,n.value)}return{classNames:c,num:n,localModel:a,getValue:A,setValue:S,onFocus:V,onDelete:q,onPaste:x,nextFocus:u,prevFocus:o}}});function Y(e,l,d,n,a,c){const u=T("p-input");return h(),g("div",{ref:"root","data-testid":"input-pin",class:L(["input-pin",e.classNames])},[(h(!0),g(O,null,U(e.num,o=>(h(),K(u,G({key:o,maxlength:"1"},e.$attrs,{"model-value":e.getValue(o-1),clearable:!1,readonly:e.readonly,disabled:e.disabled,error:e.error,onInput:m=>e.setValue(o-1,m),onFocusPassive:e.onFocus,onKeyup:[F(D(e.onDelete,["stop","prevent"]),["delete"]),F(D(e.prevFocus,["stop","prevent"]),["left"]),F(D(e.nextFocus,["stop","prevent"]),["right"])],onPastePassive:e.onPaste}),null,16,["model-value","readonly","disabled","error","onInput","onFocusPassive","onKeyup","onPastePassive"]))),128))],2)}const i=$(z,[["render",Y]]),H=p("",4),J=p("",3),Q=p("",2),W=p("",2),X=p("",2),Z=p("",3),ee=y("p",null,[y("strong",null,"result:")],-1),te={class:"truncate whitespace-pre"},ae=p("",10),_e=JSON.parse('{"title":"Input Password · Components","description":"One at time input form.","frontmatter":{"title":"Input Password · Components","description":"One at time input form."},"headers":[],"relativePath":"components/input-pin/index.md","filePath":"components/input-pin/index.md"}'),se={name:"components/input-pin/index.md"},Fe=Object.assign(se,{setup(e){const l=P("");return(d,n)=>{const a=T("preview");return h(),g("div",null,[H,s(a,null,{default:r(()=>[s(i)]),_:1}),J,s(a,null,{default:r(()=>[s(i,{length:"3"})]),_:1}),Q,s(a,null,{default:r(()=>[s(i,{disabled:""})]),_:1}),W,s(a,null,{default:r(()=>[s(i,{readonly:""})]),_:1}),X,s(a,null,{default:r(()=>[s(i,{error:""})]),_:1}),Z,s(a,null,{default:r(()=>[s(i,{modelValue:C(l),"onUpdate:modelValue":n[0]||(n[0]=c=>j(l)?l.value=c:null)},null,8,["modelValue"])]),_:1}),ee,y("p",null,[y("code",te,M(C(l)||"-"),1)]),ae])}}});export{_e as __pageData,Fe as default};