import{u as $,A as I,_ as M,v as T,b as O,d as k,ab as V,y as n,O as g,F as y,X as B,N as l,R as C,L as q,M as H,a6 as j}from"./chunks/framework.0fccce8d.js";import{c as R}from"./chunks/create-image.219ca7ba.js";import{u as G}from"./chunks/index.7cef9018.js";import{u as J}from"./chunks/index.aa62d5f4.js";import{f as Y}from"./chunks/base64.041d95b4.js";import{c as X}from"./chunks/canvas.b003a521.js";import{l as K}from"./chunks/load-font.80ff46b5.js";import{c as Q}from"./chunks/use-focus.b9bc053c.js";import{a as W}from"./chunks/index.9c3046df.js";import{p as Z,F as ss}from"./chunks/Calibrator-v3.26ab616f.js";import{p as ts}from"./chunks/PdfObject.64c4fc50.js";import"./chunks/avatar.bd58a373.js";import"./chunks/color-hash.af77277d.js";import"./chunks/defu.573334b8.js";import"./chunks/load-image.265b152a.js";import"./chunks/baseClamp.947838b9.js";import"./chunks/toNumber.09abc7f0.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/index.438b5585.js";import"./chunks/index.8df9a8d7.js";import"./chunks/20.51db15aa.js";import"./chunks/20.ff674c0e.js";import"./chunks/Button.5459a2e3.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.b8d21c3a.js";import"./chunks/index.a3ecab28.js";import"./chunks/Divider.1010fab7.js";import"./chunks/Divider.vue_vue_type_style_index_0_lang.74cc3f96.js";import"./chunks/Select.72cb5247.js";import"./chunks/Dropdown.8231e084.js";import"./chunks/Dropdown.vue_vue_type_style_index_0_lang.8ba0e7c1.js";import"./chunks/floating-ui.dom.d66a0422.js";import"./chunks/16.9c68e410.js";import"./chunks/DropdownHeader.45481121.js";import"./chunks/Subheading.c17e43d6.js";import"./chunks/Input.ea1efb3a.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.57c717ef.js";import"./chunks/accept.c8f4354a.js";import"./chunks/20.fc3545e2.js";import"./chunks/SpinnerRing.932d0309.js";import"./chunks/value.d2e2d3a1.js";import"./chunks/adapter.fa7db985.js";import"./chunks/use-loading.d6339770.js";import"./chunks/Heading.161a587e.js";import"./chunks/Heading.vue_vue_type_style_index_0_lang.6df81cbe.js";import"./chunks/use-selector.d381ab2b.js";import"./chunks/focus.33532f0c.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.09847e4e.js";import"./chunks/debounce.425ad733.js";import"./chunks/toInteger.cccd26ae.js";import"./chunks/toString.314d06e3.js";import"./chunks/isArray.513c67aa.js";import"./chunks/memoize.19554dab.js";import"./chunks/eq.83a0dc05.js";function N(s,c,D,t,F,a){const p=[];s.font=`${D}px ${JSON.stringify(F)}`,s.textBaseline="top";let e="",d,r,h;for(const E of c.split(`
`)){const m=E.split(" ");for(d=0;d<m.length;d++){for(r=m[d],h=s.measureText(r);h.width>a;)r=r.slice(0,Math.max(0,r.length-1)),h=s.measureText(r);m[d]!==r&&(m.splice(d+1,0,m[d].slice(r.length)),m[d]=r),r=`${e+m[d]} `,h=s.measureText(r),h.width>a&&d>0?(p.push(e),e=`${m[d]} `):e=r}p.push(e),e=""}return p}async function as(s){var _,S,z,L;const{text:c,color:D,padding:t,font:F,height:a,width:p,size:e,minSize:d,maxSize:r,fixedSize:h,label:E}=s;await K(F);const m=(_=s.canvas)!=null?_:X(p,a),o=m.getContext("2d");let A=t;if(E){const x=(S=s.labelSize)!=null?S:e,v=(z=s.labelFont)!=null?z:F,u=(L=s.labelColor)!=null?L:D;o.font=`${x}px ${JSON.stringify(v)}`,o.textBaseline="top",o.textAlign="start",o.fillStyle=u,o.fillText(E,t,A),A+=x*s.lineHeight}if(c){const x=p-t*2,v=a-(A+t);let u=e,f=u*s.lineHeight,w=N(o,c,u,f,F,x);if(!h){let b=w.length*f,U=0;do{const P=Q(Math.round((v/b*u+u)/2),d,r);if(P===u)break;u=P,f=u*s.lineHeight,w=N(o,c,u,f,F,x),b=w.length*f}while(b>v&&++U<5)}o.font=`${u}px ${JSON.stringify(F)}`,o.textBaseline="top",o.textAlign="start",o.fillStyle=D,o.font=`${u}px ${JSON.stringify(F)}`,o.textBaseline="top",o.textAlign="start",o.fillStyle=D;for(const b of w)o.fillText(b,t,A),A+=f}return m.toDataURL("image/png")}const es=$({props:{modelValue:{type:[String,globalThis.File],default:""},modelModifiers:{type:Object,default:()=>({})},text:{type:String,default:""},width:{type:Number,default:198},height:{type:Number,default:106},color:{type:String,default:"#4a5362"},size:{type:Number,default:16},minSize:{type:Number,default:11},maxSize:{type:Number,default:72},fixedSize:{type:Boolean,default:!1},font:{type:String,default:"DM Sans"},lineHeight:{type:Number,default:1.5},padding:{type:Number,default:12},label:{type:String,default:""},labelColor:{type:String,default:"#9EA0A2"},labelFont:{type:String,default:void 0},labelSize:{type:Number,default:12}},setup(s){const c=J(s),D=G(c,R(s.width,s.height));W(()=>[s.text,s.width,s.height,s.color,s.size,s.fixedSize,s.font,s.lineHeight,s.padding,s.label,s.labelColor,s.labelFont,s.labelSize],()=>{t()},{debounce:300}),I(()=>{t()});async function t(){const F=await as(s),a=s.modelModifiers.base64?F:Y(F);c.value=a}return{preview:D}}});const ns=["width","height","src","alt"];function ls(s,c,D,t,F,a){return T(),O("img",{class:"pdf-text",width:s.width,height:s.height,src:s.preview,alt:s.text},null,8,ns)}const i=M(es,[["render",ls]]),os=C('<h1 id="pdf-text" tabindex="-1">PDF Text <a class="header-anchor" href="#pdf-text" aria-label="Permalink to &quot;PDF Text&quot;">​</a></h1><blockquote><p>Generate text for Pdf Object</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;">​</a></h3>',4),ps=C(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-text</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum dolor sit amet consectetur adipisicing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h3 id="using-with-pdf-object" tabindex="-1">Using with PDF Object <a class="header-anchor" href="#using-with-pdf-object" aria-label="Permalink to &quot;Using with PDF Object&quot;">​</a></h3>`,2),cs=C(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-viewer</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">FILE</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-object</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">v-model:page</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object.page</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">v-model:x</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object.x</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">v-model:y</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object.y</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">v-model:width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object.width</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">v-model:height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object.height</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-text</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object.src</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:width</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object.width</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#C792EA;">:height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">object.height</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        text=&quot;Lorem ipsum dolor sit amet consectetur adipisicing&quot; /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-pdf-object</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p-pdf-viewer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> FILE </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">~/assets/Calibrator-v3.pdf?url</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">PdfObject</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">src</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">File</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">page</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">x</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">y</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> object </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">reactive</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">PdfObject</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">src   </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">page  </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">x     </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">y     </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">width </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="change-font" tabindex="-1">Change Font <a class="header-anchor" href="#change-font" aria-label="Permalink to &quot;Change Font&quot;">​</a></h2><p>You can the font using prop <code>font</code>, it importing font from <a href="https://fonts.google.com/" target="_blank" rel="noreferrer">Google Font</a>, default is <code>DM Sans</code></p>`,3),rs=C(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">font</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Indie Flower</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum dolor sit amet consectetur adipisicing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">font</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Satisfy</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum dolor sit amet consectetur adipisicing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="change-color" tabindex="-1">Change Color <a class="header-anchor" href="#change-color" aria-label="Permalink to &quot;Change Color&quot;">​</a></h2>`,2),is=C(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#004C9D</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum dolor sit amet consectetur adipisicing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#23B242</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum dolor sit amet consectetur adipisicing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">color</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">#E42E2C</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum dolor sit amet consectetur adipisicing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="label" tabindex="-1">Label <a class="header-anchor" href="#label" aria-label="Permalink to &quot;Label&quot;">​</a></h2><p>You can add label text using prop <code>label</code>.</p>`,3),Ds=C(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-text</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Noted from Tarjono (TR001)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum dolor sit amet consectetur adipisicing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="fixed-font-size" tabindex="-1">Fixed Font Size <a class="header-anchor" href="#fixed-font-size" aria-label="Permalink to &quot;Fixed Font Size&quot;">​</a></h2><p>By default, font-size will automatically adjusted to fit the image size and text length. If you want keep font-size fixed all time, add prop <code>fixed-size</code>.</p>`,3),Fs={class:"grid grid-cols-2 grid-rows-2 gap-4"},ds=C(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">grid grid-cols-2 grid-rows-2 gap-4</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-text</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Fixed Size</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum dolor adipisicing</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">fixed-size</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-text</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Default</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum dolor adipisicing</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-text</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Fixed Size (long text)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, maxime. Amet enim soluta?</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">fixed-size</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-text</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Default (long text)</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, maxime. Amet enim soluta?</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="binding-v-model" tabindex="-1">Binding v-model <a class="header-anchor" href="#binding-v-model" aria-label="Permalink to &quot;Binding v-model&quot;">​</a></h2><p>You can bind the generated result with <code>v-model</code>.</p>`,3),ys=C(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">result</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">File</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p><strong>result</strong></p>`,2),us={class:"truncate"},ms=y("h3",{id:"encode-to-base64",tabindex:"-1"},[q("Encode to base64 "),y("a",{class:"header-anchor",href:"#encode-to-base64","aria-label":'Permalink to "Encode to base64"'},"​")],-1),gs=y("p",null,[q("If you prefer "),y("a",{href:"https://en.wikipedia.org/wiki/Data_URI_scheme",target:"_blank",rel:"noreferrer"},"base64-dataURI"),q(" format, add modifier "),y("code",null,".base64"),q(" to your "),y("code",null,"v-model"),q(".")],-1),Cs=y("p",null,[y("strong",null,"result")],-1),hs={class:"truncate"},fs=C(`<div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p-pdf-text</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">text</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Lorem ipsum dolor sit amet consectetur adipisicing</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model.base64</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">result</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>width</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>198</code></td><td>Image&#39;s width</td></tr><tr><td><code>height</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>106</code></td><td>Image&#39;s width</td></tr><tr><td><code>text</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Image&#39;s text</td></tr><tr><td><code>font</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>DM Sans</code></td><td>Text font family, imported from <a href="https://fonts.google.com/" target="_blank" rel="noreferrer">Google Font</a></td></tr><tr><td><code>color</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>#4a5362</code></td><td>Text color</td></tr><tr><td><code>minSize</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>11</code></td><td>Minimum font size when auto-resize</td></tr><tr><td><code>maxSize</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>72</code></td><td>Maximum font size when auto-resize</td></tr><tr><td><code>size</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>16</code></td><td>Text font size, only work on <code>fixed-size</code> mode</td></tr><tr><td><code>fixedSize</code></td><td style="text-align:center;"><code>Boolean</code></td><td style="text-align:center;"><code>false</code></td><td>Enable fixed-size mode</td></tr><tr><td><code>lineHeight</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>1.5</code></td><td>Text line height</td></tr><tr><td><code>padding</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>12</code></td><td>Text padding</td></tr><tr><td><code>label</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Add label text</td></tr><tr><td><code>labelSize</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>12</code></td><td>Label&#39;s font size</td></tr><tr><td><code>labelColor</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>#9EA0A2</code></td><td>Label&#39;s text color</td></tr><tr><td><code>labelFont</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Label&#39;s font family</td></tr><tr><td><code>modelValue</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Result of generated image</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td colspan="2" class="text-center">There no slots here</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td colspan="3" class="text-center">There no props here</td></tr></tbody></table>`,8),bt=JSON.parse('{"title":"PDF Text · Components","description":"Generate text for Pdf Object","frontmatter":{"title":"PDF Text · Components","description":"Generate text for Pdf Object"},"headers":[],"relativePath":"components/pdf-text/index.md","filePath":"components/pdf-text/index.md"}'),As={name:"components/pdf-text/index.md"},qt=Object.assign(As,{setup(s){const c=k(),D=k(),t=V({src:void 0,page:1,x:100,y:200,width:void 0,height:void 0});return(F,a)=>{const p=H("preview");return T(),O("div",null,[os,n(p,{class:"flex-col"},{default:g(()=>[n(i,{text:"Lorem ipsum dolor sit amet consectetur adipisicing"})]),_:1}),ps,n(p,null,{default:g(()=>[n(Z,{src:l(ss)},{default:g(()=>[n(ts,{page:l(t).page,"onUpdate:page":a[1]||(a[1]=e=>l(t).page=e),x:l(t).x,"onUpdate:x":a[2]||(a[2]=e=>l(t).x=e),y:l(t).y,"onUpdate:y":a[3]||(a[3]=e=>l(t).y=e),width:l(t).width,"onUpdate:width":a[4]||(a[4]=e=>l(t).width=e),height:l(t).height,"onUpdate:height":a[5]||(a[5]=e=>l(t).height=e)},{default:g(()=>[n(i,{modelValue:l(t).src,"onUpdate:modelValue":a[0]||(a[0]=e=>l(t).src=e),modelModifiers:{base64:!0},width:l(t).width,height:l(t).height,text:"Lorem ipsum dolor sit amet consectetur adipisicing"},null,8,["modelValue","width","height"])]),_:1},8,["page","x","y","width","height"])]),_:1},8,["src"])]),_:1}),cs,n(p,{class:"flex-col"},{default:g(()=>[n(i,{font:"Indie Flower",text:"Lorem ipsum dolor sit amet consectetur adipisicing"}),n(i,{font:"Satisfy",text:"Lorem ipsum dolor sit amet consectetur adipisicing"})]),_:1}),rs,n(p,{class:"flex-col"},{default:g(()=>[n(i,{color:"#004C9D",text:"Lorem ipsum dolor sit amet consectetur adipisicing"}),n(i,{color:"#23B242",text:"Lorem ipsum dolor sit amet consectetur adipisicing"}),n(i,{color:"#E42E2C",text:"Lorem ipsum dolor sit amet consectetur adipisicing"})]),_:1}),is,n(p,{class:"flex-col"},{default:g(()=>[n(i,{label:"Noted from Tarjono (TR001)",text:"Lorem ipsum dolor sit amet consectetur adipisicing"})]),_:1}),Ds,n(p,null,{default:g(()=>[y("div",Fs,[n(i,{label:"Fixed Size",text:"Lorem ipsum dolor adipisicing","fixed-size":""}),n(i,{label:"Default",text:"Lorem ipsum dolor adipisicing"}),n(i,{label:"Fixed Size (long text)",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, maxime. Amet enim soluta?","fixed-size":""}),n(i,{label:"Default (long text)",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, maxime. Amet enim soluta?"})])]),_:1}),ds,n(p,{class:"flex-col"},{default:g(()=>[n(i,{text:"Lorem ipsum dolor sit amet consectetur adipisicing",modelValue:l(c),"onUpdate:modelValue":a[6]||(a[6]=e=>j(c)?c.value=e:null)},null,8,["modelValue"])]),_:1}),ys,y("pre",us,[y("code",null,B(l(c)),1)]),ms,gs,n(p,{class:"flex-col"},{default:g(()=>[n(i,{text:"Lorem ipsum dolor sit amet consectetur adipisicing",modelValue:l(D),"onUpdate:modelValue":a[7]||(a[7]=e=>j(D)?D.value=e:null),modelModifiers:{base64:!0}},null,8,["modelValue"])]),_:1}),Cs,y("pre",hs,[y("code",null,B(l(D)),1)]),fs])}}});export{bt as __pageData,qt as default};