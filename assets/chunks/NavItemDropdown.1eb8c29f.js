import{D as l}from"./Dropdown.7cfa314c.js";import{u as d}from"./index.800b94f2.js";import{d as r,_ as p,D as m,o as i,c as u,G as c,B as o,r as a,a as f,t as v}from"./framework.6feb5f37.js";const y=r({components:{Dropdown:l},props:{modelValue:{type:Boolean,default:!1},text:{type:String,default:""},icon:{type:Boolean,default:!1},size:{type:String,default:"md"},variant:{type:String,default:"ghost"},noCaret:{type:Boolean,default:!1},placement:{type:String,default:"bottom-end"},menuClass:{type:[String,Array,Object],default:void 0}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(e){return{model:d(e)}}});const _={"data-testid":"nav-item-dropdown",class:"nav__item nav__item--dropdown"};function V(e,t,g,w,D,C){const n=m("Dropdown");return i(),u("li",_,[c(n,{modelValue:e.model,"onUpdate:modelValue":t[0]||(t[0]=s=>e.model=s),text:e.text,icon:e.icon,variant:e.variant,size:e.size,placement:e.placement,"no-caret":e.noCaret,"menu-class":e.menuClass},{"button-content":o(()=>[a(e.$slots,"button-content",{},()=>[f(v(e.text),1)])]),default:o(()=>[a(e.$slots,"default")]),_:3},8,["modelValue","text","icon","variant","size","placement","no-caret","menu-class"])])}const b=p(y,[["render",V]]);export{b as p};