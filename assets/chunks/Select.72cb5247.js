import{D as j}from"./Dropdown.8231e084.js";import{p as q}from"./Dropdown.vue_vue_type_style_index_0_lang.8ba0e7c1.js";import{p as M}from"./DropdownHeader.45481121.js";import{p as N}from"./Input.ea1efb3a.js";import{I as E}from"./20.ff674c0e.js";import{I as P}from"./20.fc3545e2.js";import{p as U}from"./SpinnerRing.932d0309.js";import{r as L,u as R,d as v,q as $,j as W,_ as X,M as r,v as i,C as S,O as p,y,ai as G,z as g,a2 as J,b,L as k,X as h,B,p as z,s as K,a as A,F as D}from"./framework.0fccce8d.js";import{i as H}from"./value.d2e2d3a1.js";import{d as Q,u as Y}from"./adapter.fa7db985.js";import{u as Z}from"./use-loading.d6339770.js";import{t as x}from"./index.9c3046df.js";import{f as ee}from"./index.8df9a8d7.js";function F(e,o){var l;return(l=e.find(n=>H(n.value,o)))!=null?l:{text:"",value:void 0}}const ae=Q({setup({props:e,keyword:o}){const l=Y(e);return L(()=>l.value.filter(d=>d.text.toLowerCase().includes(o.value.toLowerCase())))}}),oe=R({components:{Dropdown:j,DropdownItem:q,DropdownHeader:M,pInput:N,IconArrow:E,IconCheck:P,IconLoading:U},props:{modelValue:{type:[String,Number,Boolean,Array,Object,Date],default:void 0},selected:{type:Object,default:()=>({text:"",value:void 0})},options:{type:Array,default:()=>[]},placeholder:{type:String,default:""},emptyText:{type:String,default:"No Data"},loadingText:{type:String,default:"Loading..."},adapter:{type:Object,default:()=>ae},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},size:{type:String,default:"md"},sectionLabel:{type:String,default:void 0},noCaret:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["change","update:modelValue","update:selected","userInput"],setup(e,{emit:o}){const l=W(),n=v(),d=v(""),s=v(!1),f=Z({elapsed:!1}),_={props:e,keyword:d,isOpen:s,isLoading:f},c=e.adapter.setup(_),u=v(F(c.value,e.modelValue)),w=()=>{!e.disabled&&!e.readonly&&(s.value=!s.value)},I=L(()=>{const a=[];return s.value&&a.push("select--open"),e.disabled&&a.push("select--disabled"),e.readonly&&a.push("select--readonly"),e.error&&a.push("select--error","state--error"),a}),m=L({get(){var a;return s.value?d.value:(a=u.value)==null?void 0:a.text},set(a){a!==m.value&&(d.value=a)}});$(()=>e.modelValue,a=>{u.value=F(c.value,a)});function t(a){u.value=a,o("change",a),o("update:selected",a),o("update:modelValue",a==null?void 0:a.value),s.value&&o("userInput",a)}function C(){!e.disabled&&!e.readonly&&(s.value=!0)}function O(){s.value?d.value="":t()}function T(a){var V;return H(a.value,(V=u.value)==null?void 0:V.value)}return $(s,a=>{a||(d.value="")},{flush:"post"}),ee(()=>{s.value&&n.value&&n.value!==document.activeElement&&n.value.focus()}),x(()=>{var a;(a=l==null?void 0:l.proxy)!=null&&a.$el&&(n.value=l.proxy.$el.querySelector(".select__search"))}),{classNames:I,isOpen:s,isLoading:f,search:m,items:c,toggleOpen:w,select:t,onFocus:C,onClear:O,isSelected:T}}});const te={key:0,"data-testid":"select-no-data",class:"select__empty"},se={class:"select__option"},le={class:"select__option-text"},ne={key:2,"data-testid":"select-loading",class:"select__loading"};function de(e,o,l,n,d,s){const f=r("IconArrow"),_=r("p-input"),c=r("DropdownHeader"),u=r("IconCheck"),w=r("DropdownItem"),I=r("IconLoading"),m=r("Dropdown");return i(),S(m,{modelValue:e.isOpen,"onUpdate:modelValue":o[1]||(o[1]=t=>e.isOpen=t),class:A(["select",e.classNames]),"data-testid":"select","aria-label":"select",disabled:e.disabled},{activator:p(()=>[y(_,{modelValue:e.search,"onUpdate:modelValue":o[0]||(o[0]=t=>e.search=t),"data-testid":"select-search",class:"select__search",size:e.size,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,clearable:e.clearable,onClear:J(e.onClear,["prevent"]),onFocus:e.onFocus},G({_:2},[e.noCaret?void 0:{name:"append",fn:p(()=>[g(e.$slots,"caret",{isOpen:e.isOpen,toggle:e.toggleOpen},()=>[y(f,{class:"select__caret","data-testid":"select-caret-icon",onClick:e.toggleOpen},null,8,["onClick"])])]),key:"0"}]),1032,["modelValue","size","placeholder","disabled","readonly","clearable","onClear","onFocus"])]),default:p(()=>[!e.isLoading&&e.items.length===0?(i(),b("div",te,[g(e.$slots,"empty",{},()=>[k(h(e.emptyText),1)])])):(i(),b(z,{key:1},[e.sectionLabel?(i(),S(c,{key:0,"data-testid":"select-label"},{default:p(()=>[k(h(e.sectionLabel),1)]),_:1})):B("",!0),(i(!0),b(z,null,K(e.items,(t,C)=>(i(),S(w,{key:C,"data-testid":"select-item",class:A({selected:e.isSelected(t)}),disabled:!!t.disabled,onClick:O=>e.select(t)},{default:p(()=>[D("div",se,[D("div",le,[g(e.$slots,"option",{isSelected:e.isSelected(t),item:t},()=>[k(h(t.text),1)])]),y(u,{class:"select__option-checked"})])]),_:2},1032,["class","disabled","onClick"]))),128))],64)),e.isLoading?(i(),b("div",ne,[y(I,{width:"14",height:"14"}),g(e.$slots,"loading",{},()=>[D("span",null,h(e.loadingText),1)])])):B("",!0)]),_:3},8,["modelValue","disabled","class"])}const we=X(oe,[["render",de]]);export{we as p};