import{_ as A}from"./chunks/Dropdown.vue_vue_type_script_setup_true_lang.jD6v5o4a.js";import{_ as I}from"./chunks/Dropdown.vue_vue_type_style_index_0_lang.THjTzNll.js";import{_ as U}from"./chunks/Button.vue_vue_type_script_setup_true_lang.ZHeh2b3E.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.w40geAFS.js";import{_ as O}from"./chunks/DropdownHeader.vue_vue_type_style_index_0_lang.Vv-szGMJ.js";import{_ as H}from"./chunks/Radio.vue_vue_type_script_setup_true_lang.zlLCa938.js";import"./chunks/Radio.vue_vue_type_style_index_0_lang.w40geAFS.js";import{u as N}from"./chunks/adapter.ZsuBfy_9.js";import{u as q}from"./chunks/index.BH_KCAlA.js";import{i as j}from"./chunks/value.Mcqa82Kw.js";import{d as C,r as $,l as T,_ as v,E as r,o as k,f as m,w as t,t as y,b as d,J as p,F as _,G as P,c as g,n as w,a as M,N as z,K as J,V as b,q as c,a7 as D}from"./chunks/framework.95PECLjQ.js";import{u as Y}from"./chunks/index.roaK3dGB.js";import{_ as G}from"./chunks/Badge.vue_vue_type_script_setup_true_lang.Zuwj6hfg.js";import"./chunks/Badge.vue_vue_type_style_index_0_lang.w40geAFS.js";import{_ as K}from"./chunks/Checkbox.vue_vue_type_script_setup_true_lang.RSSwwAx6.js";import"./chunks/Checkbox.vue_vue_type_style_index_0_lang.w40geAFS.js";import{_ as L,i as Q,f as W}from"./chunks/Calendar.vue_vue_type_style_index_0_lang.VtB9IKxd.js";import{d as X}from"./chunks/defu.3rjBFRnm.js";import{s as Z}from"./chunks/startCase.ZBqfzg13.js";import"./chunks/use-focus.oPJP1ZqW.js";import"./chunks/toNumber.jidAZ9H9.js";import"./chunks/isObject.mlSoqgao.js";import"./chunks/isSymbol.K1VvrVGN.js";import"./chunks/isObjectLike.OM1Hublo.js";import"./chunks/floating-ui.dom.Gn4DI--7.js";import"./chunks/20.wQqpaH1h.js";import"./chunks/index.hjpy5ZnQ.js";import"./chunks/SpinnerRinggo.vue_vue_type_script_setup_true_lang.eR8P-bYU.js";import"./chunks/Subheading.vue_vue_type_style_index_0_lang.KX7N7FXP.js";import"./chunks/20.KddXPWZ1.js";import"./chunks/IconCheckbox.I0hesjWI.js";import"./chunks/Card.vue_vue_type_style_index_0_lang.rGXP-LYJ.js";import"./chunks/16.g7F7HU8t.js";import"./chunks/Heading.vue_vue_type_script_setup_true_lang.KGkolaV9.js";import"./chunks/Heading.vue_vue_type_style_index_0_lang.w40geAFS.js";import"./chunks/20.U7se0ofw.js";import"./chunks/20.JojjPElL.js";import"./chunks/baseSlice.dEb6GWcI.js";import"./chunks/isIterateeCall.qEmQpbD1.js";import"./chunks/eq.T-xbWnwO.js";import"./chunks/isArrayLike.mPUXsLGz.js";import"./chunks/toInteger.rPRqmf_I.js";import"./chunks/theme.C61A0BKv.js";import"./chunks/toString.MVWRvL-L.js";import"./chunks/isArray.nknceDKk.js";const x=C({components:{Dropdown:A,DropdownItem:I,DropdownHeader:O,Radio:H},props:{schema:{type:Object,required:!0},options:{type:Array,default:()=>[]},modelValue:{type:[String,Number,Boolean,Array,Object,Date],default:void 0}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(s){const i=N(s),n=$(!1),l=q(s),o=T(()=>i.value.find(e=>j(e.value,l.value)));function E(){n.value=!1}return{model:l,items:i,isOpen:n,selected:o,close:E}}});function ss(s,i,n,l,o,E){const e=r("DropdownHeader"),a=r("Radio"),u=r("DropdownItem"),h=r("Dropdown");return k(),m(h,{modelValue:s.isOpen,"onUpdate:modelValue":i[1]||(i[1]=F=>s.isOpen=F),variant:"input",size:"sm",class:w(["filterbar__select",{"filterbar--active":s.selected!==void 0}]),divider:"",caret:""},{"button-content":t(()=>[d(y(s.selected?s.selected.text:s.schema.label),1)]),default:t(()=>[p(e,null,{default:t(()=>[d(y(s.schema.label),1)]),_:1}),(k(!0),g(_,null,P(s.items,(F,f)=>(k(),m(u,{key:f},{default:t(()=>[p(a,{modelValue:s.model,"onUpdate:modelValue":i[0]||(i[0]=S=>s.model=S),appearance:"option",value:F.value,onClick:s.close},{default:t(()=>[d(y(F.text),1)]),_:2},1032,["modelValue","value","onClick"])]),_:2},1024))),128))]),_:1},8,["modelValue","class"])}const is=v(x,[["render",ss]]),as=C({components:{Button:U},props:{schema:{type:Object,required:!0},modelValue:{type:[String,Number,Boolean,Array,Object,Date],default:!1},value:{type:[String,Number,Boolean,Array,Object,Date],default:!0},uncheckedValue:{type:[String,Number,Boolean,Array,Object,Date],default:!1},checked:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","change"],setup(s){const i=Y(s);function n(){i.value=!i.value}return{model:i,toggle:n}}});function es(s,i,n,l,o,E){const e=r("Button");return k(),m(e,{class:w(["filterbar__item filterbar--pinned",{"filterbar--active":s.model}]),variant:"input",size:"sm",onClick:s.toggle},{default:t(()=>[d(y(s.schema.label),1)]),_:1},8,["class","onClick"])}const ns=v(as,[["render",es]]),ts=C({components:{Badge:G,Dropdown:A,DropdownItem:I,DropdownHeader:O,Checkbox:K},props:{schema:{type:Object,required:!0},options:{type:Array,default:()=>[]},modelValue:{type:Array,default:()=>[]}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(s){const i=N(s),n=$(!1),l=q(s),o=T(()=>i.value.filter(e=>Array.isArray(l.value)&&l.value.some(a=>j(e.value,a))));function E(){n.value=!1}return{model:l,items:i,isOpen:n,selected:o,close:E}}});function ls(s,i,n,l,o,E){const e=r("Badge"),a=r("DropdownHeader"),u=r("Checkbox"),h=r("DropdownItem"),F=r("Dropdown");return k(),m(F,{modelValue:s.isOpen,"onUpdate:modelValue":i[1]||(i[1]=f=>s.isOpen=f),variant:"input",size:"sm",class:w(["filterbar__multiselect",{"filterbar--active":s.selected.length>0}]),divider:"",caret:""},{"button-content":t(()=>[s.selected.length>1?(k(),g(_,{key:0},[d(y(s.schema.label)+" ",1),p(e,{variant:"inverse"},{default:t(()=>[d(y(s.selected.length),1)]),_:1})],64)):s.selected.length===1?(k(),g(_,{key:1},[d(y(s.selected.at(0).text),1)],64)):(k(),g(_,{key:2},[d(y(s.schema.label),1)],64))]),default:t(()=>[p(a,null,{default:t(()=>[d(y(s.schema.label),1)]),_:1}),(k(!0),g(_,null,P(s.items,(f,S)=>(k(),m(h,{key:S},{default:t(()=>[p(u,{modelValue:s.model,"onUpdate:modelValue":i[0]||(i[0]=R=>s.model=R),appearance:"option",value:f.value},{default:t(()=>[d(y(f.text),1)]),_:2},1032,["modelValue","value"])]),_:2},1024))),128))]),_:1},8,["modelValue","class"])}const ps=v(ts,[["render",ls]]),hs=C({components:{Dropdown:A,DropdownHeader:O,Calendar:L},props:{schema:{type:Object,required:!0},modelValue:{type:Date,default:void 0},format:{type:String,default:"dd/MM/yyyy"},max:{type:Date,default:void 0},min:{type:Date,default:void 0},mode:{type:String,default:"date"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(s){const i=$(!1),n=q(s),l=T(()=>Q(n.value)?W(n.value,s.format):"");function o(){i.value=!1}return{model:n,value:l,isOpen:i,close:o}}});function ks(s,i,n,l,o,E){const e=r("DropdownHeader"),a=r("Calendar"),u=r("Dropdown");return k(),m(u,{modelValue:s.isOpen,"onUpdate:modelValue":i[1]||(i[1]=h=>s.isOpen=h),variant:"input",size:"sm",class:w(["filterbar__date",{"filterbar--active":!!s.value}]),caret:""},{"button-content":t(()=>[d(y(s.value?s.value:s.schema.label),1)]),default:t(()=>[p(e,null,{default:t(()=>[d(y(s.schema.label),1)]),_:1}),p(a,{modelValue:s.model,"onUpdate:modelValue":i[0]||(i[0]=h=>s.model=h),min:s.min,max:s.max,mode:s.mode,onChange:s.close},null,8,["modelValue","min","max","mode","onChange"])]),_:1},8,["modelValue","class"])}const rs=v(hs,[["render",ks]]),os=C({components:{Button:U,Dropdown:A,Date:rs,Select:is,Multiselect:ps,Toggle:ns},props:{schema:{type:Array,default:()=>[]},modelValue:{type:Object,default:()=>({})}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(s){const i=q(s),n=T(()=>s.schema.filter(e=>e.pinned!==!1));function l(e){return i.value[e]}function o(e,a){i.value={...i.value,[e]:a}}function E(){i.value=Object.fromEntries(s.schema.map(e=>[e.key,e.default]))}return{model:i,pinnedItems:n,getValue:l,setValue:o,reset:E}}}),ds={class:"filterbar"};function Es(s,i,n,l,o,E){const e=r("Button");return k(),g("div",ds,[(k(!0),g(_,null,P(s.pinnedItems,a=>M(s.$slots,`cell(${a.key})`,{key:a.key},()=>[(k(),m(J(a.type),z({class:"filterbar__item",schema:a,"model-value":s.getValue(a.key)},a,{"onUpdate:modelValue":u=>s.setValue(a.key,u)}),null,16,["schema","model-value","onUpdate:modelValue"]))])),128)),p(e,{size:"sm",variant:"link",color:"info",onClick:s.reset},{default:t(()=>[d(" Reset ")]),_:1},8,["onClick"])])}const B=v(os,[["render",Es]]);function V(s){return s.map(i=>X(i,{label:Z(i.key),pinned:!0}))}const us=b('<h1 id="filterbar" tabindex="-1">Filterbar <a class="header-anchor" href="#filterbar" aria-label="Permalink to &quot;Filterbar&quot;">​</a></h1><blockquote><p>Add filter to your datatable easy-way.</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;">​</a></h3>',4),ys=b(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-filterbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">schema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">schema</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineFilter } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@privyid/persona/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> query</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({})</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> schema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineFilter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;toggle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    key : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;is_active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;date&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    key : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;created_at&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type   : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;select&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    key    : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;status&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    options: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;Draft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;Pending&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;Completed&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="types" tabindex="-1">Types <a class="header-anchor" href="#types" aria-label="Permalink to &quot;Types&quot;">​</a></h2><h3 id="toggle" tabindex="-1">Toggle <a class="header-anchor" href="#toggle" aria-label="Permalink to &quot;Toggle&quot;">​</a></h3>`,3),cs=b(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-filterbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">schema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">schema</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineFilter } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@privyid/persona/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> schema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineFilter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;toggle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    key : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;is_active&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="select" tabindex="-1">Select <a class="header-anchor" href="#select" aria-label="Permalink to &quot;Select&quot;">​</a></h3>`,2),gs=b(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-filterbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">schema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">schema</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineFilter } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@privyid/persona/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> schema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineFilter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type   : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;select&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    key    : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;location&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    options: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;Jakarta&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;Bandung&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;Yogyakarta&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h3 id="multiselect" tabindex="-1">Multiselect <a class="header-anchor" href="#multiselect" aria-label="Permalink to &quot;Multiselect&quot;">​</a></h3>`,2),ms=b(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-filterbar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">schema</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">schema</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">query</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { defineFilter } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@privyid/persona/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> schema</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defineFilter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    type   : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;multiselect&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    key    : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;status&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    options: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;Draft&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;Pending&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      &#39;Completed&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,1),oi=JSON.parse('{"title":"Filterbar · Components","description":"Add filter to your datatable easy-way.","frontmatter":{"title":"Filterbar · Components","description":"Add filter to your datatable easy-way."},"headers":[],"relativePath":"components/filterbar/index.md","filePath":"components/filterbar/index.md"}'),Fs={name:"components/filterbar/index.md"},di=Object.assign(Fs,{setup(s){const i=$({}),n=V([{type:"toggle",key:"is_active"},{type:"date",key:"created_at"},{type:"multiselect",key:"status",options:["Draft","Pending","Completed"]}]),l=V([{type:"toggle",key:"is_active"}]),o=V([{type:"select",key:"location",options:["Jakarta","Bandung","Yogyakarta"]}]),E=V([{type:"multiselect",key:"status",options:["Draft","Pending","Completed"]}]);return(e,a)=>{const u=r("preview");return k(),g("div",null,[us,p(u,null,{default:t(()=>[p(B,{schema:c(n),modelValue:c(i),"onUpdate:modelValue":a[0]||(a[0]=h=>D(i)?i.value=h:null)},null,8,["schema","modelValue"])]),_:1}),ys,p(u,null,{default:t(()=>[p(B,{schema:c(l),modelValue:c(i),"onUpdate:modelValue":a[1]||(a[1]=h=>D(i)?i.value=h:null)},null,8,["schema","modelValue"])]),_:1}),cs,p(u,null,{default:t(()=>[p(B,{schema:c(o),modelValue:c(i),"onUpdate:modelValue":a[2]||(a[2]=h=>D(i)?i.value=h:null)},null,8,["schema","modelValue"])]),_:1}),gs,p(u,null,{default:t(()=>[p(B,{schema:c(E),modelValue:c(i),"onUpdate:modelValue":a[3]||(a[3]=h=>D(i)?i.value=h:null)},null,8,["schema","modelValue"])]),_:1}),ms])}}});export{oi as __pageData,di as default};