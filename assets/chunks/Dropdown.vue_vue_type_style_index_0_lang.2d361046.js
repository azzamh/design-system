import{m as r,V as i,c as d,_ as c,x as _,A as p,B as u,q as f,y as m,z as y,v,R as h}from"./framework.f14560cd.js";const D=Symbol("DROPDOWN_CONTEXT"),C=r({props:{text:{type:String,default:""},href:{type:String,default:void 0},active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:s}){const a=i(D,void 0,!0);function o(t){s("click",t),(a!=null&&a.close&&!t.defaultPrevented||t.defaultPrevented&&e.href)&&a.close()}const n=d(()=>{const t=[""];return e.active&&t.push("dropdown__item--active"),t}),l=d(()=>{let t="button";return e.href&&(t="a"),t});return{handleOnClick:o,classNames:n,tagName:l}}});function g(e,s,a,o,n,l){return _(),p(h(e.tagName),{"data-testid":"dropdown-item",class:v(["dropdown__item",e.classNames]),href:e.href,disabled:e.disabled,onClick:e.handleOnClick},{default:u(()=>[f(e.$slots,"default",{},()=>[m(y(e.text),1)])]),_:3},8,["class","href","disabled","onClick"])}const k=c(C,[["render",g]]);export{D,k as p};