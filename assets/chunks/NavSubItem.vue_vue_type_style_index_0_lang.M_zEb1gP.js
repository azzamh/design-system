import{d as k,a4 as S,O as h,r,k as u,l as y,o as l,c as _,m as p,a as v,g as d,t as x,p as n,f as g,a3 as B,J as N,w,n as C}from"./framework.sPKXfJg2.js";import{I as E}from"./16.CeNnSYna.js";import{_ as I}from"./Collapse.vue_vue_type_style_index_0_lang.CXq8YTeO.js";const $=Symbol("SidebarSettings"),A={key:0,class:"nav__link__icon"},V={class:"nav__link__label"},q=k({__name:"NavSubItem",props:{text:{type:String,default:void 0},collapsible:{type:Boolean,default:!1}},setup(i){const c=i,m=S(),t=h($,void 0,!0),o=r(),s=u(()=>c.collapsible&&(t==null?void 0:t.type)!=="narrow"),a=r(!c.collapsible),f=u(()=>{const e=[];return m.icon&&e.push("nav__subitem--icon"),s.value&&(e.push("nav__subitem--collapsible"),a.value?e.push("nav__subitem--expanded"):e.push("nav__subitem--collapsed")),e});function b(){s.value&&(a.value=!a.value)}return y(()=>{s.value&&o.value&&(a.value=o.value.querySelectorAll(".router-link-active:not(.nav__link--exact),.router-link-exact-active.nav__link--exact").length>0)}),(e,D)=>(l(),_("li",{ref_key:"root",ref:o,"data-testid":"nav-subitem",class:C(["nav__subitem",n(f)])},[p("div",{class:"nav__subitem__parent","data-testid":"nav-subitem-parent",onClick:B(b,["prevent"])},[e.$slots.icon?(l(),_("span",A,[v(e.$slots,"icon")])):d("",!0),p("span",V,x(i.text),1),n(s)?(l(),g(E,{key:1,class:"nav__link__caret"})):d("",!0)]),N(I,{"model-value":n(a)},{default:w(()=>[v(e.$slots,"default")]),_:3},8,["model-value"])],2))}});export{$ as S,q as _};