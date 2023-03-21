import{p}from"./Caption.04abb668.js";import{f as u,h as l,k as _,r as m,o as s,c as n,a as h,w as y,e as $,y as g,t as r,l as c,n as f,m as k}from"../app.8de4c67c.js";const N=u({components:{Caption:p},props:{fill:{type:Boolean,default:!1},justified:{type:Boolean,default:!1},variant:{type:String,default:"pills"},align:{type:String,default:"left"},vertical:{type:Boolean,default:!1},title:{type:String,default:void 0},condensed:{type:Boolean,default:!1}},setup(e){return{classNames:l(()=>{const a=["nav"];return e.fill&&a.push("nav--fill"),e.justified&&a.push("nav--justified"),e.variant&&a.push(`nav--${e.variant}`),e.align&&a.push(`nav--align-${e.align}`),e.vertical&&a.push("nav--vertical"),e.title&&a.push("nav--has-title"),e.condensed&&a.push("nav--condensed"),a})}}});const C={key:0,class:"nav__title"};function b(e,i,a,o,d,t){const v=m("Caption");return s(),n("ul",{"data-testid":"nav",class:f(e.classNames)},[e.title?(s(),n("li",C,[h(v,{weight:"bold",transform:"capitalize"},{default:y(()=>[$(g(e.title),1)]),_:1})])):r("",!0),c(e.$slots,"default")],2)}const D=_(N,[["render",b]]),B=u({props:{active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},href:{type:String,default:void 0},target:{type:String,default:"_self"}},setup(e,{slots:i}){const a=l(()=>{const t=["nav__link"];return e.active&&t.push("nav__link--active"),e.disabled&&t.push("nav__link--disabled"),i.icon&&t.push("nav__link--icon"),t}),o=l(()=>{const t=[""];return e.active&&t.push("nav__item--active"),e.disabled&&t.push("nav__item--disabled"),t}),d=l(()=>{let t;return e.disabled||(t=e.href),t});return{classNames:a,navItemClass:o,link:d}}});const S=["href","target"],I={key:0,"data-testid":"nav-icon",class:"nav__link__icon"},V={key:1,"data-testid":"nav-label",class:"nav__link__label"};function j(e,i,a,o,d,t){return s(),n("li",{"data-testid":"nav-item",class:f(["nav__item",e.navItemClass])},[k("a",{"data-testid":"nav-link",href:e.link,target:e.target,class:f(e.classNames)},[e.$slots.icon?(s(),n("span",I,[c(e.$slots,"icon")])):r("",!0),e.$slots.default?(s(),n("span",V,[c(e.$slots,"default")])):r("",!0)],10,S)],2)}const E=_(B,[["render",j]]);export{D as N,E as p};