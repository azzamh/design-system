import{p as n}from"./chunks/InputRange.78687f28.js";import{h as y,C as b,c as q,H as s,w as o,k as a,t as u,l as p,Q as e,o as x,a1 as g}from"./chunks/framework.ea844ac6.js";import"./chunks/index.6d123da7.js";import"./chunks/index.bc57e2e2.js";import"./chunks/index.7319edc6.js";import"./chunks/index.b1700c29.js";import"./chunks/throttle.3a584b0d.js";import"./chunks/debounce.b619e377.js";import"./chunks/isObject.32699ff3.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/toNumber.75689a18.js";import"./chunks/isSymbol.4326927f.js";const C=e('<h1 id="input-range" tabindex="-1">Input Range <a class="header-anchor" href="#input-range" aria-label="Permalink to &quot;Input Range&quot;">​</a></h1><blockquote><p>Range input slider.</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;">​</a></h3>',4),T=e(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-input-range</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-input-range</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="with-min-max-step" tabindex="-1">With min, max &amp; step <a class="header-anchor" href="#with-min-max-step" aria-label="Permalink to &quot;With min, max &amp; step&quot;">​</a></h3>`,2),A=e(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-input-range</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">min</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;0&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">max</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;100&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">step</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;25&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-input-range</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">min</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;0&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">max</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;100&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">step</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;25&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="multiple-mode" tabindex="-1">Multiple Mode <a class="header-anchor" href="#multiple-mode" aria-label="Permalink to &quot;Multiple Mode&quot;">​</a></h2>`,2),k=e(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-input-range</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">multiple</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-input-range</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">multiple</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="disabled-state" tabindex="-1">Disabled State <a class="header-anchor" href="#disabled-state" aria-label="Permalink to &quot;Disabled State&quot;">​</a></h2>`,2),f=e(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-input-range</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-input-range</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="readonly-state" tabindex="-1">Readonly State <a class="header-anchor" href="#readonly-state" aria-label="Permalink to &quot;Readonly State&quot;">​</a></h2>`,2),F=e(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-input-range</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">readonly</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-input-range</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">readonly</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="binding-v-model" tabindex="-1">Binding v-model <a class="header-anchor" href="#binding-v-model" aria-label="Permalink to &quot;Binding v-model&quot;">​</a></h2>`,2),D=a("p",null,[a("strong",null,"result:")],-1),S={class:"truncate"},P=e(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-input-range</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;result&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-input-range</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;result&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="v-model-in-multiple-mode" tabindex="-1">v-model in multiple mode <a class="header-anchor" href="#v-model-in-multiple-mode" aria-label="Permalink to &quot;v-model in multiple mode&quot;">​</a></h3><p>There are 2 ways to use v-model in <code>multiple</code> mode.</p><h4 id="_1-using-basic-v-model" tabindex="-1">1. Using basic v-model <a class="header-anchor" href="#_1-using-basic-v-model" aria-label="Permalink to &quot;1. Using basic v-model&quot;">​</a></h4><p>You can use basic <code>v-model</code> to handle multiple range input, The value will be tuple of number, <code>[start, end]</code></p>`,5),B=a("p",null,[a("strong",null,"result:")],-1),V={class:"truncate"},I=e(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-input-range</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;result&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">multiple</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-input-range</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;result&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">multiple</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h4 id="_2-using-v-model-start-and-v-model-end" tabindex="-1">2. using v-model:start and v-model:end <a class="header-anchor" href="#_2-using-v-model-start-and-v-model-end" aria-label="Permalink to &quot;2. using v-model:start and v-model:end&quot;">​</a></h4><p>You can specific binding the value using <code>v-model:start</code> or <code>v-model:end</code></p>`,3),N=a("p",null,[a("strong",null,"start:")],-1),R={class:"truncate"},w=a("p",null,[a("strong",null,"end:")],-1),U={class:"truncate"},M=e(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-input-range</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">v-model:start</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;start&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">v-model:end</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;end&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">multiple</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-input-range</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-model:start</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;start&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">v-model:end</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;end&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">multiple</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>min</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>0</code></td><td>Lowest value in range</td></tr><tr><td><code>max</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>100</code></td><td>Highest value in range</td></tr><tr><td><code>step</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>1</code></td><td>Step movement</td></tr><tr><td><code>multiple</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Enable multiple mode</td></tr><tr><td><code>disabled</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Disabled state</td></tr><tr><td><code>readonly</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Readonly state</td></tr><tr><td><code>error</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Error state</td></tr><tr><td><code>modelValue</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>-</code></td><td>v-model value</td></tr><tr><td><code>start</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>-</code></td><td>v-model:start value</td></tr><tr><td><code>end</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>-</code></td><td>v-model:end value</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td colspan="2" class="text-center">There no slots here</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td><code>change</code></td><td><code>Number</code> | <code>[Number, Number]</code></td><td>Event when value changed</td></tr></tbody></table><h2 id="see-also" tabindex="-1">See Also <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;See Also&quot;">​</a></h2><ul><li><a href="/design-system/components/input/">Input</a></li><li><a href="/design-system/components/strengthbar/">Strengthbar</a></li></ul>`,10),as=JSON.parse('{"title":"Input Range · Components","description":"Range input slider.","frontmatter":{"title":"Input Range · Components","description":"Range input slider."},"headers":[],"relativePath":"components/input-range/index.md","filePath":"components/input-range/index.md"}'),H={name:"components/input-range/index.md"},es=Object.assign(H,{setup(O){const r=y(50),d=y([30,70]),i=y(0),E=y(100);return(W,t)=>{var m,h,_,v;const l=b("preview");return x(),q("div",null,[C,s(l,{class:"flex-col"},{default:o(()=>[s(n)]),_:1}),T,s(l,{class:"flex-col"},{default:o(()=>[s(n,{min:"0",max:"100",step:"25"})]),_:1}),A,s(l,{class:"flex-col"},{default:o(()=>[s(n,{multiple:""})]),_:1}),k,s(l,{class:"flex-col"},{default:o(()=>[s(n,{disabled:""})]),_:1}),f,s(l,{class:"flex-col"},{default:o(()=>[s(n,{readonly:""})]),_:1}),F,s(l,{class:"flex-col"},{default:o(()=>[s(n,{modelValue:p(r),"onUpdate:modelValue":t[0]||(t[0]=c=>g(r)?r.value=c:null)},null,8,["modelValue"])]),_:1}),D,a("pre",S,[a("code",null,u((m=p(r))!=null?m:"-"),1)]),P,s(l,{class:"flex-col"},{default:o(()=>[s(n,{modelValue:p(d),"onUpdate:modelValue":t[1]||(t[1]=c=>g(d)?d.value=c:null),multiple:""},null,8,["modelValue"])]),_:1}),B,a("pre",V,[a("code",null,u((h=p(d))!=null?h:"-"),1)]),I,s(l,{class:"flex-col"},{default:o(()=>[s(n,{start:p(i),"onUpdate:start":t[2]||(t[2]=c=>g(i)?i.value=c:null),end:p(E),"onUpdate:end":t[3]||(t[3]=c=>g(E)?E.value=c:null),multiple:""},null,8,["start","end"])]),_:1}),N,a("pre",R,[a("code",null,u((_=p(i))!=null?_:"-"),1)]),w,a("pre",U,[a("code",null,u((v=p(E))!=null?v:"-"),1)]),M])}}});export{as as __pageData,es as default};