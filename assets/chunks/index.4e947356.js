import{i as re,n as z,t as V,c as W,d as M,e as R,f as ae,g as oe,h as ie,w as se,j as ue}from"./index.a9759927.js";import{a8 as le,B as ce,g as N,h as g,x as A,a9 as J,y as fe,E as ee,O as de,j as pe}from"./framework.c6b37a8b.js";function $(e){var t;const n=M(e);return(t=n==null?void 0:n.$el)!=null?t:n}const j=W?window:void 0,ve=W?window.document:void 0,k=W?window.navigator:void 0;function O(...e){let t,n,r,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,a]=e,t=j):[t,n,r,a]=e,!t)return z;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(p=>p()),i.length=0},s=(p,m,c,l)=>(p.addEventListener(m,c,l),()=>p.removeEventListener(m,c,l)),u=A(()=>[$(t),M(a)],([p,m])=>{o(),p&&i.push(...n.flatMap(c=>r.map(l=>s(p,c,l,m))))},{immediate:!0,flush:"post"}),v=()=>{u(),o()};return R(v),v}let U=!1;function Qe(e,t,n={}){const{window:r=j,ignore:a=[],capture:i=!0,detectIframe:o=!1}=n;if(!r)return;re&&!U&&(U=!0,Array.from(r.document.body.children).forEach(c=>c.addEventListener("click",z)),r.document.documentElement.addEventListener("click",z));let s=!0;const u=c=>a.some(l=>{if(typeof l=="string")return Array.from(r.document.querySelectorAll(l)).some(f=>f===c.target||c.composedPath().includes(f));{const f=$(l);return f&&(c.target===f||c.composedPath().includes(f))}}),p=[O(r,"click",c=>{const l=$(e);if(!(!l||l===c.target||c.composedPath().includes(l))){if(c.detail===0&&(s=!u(c)),!s){s=!0;return}t(c)}},{passive:!0,capture:i}),O(r,"pointerdown",c=>{const l=$(e);l&&(s=!c.composedPath().includes(l)&&!u(c))},{passive:!0}),o&&O(r,"blur",c=>{setTimeout(()=>{var l;const f=$(e);((l=r.document.activeElement)==null?void 0:l.tagName)==="IFRAME"&&!(f!=null&&f.contains(r.document.activeElement))&&t(c)},0)})].filter(Boolean);return()=>p.forEach(c=>c())}function me(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function Ge(...e){let t,n,r={};e.length===3?(t=e[0],n=e[1],r=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],r=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:a=j,eventName:i="keydown",passive:o=!1,dedupe:s=!1}=r,u=me(t);return O(a,i,p=>{p.repeat&&M(s)||u(p)&&n(p)},o)}function he(){const{activeElement:e,body:t}=document;if(!e||e===t)return!1;switch(e.tagName){case"INPUT":case"TEXTAREA":return!0}return e.hasAttribute("contenteditable")}function ye({keyCode:e,metaKey:t,ctrlKey:n,altKey:r}){return t||n||r?!1:e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122}function Ze(e,t={}){const{document:n=ve}=t;n&&O(n,"keydown",a=>{!he()&&ye(a)&&e(a)},{passive:!0})}function et(e,t=null){const n=J();let r=()=>{};const a=le((i,o)=>(r=o,{get(){var s,u;return i(),(u=(s=n==null?void 0:n.proxy)==null?void 0:s.$refs[e])!=null?u:t},set(){}}));return V(r),ce(r),a}function ge(){const e=g(!1);return J()&&pe(()=>{e.value=!0}),e}function T(e){const t=ge();return N(()=>(t.value,!!e()))}function te(e,t={}){const{window:n=j}=t,r=T(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let a;const i=g(!1),o=v=>{i.value=v.matches},s=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",o):a.removeListener(o))},u=fe(()=>{r.value&&(s(),a=n.matchMedia(M(e)),"addEventListener"in a?a.addEventListener("change",o):a.addListener(o),i.value=a.matches)});return R(()=>{u(),s(),a=void 0}),i}function tt(e={}){const{navigator:t=k,read:n=!1,source:r,copiedDuring:a=1500,legacy:i=!1}=e,o=T(()=>t&&"clipboard"in t),s=N(()=>o.value||i),u=g(""),v=g(!1),p=ae(()=>v.value=!1,a);function m(){o.value?t.clipboard.readText().then(d=>{u.value=d}):u.value=f()}s.value&&n&&O(["copy","cut"],m);async function c(d=M(r)){s.value&&d!=null&&(o.value?await t.clipboard.writeText(d):l(d),u.value=d,v.value=!0,p.start())}function l(d){const y=document.createElement("textarea");y.value=d!=null?d:"",y.style.position="absolute",y.style.opacity="0",document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function f(){var d,y,S;return(S=(y=(d=document==null?void 0:document.getSelection)==null?void 0:d.call(document))==null?void 0:y.toString())!=null?S:""}return{isSupported:s,text:u,copied:v,copy:c}}function we(e){return JSON.parse(JSON.stringify(e))}const x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L="__vueuse_ssr_handlers__",_e=be();function be(){return L in x||(x[L]=x[L]||{}),x[L]}function ne(e,t){return _e[e]||t}function Oe(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Se=Object.defineProperty,q=Object.getOwnPropertySymbols,Ee=Object.prototype.hasOwnProperty,Pe=Object.prototype.propertyIsEnumerable,B=(e,t,n)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,H=(e,t)=>{for(var n in t||(t={}))Ee.call(t,n)&&B(e,n,t[n]);if(q)for(var n of q(t))Pe.call(t,n)&&B(e,n,t[n]);return e};const $e={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},F="vueuse-storage";function Ne(e,t,n,r={}){var a;const{flush:i="pre",deep:o=!0,listenToStorageChanges:s=!0,writeDefaults:u=!0,mergeDefaults:v=!1,shallow:p,window:m=j,eventFilter:c,onError:l=h=>{console.error(h)}}=r,f=(p?ee:g)(t);if(!n)try{n=ne("getDefaultStorage",()=>{var h;return(h=j)==null?void 0:h.localStorage})()}catch(h){l(h)}if(!n)return f;const d=M(t),y=Oe(d),S=(a=r.serializer)!=null?a:$e[y],{pause:D,resume:_}=se(f,()=>w(f.value),{flush:i,deep:o,eventFilter:c});return m&&s&&(O(m,"storage",I),O(m,F,C)),I(),f;function w(h){try{if(h==null)n.removeItem(e);else{const b=S.write(h),E=n.getItem(e);E!==b&&(n.setItem(e,b),m&&m.dispatchEvent(new CustomEvent(F,{detail:{key:e,oldValue:E,newValue:b,storageArea:n}})))}}catch(b){l(b)}}function P(h){const b=h?h.newValue:n.getItem(e);if(b==null)return u&&d!==null&&n.setItem(e,S.write(d)),d;if(!h&&v){const E=S.read(b);return typeof v=="function"?v(E,d):y==="object"&&!Array.isArray(E)?H(H({},d),E):E}else return typeof b!="string"?b:S.read(b)}function C(h){I(h.detail)}function I(h){if(!(h&&h.storageArea!==n)){if(h&&h.key==null){f.value=d;return}if(!(h&&h.key!==e)){D();try{f.value=P(h)}catch(b){l(b)}finally{h?de(_):_()}}}}}function je(e){return te("(prefers-color-scheme: dark)",e)}var Ae=Object.defineProperty,K=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable,Y=(e,t,n)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Te=(e,t)=>{for(var n in t||(t={}))Ie.call(t,n)&&Y(e,n,t[n]);if(K)for(var n of K(t))De.call(t,n)&&Y(e,n,t[n]);return e};function Me(e={}){const{selector:t="html",attribute:n="class",initialValue:r="auto",window:a=j,storage:i,storageKey:o="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:u,emitAuto:v,disableTransition:p=!0}=e,m=Te({auto:"",light:"light",dark:"dark"},e.modes||{}),c=je({window:a}),l=N(()=>c.value?"dark":"light"),f=u||(o==null?oe(r):Ne(o,r,i,{window:a,listenToStorageChanges:s})),d=N(()=>f.value==="auto"?l.value:f.value),y=ne("updateHTMLAttrs",(w,P,C)=>{const I=typeof w=="string"?a==null?void 0:a.document.querySelector(w):$(w);if(!I)return;let h;if(p){h=a.document.createElement("style");const b="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";h.appendChild(document.createTextNode(b)),a.document.head.appendChild(h)}if(P==="class"){const b=C.split(/\s/g);Object.values(m).flatMap(E=>(E||"").split(/\s/g)).filter(Boolean).forEach(E=>{b.includes(E)?I.classList.add(E):I.classList.remove(E)})}else I.setAttribute(P,C);p&&(a.getComputedStyle(h).opacity,document.head.removeChild(h))});function S(w){var P;y(t,n,(P=m[w])!=null?P:w)}function D(w){e.onChanged?e.onChanged(w,S):S(w)}A(d,D,{flush:"post",immediate:!0}),V(()=>D(d.value));const _=N({get(){return v?f.value:d.value},set(w){f.value=w}});try{return Object.assign(_,{store:f,system:l,state:d})}catch(w){return _}}var X=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable,Le=(e,t)=>{var n={};for(var r in e)Ce.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&X)for(var r of X(e))t.indexOf(r)<0&&xe.call(e,r)&&(n[r]=e[r]);return n};function nt(e,t,n={}){const r=n,{window:a=j}=r,i=Le(r,["window"]);let o;const s=T(()=>a&&"MutationObserver"in a),u=()=>{o&&(o.disconnect(),o=void 0)},v=A(()=>$(e),m=>{u(),s.value&&a&&m&&(o=new MutationObserver(t),o.observe(m,i))},{immediate:!0}),p=()=>{u(),v()};return R(p),{isSupported:s,stop:p}}var Ve=Object.defineProperty,Re=Object.defineProperties,ke=Object.getOwnPropertyDescriptors,Q=Object.getOwnPropertySymbols,ze=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,G=(e,t,n)=>t in e?Ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Je=(e,t)=>{for(var n in t||(t={}))ze.call(t,n)&&G(e,n,t[n]);if(Q)for(var n of Q(t))We.call(t,n)&&G(e,n,t[n]);return e},Ue=(e,t)=>Re(e,ke(t));function rt(e={}){const{valueDark:t="dark",valueLight:n=""}=e,r=Me(Ue(Je({},e),{onChanged:(i,o)=>{var s;e.onChanged?(s=e.onChanged)==null||s.call(e,i==="dark",o,i):o(i)},modes:{dark:t,light:n}}));return N({get(){return r.value==="dark"},set(i){const o=i?"dark":"light";r.system.value===o?r.value="auto":r.value=o}})}function qe(e,t={}){const{controls:n=!1,navigator:r=k}=t,a=T(()=>r&&"permissions"in r);let i;const o=typeof e=="string"?{name:e}:e,s=g(),u=()=>{i&&(s.value=i.state)},v=ie(async()=>{if(a.value){if(!i)try{i=await r.permissions.query(o),O(i,"change",u),u()}catch(p){s.value="prompt"}return i}});return v(),n?{state:s,isSupported:a,query:v}:s}function at(e={}){const{navigator:t=k,requestPermissions:n=!1,constraints:r={audio:!0,video:!0},onUpdated:a}=e,i=g([]),o=N(()=>i.value.filter(f=>f.kind==="videoinput")),s=N(()=>i.value.filter(f=>f.kind==="audioinput")),u=N(()=>i.value.filter(f=>f.kind==="audiooutput")),v=T(()=>t&&t.mediaDevices&&t.mediaDevices.enumerateDevices),p=g(!1);let m;async function c(){v.value&&(i.value=await t.mediaDevices.enumerateDevices(),a==null||a(i.value),m&&(m.getTracks().forEach(f=>f.stop()),m=null))}async function l(){if(!v.value)return!1;if(p.value)return!0;const{state:f,query:d}=qe("camera",{controls:!0});return await d(),f.value!=="granted"&&(m=await t.mediaDevices.getUserMedia(r),c()),p.value=!0,p.value}return v.value&&(n&&l(),O(t.mediaDevices,"devicechange",c),c()),{devices:i,ensurePermissions:l,permissionGranted:p,videoInputs:o,audioInputs:s,audioOutputs:u,isSupported:v}}var Z=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,He=Object.prototype.propertyIsEnumerable,Fe=(e,t)=>{var n={};for(var r in e)Be.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Z)for(var r of Z(e))t.indexOf(r)<0&&He.call(e,r)&&(n[r]=e[r]);return n};function Ke(e,t,n={}){const r=n,{window:a=j}=r,i=Fe(r,["window"]);let o;const s=T(()=>a&&"ResizeObserver"in a),u=()=>{o&&(o.disconnect(),o=void 0)},v=N(()=>Array.isArray(e)?e.map(c=>$(c)):[$(e)]),p=A(v,c=>{if(u(),s.value&&a){o=new ResizeObserver(t);for(const l of c)l&&o.observe(l,i)}},{immediate:!0,flush:"post",deep:!0}),m=()=>{u(),p()};return R(m),{isSupported:s,stop:m}}function ot(e,t={}){const{reset:n=!0,windowResize:r=!0,windowScroll:a=!0,immediate:i=!0}=t,o=g(0),s=g(0),u=g(0),v=g(0),p=g(0),m=g(0),c=g(0),l=g(0);function f(){const d=$(e);if(!d){n&&(o.value=0,s.value=0,u.value=0,v.value=0,p.value=0,m.value=0,c.value=0,l.value=0);return}const y=d.getBoundingClientRect();o.value=y.height,s.value=y.bottom,u.value=y.left,v.value=y.right,p.value=y.top,m.value=y.width,c.value=y.x,l.value=y.y}return Ke(e,f),A(()=>$(e),d=>!d&&f()),a&&O("scroll",f,{capture:!0,passive:!0}),r&&O("resize",f,{passive:!0}),V(()=>{i&&f()}),{height:o,bottom:s,left:u,right:v,top:p,width:m,x:c,y:l,update:f}}function it(e={}){var t,n;const r=g((t=e.enabled)!=null?t:!1),a=g((n=e.autoSwitch)!=null?n:!0),i=g(e.constraints),{navigator:o=k}=e,s=T(()=>{var d;return(d=o==null?void 0:o.mediaDevices)==null?void 0:d.getUserMedia}),u=ee();function v(d){switch(d){case"video":{if(i.value)return i.value.video||!1;break}case"audio":{if(i.value)return i.value.audio||!1;break}}}async function p(){if(!(!s.value||u.value))return u.value=await o.mediaDevices.getUserMedia({video:v("video"),audio:v("audio")}),u.value}function m(){var d;(d=u.value)==null||d.getTracks().forEach(y=>y.stop()),u.value=void 0}function c(){m(),r.value=!1}async function l(){return await p(),u.value&&(r.value=!0),u.value}async function f(){return m(),await l()}return A(r,d=>{d?p():m()},{immediate:!0}),A(i,()=>{a.value&&u.value&&f()},{immediate:!0}),{isSupported:s,stream:u,start:l,stop:c,restart:f,constraints:i,enabled:r,autoSwitch:a}}function st(e,t,n,r={}){var a,i,o;const{clone:s=!1,passive:u=!1,eventName:v,deep:p=!1,defaultValue:m,shouldEmit:c}=r,l=J(),f=n||(l==null?void 0:l.emit)||((a=l==null?void 0:l.$emit)==null?void 0:a.bind(l))||((o=(i=l==null?void 0:l.proxy)==null?void 0:i.$emit)==null?void 0:o.bind(l==null?void 0:l.proxy));let d=v;t||(t="modelValue"),d=d||`update:${t.toString()}`;const y=_=>s?typeof s=="function"?s(_):we(_):_,S=()=>ue(e[t])?y(e[t]):m,D=_=>{c?c(_)&&f(d,_):f(d,_)};if(u){const _=S(),w=g(_);return A(()=>e[t],P=>w.value=y(P)),A(w,P=>{(P!==e[t]||p)&&D(P)},{deep:p}),w}else return N({get(){return S()},set(_){D(_)}})}function ut({window:e=j}={}){if(!e)return{x:g(0),y:g(0)};const t=g(e.scrollX),n=g(e.scrollY);return O(e,"scroll",()=>{t.value=e.scrollX,n.value=e.scrollY},{capture:!1,passive:!0}),{x:t,y:n}}function lt(e={}){const{window:t=j,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:r=Number.POSITIVE_INFINITY,listenOrientation:a=!0,includeScrollbar:i=!0}=e,o=g(n),s=g(r),u=()=>{t&&(i?(o.value=t.innerWidth,s.value=t.innerHeight):(o.value=t.document.documentElement.clientWidth,s.value=t.document.documentElement.clientHeight))};if(u(),V(u),O("resize",u,{passive:!0}),a){const v=te("(orientation: portrait)");A(v,()=>u())}return{width:o,height:s}}export{qe as a,at as b,it as c,Ge as d,te as e,ot as f,Ze as g,ut as h,nt as i,lt as j,O as k,rt as l,tt as m,Qe as o,et as t,st as u};