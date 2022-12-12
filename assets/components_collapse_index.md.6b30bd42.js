import{p as c}from"./chunks/Collapse.d9b54948.js";import{p as i}from"./chunks/Button.7ec005f9.js";import{p as F}from"./chunks/Card.638df04d.js";import{j as D,r as d,o as y,c as u,a,w as l,b as p,e as t}from"./app.34a3cf55.js";import"./chunks/index.dac7e9c6.js";import"./chunks/index.a4466092.js";import"./chunks/index.bafb7190.js";import"./chunks/16.5549ab92.js";import"./chunks/utils-6ba05f5b.563bea36.js";import"./chunks/Heading.bebf897d.js";const h=p('<h1 id="collapse" tabindex="-1">Collapse <a class="header-anchor" href="#collapse" aria-hidden="true">#</a></h1><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-hidden="true">#</a></h3>',3),C=p(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mb-5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">sample</span><span style="color:#89DDFF;"> = !</span><span style="color:#A6ACCD;">sample</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Collapse</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-collapse</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">sample</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-collapse</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="with-card" tabindex="-1">With Card <a class="header-anchor" href="#with-card" aria-hidden="true">#</a></h3>`,2),m=p(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">mb-5</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> @</span><span style="color:#C792EA;">click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">sample</span><span style="color:#89DDFF;"> = !</span><span style="color:#A6ACCD;">sample</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">primary</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Collapse</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-collapse</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">sample</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-card</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-card</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-collapse</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h3><table><thead><tr><th>Props</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td colspan="4" class="text-center">There no props here</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>default </code></td><td>Content to place in Collapse</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td colspan="3" class="text-center">There no event here</td></tr></tbody></table>`,8),V=JSON.parse('{"title":"Collapse","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Simple Usage","slug":"simple-usage","link":"#simple-usage","children":[]},{"level":3,"title":"With Card","slug":"with-card","link":"#with-card","children":[]}]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/collapse/index.md"}'),_={name:"components/collapse/index.md"},I=Object.assign(_,{setup(A){const n=D(!1),o=D(!1);return(g,s)=>{const r=d("preview");return y(),u("div",null,[h,a(r,{class:"flex-col"},{default:l(()=>[a(i,{class:"mb-5",onClick:s[0]||(s[0]=e=>n.value=!n.value),color:"primary"},{default:l(()=>[t("Collapse")]),_:1}),a(c,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=e=>n.value=e)},{default:l(()=>[t(" But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born ")]),_:1},8,["modelValue"])]),_:1}),C,a(r,{class:"flex-col"},{default:l(()=>[a(i,{class:"mb-5",onClick:s[2]||(s[2]=e=>o.value=!o.value),color:"primary"},{default:l(()=>[t("Collapse")]),_:1}),a(c,{modelValue:o.value,"onUpdate:modelValue":s[3]||(s[3]=e=>o.value=e)},{default:l(()=>[a(F,null,{default:l(()=>[t("But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born")]),_:1})]),_:1},8,["modelValue"])]),_:1}),m])}}});export{V as __pageData,I as default};