import{u as v,d as E,r as q,_ as h,M as F,v as r,C as A,O as p,L as y,X as d,y as D,b as C,s as P,p as g,a as $,z,V as N,D as R,R as b,N as m,a6 as _}from"./chunks/framework.0fccce8d.js";import{D as O}from"./chunks/Dropdown.8231e084.js";import{p as S}from"./chunks/Button.5459a2e3.js";import{p as U}from"./chunks/DropdownHeader.45481121.js";import{p as T}from"./chunks/Radio.73b081c3.js";import{u as j}from"./chunks/adapter.fa7db985.js";import{u as w}from"./chunks/index.aa62d5f4.js";import{i as H}from"./chunks/value.d2e2d3a1.js";import{u as J}from"./chunks/index.530a4e9c.js";import{B as I}from"./chunks/Badge.b79d3f66.js";import{p as L}from"./chunks/Checkbox.cc8058b2.js";import{C as Y,i as X,f as G}from"./chunks/Calendar.20ad3e54.js";import{d as K}from"./chunks/defu.573334b8.js";import{s as Q}from"./chunks/startCase.3a8f4cd6.js";import"./chunks/Dropdown.vue_vue_type_style_index_0_lang.8ba0e7c1.js";import"./chunks/index.8df9a8d7.js";import"./chunks/index.9c3046df.js";import"./chunks/use-focus.b9bc053c.js";import"./chunks/baseClamp.947838b9.js";import"./chunks/toNumber.09abc7f0.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/floating-ui.dom.d66a0422.js";import"./chunks/16.9c68e410.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.b8d21c3a.js";import"./chunks/index.a3ecab28.js";import"./chunks/Subheading.c17e43d6.js";import"./chunks/Radio.vue_vue_type_style_index_0_lang.57c58ea2.js";import"./chunks/20.9feea291.js";import"./chunks/Badge.vue_vue_type_style_index_0_lang.10213875.js";import"./chunks/Checkbox.vue_vue_type_style_index_0_lang.b3f47ce9.js";import"./chunks/Card.96580e0b.js";import"./chunks/16.5c872e02.js";import"./chunks/Heading.161a587e.js";import"./chunks/Heading.vue_vue_type_style_index_0_lang.6df81cbe.js";import"./chunks/20.25286ced.js";import"./chunks/20.67ad1103.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/context.db832879.js";import"./chunks/baseSlice.cf92e063.js";import"./chunks/isIterateeCall.05518614.js";import"./chunks/eq.83a0dc05.js";import"./chunks/isArrayLike.740cb4e2.js";import"./chunks/toInteger.cccd26ae.js";import"./chunks/toString.314d06e3.js";import"./chunks/isArray.513c67aa.js";const W=v({components:{Dropdown:O,DropdownHeader:U,Radio:T},props:{schema:{type:Object,required:!0},options:{type:Array,default:()=>[]},modelValue:{type:[String,Number,Boolean,Array,Object,Date],default:void 0}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(s){const a=j(s),e=E(!1),t=w(s),c=q(()=>a.value.find(l=>H(l.value,t.value)));function i(){e.value=!1}return{model:t,items:a,isOpen:e,selected:c,close:i}}});function Z(s,a,e,t,c,i){const l=F("DropdownHeader"),n=F("Radio"),u=F("Dropdown");return r(),A(u,{modelValue:s.isOpen,"onUpdate:modelValue":a[1]||(a[1]=o=>s.isOpen=o),variant:"input",size:"sm",class:$(["filterbar__select",{"filterbar--active":s.selected!==void 0}]),divider:"",caret:""},{"button-content":p(()=>[y(d(s.selected?s.selected.text:s.schema.label),1)]),default:p(()=>[D(l,null,{default:p(()=>[y(d(s.schema.label),1)]),_:1}),(r(!0),C(g,null,P(s.items,(o,f)=>(r(),A(n,{key:f,modelValue:s.model,"onUpdate:modelValue":a[0]||(a[0]=B=>s.model=B),appearance:"option",value:o.value,onClick:s.close},{default:p(()=>[y(d(o.text),1)]),_:2},1032,["modelValue","value","onClick"]))),128))]),_:1},8,["modelValue","class"])}const x=h(W,[["render",Z]]),ss=v({components:{Button:S},props:{schema:{type:Object,required:!0},modelValue:{type:[String,Number,Boolean,Array,Object,Date],default:!1},value:{type:[String,Number,Boolean,Array,Object,Date],default:!0},uncheckedValue:{type:[String,Number,Boolean,Array,Object,Date],default:!1},checked:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","change"],setup(s){const a=J(s);function e(){a.value=!a.value}return{model:a,toggle:e}}});function as(s,a,e,t,c,i){const l=F("Button");return r(),A(l,{class:$(["filterbar__item filterbar--pinned",{"filterbar--active":s.model}]),variant:"input",size:"sm",onClick:s.toggle},{default:p(()=>[y(d(s.schema.label),1)]),_:1},8,["class","onClick"])}const ns=h(ss,[["render",as]]),ls=v({components:{Badge:I,Dropdown:O,DropdownHeader:U,Checkbox:L},props:{schema:{type:Object,required:!0},options:{type:Array,default:()=>[]},modelValue:{type:Array,default:()=>[]}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(s){const a=j(s),e=E(!1),t=w(s),c=q(()=>a.value.filter(l=>Array.isArray(t.value)&&t.value.some(n=>H(l.value,n))));function i(){e.value=!1}return{model:t,items:a,isOpen:e,selected:c,close:i}}});function es(s,a,e,t,c,i){const l=F("Badge"),n=F("DropdownHeader"),u=F("Checkbox"),o=F("Dropdown");return r(),A(o,{modelValue:s.isOpen,"onUpdate:modelValue":a[1]||(a[1]=f=>s.isOpen=f),variant:"input",size:"sm",class:$(["filterbar__multiselect",{"filterbar--active":s.selected.length>0}]),divider:"",caret:""},{"button-content":p(()=>[s.selected.length>1?(r(),C(g,{key:0},[y(d(s.schema.label)+" ",1),D(l,{variant:"inverse"},{default:p(()=>[y(d(s.selected.length),1)]),_:1})],64)):s.selected.length===1?(r(),C(g,{key:1},[y(d(s.selected.at(0).text),1)],64)):(r(),C(g,{key:2},[y(d(s.schema.label),1)],64))]),default:p(()=>[D(n,null,{default:p(()=>[y(d(s.schema.label),1)]),_:1}),(r(!0),C(g,null,P(s.items,(f,B)=>(r(),A(u,{key:B,modelValue:s.model,"onUpdate:modelValue":a[0]||(a[0]=M=>s.model=M),appearance:"option",value:f.value},{default:p(()=>[y(d(f.text),1)]),_:2},1032,["modelValue","value"]))),128))]),_:1},8,["modelValue","class"])}const os=h(ls,[["render",es]]),ps=v({components:{Dropdown:O,DropdownHeader:U,Calendar:Y},props:{schema:{type:Object,required:!0},modelValue:{type:Date,default:void 0},format:{type:String,default:"dd/MM/yyyy"},max:{type:Date,default:void 0},min:{type:Date,default:void 0},mode:{type:String,default:"date"}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(s){const a=E(!1),e=w(s),t=q(()=>X(e.value)?G(e.value,s.format):"");function c(){a.value=!1}return{model:e,value:t,isOpen:a,close:c}}});function ts(s,a,e,t,c,i){const l=F("DropdownHeader"),n=F("Calendar"),u=F("Dropdown");return r(),A(u,{modelValue:s.isOpen,"onUpdate:modelValue":a[1]||(a[1]=o=>s.isOpen=o),variant:"input",size:"sm",class:$(["filterbar__date",{"filterbar--active":!!s.value}]),caret:""},{"button-content":p(()=>[y(d(s.value?s.value:s.schema.label),1)]),default:p(()=>[D(l,null,{default:p(()=>[y(d(s.schema.label),1)]),_:1}),D(n,{modelValue:s.model,"onUpdate:modelValue":a[0]||(a[0]=o=>s.model=o),min:s.min,max:s.max,mode:s.mode,onChange:s.close},null,8,["modelValue","min","max","mode","onChange"])]),_:1},8,["modelValue","class"])}const rs=h(ps,[["render",ts]]),cs=v({components:{Button:S,Dropdown:O,Date:rs,Select:x,Multiselect:os,Toggle:ns},props:{schema:{type:Array,default:()=>[]},modelValue:{type:Object,default:()=>({})}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue"],setup(s){const a=w(s),e=q(()=>s.schema.filter(l=>l.pinned!==!1));function t(l){return a.value[l]}function c(l,n){a.value={...a.value,[l]:n}}function i(){a.value=Object.fromEntries(s.schema.map(l=>[l.key,l.default]))}return{model:a,pinnedItems:e,getValue:t,setValue:c,reset:i}}});const Ds={class:"filterbar"};function ys(s,a,e,t,c,i){const l=F("Button");return r(),C("div",Ds,[(r(!0),C(g,null,P(s.pinnedItems,n=>z(s.$slots,`cell(${n.key})`,{key:n.key},()=>[(r(),A(R(n.type),N({class:"filterbar__item",schema:n,"model-value":s.getValue(n.key)},n,{"onUpdate:modelValue":u=>s.setValue(n.key,u)}),null,16,["schema","model-value","onUpdate:modelValue"]))])),128)),D(l,{size:"sm",variant:"link",color:"info",onClick:s.reset},{default:p(()=>[y(" Reset ")]),_:1},8,["onClick"])])}const V=h(cs,[["render",ys]]);function k(s){return s.map(a=>K(a,{label:Q(a.key),pinned:!0}))}const Fs=b('<h1 id="filterbar" tabindex="-1">Filterbar <a class="header-anchor" href="#filterbar" aria-label="Permalink to &quot;Filterbar&quot;">​</a></h1><blockquote><p>Add filter to your datatable easy-way.</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;">​</a></h3>',4),is=b(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-filterbar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:schema</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">schema</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">query</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineFilter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@privyid/persona/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> query  </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> schema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineFilter</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">toggle</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">key </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">is_active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">key </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">created_at</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type   </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">select</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">key    </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Draft</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Pending</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Completed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="types" tabindex="-1">Types <a class="header-anchor" href="#types" aria-label="Permalink to &quot;Types&quot;">​</a></h2><h3 id="toggle" tabindex="-1">Toggle <a class="header-anchor" href="#toggle" aria-label="Permalink to &quot;Toggle&quot;">​</a></h3>`,3),us=b(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-filterbar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:schema</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">schema</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">query</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineFilter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@privyid/persona/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> schema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineFilter</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">toggle</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">key </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">is_active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="select" tabindex="-1">Select <a class="header-anchor" href="#select" aria-label="Permalink to &quot;Select&quot;">​</a></h3>`,2),ds=b(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-filterbar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:schema</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">schema</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">query</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineFilter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@privyid/persona/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> schema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineFilter</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type   </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">select</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">key    </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">location</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Jakarta</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Bandung</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Yogyakarta</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="multiselect" tabindex="-1">Multiselect <a class="header-anchor" href="#multiselect" aria-label="Permalink to &quot;Multiselect&quot;">​</a></h3>`,2),ms=b(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-filterbar</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:schema</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">schema</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">query</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">defineFilter</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@privyid/persona/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> schema </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">defineFilter</span><span style="color:#A6ACCD;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">type   </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">multiselect</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">key    </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Draft</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Pending</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Completed</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,1),Da=JSON.parse('{"title":"Filterbar · Components","description":"Add filter to your datatable easy-way.","frontmatter":{"title":"Filterbar · Components","description":"Add filter to your datatable easy-way."},"headers":[],"relativePath":"components/filterbar/index.md","filePath":"components/filterbar/index.md"}'),Cs={name:"components/filterbar/index.md"},ya=Object.assign(Cs,{setup(s){const a=E({}),e=k([{type:"toggle",key:"is_active"},{type:"date",key:"created_at"},{type:"multiselect",key:"status",options:["Draft","Pending","Completed"]}]),t=k([{type:"toggle",key:"is_active"}]),c=k([{type:"select",key:"location",options:["Jakarta","Bandung","Yogyakarta"]}]),i=k([{type:"multiselect",key:"status",options:["Draft","Pending","Completed"]}]);return(l,n)=>{const u=F("preview");return r(),C("div",null,[Fs,D(u,null,{default:p(()=>[D(V,{schema:m(e),modelValue:m(a),"onUpdate:modelValue":n[0]||(n[0]=o=>_(a)?a.value=o:null)},null,8,["schema","modelValue"])]),_:1}),is,D(u,null,{default:p(()=>[D(V,{schema:m(t),modelValue:m(a),"onUpdate:modelValue":n[1]||(n[1]=o=>_(a)?a.value=o:null)},null,8,["schema","modelValue"])]),_:1}),us,D(u,null,{default:p(()=>[D(V,{schema:m(c),modelValue:m(a),"onUpdate:modelValue":n[2]||(n[2]=o=>_(a)?a.value=o:null)},null,8,["schema","modelValue"])]),_:1}),ds,D(u,null,{default:p(()=>[D(V,{schema:m(i),modelValue:m(a),"onUpdate:modelValue":n[3]||(n[3]=o=>_(a)?a.value=o:null)},null,8,["schema","modelValue"])]),_:1}),ms])}}});export{Da as __pageData,ya as default};