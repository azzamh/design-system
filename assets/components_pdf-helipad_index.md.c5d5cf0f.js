import{t as P}from"./chunks/theme.96d0fdcb.js";import{g as j,p as I}from"./chunks/PdfObject.46ddfff2.js";import{s as v,w as g,b as B,Q as T,m as S,t as m,r as C,c as k,l as N,_ as O,x as A,p as _,F as i,q as E,N as q,v as R,ab as V,K as $,M as D,I as F,u as y,Y as b,i as H,G as U,V as L,H as z}from"./chunks/framework.91e0efa6.js";import{p as G}from"./chunks/PdfObjectAddon.3fb28fa6.js";import{p as M,F as Y}from"./chunks/Calibrator-v3.e5855fdf.js";import{p as J}from"./chunks/Button.fd2868e0.js";import{I as K}from"./chunks/16.b52b2cd6.js";import"./chunks/floating-ui.dom.browser.min.b27d3e90.js";import"./chunks/use-focus.ae494a4f.js";import"./chunks/toNumber.09abc7f0.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/memoize.8367968b.js";import"./chunks/index.317e3ae4.js";import"./chunks/16.fde318a4.js";import"./chunks/commonjsHelpers.042e6b4d.js";import"./chunks/utils-6ba05f5b.79940067.js";import"./chunks/16.9031914a.js";import"./chunks/Divider.6aa75b3f.js";import"./chunks/Divider.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Select.6cd029a4.js";import"./chunks/Dropdown.d6477f88.js";import"./chunks/Dropdown.vue_vue_type_style_index_0_lang.b41e9581.js";import"./chunks/index.ce054078.js";import"./chunks/Input.e1d0f6fd.js";import"./chunks/index.a3ecab28.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/SpinnerRing.ddaf1384.js";import"./chunks/adapter.ed7d0d89.js";import"./chunks/use-loading.2edea5c6.js";import"./chunks/defu.573334b8.js";import"./chunks/value.830bdabd.js";import"./chunks/Heading.bfca30db.js";import"./chunks/Heading.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/use-selector.93e7b023.js";import"./chunks/focus.ec676fab.js";import"./chunks/index.d6da2585.js";import"./chunks/debounce.425ad733.js";import"./chunks/toInteger.cccd26ae.js";import"./chunks/toString.5230fc0f.js";import"./chunks/isArray.513c67aa.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.4ed993c7.js";function Q(a,t={}){const s=v(!0),p=v();async function d(){if(l(),a.value){const{default:c}=await T(()=>import("./chunks/interact.min.6dc930b6.js").then(r=>r.i),["assets/chunks/interact.min.6dc930b6.js","assets/chunks/commonjsHelpers.042e6b4d.js"]);p.value=c(a.value).draggable({inertia:!0,enabled:s.value,autoScroll:!0,onstart:t.onstart,onmove:t.onmove,onend:t.onend})}}function l(){p.value&&p.value.unset()}return g(a,async()=>{await d()}),g(s,c=>{p.value&&p.value.draggable(c)}),B(()=>{l()}),s}const X=S({props:{scale:{type:Number,default:1},width:{type:Number,default:198},height:{type:Number,default:106},disabled:{type:Boolean,default:!1}},emits:["landed"],setup(a,{emit:t}){const s=P("object"),p=m(a,"scale"),d=m(a,"width"),l=m(a,"height"),c=C(!1),r=C(0),n=C(0),u=k(()=>{const o=[];return a.disabled&&o.push("pdf-helipad--disabled"),o}),e=Q(s,{onstart(){const{left:o,top:h}=s.value.getBoundingClientRect();c.value=!0,r.value=o,n.value=h},onmove(o){r.value=o.clientX-o.rect.width*p.value/2,n.value=o.clientY-o.rect.height*p.value/2},onend(o){if(o.relatedTarget){const h=o.relatedTarget,w=j({reference:h,object:s.value,scale:p.value});t("landed",{...w,width:d.value,height:l.value})}c.value=!1}});return N(()=>{s.value&&(c.value?(s.value.style.position="fixed",s.value.style.transform=`translate(${r.value}px, ${n.value}px) scale(${p.value})`,s.value.style.zIndex="50"):(s.value.style.position="absolute",s.value.style.transform="translate(0px, 0px)",s.value.style.zIndex="2"))}),g(()=>a.disabled,o=>{e.value=!o},{immediate:!0}),{classNames:u}}});const W={class:"pdf-object__container"},Z={class:"pdf-object__container"};function ss(a,t,s,p,d,l){return A(),_("div",{"data-testid":"pdf-helipad",class:R(["pdf-helipad",a.classNames])},[i("div",{ref:"object","data-testid":"pdf-helipad-object",class:"pdf-object pdf-object--external",style:q({width:`${a.width}px`,height:`${a.height}px`})},[i("div",W,[E(a.$slots,"default")])],4),i("div",{class:"pdf-object pdf-object--external pdf-helipad__ghost",style:q({width:`${a.width}px`,height:`${a.height}px`})},[i("div",Z,[E(a.$slots,"default")])],4)],2)}const x=O(X,[["render",ss]]),f="/design-system/assets/img-helicopter.70243ad0.svg",as=b('<h1 id="pdf-helipad" tabindex="-1">PDF Helipad <a class="header-anchor" href="#pdf-helipad" aria-label="Permalink to &quot;PDF Helipad&quot;">​</a></h1><blockquote><p>Add object to PDF Viewer with Drag&#39;n&#39;Drop</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;">​</a></h3><p>(Drag this to PDF Viewer)</p>',5),ns=["src"],ls=["src"],os=b(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-helipad</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:scale</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scale</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@landed</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">onLanded</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">w-full h-full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IMG_HELICOPTER</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-pdf-helipad</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-viewer</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">FILE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model:scale</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">scale</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-object</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">v-for</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">(object, i) in objects</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">:key</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object._id</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">v-model:page</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object.page</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">v-model:x</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object.x</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">v-model:y</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object.y</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">v-model:width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object.width</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">v-model:height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object.height</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">w-full h-full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IMG_HELICOPTER</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-object-addon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">size</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sm</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">danger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">remove(i)</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">IconClose</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-pdf-object-addon</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-pdf-object</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-pdf-viewer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> FILE </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">~/assets/Calibrator-v3.pdf?url</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> IMG_HELICOPTER </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">~/assets/helicopter.svg</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">PdfHelipadResult</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@privyid/persona/core</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PdfObject</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">_id</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">symbol</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">page</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> scale   </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> objects </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PdfObject</span><span style="color:#A6ACCD;">[]</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">([])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">onLanded</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PdfHelipadResult</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">objects</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">push</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      _id   </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">Symbol</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ObjectId</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      page  </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">page</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      x     </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">x</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      y     </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">y</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      width </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      height</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">item</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">height</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">remove</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">objects</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">splice</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">index</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="disabled-state" tabindex="-1">Disabled State <a class="header-anchor" href="#disabled-state" aria-label="Permalink to &quot;Disabled State&quot;">​</a></h2>`,2),ps=["src"],es=b(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-helipad</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">disabled</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">img</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">w-full h-full</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IMG_HELICOPTER</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-pdf-helipad</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>scale</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>1</code></td><td>Object scale</td></tr><tr><td><code>width</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>198</code></td><td>Object width</td></tr><tr><td><code>height</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>106</code></td><td>Object height</td></tr><tr><td><code>disabled</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Disabled state</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content to place inside the <code>&lt;p-pdf-helipad&gt;</code></td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td><code>landed</code></td><td>PdfHelipadResult</td><td>Event object successfully dropped</td></tr></tbody></table>`,8),Qs=JSON.parse(`{"title":"PDF Helipad · Components","description":"Add object to PDF Viewer with Drag'n'Drop","frontmatter":{"title":"PDF Helipad · Components","description":"Add object to PDF Viewer with Drag'n'Drop"},"headers":[],"relativePath":"components/pdf-helipad/index.md","filePath":"components/pdf-helipad/index.md"}`),ts={name:"components/pdf-helipad/index.md"},Xs=Object.assign(ts,{setup(a){const t=V([]),s=C(1);function p(l){t.push({_id:Symbol("ObjectId"),page:l.page,x:l.x,y:l.y,width:l.width,height:l.height})}function d(l){t.splice(l,1)}return(l,c)=>{const r=$("preview");return A(),_("div",null,[as,D(x,{scale:y(s),onLanded:p},{default:F(()=>[i("img",{class:"w-full h-full",src:y(f)},null,8,ns)]),_:1},8,["scale"]),D(r,null,{default:F(()=>[D(M,{src:y(Y),scale:y(s),"onUpdate:scale":c[0]||(c[0]=n=>H(s)?s.value=n:null)},{default:F(()=>[(A(!0),_(U,null,L(y(t),(n,u)=>(A(),z(I,{key:n._id,page:n.page,"onUpdate:page":e=>n.page=e,x:n.x,"onUpdate:x":e=>n.x=e,y:n.y,"onUpdate:y":e=>n.y=e,width:n.width,"onUpdate:width":e=>n.width=e,height:n.height,"onUpdate:height":e=>n.height=e},{default:F(()=>[i("img",{class:"w-full h-full rounded",src:y(f)},null,8,ls),D(G,null,{default:F(()=>[D(J,{size:"sm",icon:"",color:"danger",onClick:e=>d(u)},{default:F(()=>[D(y(K))]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["page","onUpdate:page","x","onUpdate:x","y","onUpdate:y","width","onUpdate:width","height","onUpdate:height"]))),128))]),_:1},8,["src","scale"])]),_:1}),os,D(r,null,{default:F(()=>[D(x,{disabled:""},{default:F(()=>[i("img",{class:"w-full h-full",src:y(f)},null,8,ps)]),_:1})]),_:1}),es])}}});export{Qs as __pageData,Xs as default};