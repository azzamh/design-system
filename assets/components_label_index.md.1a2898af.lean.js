import{D as _}from"./chunks/Dot.052b7611.js";import{I as h}from"./chunks/16.2961a999.js";import{i as g,j as A,k as m,f as y,r as D,o as r,c as F,q as f,t as v,e as s,g as L,a,n as E,w as e,b as c}from"./app.b3e63b5e.js";import"./chunks/utils-6ba05f5b.c3f021ab.js";const T=g({components:{Dot:_,IconClose:h},props:{color:{type:String,default:"primary"},variant:{type:String,default:"default"},size:{type:String,default:"md"},dismissable:{type:Boolean,default:!1}},emits:["dismissed"],setup(d,{emit:n}){const p=A(!0),l=m(()=>{const o=["label"];return d.color&&o.push(`label--${d.color}`),d.variant&&o.push(`label--${d.variant}`),d.size&&o.push(`label--${d.size}`),o});function i(){p.value=!1,n("dismissed")}return{classNames:l,show:p,close:i}}});function q(d,n,p,l,i,o){const u=D("Dot"),b=D("IconClose");return d.show?(r(),F("div",{key:0,"data-testid":"label",class:E(d.classNames)},[d.variant==="dot"?(r(),f(u,{key:0,"data-testid":"dot",color:d.color},null,8,["color"])):v("",!0),s(),L(d.$slots,"default"),d.dismissable?(r(),F("span",{key:1,"data-testid":"label-dismiss",class:"label__dismiss",onClick:n[0]||(n[0]=(...C)=>d.close&&d.close(...C))},[a(b)])):v("",!0)],2)):v("",!0)}const t=y(T,[["render",q]]);const S=c("",3),x=c("",3),k=c("",3),z=c("",3),I=c("",3),P=c("",8),U=JSON.parse('{"title":"Label","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]}]},{"level":2,"title":"Colors","slug":"colors","link":"#colors","children":[]},{"level":2,"title":"Variants","slug":"variants","link":"#variants","children":[]},{"level":2,"title":"Sizing","slug":"sizing","link":"#sizing","children":[]},{"level":2,"title":"Dismissible","slug":"dismissible","link":"#dismissible","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/label/index.md"}'),V={name:"components/label/index.md"},w=Object.assign(V,{setup(d){return(n,p)=>{const l=D("preview");return r(),F("div",null,[S,a(l,null,{default:e(()=>[a(t,null,{default:e(()=>[s("Label")]),_:1})]),_:1}),x,a(l,null,{default:e(()=>[a(t,{color:"primary"},{default:e(()=>[s("Label")]),_:1}),a(t,{color:"secondary"},{default:e(()=>[s("Label")]),_:1}),a(t,{color:"success"},{default:e(()=>[s("Label")]),_:1}),a(t,{color:"info"},{default:e(()=>[s("Label")]),_:1}),a(t,{color:"warning"},{default:e(()=>[s("Label")]),_:1}),a(t,{color:"danger"},{default:e(()=>[s("Label")]),_:1}),a(t,{color:"gold"},{default:e(()=>[s("Label")]),_:1})]),_:1}),k,a(l,null,{default:e(()=>[a(t,null,{default:e(()=>[s("Label")]),_:1}),a(t,{variant:"light"},{default:e(()=>[s("Label")]),_:1}),a(t,{variant:"dot"},{default:e(()=>[s("Label")]),_:1})]),_:1}),z,a(l,null,{default:e(()=>[a(t,{size:"lg"},{default:e(()=>[s("Label")]),_:1}),a(t,{size:"md"},{default:e(()=>[s("Label")]),_:1}),a(t,{size:"sm"},{default:e(()=>[s("Label")]),_:1}),a(t,{size:"xs"},{default:e(()=>[s("Label")]),_:1})]),_:1}),I,a(l,null,{default:e(()=>[a(t,{dismissable:!0},{default:e(()=>[s("Label")]),_:1}),a(t,{variant:"light",dismissable:!0},{default:e(()=>[s("Label")]),_:1}),a(t,{variant:"dot",dismissable:!0},{default:e(()=>[s("Label")]),_:1})]),_:1}),P])}}}),j=y(w,[["__scopeId","data-v-76d1e1ac"]]);export{U as __pageData,j as default};