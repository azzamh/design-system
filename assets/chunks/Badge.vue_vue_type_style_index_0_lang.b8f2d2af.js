import{i as a,k as n}from"../app.389f7721.js";const o=a({props:{color:{type:String,default:"primary"},variant:{type:String,default:"default"}},setup(e){return{classNames:n(()=>{const t=["badge"];return e.color&&t.push(`badge--${e.color}`),e.variant&&t.push(`badge--${e.variant}`),t})}}});export{o as _};