import{_ as h}from"./chunks/icon-privy.0eeac7b5.js";import{p as E,F as i}from"./chunks/Calibrator-v3.5bb4af2a.js";import{p as _,a as v,b as f}from"./chunks/NavbarNav.bbdceb61.js";import{p as d}from"./chunks/NavItem.5ee5ca35.js";import{_ as F}from"./chunks/Button.vue_vue_type_script_setup_true_lang.6548455d.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.4ed993c7.js";import{_ as b}from"./chunks/FormGroup.vue_vue_type_style_index_0_lang.9fcce32d.js";import{p as w}from"./chunks/InputPassword.021c1a49.js";import{p as q}from"./chunks/Banner.354c05d8.js";import{p as D}from"./chunks/Toggle.2bd2477c.js";import{h as u,C,c as A,H as s,w as a,k as n,l,a1 as m,Q as p,o as P,a as o}from"./chunks/framework.c6b37a8b.js";import"./chunks/index.f0554c3a.js";import"./chunks/index.4e947356.js";import"./chunks/index.a9759927.js";import"./chunks/noop.cb277961.js";import"./chunks/20.f2486bd6.js";import"./chunks/20.c433ca92.js";import"./chunks/Divider.dd23b8a2.js";import"./chunks/Divider.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Select.ad48f852.js";import"./chunks/Dropdown.737ea8ae.js";import"./chunks/Dropdown.vue_vue_type_style_index_0_lang.485fd372.js";import"./chunks/use-focus.9e2f5fde.js";import"./chunks/baseClamp.947838b9.js";import"./chunks/toNumber.75689a18.js";import"./chunks/isObject.32699ff3.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/floating-ui.dom.546cdae4.js";import"./chunks/index.c3f1570d.js";import"./chunks/16.189b8710.js";import"./chunks/DropdownHeader.309775be.js";import"./chunks/Subheading.8e75f536.js";import"./chunks/Input.6ed451cb.js";import"./chunks/index.a3ecab28.js";import"./chunks/accept.c8f4354a.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/20.d08a37ef.js";import"./chunks/SpinnerRing.5dfc144c.js";import"./chunks/value.d2e2d3a1.js";import"./chunks/adapter.6b5fce95.js";import"./chunks/use-loading.59db4575.js";import"./chunks/defu.573334b8.js";import"./chunks/Heading.d1980c1d.js";import"./chunks/Heading.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/focus.33532f0c.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.f20852fd.js";import"./chunks/debounce.b619e377.js";import"./chunks/toInteger.d4d227f4.js";import"./chunks/toString.314d06e3.js";import"./chunks/isArray.513c67aa.js";import"./chunks/index.fe135e19.js";import"./chunks/Caption.deeadcb3.js";import"./chunks/Caption.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Text.3d64f603.js";import"./chunks/SpinnerRinggo.76282a62.js";import"./chunks/20.e6e48ea0.js";import"./chunks/index.43a77732.js";import"./chunks/use-singleton.7934a853.js";import"./chunks/20.735cef7a.js";import"./chunks/16.43f23024.js";import"./chunks/Banner.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/index.24ad3a6f.js";const T="/design-system/assets/Calibrator-v3_protected.3e45a89e.pdf",g="/design-system/assets/fixed-vs-fit.8d785873.svg";const x=p('<h1 id="pdf-viewer" tabindex="-1">PDF Viewer <a class="header-anchor" href="#pdf-viewer" aria-label="Permalink to &quot;PDF Viewer&quot;">​</a></h1><blockquote><p>Open and View PDF Document</p></blockquote><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="simple-usage" tabindex="-1">Simple Usage <a class="header-anchor" href="#simple-usage" aria-label="Permalink to &quot;Simple Usage&quot;">​</a></h3>',4),B=p(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-pdf-viewer</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;FILE&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> FILE </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;~/assets/Calibrator-v3.pdf&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-pdf-viewer</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;FILE&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> FILE </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;~/assets/Calibrator-v3.pdf&#39;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h3 id="with-header-and-footer" tabindex="-1">With Header And Footer <a class="header-anchor" href="#with-header-and-footer" aria-label="Permalink to &quot;With Header And Footer&quot;">​</a></h3>`,2),k=n("img",{src:h},null,-1),I={class:"p-4 text-center"},V=p(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-pdf-viewer</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;FILE&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">header</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">p-navbar</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">p-navbar-brand</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">img</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;../../public/assets/images/icon-privy.svg&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">p-navbar-brand</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">p-navbar-nav</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">p-nav-item</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">active</span><span style="color:#E1E4E8;">&gt;Label&lt;/</span><span style="color:#85E89D;">p-nav-item</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">p-nav-item</span><span style="color:#E1E4E8;">&gt;Label&lt;/</span><span style="color:#85E89D;">p-nav-item</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          &lt;</span><span style="color:#85E89D;">p-nav-item</span><span style="color:#E1E4E8;">&gt;Label&lt;/</span><span style="color:#85E89D;">p-nav-item</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">p-navbar-nav</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">p-navbar</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">footer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">class</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;p-4 text-center&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">p-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">color</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;primary&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">          Action Button</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;/</span><span style="color:#85E89D;">p-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">p-pdf-viewer</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-pdf-viewer</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;FILE&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">header</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">p-navbar</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">p-navbar-brand</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#22863A;">img</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;../../public/assets/images/icon-privy.svg&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">p-navbar-brand</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">p-navbar-nav</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#22863A;">p-nav-item</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">active</span><span style="color:#24292E;">&gt;Label&lt;/</span><span style="color:#22863A;">p-nav-item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#22863A;">p-nav-item</span><span style="color:#24292E;">&gt;Label&lt;/</span><span style="color:#22863A;">p-nav-item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          &lt;</span><span style="color:#22863A;">p-nav-item</span><span style="color:#24292E;">&gt;Label&lt;/</span><span style="color:#22863A;">p-nav-item</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">p-navbar-nav</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">p-navbar</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">footer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">class</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;p-4 text-center&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">p-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">color</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;primary&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">          Action Button</span></span>
<span class="line"><span style="color:#24292E;">        &lt;/</span><span style="color:#22863A;">p-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">p-pdf-viewer</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="handle-document-with-password" tabindex="-1">Handle Document with Password <a class="header-anchor" href="#handle-document-with-password" aria-label="Permalink to &quot;Handle Document with Password&quot;">​</a></h2><p>If your document is require a password to open, you can pass the password to prop <code>password</code>.</p>`,3),L=p(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-form-group</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">label</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;Password&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">description</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;The password is: 123456&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p-input-password</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-model</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;password&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">p-form-group</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-pdf-viewer</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;FILE_PROTECT&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:password</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;password&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> FILE_PROTECT </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;~/assets/Calibrator-v3_protected.pdf?url&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">password</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-form-group</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">label</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;Password&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">description</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;The password is: 123456&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">p-input-password</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-model</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;password&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">p-form-group</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-pdf-viewer</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;FILE_PROTECT&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:password</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;password&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> FILE_PROTECT </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;~/assets/Calibrator-v3_protected.pdf?url&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">password</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="layout-fit-mode" tabindex="-1">Layout Fit Mode <a class="header-anchor" href="#layout-fit-mode" aria-label="Permalink to &quot;Layout Fit Mode&quot;">​</a></h2><p>Set <code>layout</code> prop to <code>fit</code> to enable layout fit mode. It will adapt the viewer height with viewport, best for combining with <a href="/design-system/components/pdf-object/">PDFObject</a>.</p>`,3),S=["href"],N=["src"],O=n("p",null,[n("strong",null,"Try it")],-1),R={class:"mb-4"},U=p(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p-pdf-viewer</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">:src</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;FILE&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">layout</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;fit&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">offset-top</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;72&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p-pdf-viewer</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">:src</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;FILE&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">layout</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;fit&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">offset-top</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;72&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;Props&quot;">​</a></h3><table><thead><tr><th>Props</th><th style="text-align:center;">Type</th><th style="text-align:center;">Default</th><th>Description</th></tr></thead><tbody><tr><td><code>src</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Document source URL</td></tr><tr><td><code>paddword</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>-</code></td><td>Document password</td></tr><tr><td><code>layout</code></td><td style="text-align:center;"><code>String</code></td><td style="text-align:center;"><code>fixed</code></td><td>Viewer layout sizing, valid value: <code>fixed</code>, <code>fit</code></td></tr><tr><td><code>offsetTop</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>0</code></td><td>Margin top when using layout <code>fit</code></td></tr><tr><td><code>page</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>1</code></td><td><code>v-model:page</code> value</td></tr><tr><td><code>scale</code></td><td style="text-align:center;"><code>Number</code></td><td style="text-align:center;"><code>1</code></td><td><code>v-model:scale</code> value</td></tr></tbody></table><h3 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>default</code></td><td>Content to place <a href="/design-system/components/pdf-object/">PDF Object</a></td></tr><tr><td><code>header</code></td><td>Content to place as header</td></tr><tr><td><code>footer</code></td><td>Content to place as footer</td></tr></tbody></table><h3 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h3><table><thead><tr><th>Name</th><th>Arguments</th><th>Description</th></tr></thead><tbody><tr><td><code>loaded</code></td><td>-</td><td>Event when document loaded</td></tr><tr><td><code>error</code></td><td>Error</td><td>Event when got error when loading the document</td></tr><tr><td><code>error-password</code></td><td>Error</td><td>Event when document require a password or password invalid</td></tr></tbody></table><h2 id="see-also" tabindex="-1">See Also <a class="header-anchor" href="#see-also" aria-label="Permalink to &quot;See Also&quot;">​</a></h2>`,9),j=n("li",null,[n("a",{href:"/design-system/components/pdf-object/"},"PDF Object")],-1),H=["href"],na=JSON.parse('{"title":"PDF Viewer · Components","description":"Open and View PDF Document","frontmatter":{"title":"PDF Viewer · Components","description":"Open and View PDF Document"},"headers":[],"relativePath":"components/pdf-viewer/index.md","filePath":"components/pdf-viewer/index.md"}'),M={name:"components/pdf-viewer/index.md"},la=Object.assign(M,{setup(W){const t=u(""),e=u("fixed");return($,r)=>{const c=C("preview");return P(),A("div",null,[x,s(c,null,{default:a(()=>[s(E,{src:l(i)},null,8,["src"])]),_:1}),B,s(c,null,{default:a(()=>[s(E,{src:l(i)},{header:a(()=>[s(_,null,{default:a(()=>[s(v,null,{default:a(()=>[k]),_:1}),s(f,null,{default:a(()=>[s(d,{active:""},{default:a(()=>[o("Label")]),_:1}),s(d,null,{default:a(()=>[o("Label")]),_:1}),s(d,null,{default:a(()=>[o("Label")]),_:1})]),_:1})]),_:1})]),footer:a(()=>[n("div",I,[s(F,{color:"primary"},{default:a(()=>[o(" Action Button ")]),_:1})])]),_:1},8,["src"])]),_:1}),V,s(q,{dismissable:!1},{default:a(()=>[o(" This component doesn't provide any UI for handling input password. You have to do it yourself. ")]),_:1}),s(c,{class:"flex-col"},{default:a(()=>[s(b,{label:"Password",description:"The password is: 123456"},{default:a(()=>[s(w,{modelValue:l(t),"onUpdate:modelValue":r[0]||(r[0]=y=>m(t)?t.value=y:null)},null,8,["modelValue"])]),_:1}),s(E,{src:l(T),password:l(t)},null,8,["src","password"])]),_:1}),L,n("a",{href:l(g),target:"_blank"},[n("img",{class:"w-full",src:l(g),alt:"fixed-vs-fit-ilustration"},null,8,N)],8,S),O,n("div",R,[s(D,{value:"fit","unchecked-value":"fixed",modelValue:l(e),"onUpdate:modelValue":r[1]||(r[1]=y=>m(e)?e.value=y:null)},{default:a(()=>[o(" Enable Layout fit ")]),_:1},8,["modelValue"])]),s(c,null,{default:a(()=>[s(E,{src:l(i),layout:l(e),"offset-top":"72"},null,8,["src","layout"])]),_:1}),U,n("ul",null,[j,n("li",null,[n("a",{href:l(i),target:"_blank",download:""},"Download Calibrator v3.0.0",8,H)])])])}}});export{na as __pageData,la as default};