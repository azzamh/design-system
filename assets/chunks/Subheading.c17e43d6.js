import{u as t,r as n,_ as i,v as u,b as r,z as o,a as d}from"./framework.0fccce8d.js";const l=t({props:{size:{type:String,default:"md"},weight:{type:String,default:"normal"},transform:{type:String,default:"normalcase"},overline:{type:Boolean,default:void 0}},setup(e){return{classNames:n(()=>{const s=["subheading"];return e.overline?s.push("subheading--overline"):e.size&&s.push(`subheading--${e.size}`),e.transform&&s.push(`subheading--${e.transform}`),e.weight&&s.push(`subheading--${e.weight}`),s})}}});function f(e,a,s,h,c,g){return u(),r("h6",{"data-testid":"subheading",class:d(e.classNames)},[o(e.$slots,"default")],2)}const m=i(l,[["render",f]]);export{m as p};