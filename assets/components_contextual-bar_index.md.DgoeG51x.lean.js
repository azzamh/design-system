import{_ as V}from"./chunks/avatar.qWHUbXZ4.js";import{d as $,k as w,l as H,ah as N,o as v,f as P,w as s,ab as R,ak as z,p as h,m as y,n as Y,c as u,a as q,g as B,b as E,t as D,F as W,J as a,N as L,T as M,_ as J,r as p,a8 as o,E as O,a9 as k,q as j,s as G}from"./chunks/framework.sPKXfJg2.js";import{u as K}from"./chunks/index.BXynq5-W.js";import{_ as Q}from"./chunks/Caption.vue_vue_type_script_setup_true_lang.CoQWz2VF.js";import"./chunks/Caption.vue_vue_type_style_index_0_lang.l0sNRNKZ.js";import{_ as X}from"./chunks/Subheading.vue_vue_type_style_index_0_lang.EGg49p8Y.js";import{I as Z}from"./chunks/16.Dp5Wvxo0.js";import{_ as c}from"./chunks/Button.vue_vue_type_script_setup_true_lang.D0k62JW9.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.l0sNRNKZ.js";import{I}from"./chunks/20.BjlKDVYU.js";import"./chunks/index.DvWHfs5K.js";import"./chunks/SpinnerRinggo.vue_vue_type_script_setup_true_lang.CxnU0WMy.js";const aa={key:0,"data-testid":"contextual-bar-icon",class:"contextual-bar__icon"},da={class:"contextual-bar__content"},sa={key:0,"data-testid":"contextual-bar-title",class:"contextual-bar__content__title"},ta={key:1,"data-testid":"contextual-bar-message",class:"contextual-bar__content__message"},ia={key:1,"data-testid":"contextual-bar-action",class:"contextual-bar__action"},l=$({inheritAttrs:!1,__name:"ContextualBar",props:{state:{type:String,default:"info"},backgroundUrl:{type:String,default:void 0},backgroundDarkUrl:{type:String,default:void 0},dismissable:{type:Boolean,default:!0},title:{type:String,default:void 0},message:{type:String,default:void 0},align:{type:String,default:"left"},modelValue:{type:Boolean,default:!0}},emits:["update:modelValue","close","show","hide"],setup(n,{emit:f}){const e=n,g=f,F=K(e);function m(d){g("close",d),d.defaultPrevented||(F.value=!1)}const b=w(()=>{const d=[""];return e.state&&d.push(`contextual-bar--${e.state}`),e.align&&d.push(`contextual-bar--align-${e.align}`),e.backgroundUrl&&d.push("contextual-bar--background-image"),d}),_=w(()=>{const d={};return e.backgroundUrl&&(d["--p-contextual-bar-bg-image"]=`url("${e.backgroundUrl}")`,d["--p-contextual-bar-bg-dark-image"]=e.backgroundDarkUrl?`url("${e.backgroundDarkUrl}")`:`url("${e.backgroundUrl}")`),d});function C(d){d.style.setProperty("transform",`translateY(-${d.clientHeight}px)`),document.body.classList.add("contextual-bar__body--active"),document.body.style.setProperty("transform",`translateY(${d.clientHeight}px)`),g("show")}function T(d){d.style.setProperty("transform","translateY(0px)"),document.body.classList.remove("contextual-bar__body--active"),document.body.style.removeProperty("transform"),g("hide")}return H(()=>{document.body.classList.add("contextual-bar__body")}),N(()=>{document.body.classList.remove("contextual-bar__body")}),(d,x)=>(v(),P(M,{name:"fade",appear:"",onEnter:C,onAfterLeave:T},{default:s(()=>[R(y("div",L({ref:"contextualbar","data-testid":"contextual-bar",class:"contextual-bar"},d.$attrs,{class:h(b),style:h(_)}),[y("div",{"data-testid":"contextual-bar-wrapper",class:Y(["contextual-bar__wrapper",{"contextual-bar__wrapper--with-message":n.message||d.$slots.message,"contextual-bar__wrapper--with-action":d.$slots.action}])},[d.$slots.icon?(v(),u("span",aa,[q(d.$slots,"icon")])):B("",!0),y("div",da,[n.title||d.$slots.title?(v(),u("div",sa,[q(d.$slots,"title",{},()=>[n.message?(v(),P(X,{key:0},{default:s(()=>[E(D(n.title),1)]),_:1})):(v(),u(W,{key:1},[E(D(n.title),1)],64))])])):B("",!0),n.message||d.$slots.message?(v(),u("div",ta,[a(Q,null,{default:s(()=>[q(d.$slots,"message",{},()=>[E(D(n.message),1)])]),_:3})])):B("",!0)]),d.$slots.action?(v(),u("div",ia,[q(d.$slots,"action")])):B("",!0)],2),n.dismissable?(v(),u("div",{key:0,"data-testid":"contextual-bar-close",class:"contextual-bar__close",onClick:m},[a(Z)])):B("",!0)],16),[[z,h(F)]])]),_:3}))}}),S=n=>(j("data-v-8d6dadf4"),n=n(),G(),n),la=o("",4),ea={class:"pt-5"},na=o("",2),ha=S(()=>y("img",{src:V},null,-1)),pa=o("",2),ka=o("",2),Ea=o("",2),oa=o("",2),ra=o("",2),va=S(()=>y("img",{src:V},null,-1)),fa=o("",3),ga=o("",3),ca=o("",1),ua=S(()=>y("img",{src:V},null,-1)),ya=o("",7),Pa=JSON.parse('{"title":"Contextual Bar · Components","description":"App-level notification bar.","frontmatter":{"title":"Contextual Bar · Components","description":"App-level notification bar."},"headers":[],"relativePath":"components/contextual-bar/index.md","filePath":"components/contextual-bar/index.md"}'),Fa={name:"components/contextual-bar/index.md"},ma=Object.assign(Fa,{setup(n){const f=p(!1),e=p(!0),g=p(!0),F=p(!0),m=p(!0),b=p(!0),_=p(!0),C=p(!0);p(!0),p(!0);const T=p(!0),d=p(!0),x=p(!0);function U(){f.value=!0,setTimeout(()=>{f.value=!1},3e3)}return H(()=>{var A;(A=document.body)==null||A.style.removeProperty("transform")}),(A,t)=>{const r=O("preview");return v(),u("div",null,[la,y("div",ea,[a(c,{onClick:U,color:"info"},{default:s(()=>[E("Live Preview")]),_:1})]),a(r,{class:"preview--bar"},{default:s(()=>[a(l,{modelValue:h(e),"onUpdate:modelValue":t[0]||(t[0]=i=>k(e)?e.value=i:null),title:"Hey! This is Title Text and telling less"},null,8,["modelValue"])]),_:1}),na,a(r,{class:"flex-col space-y-3 preview--bar"},{default:s(()=>[a(l,{title:"Hey! This is Title Text and telling less"},{icon:s(()=>[a(I)]),_:1}),a(l,{title:"Hey! This is Title Text and telling less"},{icon:s(()=>[ha]),_:1})]),_:1}),pa,a(r,{class:"preview--bar"},{default:s(()=>[a(l,{title:"Hey! This is Title Text",modelValue:h(g),"onUpdate:modelValue":t[1]||(t[1]=i=>k(g)?g.value=i:null)},{icon:s(()=>[a(I)]),action:s(()=>[a(c,{size:"sm",color:"info"},{default:s(()=>[E("Button text")]),_:1})]),_:1},8,["modelValue"])]),_:1}),ka,a(r,{class:"preview--bar"},{default:s(()=>[a(l,{title:"This is Title Text",modelValue:h(F),"onUpdate:modelValue":t[2]||(t[2]=i=>k(F)?F.value=i:null)},{action:s(()=>[a(c,{size:"sm",color:"info"},{default:s(()=>[E("Button")]),_:1}),a(c,{size:"sm",color:"info",variant:"outline"},{default:s(()=>[E("Button")]),_:1})]),_:1},8,["modelValue"])]),_:1}),Ea,a(r,{class:"preview--bar"},{default:s(()=>[a(l,{modelValue:h(m),"onUpdate:modelValue":t[3]||(t[3]=i=>k(m)?m.value=i:null),title:"Hey! This is Title Text",message:"You will be unable to sign or seal a document"},null,8,["modelValue"])]),_:1}),oa,a(r,{class:"preview--bar"},{default:s(()=>[a(l,{modelValue:h(b),"onUpdate:modelValue":t[4]||(t[4]=i=>k(b)?b.value=i:null),title:"Hey! This is Title Text",message:"You will be unable to sign or seal a document"},{action:s(()=>[a(c,{color:"info",size:"sm"},{default:s(()=>[E("Button")]),_:1})]),_:1},8,["modelValue"])]),_:1}),ra,a(r,{class:"preview--bar"},{default:s(()=>[a(l,{title:"Hey! This is Title Text",message:"You will be unable to sign or seal a document","background-url":"../../public/assets/images/img-contextualbar-bg.svg"},{icon:s(()=>[va]),_:1})]),_:1}),fa,a(r,{class:"flex-col space-y-4 preview--bar"},{default:s(()=>[a(l,{state:"error",modelValue:h(_),"onUpdate:modelValue":t[5]||(t[5]=i=>k(_)?_.value=i:null),title:"Hey! This is Title Text and telling less"},null,8,["modelValue"]),a(l,{state:"warning",modelValue:h(C),"onUpdate:modelValue":t[6]||(t[6]=i=>k(C)?C.value=i:null),title:"Hey! This is Title Text and telling less"},null,8,["modelValue"]),a(l,{state:"info",title:"Hey! This is Title Text and telling less"}),a(l,{state:"neutral",title:"Hey! This is Title Text and telling less"})]),_:1}),ga,a(r,{class:"flex-col space-y-4 preview--bar"},{default:s(()=>[a(l,{align:"left",modelValue:h(T),"onUpdate:modelValue":t[7]||(t[7]=i=>k(T)?T.value=i:null),title:"Hey! This is Title Text"},null,8,["modelValue"]),a(l,{align:"center",modelValue:h(d),"onUpdate:modelValue":t[8]||(t[8]=i=>k(d)?d.value=i:null),title:"Hey! This is Title Text"},null,8,["modelValue"]),a(l,{align:"right",modelValue:h(x),"onUpdate:modelValue":t[9]||(t[9]=i=>k(x)?x.value=i:null),title:"Hey! This is Title Text"},null,8,["modelValue"])]),_:1}),ca,a(r,{class:"preview--hide"},{default:s(()=>[a(l,{modelValue:h(f),"onUpdate:modelValue":t[10]||(t[10]=i=>k(f)?f.value=i:null),color:"light",title:"Hey! This is Title Text and telling less as possible","background-url":"../../public/assets/images/img-contextualbar-bg.svg"},{icon:s(()=>[ua]),action:s(()=>[a(c,{size:"sm",color:"secondary",variant:"link"},{default:s(()=>[E("Cancel")]),_:1}),a(c,{size:"sm",color:"info"},{default:s(()=>[E("Button Text")]),_:1})]),message:s(()=>[E(" You will be unable to sign or seal a document while your privy balance runs out. ")]),_:1},8,["modelValue"])]),_:1}),ya])}}}),Ia=J(ma,[["__scopeId","data-v-8d6dadf4"]]);export{Pa as __pageData,Ia as default};