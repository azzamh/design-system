import{u as r}from"./chunks/use-singleton.69d41701.js";import{_ as y}from"./chunks/Overlay.vue_vue_type_style_index_0_lang.74f7a521.js";import{_ as d,o as p,c as i,x as e,A as _,h as u,j as m,B as F,D as s,z as l,Q as v,a as D,N as A,O as g}from"./chunks/framework.76afac0a.js";import{p as C}from"./chunks/Button.c45fb4d8.js";import"./chunks/use-loading.6bc9adf9.js";import"./chunks/defu.573334b8.js";import"./chunks/index.d997e305.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.3d0b80e1.js";import"./chunks/index.a3ecab28.js";const b={key:0,"data-testid":"overlay",class:"overlay"},x={class:"overlay__icon"},k=["src"];function w(a,t,n,f,h,c){return a.loading?(p(),i("div",b,[e("div",x,[e("img",{src:a.icon,alt:"overlay-icon"},null,8,k)])])):_("",!0)}const o=d(y,[["render",w]]);async function O(){(await r(o)).show()}async function T(){(await r(o)).hide()}const S=a=>(A("data-v-f33ec801"),a=a(),g(),a),q=v('<h1 id="overlay" tabindex="-1" data-v-f33ec801>Overlay <a class="header-anchor" href="#overlay" aria-label="Permalink to &quot;Overlay&quot;" data-v-f33ec801>​</a></h1><blockquote data-v-f33ec801><p data-v-f33ec801>Block user for interacting when loading is in progress.</p></blockquote><h2 id="usage" tabindex="-1" data-v-f33ec801>Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;" data-v-f33ec801>​</a></h2><h3 id="simple-usage" tabindex="-1" data-v-f33ec801>Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;" data-v-f33ec801>​</a></h3>',4),P=S(()=>e("p",null,[e("strong",null,"Try it:")],-1)),N=v(`<div class="language-ts" data-v-f33ec801><button title="Copy Code" class="copy" data-v-f33ec801></button><span class="lang" data-v-f33ec801>ts</span><pre class="shiki material-theme-palenight" data-v-f33ec801><code data-v-f33ec801><span class="line" data-v-f33ec801><span style="color:#89DDFF;font-style:italic;" data-v-f33ec801>import</span><span style="color:#A6ACCD;" data-v-f33ec801> </span><span style="color:#89DDFF;" data-v-f33ec801>{</span><span style="color:#F07178;" data-v-f33ec801> </span><span style="color:#A6ACCD;" data-v-f33ec801>showOverlay</span><span style="color:#89DDFF;" data-v-f33ec801>,</span><span style="color:#F07178;" data-v-f33ec801> </span><span style="color:#A6ACCD;" data-v-f33ec801>hideOverlay</span><span style="color:#F07178;" data-v-f33ec801> </span><span style="color:#89DDFF;" data-v-f33ec801>}</span><span style="color:#A6ACCD;" data-v-f33ec801> </span><span style="color:#89DDFF;font-style:italic;" data-v-f33ec801>from</span><span style="color:#A6ACCD;" data-v-f33ec801> </span><span style="color:#89DDFF;" data-v-f33ec801>&#39;</span><span style="color:#C3E88D;" data-v-f33ec801>@privyid/persona/core</span><span style="color:#89DDFF;" data-v-f33ec801>&#39;</span></span>
<span class="line" data-v-f33ec801></span>
<span class="line" data-v-f33ec801><span style="color:#C792EA;" data-v-f33ec801>function</span><span style="color:#A6ACCD;" data-v-f33ec801> </span><span style="color:#82AAFF;" data-v-f33ec801>onClick</span><span style="color:#A6ACCD;" data-v-f33ec801> </span><span style="color:#89DDFF;" data-v-f33ec801>()</span><span style="color:#A6ACCD;" data-v-f33ec801> </span><span style="color:#89DDFF;" data-v-f33ec801>{</span></span>
<span class="line" data-v-f33ec801><span style="color:#F07178;" data-v-f33ec801>  </span><span style="color:#82AAFF;" data-v-f33ec801>showOverlay</span><span style="color:#F07178;" data-v-f33ec801>()</span></span>
<span class="line" data-v-f33ec801></span>
<span class="line" data-v-f33ec801><span style="color:#F07178;" data-v-f33ec801>  </span><span style="color:#82AAFF;" data-v-f33ec801>setTimeout</span><span style="color:#F07178;" data-v-f33ec801>(</span><span style="color:#89DDFF;" data-v-f33ec801>()</span><span style="color:#F07178;" data-v-f33ec801> </span><span style="color:#C792EA;" data-v-f33ec801>=&gt;</span><span style="color:#F07178;" data-v-f33ec801> </span><span style="color:#89DDFF;" data-v-f33ec801>{</span></span>
<span class="line" data-v-f33ec801><span style="color:#F07178;" data-v-f33ec801>    </span><span style="color:#82AAFF;" data-v-f33ec801>hideOverlay</span><span style="color:#F07178;" data-v-f33ec801>()</span></span>
<span class="line" data-v-f33ec801><span style="color:#F07178;" data-v-f33ec801>  </span><span style="color:#89DDFF;" data-v-f33ec801>},</span><span style="color:#F07178;" data-v-f33ec801> </span><span style="color:#F78C6C;" data-v-f33ec801>3000</span><span style="color:#F07178;" data-v-f33ec801>)</span></span>
<span class="line" data-v-f33ec801><span style="color:#89DDFF;" data-v-f33ec801>}</span></span></code></pre></div><h2 id="api" tabindex="-1" data-v-f33ec801>API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;" data-v-f33ec801>​</a></h2><h3 id="showoverlay" tabindex="-1" data-v-f33ec801>showOverlay <a class="header-anchor" href="#showoverlay" aria-label="Permalink to &quot;showOverlay&quot;" data-v-f33ec801>​</a></h3><p data-v-f33ec801><code data-v-f33ec801>showOverlay(): Promise&lt;void&gt;</code></p><table data-v-f33ec801><thead data-v-f33ec801><tr data-v-f33ec801><th data-v-f33ec801>Options</th><th style="text-align:center;" data-v-f33ec801>Type</th><th style="text-align:center;" data-v-f33ec801>Default</th><th data-v-f33ec801>Description</th></tr></thead><tbody data-v-f33ec801><tr data-v-f33ec801><td colspan="4" class="text-center" data-v-f33ec801>There no options here</td></tr></tbody></table><h3 id="hideoverlay" tabindex="-1" data-v-f33ec801>hideOverlay <a class="header-anchor" href="#hideoverlay" aria-label="Permalink to &quot;hideOverlay&quot;" data-v-f33ec801>​</a></h3><p data-v-f33ec801><code data-v-f33ec801>hideOverlay(): Promise&lt;void&gt;</code></p><table data-v-f33ec801><thead data-v-f33ec801><tr data-v-f33ec801><th data-v-f33ec801>Options</th><th style="text-align:center;" data-v-f33ec801>Type</th><th style="text-align:center;" data-v-f33ec801>Default</th><th data-v-f33ec801>Description</th></tr></thead><tbody data-v-f33ec801><tr data-v-f33ec801><td colspan="4" class="text-center" data-v-f33ec801>There no options here</td></tr></tbody></table><h2 id="see-also" tabindex="-1" data-v-f33ec801>See Also <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;See Also&quot;" data-v-f33ec801>​</a></h2><ul data-v-f33ec801><li data-v-f33ec801><a href="/design-system/components/spinner/index.html" data-v-f33ec801>Spinner</a></li></ul>`,10),Q=JSON.parse('{"title":"Navbar · Components","description":"Block user for interacting when loading is in progress.","frontmatter":{"title":"Navbar · Components","description":"Block user for interacting when loading is in progress."},"headers":[],"relativePath":"components/overlay/index.md"}'),I={name:"components/overlay/index.md"},V=Object.assign(I,{setup(a){const t=u();function n(){O(),setTimeout(()=>{T()},3e3)}return m(()=>{t.value.show()}),(f,h)=>{const c=F("preview");return p(),i("div",null,[q,s(c,null,{default:l(()=>[s(o,{ref_key:"overlay",ref:t},null,512)]),_:1}),P,e("div",null,[s(C,{onClick:n,color:"info"},{default:l(()=>[D(" Show ")]),_:1})]),N])}}}),G=d(V,[["__scopeId","data-v-f33ec801"]]);export{Q as __pageData,G as default};