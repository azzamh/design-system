import{I}from"./20.CgIVuDAp.js";import{I as B,a as U}from"./20.Ch2LHQbY.js";import{I as _}from"./16.DaMo8UEY.js";import{d as $,r as C,l,p as a,c,n as m,a as b,h as r,m as h,K as S,R as D,o,g as N,L as V}from"./framework.BKe39h19.js";const w={class:"banner__body"},R=$({__name:"Banner",props:{variant:{type:String,default:"info"},dismissable:{type:Boolean,default:!0},noIcon:{type:Boolean,default:!1},backgroundUrl:{type:String,default:void 0},backgroundDarkUrl:{type:String,default:void 0},backgroundOverlay:{type:Boolean,default:!1}},emits:["dismissed"],setup(s,{expose:f,emit:g}){const k={danger:B,info:I,warning:U},n=s,p=g,i=C(!0),y=l(()=>{const e=["banner"];return n.variant&&e.push(`banner--${n.variant}`),n.backgroundUrl&&e.push("banner--custom-background"),n.backgroundOverlay&&e.push("banner--overlay"),e}),v=l(()=>{const e={};return n.backgroundUrl&&(e["--p-banner-bg-image"]=`url("${n.backgroundUrl}")`,e["--p-banner-bg-dark-image"]=n.backgroundDarkUrl?`url("${n.backgroundDarkUrl}")`:`url("${n.backgroundUrl}")`),e}),d=l(()=>k[n.variant]);function t(){i.value=!1,p("dismissed")}return f({close:t}),(e,u)=>a(i)?(o(),c("div",{key:0,"data-testid":"banner",class:m(a(y)),style:D(a(v))},[s.noIcon?r("",!0):(o(),c("div",{key:0,class:m(["banner__icon",{"banner__icon--custom":e.$slots.icon}]),"data-testid":"banner-icon"},[b(e.$slots,"icon",{},()=>[a(d)?(o(),N(V(a(d)),{key:0})):r("",!0)])],2)),h("div",w,[b(e.$slots,"default",{close:t})]),s.dismissable?(o(),c("div",{key:1,"data-testid":"banner-close",class:"banner__close",onClick:u[0]||(u[0]=z=>t())},[S(_)])):r("",!0)],6)):r("",!0)}});export{R as _};