import{d as P,a4 as Z,P as ee,l as g,o as s,c as f,a as m,g as C,p as b,O as te,q as r,n as O,G as L,H,f as v,w as p,b as $,t as h,r as A,z as ae,a8 as G,K as x,as as R,aj as le,ai as se,a3 as q,V as ie}from"./framework.kdG7p9fL.js";import{_ as oe}from"./Dropdown.vue_vue_type_script_setup_true_lang.Jgcuyvxl.js";import{_ as ne}from"./Dropdown.vue_vue_type_style_index_0_lang.X8dxwg20.js";import{_ as de}from"./DropdownHeader.vue_vue_type_style_index_0_lang.AlYbSVOx.js";import{_ as re}from"./Input.vue_vue_type_script_setup_true_lang.7lmh34ke.js";import"./Input.vue_vue_type_style_index_0_lang.w40geAFS.js";import{_ as ue}from"./Text.vue_vue_type_style_index_0_lang.o4wGGu9E.js";import{I as ce}from"./index.hjpy5ZnQ.js";import{_ as F}from"./Label.vue_vue_type_script_setup_true_lang.f3E4tPV7.js";import"./Label.vue_vue_type_style_index_0_lang.w40geAFS.js";import{I as pe}from"./20.3HYS_NWI.js";import{I as fe}from"./20.cc_4jLtC.js";import{I as me}from"./20.Bl8nqYm9.js";import{I as ye}from"./IconCheckbox.SVcg8H-e.js";import{_ as ve}from"./SpinnerRing.vue_vue_type_script_setup_true_lang.b7LcBiwQ.js";import{i as B,v as he}from"./value.Mcqa82Kw.js";import{d as be,u as ge}from"./adapter.zL9xveU8.js";import{u as _e}from"./use-loading.HCEokWuw.js";import{f as Se}from"./index.IJQqav0q.js";import{i as ke}from"./isNil.-q_uwI5T.js";import{w as $e}from"./index.n7jXhgcr.js";const Ce={key:0,class:"input__prepend"},Ve=b("input",{class:"input__hidden",type:"text"},null,-1),Ae=["disabled","readonly"],xe={class:"input__form__activator"},Be={key:1,class:"input__append"},ze=P({inheritAttrs:!1,__name:"SelectInput",props:{size:{type:String,default:"md"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},containerClass:{type:[String,Array,Object],default:void 0}},setup(e){const l=e,u=Z(),a=ee(ce,void 0,!1),y=g(()=>{const i=[];return a!=null&&a.size.value?i.push(`input--${a==null?void 0:a.size.value}`):l.size&&i.push(`input--${l.size}`),l.disabled&&i.push("input--disabled"),l.readonly&&i.push("input--readonly"),l.error&&i.push("input--error","state--error"),u.prepend&&i.push("input--has-prepend"),u.append&&i.push("input--has-append"),i});return(i,V)=>(s(),f("div",{class:O(["input",e.containerClass]),"data-testid":"input-container"},[i.$slots.prepend?(s(),f("span",Ce,[m(i.$slots,"prepend")])):C("",!0),Ve,b("div",te({class:["input__form",r(y)],"data-testid":"input",disabled:e.disabled,readonly:e.readonly,tabindex:1},i.$attrs),[b("div",xe,[m(i.$slots,"default")])],16,Ae),i.$slots.append?(s(),f("span",Be,[m(i.$slots,"append")])):C("",!0)],2))}}),Te={class:"select__tags"},Le=P({__name:"SelectTags",props:{items:{type:Array,default:()=>[]},displayLimit:{type:Number,default:2},limitText:{type:String,default:"+{n} Other(s)"}},setup(e){const l=e,u=g(()=>l.items.slice(0,l.displayLimit)),a=g(()=>l.limitText.replaceAll("{n}",String(l.items.length-l.displayLimit)));return(y,i)=>(s(),f("div",Te,[(s(!0),f(L,null,H(r(u),(V,_)=>(s(),v(F,{key:_,"data-testid":"select-tag",variant:"light",size:"xs"},{default:p(()=>[$(h(V.text),1)]),_:2},1024))),128)),e.items.length>e.displayLimit?(s(),v(F,{key:0,"data-testid":"select-tag-others",variant:"light",size:"xs"},{default:p(()=>[$(h(r(a)),1)]),_:1})):C("",!0)]))}});function w(e,l){var u;return(u=e.find(a=>B(a.value,l)))!=null?u:{text:"",value:void 0}}function N(e,l){return Array.isArray(l)?e.filter(u=>he(l,u.value)):[]}const Ie=be({setup({props:e,keyword:l}){const u=ge(e);return g(()=>u.value.filter(y=>y.text.toLowerCase().includes(l.value.toLowerCase())))}}),we={key:1,"data-testid":"select-placeholder"},Ne={class:"input__form__placeholder"},Oe={key:0,"data-testid":"select-no-data",class:"select__empty"},Pe={class:"select__option"},je={class:"select__option-text"},Ee={class:"select__option-checked"},Ue={key:2,"data-testid":"select-loading",class:"select__loading"},dt=P({models:{prop:"modelValue",event:"update:modelValue"},__name:"Select",props:{modelValue:{type:void 0,default:void 0},selected:{type:[Object,Array],default:void 0},options:{type:Array,default:()=>[]},placeholder:{type:String,default:" "},emptyText:{type:String,default:"No Data"},loadingText:{type:String,default:"Loading..."},searchText:{type:String,default:"Search..."},adapter:{type:Object,default:()=>Ie},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},clearLabel:{type:String,default:"Clear"},size:{type:String,default:"md"},sectionLabel:{type:String,default:void 0},noCaret:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},displayLimit:{type:Number,default:void 0},limitText:{type:String,default:void 0},searchable:{type:Boolean,default:!0},menuSize:{type:String,default:void 0},menuClass:{type:[String,Array,Object],default:void 0},divider:{type:Boolean,default:!1},noAnimation:{type:Boolean,default:!1},noCloseAfterSelect:{type:Boolean,default:!1}},emits:["change","update:modelValue","update:selected","userInput"],setup(e,{expose:l,emit:u}){const a=e,y=u,i=A(),V=A(),_=g(()=>{var t;return(t=i.value)==null?void 0:t.input}),j=g(()=>{var t;return(t=V.value)==null?void 0:t.menuBody}),S=A(""),c=A(!1),z=_e({elapsed:!1}),M={props:a,keyword:S,isOpen:c,isLoading:z,menuEl:j},k=a.adapter.setup(M),o=A(a.multiple?N(k.value,a.modelValue):w(k.value,a.modelValue)),I=()=>{!a.disabled&&!a.readonly&&(c.value=!c.value)},K=g(()=>{const t=[];return c.value&&t.push("select--open"),a.disabled&&t.push("select--disabled"),a.readonly&&t.push("select--readonly"),a.multiple&&t.push("select--multiple"),t}),W=g(()=>{var t;return a.multiple?Array.isArray(o.value)&&o.value.length>0:!ke((t=o.value)==null?void 0:t.value)}),E=$e(()=>a.modelValue,t=>{o.value=a.multiple?N(k.value,t):w(k.value,t)});ae(k,t=>{a.modelValue&&t.length>0&&(o.value=a.multiple?N(t,a.modelValue):w(t,a.modelValue))});function U(t){let n;a.multiple?t?Array.isArray(o.value)&&(n=o.value.some(d=>B(d.value,t.value))?o.value.filter(d=>!B(d.value,t.value)):[...o.value,t]):n=[]:n=t,E.pause(),o.value=n,y("change",n),y("update:selected",n),y("update:modelValue",a.multiple?n.map(d=>d.value):n==null?void 0:n.value),c.value&&y("userInput",n),a.noCloseAfterSelect||(c.value=!1),ie(()=>{E.resume()})}function J(){!a.disabled&&!a.readonly&&(c.value=!0)}function Q(){U()}function D(t){return o.value?a.multiple&&Array.isArray(o.value)?o.value.some(n=>B(t.value,n.value)):B(t.value,o.value.value):!1}function X(){var t;(t=_.value)==null||t.focus()}function Y(){S.value=""}return Se(()=>{c.value&&_.value&&_.value!==document.activeElement&&(_.value.select(),_.value.focus())}),l({keyword:S,isOpen:c,isLoading:z,menuEl:j,toggle:I}),(t,n)=>(s(),v(oe,{ref_key:"dropdown",ref:V,modelValue:r(c),"onUpdate:modelValue":n[1]||(n[1]=d=>G(c)?c.value=d:null),class:O(["select",r(K)]),"data-testid":"select","aria-label":"select",disabled:e.disabled,divider:e.divider,"menu-size":e.menuSize,"menu-class":e.menuClass,"no-animation":e.noAnimation,onShow:X,onHide:Y},{activator:p(d=>[m(t.$slots,"activator",le(se(d)),()=>[x(ze,{"data-testid":"select-activator",class:"select__activator",size:e.size,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,error:e.error,onFocus:J},R({default:p(()=>[r(W)?m(t.$slots,"selected",{key:0,item:r(o),multiple:e.multiple},()=>{var T;return[a.multiple&&Array.isArray(r(o))?(s(),v(Le,{key:0,items:r(o),"display-limit":e.displayLimit,"limit-text":e.limitText},null,8,["items","display-limit","limit-text"])):(s(),f(L,{key:1},[$(h((T=r(o))==null?void 0:T.text),1)],64))]}):(s(),f("div",we,[m(t.$slots,"placeholder",{},()=>[b("span",Ne,h(e.placeholder),1)])]))]),_:2},[e.noCaret?void 0:{name:"append",fn:p(()=>[m(t.$slots,"caret",{isOpen:r(c),toggle:I},()=>[x(pe,{class:"select__caret","data-testid":"select-caret-icon",onClick:I})])]),key:"0"}]),1032,["size","placeholder","disabled","readonly","error"])])]),prepend:p(()=>[e.searchable?(s(),v(re,{key:0,ref_key:"input",ref:i,modelValue:r(S),"onUpdate:modelValue":n[0]||(n[0]=d=>G(S)?S.value=d:null),"data-testid":"select-search",class:"select__search no--error",placeholder:e.searchText,clearable:!0},{append:p(()=>[x(me,{class:"select__search-icon"})]),_:1},8,["modelValue","placeholder"])):C("",!0)]),default:p(()=>[!r(z)&&r(k).length===0?(s(),f("div",Oe,[m(t.$slots,"empty",{keyword:r(S)},()=>[$(h(e.emptyText),1)])])):(s(),f(L,{key:1},[e.sectionLabel||e.clearable?(s(),v(de,{key:0,"data-testid":"select-label"},R({default:p(()=>[$(h(e.sectionLabel),1)]),_:2},[e.clearable?{name:"action",fn:p(()=>[x(ue,{"data-testid":"select-clear",variant:"caption2",href:"javascript:void",onClick:q(Q,["prevent"])},{default:p(()=>[$(h(e.clearLabel),1)]),_:1})]),key:"0"}:void 0]),1024)):C("",!0),(s(!0),f(L,null,H(r(k),(d,T)=>(s(),v(ne,{key:T,"data-testid":"select-item",class:O({selected:D(d)}),disabled:!!d.disabled,onClick:q(De=>U(d),["prevent"])},{default:p(()=>[b("div",Pe,[b("div",je,[m(t.$slots,"option",{isSelected:D(d),item:d},()=>[$(h(d.text),1)])]),b("div",Ee,[e.multiple?(s(),v(ye,{key:0})):(s(),v(fe,{key:1}))])])]),_:2},1032,["class","disabled","onClick"]))),128))],64)),r(z)?(s(),f("div",Ue,[x(ve),m(t.$slots,"loading",{},()=>[b("span",null,h(e.loadingText),1)])])):C("",!0)]),_:3},8,["modelValue","disabled","divider","menu-size","menu-class","class","no-animation"]))}});export{dt as _};