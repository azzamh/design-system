import{d as q,r as b,t as B,l as T,o as u,c as f,G as I,H as V,g as N,O as w,a1 as C,a4 as m,p as k,n as z,K as t,w as d,m as g,f as R,a9 as p,F as K,aa as O}from"./chunks/framework.BKe39h19.js";import{_ as U}from"./chunks/Input.vue_vue_type_script_setup_true_lang.CGsWBuqj.js";/* empty css                                                     */import{u as G}from"./chunks/use-focus.BMEofKAE.js";import{r as L,i as $}from"./chunks/accept.6g-OpsWF.js";import{c as j,s as M}from"./chunks/index.CyBTFB5O.js";import"./chunks/index.BgZLTpqE.js";import"./chunks/20.DXvKSiys.js";import"./chunks/index.DvWHfs5K.js";import"./chunks/toNumber.Dcxq_36h.js";import"./chunks/isObject.C3e4t58V.js";import"./chunks/isSymbol.BOom9x27.js";import"./chunks/baseGetTag.Cu32HCTk.js";import"./chunks/isObjectLike.nLWjQ9zq.js";function _(l,h){return Array.from({length:h},(a,r)=>{var e;return(e=l==null?void 0:l[r])!=null?e:""})}const n=q({inheritAttrs:!1,__name:"InputPin",props:{modelValue:{type:String,default:void 0},size:{type:String,default:"md"},length:{type:[Number,String],default:5},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},accept:{type:String,default:void 0}},emits:["update:modelValue","change"],setup(l,{emit:h}){const a=l,r=h,e=b(),o=j(B(a,"length")),E=b(_(a.modelValue,o.value)),x=T(()=>{const s=[];return a.disabled&&s.push("input-pin--disabled"),a.readonly&&s.push("input-pin--readonly"),a.error&&s.push("input-pin--error","state--error"),s}),{next:v,prev:A}=G(e,!1),S=T({get(){return _(a.modelValue,o.value)},set(s){const i=s.map(c=>c||" ").join("").trimEnd();r("change",i),r("update:modelValue",i)}});M(E,S,{deep:!0,immediate:!1});function F(s){return E.value.at(s)}function D(s,i){i.inputType==="insertFromPaste"?E.value=_(L(a.accept,i.data),o.value):i.inputType!=="insertLineBreak"&&(!i.data||$(a.accept,i.data))&&(E.value[s]=i.data,e.value&&(i.inputType==="deleteContentBackward"&&A(),i.inputType==="insertText"&&v()))}function P(s){if(!a.readonly&&!a.disabled){const i=s.target;i.value&&[...s.key].length===1&&!s.ctrlKey&&!s.metaKey?(s.preventDefault(),i.dispatchEvent(new InputEvent("beforeinput",{inputType:"insertText",data:s.key}))):s.key==="Backspace"&&(s.preventDefault(),i.dispatchEvent(new InputEvent("beforeinput",{inputType:"deleteContentBackward"})))}}return(s,i)=>(u(),f("div",{ref_key:"root",ref:e,"data-testid":"input-pin",class:z(["input-pin",k(x)])},[(u(!0),f(I,null,V(k(o),c=>(u(),N(U,w({key:c,maxlength:"1",ref_for:!0},s.$attrs,{"model-value":F(c-1),size:l.size,clearable:!1,readonly:l.readonly,disabled:l.disabled,error:l.error,onKeydown:[i[0]||(i[0]=y=>P(y)),C(m(k(A),["stop","prevent"]),["left"]),C(m(k(v),["stop","prevent"]),["right"])],onBeforeinput:m(y=>D(c-1,y),["prevent"])}),null,16,["model-value","size","readonly","disabled","error","onBeforeinput","onKeydown"]))),128))],2))}}),Y=p('<h1 id="input-pin" tabindex="-1">Input Pin <a class="header-anchor" href="#input-pin" aria-label="Permalink to &quot;Input Pin&quot;">​</a></h1><blockquote><p>One at time input form.</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;">​</a></h3>',4),H=p(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-pin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="number-of-input" tabindex="-1">Number of Input <a class="header-anchor" href="#number-of-input" aria-label="Permalink to &quot;Number of Input&quot;">​</a></h2><p>You can set how many input digit do you want with prop <code>length</code>, default is <code>5</code>.</p>`,3),J=p(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-pin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;3&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="sizing" tabindex="-1">Sizing <a class="header-anchor" href="#sizing" aria-label="Permalink to &quot;Sizing&quot;">​</a></h2><p>Input has 4 variants size: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, default is <code>md</code>.</p>`,3),W=p(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-pin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;xs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-pin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;sm&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-pin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;md&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-pin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="disabled-state" tabindex="-1">Disabled State <a class="header-anchor" href="#disabled-state" aria-label="Permalink to &quot;Disabled State&quot;">​</a></h2>`,2),Q=p(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-pin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> disabled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="readonly-state" tabindex="-1">Readonly State <a class="header-anchor" href="#readonly-state" aria-label="Permalink to &quot;Readonly State&quot;">​</a></h2>`,2),X=p(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-pin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> readonly</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="error-state" tabindex="-1">Error State <a class="header-anchor" href="#error-state" aria-label="Permalink to &quot;Error State&quot;">​</a></h2>`,2),Z=p(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-pin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="accept-character" tabindex="-1">Accept Character <a class="header-anchor" href="#accept-character" aria-label="Permalink to &quot;Accept Character&quot;">​</a></h2><p>You can filter what characters are allowed to be input using the prop <code>accept</code>. The value can be RegExp, or using available preset.</p>`,3),ss=p(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-pin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> accept</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;numeric&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>👉 See <a href="./../input/#available-preset">Available Preset</a> for more information</p><h2 id="binding-v-model" tabindex="-1">Binding v-model <a class="header-anchor" href="#binding-v-model" aria-label="Permalink to &quot;Binding v-model&quot;">​</a></h2><p>Like other input, input value can be binding with <code>v-model</code>.</p>`,4),ts=g("p",null,[g("strong",null,"result:")],-1),is={class:"truncate whitespace-pre"},es=p(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p-input-pin</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>length</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>5</code></td><td>Number of input</td></tr><tr><td><code>size</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>md</code></td><td>Input size variant, valid value: <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code></td></tr><tr><td><code>disabled</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Disabled state</td></tr><tr><td><code>readonly</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Readonly state</td></tr><tr><td><code>error</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Error state</td></tr><tr><td><code>accept</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Whitelist character can be inputted</td></tr><tr><td><code>modelValue</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>v-model value</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td colspan="2" class="text-center">There no slots here</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td><code>change</code></td><td><code>String</code></td><td>Event when value changed</td></tr></tbody></table><h2 id="see-also" tabindex="-1">See Also <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;See Also&quot;">​</a></h2><ul><li><a href="/design-system/components/form-group/">Form Group</a></li><li><a href="/design-system/components/input-group/">Input Group</a></li></ul>`,10),_s=JSON.parse('{"title":"Input Pin · Components","description":"One at time input form.","frontmatter":{"title":"Input Pin · Components","description":"One at time input form."},"headers":[],"relativePath":"components/input-pin/index.md","filePath":"components/input-pin/index.md"}'),as={name:"components/input-pin/index.md"},bs=Object.assign(as,{setup(l){const h=b("");return(a,r)=>{const e=K("preview");return u(),f("div",null,[Y,t(e,null,{default:d(()=>[t(n)]),_:1}),H,t(e,null,{default:d(()=>[t(n,{length:"3"})]),_:1}),J,t(e,{class:"flex-col space-y-3"},{default:d(()=>[t(n,{size:"xs"}),t(n,{size:"sm"}),t(n,{size:"md"}),t(n,{size:"lg"})]),_:1}),W,t(e,null,{default:d(()=>[t(n,{disabled:""})]),_:1}),Q,t(e,null,{default:d(()=>[t(n,{readonly:""})]),_:1}),X,t(e,null,{default:d(()=>[t(n,{error:""})]),_:1}),Z,t(e,{class:"flex-col space-y-4"},{default:d(()=>[t(n,{accept:"numeric"})]),_:1}),ss,t(e,null,{default:d(()=>[t(n,{modelValue:k(h),"onUpdate:modelValue":r[0]||(r[0]=o=>O(h)?h.value=o:null)},null,8,["modelValue"])]),_:1}),ts,g("p",null,[g("code",is,R(k(h)||"-"),1)]),es])}}});export{_s as __pageData,bs as default};