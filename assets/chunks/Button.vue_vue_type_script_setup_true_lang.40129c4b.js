import{I as u}from"./index.a3ecab28.js";import{p}from"./SpinnerRinggo.04c28947.js";import{d as c,M as o,g as n,b as m,w as y,n as b,l as i,I as h,o as v,r,H as g}from"./framework.ea844ac6.js";const B=Symbol("ButtonGroupSetting"),k=c({__name:"Button",props:{variant:{type:String,default:"solid"},color:{type:String,default:"default"},size:{type:String,default:"md"},icon:{type:Boolean,default:!1},pill:{type:Boolean,default:!1},href:{type:[String,Object],default:void 0},type:{type:String,default:"button"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(t){const a=t,s=o(u,void 0,!1),l=o(B,void 0,!1),d=n(()=>{const e=["btn"];return a.color&&e.push(`btn--${a.color}`),a.variant&&e.push(`btn--variant-${a.variant}`),a.loading&&e.push("btn--loading"),s!=null&&s.size.value?e.push(`btn--${s==null?void 0:s.size.value}`):l!=null&&l.size.value?e.push(`btn--${l==null?void 0:l.size.value}`):a.size&&e.push(`btn--${a.size}`),a.icon&&e.push("btn--icon"),a.pill&&e.push("btn--pill"),e}),f=n(()=>a.href?"nuxt-link":"button");return(e,z)=>(v(),m(h(i(f)),{href:t.href,type:t.type,"data-testid":"btn",class:b(i(d)),disabled:t.loading||t.disabled},{default:y(()=>[t.loading?r(e.$slots,"loading",{key:0},()=>[g(p)]):r(e.$slots,"default",{key:1})]),_:3},8,["href","type","class","disabled"]))}});export{B,k as _};