import{_ as E}from"./chunks/Button.vue_vue_type_script_setup_true_lang.77ad59c3.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.4ed993c7.js";import{d as b,h as r,g as B,x as k,c as f,H as n,w as o,T as A,l as p,n as V,o as C,a2 as S,a7 as x,k as t,L as P,r as T,e as z,O,a1 as y,Q as q,a as i}from"./chunks/framework.f99460e8.js";import{u as L}from"./chunks/index.4988d912.js";import{d as $}from"./chunks/index.5e8fa405.js";import"./chunks/index.a3ecab28.js";import"./chunks/SpinnerRinggo.abd280b3.js";import"./chunks/index.a453e079.js";const d=b({__name:"Sheet",props:{modelValue:{type:Boolean,default:!1},position:{type:String,default:"left"},size:{type:String,default:"sm"},noCloseOnBackdrop:{type:Boolean,default:!1},noCloseOnEsc:{type:Boolean,default:!1}},emits:["update:modelValue","close"],setup(_,{emit:u}){const e=_,g=r(),c=L(e),h=B(()=>{const l=[];return e.position&&l.push(`sheet--${e.position}`),e.size&&l.push(`sheet--${e.size}`),l}),F=B(()=>`sheet--${e.position}`);function m(l=new CustomEvent("close")){u("close",l),l.defaultPrevented||(c.value=!1)}function v(l){e.noCloseOnBackdrop||m(l)}return $("Escape",l=>{c.value&&!e.noCloseOnEsc&&m(l)},{eventName:"keydown"}),k(c,l=>{l===!1&&O(()=>{u("close",new CustomEvent("close"))})}),(l,D)=>(C(),f("div",{ref_key:"target",ref:g,class:V(["sheet",p(h)]),"data-testid":"sheet"},[n(A,{name:"fade"},{default:o(()=>[S(t("div",{"data-testid":"sheet-backdrop",class:"sheet__backdrop",onClick:v},null,512),[[x,p(c)]])]),_:1}),n(A,{name:p(F)},{default:o(()=>[p(c)?(C(),f("div",P({key:0,ref_key:"target",ref:g,"data-testid":"sheet-content",class:"sheet__content"},l.$attrs),[T(l.$slots,"default",{close:m})],16)):z("",!0)]),_:3},8,["name"])],2))}});const N=q('<h1 id="sheet" tabindex="-1">Sheet <a class="header-anchor" href="#sheet" aria-label="Permalink to &quot;Sheet&quot;">​</a></h1><blockquote><p>Off-Canvas container.</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;">​</a></h3>',4),w=t("div",{class:"p-4"}," Hello World ",-1),U=q(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;isOpen&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;p-4&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Hello World</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">isOpen</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;isOpen&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-4&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      Hello World</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">isOpen</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="position" tabindex="-1">Position <a class="header-anchor" href="#position" aria-label="Permalink to &quot;Position&quot;">​</a></h2><p>There are 4 positions you can use, <code>left</code>, <code>right</code>, <code>top</code> and <code>bottom</code>. Default is <code>left</code>.</p>`,3),I={class:"flex space-gap-3"},M=t("div",{class:"p-4"}," Position Left ",-1),R=t("div",{class:"p-4"}," Position Top ",-1),H=t("div",{class:"p-4"}," Position Right ",-1),W=t("div",{class:"p-4"}," Position Bottom ",-1),G=q(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;model&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;left&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;p-4&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Position Left</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;model2&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;top&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;p-4&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Position Top</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;model3&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;right&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;p-4&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Position Right</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;model4&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">position</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;bottom&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;p-4&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Position Bottom</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;model&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">position</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;left&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-4&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      Position Left</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;model2&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">position</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;top&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-4&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      Position Top</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;model3&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">position</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;right&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-4&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      Position Right</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;model4&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">position</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;bottom&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-4&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      Position Bottom</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="sizing" tabindex="-1">Sizing <a class="header-anchor" href="#sizing" aria-label="Permalink to &quot;Sizing&quot;">​</a></h2><p>There are 4 sizes you can use, <code>sm</code>, <code>md</code>, <code>lg</code> and <code>xl</code>. Default is <code>sm</code>.</p>`,3),X={class:"flex space-gap-3"},j=t("div",{class:"p-4"}," Small ",-1),J=t("div",{class:"p-4"}," Medium ",-1),K=t("div",{class:"p-4"}," Large ",-1),Q=t("div",{class:"p-4"}," Extra Large ",-1),Y=q(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;modelSM&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sm&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;p-4&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Small</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;modelMD&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;md&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;p-4&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Medium</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;modelLG&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;lg&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;p-4&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Large</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;modelXL&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;xl&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;p-4&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      Extra Large</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">p-sheet</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;modelSM&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sm&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-4&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      Small</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;modelMD&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;md&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-4&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      Medium</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;modelLG&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;lg&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-4&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      Large</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;modelXL&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;xl&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-4&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      Extra Large</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">p-sheet</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>position</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>left</code></td><td>Sheet positions, valid value: <code>left</code>, <code>right</code>, <code>top</code>, <code>bottom</code></td></tr><tr><td><code>size</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>sm</code></td><td>Sheet size, valid value: <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code></td></tr><tr><td><code>noCloseOnEsc</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>No close modal while Escape was pressed</td></tr><tr><td><code>noCloseOnBackdrop</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Disabled close when click on backdrop</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content to place inside the sheet</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td><code>close</code></td><td>-</td><td>Event when sheet wµill closed</td></tr></tbody></table><h2 id="see-also" tabindex="-1">See Also <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;See Also&quot;">​</a></h2><ul><li><a href="/design-system/components/card/">Card</a></li><li><a href="/design-system/components/modal/">Modal</a></li></ul>`,10),cs=JSON.parse('{"title":"Sheet · Components","description":"Off-Canvas container.","frontmatter":{"title":"Sheet · Components","description":"Off-Canvas container."},"headers":[],"relativePath":"components/sheet/index.md","filePath":"components/sheet/index.md"}'),Z={name:"components/sheet/index.md"},rs=Object.assign(Z,{setup(_){const u=r(!1),e=r(!1),g=r(!1),c=r(!1),h=r(!1),F=r(!1),m=r(!1),v=r(!1),l=r(!1);return(D,s)=>(C(),f("div",null,[N,n(E,{class:"mt-4",onClick:s[0]||(s[0]=a=>u.value=!p(u))},{default:o(()=>[i(" Live Demo ")]),_:1}),n(d,{modelValue:p(u),"onUpdate:modelValue":s[1]||(s[1]=a=>y(u)?u.value=a:null),"no-backdrop":""},{default:o(()=>[w]),_:1},8,["modelValue"]),U,t("div",I,[n(E,{onClick:s[2]||(s[2]=a=>e.value=!0)},{default:o(()=>[i(" Left ")]),_:1}),n(E,{onClick:s[3]||(s[3]=a=>c.value=!0)},{default:o(()=>[i(" Top ")]),_:1}),n(E,{onClick:s[4]||(s[4]=a=>g.value=!0)},{default:o(()=>[i(" Right ")]),_:1}),n(E,{onClick:s[5]||(s[5]=a=>h.value=!0)},{default:o(()=>[i(" Bottom ")]),_:1})]),n(d,{modelValue:p(e),"onUpdate:modelValue":s[6]||(s[6]=a=>y(e)?e.value=a:null),position:"left"},{default:o(()=>[M]),_:1},8,["modelValue"]),n(d,{modelValue:p(c),"onUpdate:modelValue":s[7]||(s[7]=a=>y(c)?c.value=a:null),position:"top"},{default:o(()=>[R]),_:1},8,["modelValue"]),n(d,{modelValue:p(g),"onUpdate:modelValue":s[8]||(s[8]=a=>y(g)?g.value=a:null),position:"right"},{default:o(()=>[H]),_:1},8,["modelValue"]),n(d,{modelValue:p(h),"onUpdate:modelValue":s[9]||(s[9]=a=>y(h)?h.value=a:null),position:"bottom"},{default:o(()=>[W]),_:1},8,["modelValue"]),G,t("div",X,[n(E,{onClick:s[10]||(s[10]=a=>F.value=!0)},{default:o(()=>[i(" sm ")]),_:1}),n(E,{onClick:s[11]||(s[11]=a=>m.value=!0)},{default:o(()=>[i(" md ")]),_:1}),n(E,{onClick:s[12]||(s[12]=a=>v.value=!0)},{default:o(()=>[i(" lg ")]),_:1}),n(E,{onClick:s[13]||(s[13]=a=>l.value=!0)},{default:o(()=>[i(" xl ")]),_:1})]),n(d,{modelValue:p(F),"onUpdate:modelValue":s[14]||(s[14]=a=>y(F)?F.value=a:null),size:"sm"},{default:o(()=>[j]),_:1},8,["modelValue"]),n(d,{modelValue:p(m),"onUpdate:modelValue":s[15]||(s[15]=a=>y(m)?m.value=a:null),size:"md"},{default:o(()=>[J]),_:1},8,["modelValue"]),n(d,{modelValue:p(v),"onUpdate:modelValue":s[16]||(s[16]=a=>y(v)?v.value=a:null),size:"lg"},{default:o(()=>[K]),_:1},8,["modelValue"]),n(d,{modelValue:p(l),"onUpdate:modelValue":s[17]||(s[17]=a=>y(l)?l.value=a:null),size:"xl"},{default:o(()=>[Q]),_:1},8,["modelValue"]),Y]))}});export{cs as __pageData,rs as default};