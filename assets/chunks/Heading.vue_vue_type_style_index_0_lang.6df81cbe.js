import{u as s,r as n}from"./framework.0fccce8d.js";const l=s({props:{element:{type:String,default:"h3"},weight:{type:String,default:"normal"},transform:{type:String,default:"normalcase"}},setup(e){const a=n(()=>e.element),r=n(()=>{const t=[`${e.element}`];return e.transform&&t.push(`heading--${e.transform}`),e.weight&&t.push(`heading--${e.weight}`),t});return{elementNames:a,classNames:r}}});export{l as _};