import{_ as B}from"./Button.vue_vue_type_script_setup_true_lang.40129c4b.js";import"./Button.vue_vue_type_style_index_0_lang.4ed993c7.js";import{_ as D}from"./Select.vue_vue_type_style_index_0_lang.0cb84225.js";import{I as O}from"./20.973f6703.js";import{I as M}from"./20.9122083b.js";import{u as q}from"./index.66a2f4bb.js";import{a4 as N,g as f,d as T,x as A,_ as E,C as S,o as s,c,a as m,t as g,H as R,r as b,b as y,w as k,e as P,F as L,D as j,n as F}from"./framework.ea844ac6.js";const C="...",V=5;function w(e,a){const u=a-e+1;return Array.from({length:u},(t,d)=>d+e)}function G(e){const a=Math.floor((e-V)/2),t=2*a+V-2;return{totalSiblings:a,totalPageDisplay:t}}function J(e,a,u){const{totalSiblings:t,totalPageDisplay:d}=G(u),i=Math.max(e-t,1),r=Math.min(e+t,a),l=i>2,v=r<=a-2;if(l&&!v){const p=w(a-d+1,a);return[1,C,...p]}if(!l&&v)return[...w(1,d),C,a];if(l&&v){const p=w(i,r);return[1,C,...p,C,a]}}function U(e){const a=N(e,"modelValue"),u=N(e,"perPage"),t=N(e,"total"),d=N(e,"displayLimit"),i=f(()=>t.value<=0?0:Math.ceil(t.value/u.value)),r=f(()=>{const o=Math.max((a.value-1)*u.value+1,0),h=Math.min(a.value*u.value,t.value);return[o,h]}),l=f(()=>i.value===0||d.value<V?[]:i.value===1?[1]:d.value>=i.value?w(1,i.value):J(a.value,i.value,d.value)),v=f(()=>a.value!==i.value),p=f(()=>a.value!==1);return{pageItems:l,rowRange:r,totalPageCount:i,canNext:v,canPrev:p}}const _=T({components:{IconPrev:O,Button:B,IconNext:M,Select:D},props:{modelValue:{type:Number,default:1},quickJump:{type:Boolean,default:!1},showCounter:{type:Boolean,default:!1},showPerPage:{type:Boolean,default:!1},showDetail:{type:Boolean,default:!1},navigationText:{type:Boolean,default:!1},navigationOnly:{type:Boolean,default:!1},variant:{type:String,default:"short"},perPage:{type:Number,default:10},perPageOptions:{type:Array,default:()=>[10,20,30]},total:{type:Number,default:0},displayLimit:{type:Number,default:10},pageLabel:{type:String,default:"Page"},prevNavLabel:{type:String,default:"Previous"},nextNavLabel:{type:String,default:"Next"},firstNavLabel:{type:String,default:"First"},lastNavLabel:{type:String,default:"Last"},showRowsLabel:{type:String,default:"Show rows"},selectSize:{type:String,default:"md"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","update:perPage","change"],setup(e,{emit:a}){const u=f(()=>{const n=["pagination"];return e.navigationOnly&&n.push("pagination--navonly"),n}),t=q(e),{pageItems:d,rowRange:i,totalPageCount:r,canNext:l,canPrev:v}=U(e),p=f(()=>w(1,r.value).map(n=>({text:String(n),value:n}))),o=f(()=>e.perPageOptions.map(n=>({text:String(n),value:n}))),h=f({get(){return e.perPage},set(n){a("update:perPage",n)}});A(r,n=>{t.value>n&&(t.value=n)});function $(){t.value=Math.min(t.value+1,r.value),a("change",t.value)}function z(){t.value=Math.max(t.value-1,1),a("change",t.value)}function I(n){typeof n!="string"&&t.value!==n&&(t.value=n,a("change",n))}return{model:t,classNames:u,pageOptions:p,rowPerPageOptions:o,pageItems:d,rowRange:i,totalPageCount:r,rowPerPage:h,canNext:l,canPrev:v,selectPage:I,next:$,prev:z}}});const H={key:0,class:"pagination__quickjump","data-testid":"pagination-quickjump"},K={key:1,class:"pagination__items"},Q={key:2,class:"pagination__count","data-testid":"pagination-count"},W={key:3,class:"pagination__options","data-testid":"pagination-option"};function X(e,a,u,t,d,i){const r=S("Select"),l=S("Button"),v=S("IconPrev"),p=S("IconNext");return s(),c("div",{"data-testid":"pagination",class:F(e.classNames)},[e.quickJump?(s(),c("div",H,[m(g(e.pageLabel)+" ",1),R(r,{modelValue:e.model,"onUpdate:modelValue":a[0]||(a[0]=o=>e.model=o),searchable:!1,size:e.selectSize,"data-testid":"pagination-select",options:e.pageOptions,onChange:a[1]||(a[1]=({value:o})=>e.selectPage(o))},null,8,["modelValue","size","options"]),b(e.$slots,"quick-jump-count",{total:e.totalPageCount},()=>[m(" of "+g(e.totalPageCount),1)])])):(s(),c("nav",K,[e.variant==="far"?(s(),y(l,{key:0,"data-testid":"pagination-nav-first",variant:"solid",size:"sm",disabled:!e.canPrev,class:"pagination__items__nav-first",icon:"",onClick:a[2]||(a[2]=o=>e.selectPage(1))},{default:k(()=>[b(e.$slots,"first-navigation",{},()=>[m(g(e.firstNavLabel),1)])]),_:3},8,["disabled"])):P("",!0),e.variant==="short"||e.variant==="far"?(s(),y(l,{key:1,"data-testid":"pagination-nav-prev",variant:"solid",size:"sm",disabled:!e.canPrev,class:"pagination__items__nav-prev",icon:"",onClick:e.prev},{default:k(()=>[b(e.$slots,"prev-navigation",{},()=>[e.navigationText?(s(),c(L,{key:0},[m(g(e.prevNavLabel),1)],64)):(s(),y(v,{key:1}))])]),_:3},8,["disabled","onClick"])):P("",!0),e.navigationOnly?P("",!0):(s(!0),c(L,{key:2},j(e.pageItems,(o,h)=>(s(),y(l,{key:h,"data-testid":"pagination-item",variant:"solid",size:"sm",icon:"",readonly:typeof o=="string",active:o===e.model,onClick:$=>e.selectPage(o)},{default:k(()=>[m(g(o),1)]),_:2},1032,["readonly","active","onClick"]))),128)),e.variant==="short"||e.variant==="far"?(s(),y(l,{key:3,"data-testid":"pagination-nav-next",variant:"solid",size:"sm",disabled:!e.canNext,class:"pagination__items__nav-next",icon:"",onClick:e.next},{default:k(()=>[b(e.$slots,"next-navigation",{},()=>[e.navigationText?(s(),c(L,{key:0},[m(g(e.nextNavLabel),1)],64)):(s(),y(p,{key:1}))])]),_:3},8,["disabled","onClick"])):P("",!0),e.variant==="far"?(s(),y(l,{key:4,"data-testid":"pagination-nav-last",variant:"solid",size:"sm",disabled:!e.canNext,class:"pagination__items__nav-last",icon:"",onClick:a[3]||(a[3]=o=>e.selectPage(e.totalPageCount))},{default:k(()=>[b(e.$slots,"last-navigation",{},()=>[m(g(e.lastNavLabel),1)])]),_:3},8,["disabled"])):P("",!0)])),e.showCounter||e.showDetail?(s(),c("div",Q,[b(e.$slots,"pagination-count",{page:e.modelValue,range:e.rowRange,totalPage:e.totalPageCount,total:e.total},()=>[m(g(e.rowRange[0])+" - "+g(e.rowRange[1])+" of "+g(e.total),1)])])):P("",!0),e.showPerPage||e.showDetail?(s(),c("div",W,[m(g(e.showRowsLabel)+" ",1),R(r,{modelValue:e.rowPerPage,"onUpdate:modelValue":a[4]||(a[4]=o=>e.rowPerPage=o),searchable:!1,size:e.selectSize,options:e.rowPerPageOptions},null,8,["modelValue","size","options"])])):P("",!0)],2)}const oe=E(_,[["render",X]]);export{oe as p};