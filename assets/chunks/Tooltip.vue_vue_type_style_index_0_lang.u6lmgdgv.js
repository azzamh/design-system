import{d as w,ab as n,r as i,l as y,z as _,A as g,aa as x,aj as $,o as k,c as b,p as B,a as S,n as A,q as j}from"./framework.UVGMWIV8.js";import{a as z,c as C,f as E,s as N,o as P,d as q}from"./floating-ui.dom.1o3sBJnb.js";const R=w({__name:"Tooltip",props:{show:{type:Boolean,default:!1},color:{type:String,default:"black"},target:{type:Object,default:void 0},placement:{type:String,default:"top"}},emits:["show","hide"],setup(l,{emit:u}){const o=l,r=u,f=n(o,"placement"),s=n(o,"target"),e=i(),a=i(),m=y(()=>{const t=[];return o.color&&t.push(`tooltip--${o.color}`),t});return _(()=>o.show,t=>{r(t?"show":"hide",s.value)}),g(t=>{if(e.value&&s.value&&a.value){const p=z(s.value,e.value,()=>{C(s.value,e.value,{strategy:"absolute",placement:f.value,middleware:[E(),N(),P(12),q({element:a.value})]}).then(({x:v,y:d,middlewareData:c,placement:h})=>{e.value&&(e.value.dataset.popperPlacement=h,e.value.style.left=`${v||0}px`,e.value.style.top=`${d||0}px`),a.value&&(a.value.style.left=`${c.arrow.x}px`,a.value.style.top=`${c.arrow.y}px`)})},{animationFrame:!0});t(p)}},{flush:"post"}),(t,p)=>x((k(),b("div",{ref_key:"tooltip",ref:e,class:A(["tooltip",j(m)]),"data-testid":"tooltip"},[B("div",{ref_key:"tooltipArrow",ref:a,class:"tooltip__arrow","data-popper-arrow":""},null,512),S(t.$slots,"default")],2)),[[$,l.show]])}});export{R as _};