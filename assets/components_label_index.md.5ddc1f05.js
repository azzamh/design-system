import{D as _}from"./chunks/Dot.7c9de070.js";import{I as h}from"./chunks/16.aa923887.js";import{i as g,j as A,k as m,f as y,r as D,o as r,c as F,q as f,t as v,e as s,g as L,a,n as E,w as e,b as c}from"./app.389f7721.js";import"./chunks/utils-6ba05f5b.0e142142.js";const T=g({components:{Dot:_,IconClose:h},props:{color:{type:String,default:"primary"},variant:{type:String,default:"default"},size:{type:String,default:"md"},dismissable:{type:Boolean,default:!1}},emits:["dismissed"],setup(d,{emit:n}){const p=A(!0),l=m(()=>{const o=["label"];return d.color&&o.push(`label--${d.color}`),d.variant&&o.push(`label--${d.variant}`),d.size&&o.push(`label--${d.size}`),o});function i(){p.value=!1,n("dismissed")}return{classNames:l,show:p,close:i}}});function q(d,n,p,l,i,o){const u=D("Dot"),b=D("IconClose");return d.show?(r(),F("div",{key:0,"data-testid":"label",class:E(d.classNames)},[d.variant==="dot"?(r(),f(u,{key:0,"data-testid":"dot",color:d.color},null,8,["color"])):v("",!0),s(),L(d.$slots,"default"),d.dismissable?(r(),F("span",{key:1,"data-testid":"label-dismiss",class:"label__dismiss",onClick:n[0]||(n[0]=(...C)=>d.close&&d.close(...C))},[a(b)])):v("",!0)],2)):v("",!0)}const t=y(T,[["render",q]]);const S=c('<h1 id="label" tabindex="-1" data-v-76d1e1ac>Label <a class="header-anchor" href="#label" aria-hidden="true" data-v-76d1e1ac>#</a></h1><h2 id="usage" tabindex="-1" data-v-76d1e1ac>Usage <a class="header-anchor" href="#usage" aria-hidden="true" data-v-76d1e1ac>#</a></h2><h3 id="basic-usage" tabindex="-1" data-v-76d1e1ac>Basic Usage <a class="header-anchor" href="#basic-usage" aria-hidden="true" data-v-76d1e1ac>#</a></h3>',3),x=c(`<div class="language-vue" data-v-76d1e1ac><button title="Copy Code" class="copy" data-v-76d1e1ac></button><span class="lang" data-v-76d1e1ac>vue</span><pre class="shiki" data-v-76d1e1ac><code data-v-76d1e1ac><span class="line" data-v-76d1e1ac><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>template</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>template</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac></span></code></pre></div><h2 id="colors" tabindex="-1" data-v-76d1e1ac>Colors <a class="header-anchor" href="#colors" aria-hidden="true" data-v-76d1e1ac>#</a></h2><p data-v-76d1e1ac>Label available in 7 different colors. There are <code data-v-76d1e1ac>primary</code>, <code data-v-76d1e1ac>secondary</code>, <code data-v-76d1e1ac>success</code>, <code data-v-76d1e1ac>info</code>, <code data-v-76d1e1ac>warning</code>, <code data-v-76d1e1ac>danger</code> and <code data-v-76d1e1ac>gold</code>. Default color is <code data-v-76d1e1ac>primary</code></p>`,3),k=c(`<div class="language-vue" data-v-76d1e1ac><button title="Copy Code" class="copy" data-v-76d1e1ac></button><span class="lang" data-v-76d1e1ac>vue</span><pre class="shiki" data-v-76d1e1ac><code data-v-76d1e1ac><span class="line" data-v-76d1e1ac><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>template</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac> </span><span style="color:#C792EA;" data-v-76d1e1ac>color</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#C3E88D;" data-v-76d1e1ac>primary</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac> </span><span style="color:#C792EA;" data-v-76d1e1ac>color</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#C3E88D;" data-v-76d1e1ac>secondary</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac> </span><span style="color:#C792EA;" data-v-76d1e1ac>color</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#C3E88D;" data-v-76d1e1ac>success</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac> </span><span style="color:#C792EA;" data-v-76d1e1ac>color</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#C3E88D;" data-v-76d1e1ac>info</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac> </span><span style="color:#C792EA;" data-v-76d1e1ac>color</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#C3E88D;" data-v-76d1e1ac>warning</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac> </span><span style="color:#C792EA;" data-v-76d1e1ac>color</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#C3E88D;" data-v-76d1e1ac>danger</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac> </span><span style="color:#C792EA;" data-v-76d1e1ac>color</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#C3E88D;" data-v-76d1e1ac>gold</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>template</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac></span></code></pre></div><h2 id="variants" tabindex="-1" data-v-76d1e1ac>Variants <a class="header-anchor" href="#variants" aria-hidden="true" data-v-76d1e1ac>#</a></h2><p data-v-76d1e1ac>Label has 3 variants namely <code data-v-76d1e1ac>default</code>, <code data-v-76d1e1ac>light</code> and <code data-v-76d1e1ac>dot</code>. When variant is not set, label will looks as a <code data-v-76d1e1ac>default</code></p>`,3),z=c(`<div class="language-vue" data-v-76d1e1ac><button title="Copy Code" class="copy" data-v-76d1e1ac></button><span class="lang" data-v-76d1e1ac>vue</span><pre class="shiki" data-v-76d1e1ac><code data-v-76d1e1ac><span class="line" data-v-76d1e1ac><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>template</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac> </span><span style="color:#C792EA;" data-v-76d1e1ac>variant</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#C3E88D;" data-v-76d1e1ac>light</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac> </span><span style="color:#C792EA;" data-v-76d1e1ac>variant</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#C3E88D;" data-v-76d1e1ac>dot</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>template</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac></span></code></pre></div><h2 id="sizing" tabindex="-1" data-v-76d1e1ac>Sizing <a class="header-anchor" href="#sizing" aria-hidden="true" data-v-76d1e1ac>#</a></h2><p data-v-76d1e1ac>Label has 4 size, namely <code data-v-76d1e1ac>lg</code>, <code data-v-76d1e1ac>md</code>, <code data-v-76d1e1ac>sm</code> and <code data-v-76d1e1ac>xs</code>. When size is not set, default label is <code data-v-76d1e1ac>md</code></p>`,3),I=c(`<div class="language-vue" data-v-76d1e1ac><button title="Copy Code" class="copy" data-v-76d1e1ac></button><span class="lang" data-v-76d1e1ac>vue</span><pre class="shiki" data-v-76d1e1ac><code data-v-76d1e1ac><span class="line" data-v-76d1e1ac><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>template</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac> </span><span style="color:#C792EA;" data-v-76d1e1ac>size</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#C3E88D;" data-v-76d1e1ac>lg</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac> </span><span style="color:#C792EA;" data-v-76d1e1ac>size</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#C3E88D;" data-v-76d1e1ac>md</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac> </span><span style="color:#C792EA;" data-v-76d1e1ac>size</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#C3E88D;" data-v-76d1e1ac>sm</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac> </span><span style="color:#C792EA;" data-v-76d1e1ac>size</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#C3E88D;" data-v-76d1e1ac>xs</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>template</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac></span></code></pre></div><h2 id="dismissible" tabindex="-1" data-v-76d1e1ac>Dismissible <a class="header-anchor" href="#dismissible" aria-hidden="true" data-v-76d1e1ac>#</a></h2><p data-v-76d1e1ac>Label has dismiss feature. It can be show or hide by <code data-v-76d1e1ac>dismissable</code> props. If <code data-v-76d1e1ac>dismissable</code> set to <code data-v-76d1e1ac>true</code>, dismiss button will show.</p>`,3),P=c(`<div class="language-vue" data-v-76d1e1ac><button title="Copy Code" class="copy" data-v-76d1e1ac></button><span class="lang" data-v-76d1e1ac>vue</span><pre class="shiki" data-v-76d1e1ac><code data-v-76d1e1ac><span class="line" data-v-76d1e1ac><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>template</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac> :</span><span style="color:#C792EA;" data-v-76d1e1ac>dismissable</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#FF9CAC;" data-v-76d1e1ac>true</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac> </span><span style="color:#C792EA;" data-v-76d1e1ac>variant</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#C3E88D;" data-v-76d1e1ac>light</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac> :</span><span style="color:#C792EA;" data-v-76d1e1ac>dismissable</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#FF9CAC;" data-v-76d1e1ac>true</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#A6ACCD;" data-v-76d1e1ac>  </span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac> </span><span style="color:#C792EA;" data-v-76d1e1ac>variant</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#C3E88D;" data-v-76d1e1ac>dot</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac> :</span><span style="color:#C792EA;" data-v-76d1e1ac>dismissable</span><span style="color:#89DDFF;" data-v-76d1e1ac>=</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#FF9CAC;" data-v-76d1e1ac>true</span><span style="color:#89DDFF;" data-v-76d1e1ac>&quot;</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span><span style="color:#A6ACCD;" data-v-76d1e1ac>Label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>p-label</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac><span style="color:#89DDFF;" data-v-76d1e1ac>&lt;/</span><span style="color:#F07178;" data-v-76d1e1ac>template</span><span style="color:#89DDFF;" data-v-76d1e1ac>&gt;</span></span>
<span class="line" data-v-76d1e1ac></span></code></pre></div><h2 id="api" tabindex="-1" data-v-76d1e1ac>API <a class="header-anchor" href="#api" aria-hidden="true" data-v-76d1e1ac>#</a></h2><h3 id="props" tabindex="-1" data-v-76d1e1ac>Props <a class="header-anchor" href="#props" aria-hidden="true" data-v-76d1e1ac>#</a></h3><table data-v-76d1e1ac><thead data-v-76d1e1ac><tr data-v-76d1e1ac><th data-v-76d1e1ac>Props</th><th style="text-align:center;" data-v-76d1e1ac>Type</th><th style="text-align:center;" data-v-76d1e1ac>Default</th><th data-v-76d1e1ac>Description</th></tr></thead><tbody data-v-76d1e1ac><tr data-v-76d1e1ac><td data-v-76d1e1ac><code data-v-76d1e1ac>color</code></td><td style="text-align:center;" data-v-76d1e1ac><code data-v-76d1e1ac>String</code></td><td style="text-align:center;" data-v-76d1e1ac><code data-v-76d1e1ac>primary</code></td><td data-v-76d1e1ac>Label color variant, valid value is <code data-v-76d1e1ac>primary</code>, <code data-v-76d1e1ac>secondary</code>, <code data-v-76d1e1ac>success</code>, <code data-v-76d1e1ac>info</code>, <code data-v-76d1e1ac>warning</code>, <code data-v-76d1e1ac>danger</code>, <code data-v-76d1e1ac>gold</code></td></tr><tr data-v-76d1e1ac><td data-v-76d1e1ac><code data-v-76d1e1ac>variant</code></td><td style="text-align:center;" data-v-76d1e1ac><code data-v-76d1e1ac>String</code></td><td style="text-align:center;" data-v-76d1e1ac><code data-v-76d1e1ac>default</code></td><td data-v-76d1e1ac>Label variant, valid value is <code data-v-76d1e1ac>default</code>, <code data-v-76d1e1ac>light</code> and <code data-v-76d1e1ac>dot</code>.</td></tr><tr data-v-76d1e1ac><td data-v-76d1e1ac><code data-v-76d1e1ac>size</code></td><td style="text-align:center;" data-v-76d1e1ac><code data-v-76d1e1ac>String</code></td><td style="text-align:center;" data-v-76d1e1ac><code data-v-76d1e1ac>md</code></td><td data-v-76d1e1ac>Label variant, valid value is <code data-v-76d1e1ac>lg</code>, <code data-v-76d1e1ac>md</code>, <code data-v-76d1e1ac>sm</code> and <code data-v-76d1e1ac>xs</code>.</td></tr><tr data-v-76d1e1ac><td data-v-76d1e1ac><code data-v-76d1e1ac>dismissable</code></td><td style="text-align:center;" data-v-76d1e1ac><code data-v-76d1e1ac>Boolean</code></td><td style="text-align:center;" data-v-76d1e1ac><code data-v-76d1e1ac>false</code></td><td data-v-76d1e1ac>Show / Hide dismiss button</td></tr></tbody></table><h3 id="slots" tabindex="-1" data-v-76d1e1ac>Slots <a class="header-anchor" href="#slots" aria-hidden="true" data-v-76d1e1ac>#</a></h3><table data-v-76d1e1ac><thead data-v-76d1e1ac><tr data-v-76d1e1ac><th data-v-76d1e1ac>Name</th><th data-v-76d1e1ac>Description</th></tr></thead><tbody data-v-76d1e1ac><tr data-v-76d1e1ac><td data-v-76d1e1ac><code data-v-76d1e1ac>default</code></td><td data-v-76d1e1ac>Content to place in badge</td></tr></tbody></table><h3 id="events" tabindex="-1" data-v-76d1e1ac>Events <a class="header-anchor" href="#events" aria-hidden="true" data-v-76d1e1ac>#</a></h3><table data-v-76d1e1ac><thead data-v-76d1e1ac><tr data-v-76d1e1ac><th data-v-76d1e1ac>Name</th><th data-v-76d1e1ac>Arguments</th><th data-v-76d1e1ac>Description</th></tr></thead><tbody data-v-76d1e1ac><tr data-v-76d1e1ac><td data-v-76d1e1ac><code data-v-76d1e1ac>dismissed</code></td><td data-v-76d1e1ac>-</td><td data-v-76d1e1ac>Event when close button clicked</td></tr></tbody></table>`,8),U=JSON.parse('{"title":"Label","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[{"level":3,"title":"Basic Usage","slug":"basic-usage","link":"#basic-usage","children":[]}]},{"level":2,"title":"Colors","slug":"colors","link":"#colors","children":[]},{"level":2,"title":"Variants","slug":"variants","link":"#variants","children":[]},{"level":2,"title":"Sizing","slug":"sizing","link":"#sizing","children":[]},{"level":2,"title":"Dismissible","slug":"dismissible","link":"#dismissible","children":[]},{"level":2,"title":"API","slug":"api","link":"#api","children":[{"level":3,"title":"Props","slug":"props","link":"#props","children":[]},{"level":3,"title":"Slots","slug":"slots","link":"#slots","children":[]},{"level":3,"title":"Events","slug":"events","link":"#events","children":[]}]}],"relativePath":"components/label/index.md"}'),V={name:"components/label/index.md"},w=Object.assign(V,{setup(d){return(n,p)=>{const l=D("preview");return r(),F("div",null,[S,a(l,null,{default:e(()=>[a(t,null,{default:e(()=>[s("Label")]),_:1})]),_:1}),x,a(l,null,{default:e(()=>[a(t,{color:"primary"},{default:e(()=>[s("Label")]),_:1}),a(t,{color:"secondary"},{default:e(()=>[s("Label")]),_:1}),a(t,{color:"success"},{default:e(()=>[s("Label")]),_:1}),a(t,{color:"info"},{default:e(()=>[s("Label")]),_:1}),a(t,{color:"warning"},{default:e(()=>[s("Label")]),_:1}),a(t,{color:"danger"},{default:e(()=>[s("Label")]),_:1}),a(t,{color:"gold"},{default:e(()=>[s("Label")]),_:1})]),_:1}),k,a(l,null,{default:e(()=>[a(t,null,{default:e(()=>[s("Label")]),_:1}),a(t,{variant:"light"},{default:e(()=>[s("Label")]),_:1}),a(t,{variant:"dot"},{default:e(()=>[s("Label")]),_:1})]),_:1}),z,a(l,null,{default:e(()=>[a(t,{size:"lg"},{default:e(()=>[s("Label")]),_:1}),a(t,{size:"md"},{default:e(()=>[s("Label")]),_:1}),a(t,{size:"sm"},{default:e(()=>[s("Label")]),_:1}),a(t,{size:"xs"},{default:e(()=>[s("Label")]),_:1})]),_:1}),I,a(l,null,{default:e(()=>[a(t,{dismissable:!0},{default:e(()=>[s("Label")]),_:1}),a(t,{variant:"light",dismissable:!0},{default:e(()=>[s("Label")]),_:1}),a(t,{variant:"dot",dismissable:!0},{default:e(()=>[s("Label")]),_:1})]),_:1}),P])}}}),j=y(w,[["__scopeId","data-v-76d1e1ac"]]);export{U as __pageData,j as default};