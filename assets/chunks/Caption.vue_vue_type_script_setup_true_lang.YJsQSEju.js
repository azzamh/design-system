import{d as n,l as o,c as r,a as i,n as p,q as c,o as l}from"./framework.UVGMWIV8.js";const u=n({__name:"Caption",props:{weight:{type:String,default:"normal"},transform:{type:String,default:"normalcase"},size:{type:String,default:"xs"}},setup(a){const t=a,e=o(()=>{const s=["caption"];return t.transform&&s.push(`caption--${t.transform}`),t.weight&&s.push(`caption--${t.weight}`),t.size&&s.push(`caption--${t.size}`),s});return(s,f)=>(l(),r("span",{"data-testid":"caption",class:p(c(e))},[i(s.$slots,"default")],2))}});export{u as _};