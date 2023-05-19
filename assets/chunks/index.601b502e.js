import{t as k,i as oe,n as Z,c as L,d as ie,e as ee,f as se,g as N,h as z,w as ue,j as le}from"./index.06d37783.js";import{m as W,i as ce,W as fe,l as A,j as y,k as de,w as x,Y as te,Z as ve,p as pe}from"./framework.6feb5f37.js";function S(e){var t;const n=N(e);return(t=n==null?void 0:n.$el)!=null?t:n}const j=z?window:void 0,me=z?window.document:void 0,V=z?window.navigator:void 0;function E(...e){let t,n,r,a;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,a]=e,t=j):[t,n,r,a]=e,!t)return Z;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const u=[],i=()=>{u.forEach(c=>c()),u.length=0},o=(c,p,l,f)=>(c.addEventListener(p,l,f),()=>c.removeEventListener(p,l,f)),s=x(()=>[S(t),N(a)],([c,p])=>{i(),c&&u.push(...n.flatMap(l=>r.map(f=>o(c,l,f,p))))},{immediate:!0,flush:"post"}),d=()=>{s(),i()};return L(d),d}let B=!1;function Ge(e,t,n={}){const{window:r=j,ignore:a=[],capture:u=!0,detectIframe:i=!1}=n;if(!r)return;oe&&!B&&(B=!0,Array.from(r.document.body.children).forEach(l=>l.addEventListener("click",Z)));let o=!0;const s=l=>a.some(f=>{if(typeof f=="string")return Array.from(r.document.querySelectorAll(f)).some(v=>v===l.target||l.composedPath().includes(v));{const v=S(f);return v&&(l.target===v||l.composedPath().includes(v))}}),c=[E(r,"click",l=>{const f=S(e);if(!(!f||f===l.target||l.composedPath().includes(f))){if(l.detail===0&&(o=!s(l)),!o){o=!0;return}t(l)}},{passive:!0,capture:u}),E(r,"pointerdown",l=>{const f=S(e);f&&(o=!l.composedPath().includes(f)&&!s(l))},{passive:!0}),i&&E(r,"blur",l=>{var f;const v=S(e);((f=r.document.activeElement)==null?void 0:f.tagName)==="IFRAME"&&!(v!=null&&v.contains(r.document.activeElement))&&t(l)})].filter(Boolean);return()=>c.forEach(l=>l())}function he(e){return typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):()=>!0}function Qe(...e){let t,n,r={};e.length===3?(t=e[0],n=e[1],r=e[2]):e.length===2?typeof e[1]=="object"?(t=!0,n=e[0],r=e[1]):(t=e[0],n=e[1]):(t=!0,n=e[0]);const{target:a=j,eventName:u="keydown",passive:i=!1,dedupe:o=!1}=r,s=he(t);return E(a,u,c=>{c.repeat&&N(o)||s(c)&&n(c)},i)}function ge(){const{activeElement:e,body:t}=document;if(!e||e===t)return!1;switch(e.tagName){case"INPUT":case"TEXTAREA":return!0}return e.hasAttribute("contenteditable")}function ye({keyCode:e,metaKey:t,ctrlKey:n,altKey:r}){return t||n||r?!1:e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122}function Ze(e,t={}){const{document:n=me}=t;n&&E(n,"keydown",a=>{!ge()&&ye(a)&&e(a)},{passive:!0})}function et(e,t=null){const n=W();let r=()=>{};const a=ce((u,i)=>(r=i,{get(){var o,s;return u(),(s=(o=n==null?void 0:n.proxy)==null?void 0:o.$refs[e])!=null?s:t},set(){}}));return k(r),fe(r),a}function we(){const e=y(!1);return W()&&pe(()=>{e.value=!0}),e}function C(e){const t=we();return A(()=>(t.value,!!e()))}function ne(e,t={}){const{window:n=j}=t,r=C(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let a;const u=y(!1),i=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",o):a.removeListener(o))},o=()=>{r.value&&(i(),a=n.matchMedia(ee(e).value),u.value=!!(a!=null&&a.matches),a&&("addEventListener"in a?a.addEventListener("change",o):a.addListener(o)))};return de(o),L(()=>i()),u}function tt(e={}){const{navigator:t=V,read:n=!1,source:r,copiedDuring:a=1500,legacy:u=!1}=e,i=["copy","cut"],o=C(()=>t&&"clipboard"in t),s=A(()=>o.value||u),d=y(""),c=y(!1),p=ie(()=>c.value=!1,a);function l(){o.value?t.clipboard.readText().then(h=>{d.value=h}):d.value=m()}if(s.value&&n)for(const h of i)E(h,l);async function f(h=N(r)){s.value&&h!=null&&(o.value?await t.clipboard.writeText(h):v(h),d.value=h,c.value=!0,p.start())}function v(h){const w=document.createElement("textarea");w.value=h!=null?h:"",w.style.position="absolute",w.style.opacity="0",document.body.appendChild(w),w.select(),document.execCommand("copy"),w.remove()}function m(){var h,w,D;return(D=(w=(h=document==null?void 0:document.getSelection)==null?void 0:h.call(document))==null?void 0:w.toString())!=null?D:""}return{isSupported:s,text:d,copied:c,copy:f}}function _e(e){return JSON.parse(JSON.stringify(e))}const T=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},R="__vueuse_ssr_handlers__",be=Oe();function Oe(){return R in T||(T[R]=T[R]||{}),T[R]}function re(e,t){return be[e]||t}function Se(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}var Ee=Object.defineProperty,J=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,U=(e,t,n)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,q=(e,t)=>{for(var n in t||(t={}))Pe.call(t,n)&&U(e,n,t[n]);if(J)for(var n of J(t))$e.call(t,n)&&U(e,n,t[n]);return e};const Ae={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},H="vueuse-storage";function je(e,t,n,r={}){var a;const{flush:u="pre",deep:i=!0,listenToStorageChanges:o=!0,writeDefaults:s=!0,mergeDefaults:d=!1,shallow:c,window:p=j,eventFilter:l,onError:f=g=>{console.error(g)}}=r,v=(c?te:y)(t);if(!n)try{n=re("getDefaultStorage",()=>{var g;return(g=j)==null?void 0:g.localStorage})()}catch(g){f(g)}if(!n)return v;const m=N(t),h=Se(m),w=(a=r.serializer)!=null?a:Ae[h],{pause:D,resume:b}=ue(v,()=>_(v.value),{flush:u,deep:i,eventFilter:l});return p&&o&&(E(p,"storage",M),E(p,H,I)),M(),v;function _(g){try{if(g==null)n.removeItem(e);else{const O=w.write(g),P=n.getItem(e);P!==O&&(n.setItem(e,O),p&&p.dispatchEvent(new CustomEvent(H,{detail:{key:e,oldValue:P,newValue:O,storageArea:n}})))}}catch(O){f(O)}}function $(g){const O=g?g.newValue:n.getItem(e);if(O==null)return s&&m!==null&&n.setItem(e,w.write(m)),m;if(!g&&d){const P=w.read(O);return typeof d=="function"?d(P,m):h==="object"&&!Array.isArray(P)?q(q({},m),P):P}else return typeof O!="string"?O:w.read(O)}function I(g){M(g.detail)}function M(g){if(!(g&&g.storageArea!==n)){if(g&&g.key==null){v.value=m;return}if(!(g&&g.key!==e)){D();try{v.value=$(g)}catch(O){f(O)}finally{g?ve(b):b()}}}}}function xe(e){return ne("(prefers-color-scheme: dark)",e)}var De=Object.defineProperty,F=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,K=(e,t,n)=>t in e?De(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ne=(e,t)=>{for(var n in t||(t={}))Me.call(t,n)&&K(e,n,t[n]);if(F)for(var n of F(t))Ce.call(t,n)&&K(e,n,t[n]);return e};function Ie(e={}){const{selector:t="html",attribute:n="class",initialValue:r="auto",window:a=j,storage:u,storageKey:i="vueuse-color-scheme",listenToStorageChanges:o=!0,storageRef:s,emitAuto:d,disableTransition:c=!0}=e,p=Ne({auto:"",light:"light",dark:"dark"},e.modes||{}),l=xe({window:a}),f=A(()=>l.value?"dark":"light"),v=s||(i==null?ee(r):je(i,r,u,{window:a,listenToStorageChanges:o})),m=A(()=>v.value==="auto"?f.value:v.value),h=re("updateHTMLAttrs",(_,$,I)=>{const M=typeof _=="string"?a==null?void 0:a.document.querySelector(_):S(_);if(!M)return;let g;if(c&&(g=a.document.createElement("style"),g.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),a.document.head.appendChild(g)),$==="class"){const O=I.split(/\s/g);Object.values(p).flatMap(P=>(P||"").split(/\s/g)).filter(Boolean).forEach(P=>{O.includes(P)?M.classList.add(P):M.classList.remove(P)})}else M.setAttribute($,I);c&&(a.getComputedStyle(g).opacity,document.head.removeChild(g))});function w(_){var $;h(t,n,($=p[_])!=null?$:_)}function D(_){e.onChanged?e.onChanged(_,w):w(_)}x(m,D,{flush:"post",immediate:!0}),k(()=>D(m.value));const b=A({get(){return d?v.value:m.value},set(_){v.value=_}});try{return Object.assign(b,{store:v,system:f,state:m})}catch(_){return b}}var X=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Re=Object.prototype.propertyIsEnumerable,ke=(e,t)=>{var n={};for(var r in e)Te.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&X)for(var r of X(e))t.indexOf(r)<0&&Re.call(e,r)&&(n[r]=e[r]);return n};function nt(e,t,n={}){const r=n,{window:a=j}=r,u=ke(r,["window"]);let i;const o=C(()=>a&&"MutationObserver"in a),s=()=>{i&&(i.disconnect(),i=void 0)},d=x(()=>S(e),p=>{s(),o.value&&a&&p&&(i=new MutationObserver(t),i.observe(p,u))},{immediate:!0}),c=()=>{s(),d()};return L(c),{isSupported:o,stop:c}}var Le=Object.defineProperty,Ve=Object.defineProperties,ze=Object.getOwnPropertyDescriptors,Y=Object.getOwnPropertySymbols,We=Object.prototype.hasOwnProperty,Be=Object.prototype.propertyIsEnumerable,G=(e,t,n)=>t in e?Le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Je=(e,t)=>{for(var n in t||(t={}))We.call(t,n)&&G(e,n,t[n]);if(Y)for(var n of Y(t))Be.call(t,n)&&G(e,n,t[n]);return e},Ue=(e,t)=>Ve(e,ze(t));function rt(e={}){const{valueDark:t="dark",valueLight:n=""}=e,r=Ie(Ue(Je({},e),{onChanged:(u,i)=>{var o;e.onChanged?(o=e.onChanged)==null||o.call(e,u==="dark",i,u):i(u)},modes:{dark:t,light:n}}));return A({get(){return r.value==="dark"},set(u){const i=u?"dark":"light";r.system.value===i?r.value="auto":r.value=i}})}function qe(e,t={}){const{controls:n=!1,navigator:r=V}=t,a=C(()=>r&&"permissions"in r);let u;const i=typeof e=="string"?{name:e}:e,o=y(),s=()=>{u&&(o.value=u.state)},d=se(async()=>{if(a.value){if(!u)try{u=await r.permissions.query(i),E(u,"change",s),s()}catch(c){o.value="prompt"}return u}});return d(),n?{state:o,isSupported:a,query:d}:o}function at(e={}){const{navigator:t=V,requestPermissions:n=!1,constraints:r={audio:!0,video:!0},onUpdated:a}=e,u=y([]),i=A(()=>u.value.filter(v=>v.kind==="videoinput")),o=A(()=>u.value.filter(v=>v.kind==="audioinput")),s=A(()=>u.value.filter(v=>v.kind==="audiooutput")),d=C(()=>t&&t.mediaDevices&&t.mediaDevices.enumerateDevices),c=y(!1);let p;async function l(){d.value&&(u.value=await t.mediaDevices.enumerateDevices(),a==null||a(u.value),p&&(p.getTracks().forEach(v=>v.stop()),p=null))}async function f(){if(!d.value)return!1;if(c.value)return!0;const{state:v,query:m}=qe("camera",{controls:!0});return await m(),v.value!=="granted"&&(p=await t.mediaDevices.getUserMedia(r),l()),c.value=!0,c.value}return d.value&&(n&&f(),E(t.mediaDevices,"devicechange",l),l()),{devices:u,ensurePermissions:f,permissionGranted:c,videoInputs:i,audioInputs:o,audioOutputs:s,isSupported:d}}var Q=Object.getOwnPropertySymbols,He=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable,Ke=(e,t)=>{var n={};for(var r in e)He.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Q)for(var r of Q(e))t.indexOf(r)<0&&Fe.call(e,r)&&(n[r]=e[r]);return n};function ae(e,t,n={}){const r=n,{window:a=j}=r,u=Ke(r,["window"]);let i;const o=C(()=>a&&"ResizeObserver"in a),s=()=>{i&&(i.disconnect(),i=void 0)},d=A(()=>Array.isArray(e)?e.map(l=>S(l)):[S(e)]),c=x(d,l=>{if(s(),o.value&&a){i=new ResizeObserver(t);for(const f of l)f&&i.observe(f,u)}},{immediate:!0,flush:"post",deep:!0}),p=()=>{s(),c()};return L(p),{isSupported:o,stop:p}}function ot(e,t={}){const{reset:n=!0,windowResize:r=!0,windowScroll:a=!0,immediate:u=!0}=t,i=y(0),o=y(0),s=y(0),d=y(0),c=y(0),p=y(0),l=y(0),f=y(0);function v(){const m=S(e);if(!m){n&&(i.value=0,o.value=0,s.value=0,d.value=0,c.value=0,p.value=0,l.value=0,f.value=0);return}const h=m.getBoundingClientRect();i.value=h.height,o.value=h.bottom,s.value=h.left,d.value=h.right,c.value=h.top,p.value=h.width,l.value=h.x,f.value=h.y}return ae(e,v),x(()=>S(e),m=>!m&&v()),a&&E("scroll",v,{capture:!0,passive:!0}),r&&E("resize",v,{passive:!0}),k(()=>{u&&v()}),{height:i,bottom:o,left:s,right:d,top:c,width:p,x:l,y:f,update:v}}function it(e,t={width:0,height:0},n={}){const{window:r=j,box:a="content-box"}=n,u=A(()=>{var s,d;return(d=(s=S(e))==null?void 0:s.namespaceURI)==null?void 0:d.includes("svg")}),i=y(t.width),o=y(t.height);return ae(e,([s])=>{const d=a==="border-box"?s.borderBoxSize:a==="content-box"?s.contentBoxSize:s.devicePixelContentBoxSize;if(r&&u.value){const c=S(e);if(c){const p=r.getComputedStyle(c);i.value=parseFloat(p.width),o.value=parseFloat(p.height)}}else if(d){const c=Array.isArray(d)?d:[d];i.value=c.reduce((p,{inlineSize:l})=>p+l,0),o.value=c.reduce((p,{blockSize:l})=>p+l,0)}else i.value=s.contentRect.width,o.value=s.contentRect.height},n),x(()=>S(e),s=>{i.value=s?t.width:0,o.value=s?t.height:0}),{width:i,height:o}}function st(e={}){var t,n;const r=y((t=e.enabled)!=null?t:!1),a=y((n=e.autoSwitch)!=null?n:!0),u=y(e.constraints),{navigator:i=V}=e,o=C(()=>{var m;return(m=i==null?void 0:i.mediaDevices)==null?void 0:m.getUserMedia}),s=te();function d(m){switch(m){case"video":{if(u.value)return u.value.video||!1;break}case"audio":{if(u.value)return u.value.audio||!1;break}}}async function c(){if(!(!o.value||s.value))return s.value=await i.mediaDevices.getUserMedia({video:d("video"),audio:d("audio")}),s.value}function p(){var m;(m=s.value)==null||m.getTracks().forEach(h=>h.stop()),s.value=void 0}function l(){p(),r.value=!1}async function f(){return await c(),s.value&&(r.value=!0),s.value}async function v(){return p(),await f()}return x(r,m=>{m?c():p()},{immediate:!0}),x(u,()=>{a.value&&s.value&&v()},{immediate:!0}),{isSupported:o,stream:s,start:f,stop:l,restart:v,constraints:u,enabled:r,autoSwitch:a}}function ut(e,t,n,r={}){var a,u,i;const{clone:o=!1,passive:s=!1,eventName:d,deep:c=!1,defaultValue:p,shouldEmit:l}=r,f=W(),v=n||(f==null?void 0:f.emit)||((a=f==null?void 0:f.$emit)==null?void 0:a.bind(f))||((i=(u=f==null?void 0:f.proxy)==null?void 0:u.$emit)==null?void 0:i.bind(f==null?void 0:f.proxy));let m=d;t||(t="modelValue"),m=d||m||`update:${t.toString()}`;const h=b=>o?typeof o=="function"?o(b):_e(b):b,w=()=>le(e[t])?h(e[t]):p,D=b=>{l?l(b)&&v(m,b):v(m,b)};if(s){const b=w(),_=y(b);return x(()=>e[t],$=>_.value=h($)),x(_,$=>{($!==e[t]||c)&&D($)},{deep:c}),_}else return A({get(){return w()},set(b){D(b)}})}function lt({window:e=j}={}){if(!e)return{x:y(0),y:y(0)};const t=y(e.scrollX),n=y(e.scrollY);return E(e,"scroll",()=>{t.value=e.scrollX,n.value=e.scrollY},{capture:!1,passive:!0}),{x:t,y:n}}function ct(e={}){const{window:t=j,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:a=!0,includeScrollbar:u=!0}=e,i=y(n),o=y(r),s=()=>{t&&(u?(i.value=t.innerWidth,o.value=t.innerHeight):(i.value=t.document.documentElement.clientWidth,o.value=t.document.documentElement.clientHeight))};if(s(),k(s),E("resize",s,{passive:!0}),a){const d=ne("(orientation: portrait)");x(d,()=>s())}return{width:i,height:o}}export{at as a,st as b,Qe as c,ne as d,ot as e,Ze as f,lt as g,it as h,nt as i,ut as j,E as k,ct as l,rt as m,tt as n,Ge as o,et as t,qe as u};