import{i as a,k as s,f as l,o,c as i,g as c,n as u}from"../app.34a3cf55.js";const r=a({props:{variant:{type:String,default:"solid"},color:{type:String,default:"default"},size:{type:String,default:"md"},icon:{type:Boolean,default:!1},pill:{type:Boolean,default:!1}},setup(t){return{classNames:s(()=>{const e=["btn"];return t.color&&e.push(`btn--${t.color}`),t.variant&&e.push(`btn--variant-${t.variant}`),t.size&&e.push(`btn--${t.size}`),t.icon&&e.push("btn--icon"),t.pill&&e.push("btn--pill"),e})}}});function f(t,n,e,d,p,_){return o(),i("button",{"data-testid":"btn",class:u(t.classNames)},[c(t.$slots,"default")],2)}const b=l(r,[["render",f]]);export{b as p};