import{v as e}from"./chunks/index.b2f794d3.js";import{p as D}from"./chunks/Textarea.b3a1f7fe.js";import{j as F,D as y,o as d,c as m,G as n,B as t,R as o,a4 as r,e as s,z as l,a5 as u}from"./chunks/framework.6feb5f37.js";import"./chunks/marked.esm.cc7a9e87.js";import"./chunks/commonjsHelpers.042e6b4d.js";import"./chunks/vite-browser-external_commonjs-proxy.005f2268.js";import"./chunks/index.800b94f2.js";import"./chunks/index.06d37783.js";import"./chunks/index.601b502e.js";const C=o('<h1 id="markdown" tabindex="-1">Markdown <a class="header-anchor" href="#markdown" aria-label="Permalink to &quot;Markdown&quot;">​</a></h1><blockquote><p>Like v-html but support markdown syntax</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;">​</a></h3>',4),_=o(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-p-md</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;**Hello** _World_, I\\&#39;m using \`Markdown\`&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vPMd</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@privyid/persona/directive</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="simple-md-editor" tabindex="-1">Simple MD Editor <a class="header-anchor" href="#simple-md-editor" aria-label="Permalink to &quot;Simple MD Editor&quot;">​</a></h3>`,2),g={class:"flex flex-col w-full space-y-4"},A=o(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">flex flex-col w-full space-y-4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-textarea</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">auto-grow</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-p-md</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vPMd</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@privyid/persona/directive</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="inline-parsing" tabindex="-1">Inline Parsing <a class="header-anchor" href="#inline-parsing" aria-label="Permalink to &quot;Inline Parsing&quot;">​</a></h2><p>Add modifier <code>.inline</code> to enable inline parsing. This suit for inline element like <code>&lt;p&gt;</code> or <code>&lt;span&gt;</code></p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* default parsing */</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">**strong** _em_</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> 👉 </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&lt;p&gt;&lt;strong&gt;strong&lt;/strong&gt; &lt;em&gt;em&lt;/em&gt;&lt;/p&gt;</span><span style="color:#89DDFF;">\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* Inline parsing */</span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">**strong** _em_</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> 👉 </span><span style="color:#89DDFF;">\`</span><span style="color:#C3E88D;">&lt;strong&gt;strong&lt;/strong&gt; &lt;em&gt;em&lt;/em&gt;</span><span style="color:#89DDFF;">\`</span></span></code></pre></div><p>Check <a href="https://marked.js.org/using_advanced#inline" target="_blank" rel="noreferrer">this</a> for more information.</p>`,5),h=o(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-p-md.inline</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;**Hello** _World_, I\\&#39;m using \`Markdown\`&#39;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">vPMd</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@privyid/persona/directive</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="modifiers" tabindex="-1">Modifiers <a class="header-anchor" href="#modifiers" aria-label="Permalink to &quot;Modifiers&quot;">​</a></h3><table><thead><tr><th>Modifiers</th><th>Description</th></tr></thead><tbody><tr><td><code>inline</code></td><td>Enable inline parsing</td></tr><tr><td><code>unsecure</code></td><td>Parsing without HTML Sanitize</td></tr></tbody></table>`,4),I=JSON.parse('{"title":"Markdown · Components","description":"Like v-html but support markdown syntax.","frontmatter":{"title":"Markdown · Components","description":"Like v-html but support markdown syntax."},"headers":[],"relativePath":"components/markdown/index.md"}'),f={name:"components/markdown/index.md"},V=Object.assign(f,{setup(v){const a=F(`# Hello World
> This is markdown`);return(k,c)=>{const p=y("preview");return d(),m("div",null,[C,n(p,null,{default:t(()=>[r(l("div",null,null,512),[[s(e),"**Hello** _World_, I'm using `Markdown`"]])]),_:1}),_,n(p,{class:"flex-col"},{default:t(()=>[l("div",g,[n(D,{"auto-grow":"",modelValue:s(a),"onUpdate:modelValue":c[0]||(c[0]=i=>u(a)?a.value=i:null)},null,8,["modelValue"]),r(l("div",null,null,512),[[s(e),s(a)]])])]),_:1}),A,n(p,{class:"flex-col"},{default:t(()=>[r(l("span",null,null,512),[[s(e),"**Hello** _World_, I'm using `Markdown`",void 0,{inline:!0}]])]),_:1}),h])}}});export{I as __pageData,V as default};