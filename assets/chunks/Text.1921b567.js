import{u as n,r as s,_ as f,v as i,C as u,O as l,z as h,a as o,D as c}from"./framework.0fccce8d.js";const d=n({props:{variant:{type:String,default:"body"},href:{type:String,default:void 0},weight:{type:String,default:"normal"},transform:{type:String,default:"normalcase"}},setup(e){const a=s(()=>e.href?"a":"span"),r=s(()=>{const t=[""];return e.variant&&t.push(`freetext--${e.variant}`),e.weight&&t.push(`freetext--${e.weight}`),e.transform&&t.push(`freetext--${e.transform}`),e.href&&t.push("freetext--hyperlink"),e.href&&(e.variant==="caption"||e.variant==="caption2")&&t.push("freetext--medium"),t});return{hyperlink:a,classNames:r}}});function _(e,a,r,t,m,v){return i(),u(c(e.hyperlink),{"data-testid":"freetext",class:o(["freetext",e.classNames]),href:e.href},{default:l(()=>[h(e.$slots,"default")]),_:3},8,["class","href"])}const x=f(d,[["render",_]]);export{x as p};