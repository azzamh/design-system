import{t as P}from"./chunks/index.5e8fa405.js";import{p as j,F as I}from"./chunks/Calibrator-v3.c0fa8610.js";import{g as k,p as T}from"./chunks/PdfObject.5e58dd35.js";import{E as q,x as _,ad as O,U as S,d as R,a4 as f,h as m,g as L,y as H,c as C,k as d,r as B,N as D,l as e,n as N,o as g,am as U,C as V,H as y,w as i,Q as v,a1 as $,F as G,D as M,b as z}from"./chunks/framework.f99460e8.js";import{p as J}from"./chunks/PdfObjectAddon.f8fafef1.js";import{_ as Q}from"./chunks/Button.vue_vue_type_script_setup_true_lang.77ad59c3.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.4ed993c7.js";import{I as X}from"./chunks/16.6d6b33b0.js";import"./chunks/index.a453e079.js";import"./chunks/index.7184e350.js";import"./chunks/noop.cb277961.js";import"./chunks/20.21828fbc.js";import"./chunks/20.5cf2e5ef.js";import"./chunks/Divider.e688a0ae.js";import"./chunks/Divider.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Select.vue_vue_type_style_index_0_lang.e60b227b.js";import"./chunks/Dropdown.vue_vue_type_script_setup_true_lang.39c18aeb.js";import"./chunks/Dropdown.vue_vue_type_style_index_0_lang.98fe4c2b.js";import"./chunks/use-focus.9e2f5fde.js";import"./chunks/baseClamp.947838b9.js";import"./chunks/toNumber.75689a18.js";import"./chunks/isObject.32699ff3.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/floating-ui.dom.546cdae4.js";import"./chunks/index.4988d912.js";import"./chunks/DropdownHeader.f706ac38.js";import"./chunks/Subheading.01661924.js";import"./chunks/Input.19d62327.js";import"./chunks/index.a3ecab28.js";import"./chunks/accept.c8f4354a.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Text.56ace8ae.js";import"./chunks/Label.9a70e97a.js";import"./chunks/Dot.cdb876b0.js";import"./chunks/Dot.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Label.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/20.846824de.js";import"./chunks/20.e5eebfe4.js";import"./chunks/IconCheckbox.643a8a43.js";import"./chunks/SpinnerRing.84e24d5c.js";import"./chunks/value.d2e2d3a1.js";import"./chunks/adapter.d0e3e116.js";import"./chunks/use-loading.a4685ceb.js";import"./chunks/defu.573334b8.js";import"./chunks/Heading.5588253e.js";import"./chunks/Heading.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/focus.33532f0c.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.9ff5a855.js";import"./chunks/debounce.b619e377.js";import"./chunks/toInteger.d4d227f4.js";import"./chunks/toString.314d06e3.js";import"./chunks/isArray.513c67aa.js";import"./chunks/memoize.ddd08355.js";import"./chunks/eq.0257f0f1.js";import"./chunks/SpinnerRinggo.abd280b3.js";function Y(u,t={}){const p=q(!0),a=q();async function r(){if(s(),u.value){const{default:c}=await S(()=>import("./chunks/interact.min.62670632.js").then(E=>E.i),["assets/chunks/interact.min.62670632.js","assets/chunks/commonjsHelpers.de833af9.js"]);a.value=c(u.value).draggable({inertia:!0,enabled:p.value,autoScroll:!0,onstart:t.onstart,onmove:t.onmove,onend:t.onend}).on("tap",t.ontap)}}function s(){a.value&&a.value.unset()}return _(u,async()=>{await r()}),_(p,c=>{a.value&&a.value.draggable(c)}),O(()=>{s()}),p}const K={class:"pdf-object__container"},W={class:"pdf-object__container"},A=R({__name:"PdfHelipad",props:{scale:{type:Number,default:1},width:{type:Number,default:198},height:{type:Number,default:106},disabled:{type:Boolean,default:!1}},emits:["landed","click"],setup(u,{emit:t}){const p=u,a=P("object"),r=f(p,"scale"),s=f(p,"width"),c=f(p,"height"),E=m(!1),l=m(0),h=m(0),o=L(()=>{const n=[];return p.disabled&&n.push("pdf-helipad--disabled"),n}),w=Y(a,{onstart(){const{left:n,top:F}=a.value.getBoundingClientRect();E.value=!0,l.value=n,h.value=F},onmove(n){l.value=n.clientX-n.rect.width*r.value/2,h.value=n.clientY-n.rect.height*r.value/2},onend(n){if(n.relatedTarget){const F=n.relatedTarget,x=k({reference:F,object:a.value,scale:r.value});t("landed",{...x,width:s.value,height:c.value})}E.value=!1},ontap(n){t("click",n)}});return H(()=>{a.value&&(E.value?(a.value.style.position="fixed",a.value.style.transform=`translate(${l.value}px, ${h.value}px) scale(${r.value})`,a.value.style.zIndex="50"):(a.value.style.position="absolute",a.value.style.transform="translate(0px, 0px)",a.value.style.zIndex="2"))}),_(()=>p.disabled,n=>{w.value=!n},{immediate:!0}),(n,F)=>(g(),C("div",{"data-testid":"pdf-helipad",class:N(["pdf-helipad",e(o)])},[d("div",{ref_key:"object",ref:a,"data-testid":"pdf-helipad-object",class:"pdf-object pdf-object--external",style:D({width:`${e(s)}px`,height:`${e(c)}px`})},[d("div",K,[B(n.$slots,"default")])],4),d("div",{class:"pdf-object pdf-object--external pdf-helipad__ghost",style:D({width:`${e(s)}px`,height:`${e(c)}px`})},[d("div",W,[B(n.$slots,"default")])],4)],2))}});const b="/design-system/assets/img-helicopter.70243ad0.svg",Z=v('<h1 id="pdf-helipad" tabindex="-1">PDF Helipad <a class="header-anchor" href="#pdf-helipad" aria-label="Permalink to &quot;PDF Helipad&quot;">​</a></h1><blockquote><p>Add object to PDF Viewer with Drag&#39;n&#39;Drop</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;">​</a></h3><p>(Drag this to PDF Viewer)</p>',5),ss=["src"],as=["src"],ns=v(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-pdf-helipad</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:scale</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scale&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@landed</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onLanded&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;w-full h-full bg-base-white&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;IMG_HELICOPTER&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">p-pdf-helipad</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-pdf-viewer</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;FILE&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-model:scale</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;scale&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p-pdf-object</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;(object, i) in objects&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;object._id&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-model:page</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;object.page&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-model:x</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;object.x&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-model:y</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;object.y&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-model:width</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;object.width&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-model:height</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;object.height&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;w-full h-full&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;IMG_HELICOPTER&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p-pdf-object-addon</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">p-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">size</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;sm&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;danger&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;remove(i)&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#FDAEB7;font-style:italic;">IconClose</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">p-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">p-pdf-object-addon</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">p-pdf-object</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">p-pdf-viewer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">lang</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ts&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> FILE </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;~/assets/Calibrator-v3.pdf?url&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> IMG_HELICOPTER </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;~/assets/helicopter.svg&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { PdfHelipadResult } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@privyid/persona/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PdfObject</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">_id</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">symbol</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">page</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">x</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">y</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">width</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#FFAB70;">height</span><span style="color:#F97583;">?:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">scale</span><span style="color:#E1E4E8;">   </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">objects</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">reactive</span><span style="color:#E1E4E8;">&lt;</span><span style="color:#B392F0;">PdfObject</span><span style="color:#E1E4E8;">[]&gt;([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onLanded</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">item</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">PdfHelipadResult</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    objects.</span><span style="color:#B392F0;">push</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      _id   : </span><span style="color:#B392F0;">Symbol</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;ObjectId&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      page  : item.page,</span></span>
<span class="line"><span style="color:#E1E4E8;">      x     : item.x,</span></span>
<span class="line"><span style="color:#E1E4E8;">      y     : item.y,</span></span>
<span class="line"><span style="color:#E1E4E8;">      width : item.width,</span></span>
<span class="line"><span style="color:#E1E4E8;">      height: item.height,</span></span>
<span class="line"><span style="color:#E1E4E8;">    })</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">remove</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">index</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">number</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    objects.</span><span style="color:#B392F0;">splice</span><span style="color:#E1E4E8;">(index, </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-pdf-helipad</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:scale</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scale&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@landed</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;onLanded&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;w-full h-full bg-base-white&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;IMG_HELICOPTER&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">p-pdf-helipad</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-pdf-viewer</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;FILE&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-model:scale</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;scale&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">p-pdf-object</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;(object, i) in objects&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;object._id&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-model:page</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;object.page&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-model:x</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;object.x&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-model:y</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;object.y&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-model:width</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;object.width&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-model:height</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;object.height&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;w-full h-full&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;IMG_HELICOPTER&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">p-pdf-object-addon</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">p-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">size</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;sm&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;danger&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;remove(i)&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#B31D28;font-style:italic;">IconClose</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">p-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">p-pdf-object-addon</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">p-pdf-object</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">p-pdf-viewer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">lang</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ts&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> FILE </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;~/assets/Calibrator-v3.pdf?url&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> IMG_HELICOPTER </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;~/assets/helicopter.svg&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { PdfHelipadResult } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@privyid/persona/core&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PdfObject</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">_id</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">symbol</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">page</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">x</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">y</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">width</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#E36209;">height</span><span style="color:#D73A49;">?:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">scale</span><span style="color:#24292E;">   </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">objects</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">reactive</span><span style="color:#24292E;">&lt;</span><span style="color:#6F42C1;">PdfObject</span><span style="color:#24292E;">[]&gt;([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onLanded</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">item</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">PdfHelipadResult</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    objects.</span><span style="color:#6F42C1;">push</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      _id   : </span><span style="color:#6F42C1;">Symbol</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;ObjectId&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      page  : item.page,</span></span>
<span class="line"><span style="color:#24292E;">      x     : item.x,</span></span>
<span class="line"><span style="color:#24292E;">      y     : item.y,</span></span>
<span class="line"><span style="color:#24292E;">      width : item.width,</span></span>
<span class="line"><span style="color:#24292E;">      height: item.height,</span></span>
<span class="line"><span style="color:#24292E;">    })</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">remove</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">index</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">number</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">    objects.</span><span style="color:#6F42C1;">splice</span><span style="color:#24292E;">(index, </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="disabled-state" tabindex="-1">Disabled State <a class="header-anchor" href="#disabled-state" aria-label="Permalink to &quot;Disabled State&quot;">​</a></h2>`,2),ls=["src"],ps=v(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-pdf-helipad</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">disabled</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;w-full h-full&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;IMG_HELICOPTER&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">p-pdf-helipad</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-pdf-helipad</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">disabled</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;w-full h-full&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;IMG_HELICOPTER&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">p-pdf-helipad</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>scale</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>1</code></td><td>Object scale</td></tr><tr><td><code>width</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>198</code></td><td>Object width</td></tr><tr><td><code>height</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>106</code></td><td>Object height</td></tr><tr><td><code>disabled</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Disabled state</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content to place inside the <code>&lt;p-pdf-helipad&gt;</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td><code>landed</code></td><td>PdfHelipadResult</td><td>Event object successfully dropped</td></tr><tr><td><code>click</code></td><td>InteractEvent</td><td>Event object clicked</td></tr></tbody></table>`,8),ra=JSON.parse(`{"title":"PDF Helipad · Components","description":"Add object to PDF Viewer with Drag'n'Drop","frontmatter":{"title":"PDF Helipad · Components","description":"Add object to PDF Viewer with Drag'n'Drop"},"headers":[],"relativePath":"components/pdf-helipad/index.md","filePath":"components/pdf-helipad/index.md"}`),os={name:"components/pdf-helipad/index.md"},Ea=Object.assign(os,{setup(u){const t=U([]),p=m(1);function a(s){t.push({_id:Symbol("ObjectId"),page:s==null?void 0:s.page,x:s==null?void 0:s.x,y:s==null?void 0:s.y,width:s==null?void 0:s.width,height:s==null?void 0:s.height})}function r(s){t.splice(s,1)}return(s,c)=>{const E=V("preview");return g(),C("div",null,[Z,y(A,{scale:e(p),onLanded:a},{default:i(()=>[d("img",{class:"w-full h-full bg-base-white",src:e(b)},null,8,ss)]),_:1},8,["scale"]),y(E,null,{default:i(()=>[y(j,{src:e(I),scale:e(p),"onUpdate:scale":c[0]||(c[0]=l=>$(p)?p.value=l:null)},{default:i(()=>[(g(!0),C(G,null,M(e(t),(l,h)=>(g(),z(T,{key:l._id,page:l.page,"onUpdate:page":o=>l.page=o,x:l.x,"onUpdate:x":o=>l.x=o,y:l.y,"onUpdate:y":o=>l.y=o,width:l.width,"onUpdate:width":o=>l.width=o,height:l.height,"onUpdate:height":o=>l.height=o},{default:i(()=>[d("img",{class:"w-full h-full rounded",src:e(b)},null,8,as),y(J,null,{default:i(()=>[y(Q,{size:"sm",icon:"",color:"danger",onClick:o=>r(h)},{default:i(()=>[y(X)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["page","onUpdate:page","x","onUpdate:x","y","onUpdate:y","width","onUpdate:width","height","onUpdate:height"]))),128))]),_:1},8,["src","scale"])]),_:1}),ns,y(E,{class:"!bg-base-white"},{default:i(()=>[y(A,{disabled:""},{default:i(()=>[d("img",{class:"w-full h-full",src:e(b)},null,8,ls)]),_:1})]),_:1}),ps])}}});export{ra as __pageData,Ea as default};