import{_ as P}from"./chunks/avatar.bd58a373.js";import{u as U}from"./chunks/index.7a96623d.js";import{p as z}from"./chunks/Caption.e98a8ac7.js";import{p as R}from"./chunks/Subheading.7743351d.js";import{I as L}from"./chunks/16.4b8c6256.js";import{m as Y,c as W,o as H,h as M,_ as $,L as E,x as i,A as I,B as e,a7 as O,G as C,U as j,v as G,p as m,q as x,C as q,y as b,z as S,M as J,Q as t,a9 as Q,T as X,r as c,X as v,u as d,i as r,H as K,I as Z}from"./chunks/framework.f14560cd.js";import{p as u}from"./chunks/Button.2deccdb1.js";import{I as B}from"./chunks/20.53a39c07.js";import"./chunks/theme.bdd572ce.js";import"./chunks/Caption.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/index.a3ecab28.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.4ed993c7.js";const aa=Y({components:{IconClose:L,pCaption:z,pSubheading:R},inheritAttrs:!1,props:{variant:{type:String,default:"light"},backgroundUrl:{type:String,default:void 0},dismissable:{type:Boolean,default:!0},title:{type:String,default:void 0},message:{type:String,default:void 0},align:{type:String,default:"left"},modelValue:{type:Boolean,default:!0}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","close","show","hide"],setup(a,{emit:p}){const F=U(a);function g(n){p("close",n),n.defaultPrevented||(F.value=!1)}const _=W(()=>{const n=[""];return a.variant&&n.push(`contextual-bar--${a.variant}`),a.align&&n.push(`contextual-bar--align-${a.align}`),a.backgroundUrl&&n.push("contextual-bar--background-image"),n});function h(n){n.style.setProperty("transform",`translateY(-${n.clientHeight}px)`),document.body.classList.add("contextual-bar__body--active"),document.body.style.setProperty("transform",`translateY(${n.clientHeight}px)`),p("show")}function y(n){n.style.setProperty("transform","translateY(0px)"),document.body.classList.remove("contextual-bar__body--active"),document.body.style.removeProperty("transform"),p("hide")}return H(()=>{document.body.classList.add("contextual-bar__body")}),M(()=>{document.body.classList.remove("contextual-bar__body")}),{model:F,classNames:_,close:g,onEnter:h,onLeave:y}}});const ta={key:0,"data-testid":"contextual-bar-icon",class:"contextual-bar__icon"},ea={class:"contextual-bar__content"},sa={key:0,"data-testid":"contextual-bar-title",class:"contextual-bar__content__title"},la={key:1,"data-testid":"contextual-bar-message",class:"contextual-bar__content__message"},na={key:1,"data-testid":"contextual-bar-action",class:"contextual-bar__action"};function oa(a,p,F,g,_,h){const y=E("p-subheading"),n=E("p-caption"),A=E("IconClose");return i(),I(X,{name:"fade",appear:"",onEnter:a.onEnter,onAfterLeave:a.onLeave},{default:e(()=>[O(C("div",j({ref:"contextualbar","data-testid":"contextual-bar",class:"contextual-bar"},a.$attrs,{class:a.classNames,style:{"background-image":a.backgroundUrl?`url('${a.backgroundUrl}')`:"none"}}),[C("div",{"data-testid":"contextual-bar-wrapper",class:G([{"contextual-bar__wrapper--with-message":a.message||a.$slots.message,"contextual-bar__wrapper--with-action":a.$slots.action},"contextual-bar__wrapper"])},[a.$slots.icon?(i(),m("span",ta,[x(a.$slots,"icon")])):q("",!0),C("div",ea,[a.title||a.$slots.title?(i(),m("div",sa,[x(a.$slots,"title",{},()=>[a.message?(i(),I(y,{key:0},{default:e(()=>[b(S(a.title),1)]),_:1})):(i(),m(J,{key:1},[b(S(a.title),1)],64))])])):q("",!0),a.message||a.$slots.message?(i(),m("div",la,[t(n,null,{default:e(()=>[x(a.$slots,"message",{},()=>[b(S(a.message),1)])]),_:3})])):q("",!0)]),a.$slots.action?(i(),m("div",na,[x(a.$slots,"action")])):q("",!0)],2),a.dismissable?(i(),m("div",{key:0,"data-testid":"contextual-bar-close",class:"contextual-bar__close",onClick:p[0]||(p[0]=(...T)=>a.close&&a.close(...T))},[t(A)])):q("",!0)],16),[[Q,a.model]])]),_:3},8,["onEnter","onAfterLeave"])}const o=$(aa,[["render",oa]]);const w=a=>(K("data-v-46cb926e"),a=a(),Z(),a),ca=v("",4),pa={class:"pt-5"},da=v("",2),ra=w(()=>C("img",{src:P},null,-1)),ba=v("",2),va=v("",2),Da=v("",2),ia=v("",2),Fa=v("",2),ya=w(()=>C("img",{src:P},null,-1)),ua=v("",3),ma=v("",3),Ca=v("",1),ga=w(()=>C("img",{src:P},null,-1)),_a=v("",7),Ha=JSON.parse('{"title":"Contextual Bar","description":"","frontmatter":{},"headers":[],"relativePath":"components/contextual-bar/index.md","filePath":"components/contextual-bar/index.md"}'),ha={name:"components/contextual-bar/index.md"},Aa=Object.assign(ha,{setup(a){const p=c(!1),F=c(!0),g=c(!0),_=c(!0),h=c(!0),y=c(!0),n=c(!0),A=c(!0);c(!0),c(!0);const T=c(!0),f=c(!0),V=c(!0);function N(){p.value=!0,setTimeout(()=>{p.value=!1},3e3)}return H(()=>{var k;(k=document.body)==null||k.style.removeProperty("transform")}),(k,s)=>{const D=E("preview");return i(),m("div",null,[ca,C("div",pa,[t(u,{onClick:N,color:"info"},{default:e(()=>[b("Live Preview")]),_:1})]),t(D,{class:"preview--bar"},{default:e(()=>[t(o,{modelValue:d(F),"onUpdate:modelValue":s[0]||(s[0]=l=>r(F)?F.value=l:null),title:"Hey! This is Title Text and telling less"},null,8,["modelValue"])]),_:1}),da,t(D,{class:"flex-col space-y-3 preview--bar"},{default:e(()=>[t(o,{title:"Hey! This is Title Text and telling less"},{icon:e(()=>[t(B)]),_:1}),t(o,{title:"Hey! This is Title Text and telling less"},{icon:e(()=>[ra]),_:1})]),_:1}),ba,t(D,{class:"preview--bar"},{default:e(()=>[t(o,{title:"Hey! This is Title Text",modelValue:d(g),"onUpdate:modelValue":s[1]||(s[1]=l=>r(g)?g.value=l:null)},{icon:e(()=>[t(B)]),action:e(()=>[t(u,{size:"sm",color:"info"},{default:e(()=>[b("Button text")]),_:1})]),_:1},8,["modelValue"])]),_:1}),va,t(D,{class:"preview--bar"},{default:e(()=>[t(o,{title:"This is Title Text",modelValue:d(_),"onUpdate:modelValue":s[2]||(s[2]=l=>r(_)?_.value=l:null)},{action:e(()=>[t(u,{size:"sm",color:"info"},{default:e(()=>[b("Button")]),_:1}),t(u,{size:"sm",color:"info",variant:"outline"},{default:e(()=>[b("Button")]),_:1})]),_:1},8,["modelValue"])]),_:1}),Da,t(D,{class:"preview--bar"},{default:e(()=>[t(o,{modelValue:d(h),"onUpdate:modelValue":s[3]||(s[3]=l=>r(h)?h.value=l:null),title:"Hey! This is Title Text",message:"You will be unable to sign or seal a document"},null,8,["modelValue"])]),_:1}),ia,t(D,{class:"preview--bar"},{default:e(()=>[t(o,{modelValue:d(y),"onUpdate:modelValue":s[4]||(s[4]=l=>r(y)?y.value=l:null),title:"Hey! This is Title Text",message:"You will be unable to sign or seal a document"},{action:e(()=>[t(u,{color:"info",size:"sm"},{default:e(()=>[b("Button")]),_:1})]),_:1},8,["modelValue"])]),_:1}),Fa,t(D,{class:"preview--bar"},{default:e(()=>[t(o,{title:"Hey! This is Title Text",message:"You will be unable to sign or seal a document","background-url":"/assets/images/img-contextualbar-bg.svg"},{icon:e(()=>[ya]),_:1})]),_:1}),ua,t(D,{class:"flex-col space-y-4 preview--bar"},{default:e(()=>[t(o,{variant:"light",modelValue:d(n),"onUpdate:modelValue":s[5]||(s[5]=l=>r(n)?n.value=l:null),title:"Hey! This is Title Text and telling less"},null,8,["modelValue"]),t(o,{variant:"dark",modelValue:d(A),"onUpdate:modelValue":s[6]||(s[6]=l=>r(A)?A.value=l:null),title:"Hey! This is Title Text and telling less"},null,8,["modelValue"])]),_:1}),ma,t(D,{class:"flex-col space-y-4 preview--bar"},{default:e(()=>[t(o,{align:"left",modelValue:d(T),"onUpdate:modelValue":s[7]||(s[7]=l=>r(T)?T.value=l:null),title:"Hey! This is Title Text"},null,8,["modelValue"]),t(o,{align:"center",modelValue:d(f),"onUpdate:modelValue":s[8]||(s[8]=l=>r(f)?f.value=l:null),title:"Hey! This is Title Text"},null,8,["modelValue"]),t(o,{align:"right",modelValue:d(V),"onUpdate:modelValue":s[9]||(s[9]=l=>r(V)?V.value=l:null),title:"Hey! This is Title Text"},null,8,["modelValue"])]),_:1}),Ca,t(D,{class:"preview--hide"},{default:e(()=>[t(o,{modelValue:d(p),"onUpdate:modelValue":s[10]||(s[10]=l=>r(p)?p.value=l:null),color:"light",title:"Hey! This is Title Text and telling less as possible","background-url":"/assets/images/img-contextualbar-bg.svg"},{icon:e(()=>[ga]),action:e(()=>[t(u,{size:"sm",color:"secondary",variant:"link"},{default:e(()=>[b("Cancel")]),_:1}),t(u,{size:"sm",color:"info"},{default:e(()=>[b("Button Text")]),_:1})]),message:e(()=>[b(" You will be unable to sign or seal a document while your privy balance runs out. ")]),_:1},8,["modelValue"])]),_:1}),_a])}}}),$a=$(Aa,[["__scopeId","data-v-46cb926e"]]);export{Ha as __pageData,$a as default};