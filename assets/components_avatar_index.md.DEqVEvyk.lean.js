import{_ as i}from"./chunks/Avatar.vue_vue_type_style_index_0_lang.a_0Q--Ri.js";import{f as c}from"./chunks/vnode.CO3Mqirm.js";import{d as r,a8 as k,o as E,c as o,K as s,w as t,a as y,a9 as e,F as u,m}from"./chunks/framework.6Y5hX2by.js";import{I as v}from"./chunks/20.FbGhQHIz.js";import"./chunks/create-image.CkAV8b2h.js";import"./chunks/avatar.qWHUbXZ4.js";import"./chunks/color-hash.CY8Op1ql.js";import"./chunks/load-image.CsguPAoR.js";const _=r({props:{size:{type:String,default:"xs"},length:{type:[Number,String],default:0}},setup(n,{slots:h}){return()=>{const l=Number(n.length),a=c(h.default(),"Avatar"),p=(a.length>l?a.slice(0,l-1):a).map(g=>k(g,{size:n.size}));return a.length>l&&p.push(k(i,{size:n.size},()=>`+${a.length+1-l}`)),p}}}),F={"data-testid":"avatar-group",class:"avatar-group"},d=r({__name:"AvatarGroup",props:{size:{type:String,default:"xs"},length:{type:[Number,String],default:5}},setup(n){return(h,l)=>(E(),o("div",F,[s(_,{size:n.size,length:n.length},{default:t(()=>[y(h.$slots,"default")]),_:3},8,["size","length"])]))}}),A=e("",4),b=e("",2),C=e("",2),q=e("",3),f={class:"flex flex-col items-center space-gap-3 lg:flex-row"},D=e("",3),T=e("",3),x=e("",3),S=e("",6),B=e("",7),G=JSON.parse(`{"title":"Avatar · Components","description":"Show user's avatar, using name or image","frontmatter":{"title":"Avatar · Components","description":"Show user's avatar, using name or image"},"headers":[],"relativePath":"components/avatar/index.md","filePath":"components/avatar/index.md"}`),P={name:"components/avatar/index.md"},L=Object.assign(P,{setup(n){return(h,l)=>{const a=u("preview");return E(),o("div",null,[A,s(a,null,{default:t(()=>[s(i,{src:"https://picsum.photos/id/50/50"})]),_:1}),b,s(a,null,{default:t(()=>[s(i,{variant:"alias",name:"Tarjono Smith"})]),_:1}),C,s(a,null,{default:t(()=>[s(i,null,{default:t(()=>[s(v)]),_:1})]),_:1}),q,s(a,null,{default:t(()=>[m("div",f,[s(i,{src:"https://picsum.photos/id/24/24",size:"xs"}),s(i,{src:"https://picsum.photos/id/32/32",size:"sm"}),s(i,{src:"https://picsum.photos/id/40/40",size:"md"}),s(i,{src:"https://picsum.photos/id/56/56",size:"lg"}),s(i,{src:"https://picsum.photos/id/96/96",size:"xl"})])]),_:1}),D,s(a,null,{default:t(()=>[s(d,null,{default:t(()=>[s(i),s(i),s(i),s(i),s(i)]),_:1})]),_:1}),T,s(a,null,{default:t(()=>[s(d,{length:"3"},{default:t(()=>[s(i),s(i),s(i),s(i),s(i)]),_:1})]),_:1}),x,s(a,{class:"space-x-3"},{default:t(()=>[s(i,{variant:"image",src:"https://picsum.photos/id/40/40"}),s(i,{variant:"alias",name:"Tarjono Smith"})]),_:1}),S,s(a,{class:"space-x-3"},{default:t(()=>[s(i,{variant:"image",src:"https://picsum.photos/id/40/40"}),s(i,{variant:"alias",name:"Tarjono Smith"}),s(i)]),_:1}),B])}}});export{G as __pageData,L as default};