import{I as B}from"./chunks/20.U7se0ofw.js";import{d as f,l as u,O as x,o as t,c as r,f as c,w as s,a as v,q as h,n as _,K as F,g as q,E as T,a6 as w,J as i,a3 as S,$ as N,F as b,G as D,b as n,t as A,V as o}from"./chunks/framework.95PECLjQ.js";import{_ as I}from"./chunks/Dropdown.vue_vue_type_script_setup_true_lang.jD6v5o4a.js";import{_ as m}from"./chunks/Dropdown.vue_vue_type_style_index_0_lang.THjTzNll.js";import"./chunks/Button.vue_vue_type_script_setup_true_lang.ZHeh2b3E.js";import"./chunks/index.hjpy5ZnQ.js";import"./chunks/SpinnerRinggo.vue_vue_type_script_setup_true_lang.eR8P-bYU.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.w40geAFS.js";import"./chunks/use-focus.oPJP1ZqW.js";import"./chunks/toNumber.jidAZ9H9.js";import"./chunks/isObject.mlSoqgao.js";import"./chunks/isSymbol.K1VvrVGN.js";import"./chunks/isObjectLike.OM1Hublo.js";import"./chunks/floating-ui.dom.Gn4DI--7.js";import"./chunks/index.BH_KCAlA.js";import"./chunks/20.wQqpaH1h.js";const V={key:0,"data-testid":"breadcrumbs-divider",class:"breadcrumbs__item__divider"},E=f({__name:"BreadcrumbItem",props:{href:{type:[String,Object],default:"#"},active:{type:Boolean,default:!1}},setup(p){const e=p,k=u(()=>{const d=[""];return e.active&&d.push("breadcrumbs__item--active"),d}),g=u(()=>e.active?"span":T("nuxt-link")),a=u(()=>{if(!e.active)return e.href}),l=x("divider",()=>w(B));return(d,C)=>(t(),r("li",{"data-testid":"breadcrumbs-item",class:_(["breadcrumbs__item",h(k)])},[(t(),c(F(h(g)),{href:h(a),class:_({breadcrumbs__item__link:h(a)})},{default:s(()=>[v(d.$slots,"default")]),_:3},8,["href","class"])),p.active?q("",!0):(t(),r("div",V,[(t(),c(F(h(l))))]))],2))}}),$={key:0,"data-testid":"breadcrumbs-divider",class:"breadcrumbs__item__divider"},P=f({__name:"BreadcrumbItemDropdown",props:{text:{type:String,default:""},active:{type:Boolean,default:!1}},setup(p){const e=p,k=u(()=>{const a=["breadcrumbs__item--dropdown"];return e.active&&a.push("breadcrumbs__item--active"),a}),g=x("divider",()=>w(B));return(a,l)=>(t(),r("li",{"data-testid":"breadcrumbs-dropdown",class:_(["breadcrumbs__item",h(k)])},[i(I,{text:p.text,placement:"bottom-end",size:"xs"},{default:s(()=>[v(a.$slots,"default")]),_:3},8,["text"]),p.active?q("",!0):(t(),r("div",$,[(t(),c(F(h(g))))]))],2))}}),R={class:"breadcrumbs","data-testid":"breadcrumbs"},y=f({__name:"Breadcrumb",props:{items:{type:Array,default:()=>[]}},setup(p){const e=S();return e.divider&&N("divider",e.divider),(k,g)=>(t(),r("ul",R,[v(k.$slots,"default",{},()=>[(t(!0),r(b,null,D(p.items,(a,l)=>(t(),r(b,{key:l},[a.subitem?(t(),c(P,{key:0,text:a.text,active:a.active,href:a.href},{default:s(()=>[(t(!0),r(b,null,D(a.subitem,(d,C)=>(t(),c(m,{key:C,active:d.active,href:d.href},{default:s(()=>[n(A(d.text),1)]),_:2},1032,["active","href"]))),128))]),_:2},1032,["text","active","href"])):(t(),c(E,{key:1,active:a.active,href:a.href},{default:s(()=>[n(A(a.text),1)]),_:2},1032,["active","href"]))],64))),128))])]))}});const U=o("",5),O=o("",2),j=o("",3),L=o("",2),z=o("",2),J=o("",16),ps=JSON.parse(`{"title":"Breadcrumbs · Components","description":"The current page's location within a navigational hierarchy","frontmatter":{"title":"Breadcrumbs · Components","description":"The current page's location within a navigational hierarchy"},"headers":[],"relativePath":"components/breadcrumbs/index.md","filePath":"components/breadcrumbs/index.md"}`),M={name:"components/breadcrumbs/index.md"},rs=Object.assign(M,{setup(p){const e=[{text:"Dashboard",href:"/"},{text:"All Documents",active:!0}],k=[{text:"Dashboard",href:"#"},{text:"Document",active:!0,subitem:[{text:"Waiting",href:"#",active:!0},{text:"Done",href:"#"},{text:"Archived",href:"#"}]}];return(g,a)=>{const l=T("preview");return t(),r("div",null,[U,i(l,null,{default:s(()=>[i(y,{items:h(e)},null,8,["items"])]),_:1}),O,i(l,null,{default:s(()=>[i(y,{items:h(e)},{divider:s(()=>[n(" / ")]),_:1},8,["items"])]),_:1}),j,i(l,null,{default:s(()=>[i(y,null,{default:s(()=>[i(E,{href:"#dashboard"},{default:s(()=>[n(" Dashboard ")]),_:1}),i(E,{href:"#user"},{default:s(()=>[n(" User Profile ")]),_:1}),i(E,{active:""},{default:s(()=>[n(" Change Password ")]),_:1})]),_:1})]),_:1}),L,i(l,null,{default:s(()=>[i(y,{items:h(k)},null,8,["items"])]),_:1}),z,i(l,null,{default:s(()=>[i(y,null,{default:s(()=>[i(E,{href:"#dashboard"},{default:s(()=>[n(" Dashboard ")]),_:1}),i(E,{href:"#settings"},{default:s(()=>[n(" Settings ")]),_:1}),i(P,{text:"Account",active:""},{default:s(()=>[i(m,{href:"#"},{default:s(()=>[n(" Change Password ")]),_:1}),i(m,{href:"#",active:""},{default:s(()=>[n(" Create Signature ")]),_:1}),i(m,{href:"#"},{default:s(()=>[n(" Change OTP Method ")]),_:1})]),_:1})]),_:1})]),_:1}),J])}}});export{ps as __pageData,rs as default};