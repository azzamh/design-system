import{u as l}from"./chunks/use-singleton.7b688bad.js";import{u as _}from"./chunks/use-loading.01b67b94.js";import{d as y,_ as i,a as r,b as p,f as t,p as f,r as g,o as m,g as n,h as o,i as v,D as k,E as w,j as T,k as x}from"./app.7565ba9b.js";import{B as O}from"./chunks/Button.8a99a73c.js";import"./chunks/index.c029153b.js";var b="/design-system/assets/icon-white.ed436f0e.svg";const S=y({setup(){const a=_({elapsed:!1});function e(){a.value=!0}function s(){a.value=!1}return{show:e,hide:s,loading:a,icon:b}}}),C={key:0,"data-testid":"overlay",class:"overlay"},I={class:"overlay__icon"},A=["src"];function P(a,e,s,u,h,c){return a.loading?(r(),p("div",C,[t("div",I,[t("img",{src:a.icon,alt:"overlay-icon"},null,8,A)])])):f("",!0)}var d=i(S,[["render",P]]);async function V(){(await l(d)).show()}async function D(){(await l(d)).hide()}const N=a=>(k("data-v-7e67da4c"),a=a(),w(),a),$=v("",3),B=N(()=>t("p",null,[t("strong",null,"Try it:")],-1)),E=x(" Show "),U=v("",10),G='{"title":"Overlay","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Simple Usage","slug":"simple-usage"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"showOverlay","slug":"showoverlay"},{"level":3,"title":"hideOverlay","slug":"hideoverlay"},{"level":2,"title":"See Also","slug":"see-also"}],"relativePath":"overlay/component.md"}',j={},R=Object.assign(j,{setup(a){const e=g();function s(){V(),setTimeout(()=>{D()},3e3)}return m(()=>{e.value.show()}),(u,h)=>{const c=T("preview");return r(),p("div",null,[$,n(c,null,{default:o(()=>[n(d,{ref_key:"overlay",ref:e},null,512)]),_:1}),B,t("div",null,[n(O,{onClick:s},{default:o(()=>[E]),_:1})]),U])}}});var H=i(R,[["__scopeId","data-v-7e67da4c"]]);export{G as __pageData,H as default};