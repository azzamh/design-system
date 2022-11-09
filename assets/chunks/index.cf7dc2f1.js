import{l as $,E as x,m as le,F as Z,u as y,j as g,G as ce,H as fe,I as de,J as ve,K as pe,L as me,M as ge,k as N,z as ee}from"../app.b3e63b5e.js";var z;const I=typeof window<"u",he=e=>typeof e=="string",U=(e,t,n)=>Math.min(n,Math.max(t,e)),W=()=>{};I&&((z=window==null?void 0:window.navigator)==null?void 0:z.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function we(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}const te=e=>e();function _e(e,t={}){let n,r;return o=>{const s=y(e),i=y(t.maxWait);if(n&&clearTimeout(n),s<=0||i!==void 0&&i<=0)return r&&(clearTimeout(r),r=null),o();i&&!r&&(r=setTimeout(()=>{n&&clearTimeout(n),r=null,o()},i)),n=setTimeout(()=>{r&&clearTimeout(r),r=null,o()},s)}}function ye(e=te){const t=g(!0);function n(){t.value=!1}function r(){t.value=!0}return{isActive:t,pause:n,resume:r,eventFilter:(...o)=>{t.value&&e(...o)}}}function k(e,t=!1,n="Timeout"){return new Promise((r,a)=>{setTimeout(t?()=>a(n):r,e)})}function Oe(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const r=t;t=void 0,r&&await r},n}function R(e){return de()?(ve(e),!0):!1}function vt(e,t,n={}){const{flush:r="sync",deep:a=!1,immediate:o=!0,direction:s="both"}=n;let i,l;return(s==="both"||s==="ltr")&&(i=$(e,d=>t.value=d,{flush:r,deep:a,immediate:o})),(s==="both"||s==="rtl")&&(l=$(t,d=>e.value=d,{flush:r,deep:a,immediate:o})),()=>{i==null||i(),l==null||l()}}function be(e,t=!0){x()?ce(e):t?e():Z(e)}function L(e,t=!0){x()?le(e):t?e():Z(e)}function pt(e){x()&&fe(e)}function mt(e){let t=!1;function n(f,{flush:u="sync",deep:c=!1,timeout:m,throwOnTimeout:_}={}){let p=null;const b=[new Promise(S=>{p=$(e,P=>{f(P)!==t&&(p==null||p(),S(P))},{flush:u,deep:c,immediate:!0})})];return m!=null&&b.push(k(m,_).then(()=>y(e)).finally(()=>p==null?void 0:p())),Promise.race(b)}function r(f,u){if(!pe(f))return n(P=>P===f,u);const{flush:c="sync",deep:m=!1,timeout:_,throwOnTimeout:p}=u!=null?u:{};let h=null;const S=[new Promise(P=>{h=$([e,f],([j,w])=>{t!==(j===w)&&(h==null||h(),P(j))},{flush:c,deep:m,immediate:!0})})];return _!=null&&S.push(k(_,p).then(()=>y(e)).finally(()=>(h==null||h(),y(e)))),Promise.race(S)}function a(f){return n(u=>Boolean(u),f)}function o(f){return r(null,f)}function s(f){return r(void 0,f)}function i(f){return n(Number.isNaN,f)}function l(f,u){return n(c=>{const m=Array.from(c);return m.includes(f)||m.includes(y(f))},u)}function d(f){return v(1,f)}function v(f=1,u){let c=-1;return n(()=>(c+=1,c>=f),u)}return Array.isArray(y(e))?{toMatch:n,toContains:l,changed:d,changedTimes:v,get not(){return t=!t,this}}:{toMatch:n,toBe:r,toBeTruthy:a,toBeNull:o,toBeNaN:i,toBeUndefined:s,changed:d,changedTimes:v,get not(){return t=!t,this}}}function Pe(e,t,n={}){const{immediate:r=!0}=n,a=g(!1);let o=null;function s(){o&&(clearTimeout(o),o=null)}function i(){a.value=!1,s()}function l(...d){s(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...d)},y(t))}return r&&(a.value=!0,I&&l()),R(i),{isPending:a,start:l,stop:i}}var H=Object.getOwnPropertySymbols,Se=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,Te=(e,t)=>{var n={};for(var r in e)Se.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&H)for(var r of H(e))t.indexOf(r)<0&&$e.call(e,r)&&(n[r]=e[r]);return n};function ne(e,t,n={}){const r=n,{eventFilter:a=te}=r,o=Te(r,["eventFilter"]);return $(e,we(a,t),o)}var Ee=Object.defineProperty,De=Object.defineProperties,je=Object.getOwnPropertyDescriptors,M=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable,J=(e,t,n)=>t in e?Ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ne=(e,t)=>{for(var n in t||(t={}))re.call(t,n)&&J(e,n,t[n]);if(M)for(var n of M(t))ae.call(t,n)&&J(e,n,t[n]);return e},Ie=(e,t)=>De(e,je(t)),Me=(e,t)=>{var n={};for(var r in e)re.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&M)for(var r of M(e))t.indexOf(r)<0&&ae.call(e,r)&&(n[r]=e[r]);return n};function gt(e,t,n={}){const r=n,{debounce:a=0,maxWait:o=void 0}=r,s=Me(r,["debounce","maxWait"]);return ne(e,t,Ie(Ne({},s),{eventFilter:_e(a,{maxWait:o})}))}var Ae=Object.defineProperty,xe=Object.defineProperties,Re=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,V=(e,t,n)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Le=(e,t)=>{for(var n in t||(t={}))oe.call(t,n)&&V(e,n,t[n]);if(A)for(var n of A(t))ie.call(t,n)&&V(e,n,t[n]);return e},Be=(e,t)=>xe(e,Re(t)),We=(e,t)=>{var n={};for(var r in e)oe.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&A)for(var r of A(e))t.indexOf(r)<0&&ie.call(e,r)&&(n[r]=e[r]);return n};function Ce(e,t,n={}){const r=n,{eventFilter:a}=r,o=We(r,["eventFilter"]),{eventFilter:s,pause:i,resume:l,isActive:d}=ye(a);return{stop:ne(e,t,Be(Le({},o),{eventFilter:s})),pause:i,resume:l,isActive:d}}function D(e){var t;const n=y(e);return(t=n==null?void 0:n.$el)!=null?t:n}const T=I?window:void 0,Fe=I?window.document:void 0,B=I?window.navigator:void 0;I&&window.location;function O(...e){let t,n,r,a;if(he(e[0])?([n,r,a]=e,t=T):[t,n,r,a]=e,!t)return W;let o=W;const s=$(()=>D(t),l=>{o(),l&&(l.addEventListener(n,r,a),o=()=>{l.removeEventListener(n,r,a),o=W})},{immediate:!0,flush:"post"}),i=()=>{s(),o()};return R(i),i}function ht(e,t,n={}){const{window:r=T,ignore:a,capture:o=!0,detectIframe:s=!1}=n;if(!r)return;const i=g(!0);let l;const d=u=>{r.clearTimeout(l);const c=D(e),m=u.composedPath();!c||c===u.target||m.includes(c)||!i.value||a&&a.length>0&&a.some(_=>{const p=D(_);return p&&(u.target===p||m.includes(p))})||t(u)},v=[O(r,"click",d,{passive:!0,capture:o}),O(r,"pointerdown",u=>{const c=D(e);i.value=!!c&&!u.composedPath().includes(c)},{passive:!0}),O(r,"pointerup",u=>{if(u.button===0){const c=u.composedPath();u.composedPath=()=>c,l=r.setTimeout(()=>d(u),50)}},{passive:!0}),s&&O(r,"blur",u=>{var c;const m=D(e);((c=document.activeElement)==null?void 0:c.tagName)==="IFRAME"&&!(m!=null&&m.contains(document.activeElement))&&t(u)})].filter(Boolean);return()=>v.forEach(u=>u())}const ze=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function wt(e,t,n={}){const{target:r=T,eventName:a="keydown",passive:o=!1}=n,s=ze(e);return O(r,a,l=>{s(l)&&t(l)},o)}const Ue=()=>{const{activeElement:e,body:t}=document;if(!e||e===t)return!1;switch(e.tagName){case"INPUT":case"TEXTAREA":return!0}return e.hasAttribute("contenteditable")},ke=({keyCode:e,metaKey:t,ctrlKey:n,altKey:r})=>t||n||r?!1:e>=48&&e<=57||e>=96&&e<=105||e>=65&&e<=90;function _t(e,t={}){const{document:n=Fe}=t;n&&O(n,"keydown",a=>{!Ue()&&ke(a)&&e(a)},{passive:!0})}function yt(e,t=null){const n=x();let r=()=>{};const a=me((o,s)=>(r=s,{get(){var i,l;return o(),(l=(i=n==null?void 0:n.proxy)==null?void 0:i.$refs[e])!=null?l:t},set(){}}));return L(r),ge(r),a}function He(e,t={}){const{window:n=T}=t,r=Boolean(n&&"matchMedia"in n&&typeof n.matchMedia=="function");let a;const o=g(!1),s=()=>{!r||(a||(a=n.matchMedia(e)),o.value=a.matches)};return be(()=>{s(),a&&("addEventListener"in a?a.addEventListener("change",s):a.addListener(s),R(()=>{"removeEventListener"in a?a.removeEventListener("change",s):a.removeListener(s)}))}),o}function Ot(e,t,n){const r=g(e);return N({get(){return r.value=U(r.value,y(t),y(n))},set(a){r.value=U(a,y(t),y(n))}})}function bt(e={}){const{navigator:t=B,read:n=!1,source:r,copiedDuring:a=1500}=e,o=["copy","cut"],s=Boolean(t&&"clipboard"in t),i=g(""),l=g(!1),d=Pe(()=>l.value=!1,a);function v(){t.clipboard.readText().then(u=>{i.value=u})}if(s&&n)for(const u of o)O(u,v);async function f(u=y(r)){s&&u!=null&&(await t.clipboard.writeText(u),i.value=u,l.value=!0,d.start())}return{isSupported:s,text:i,copied:l,copy:f}}const C=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F="__vueuse_ssr_handlers__";C[F]=C[F]||{};const Je=C[F];function se(e,t){return Je[e]||t}function Ve(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"||Array.isArray(e)?"object":Number.isNaN(e)?"any":"number"}const qe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}};function Ke(e,t,n,r={}){var a;const{flush:o="pre",deep:s=!0,listenToStorageChanges:i=!0,writeDefaults:l=!0,shallow:d,window:v=T,eventFilter:f,onError:u=w=>{console.error(w)}}=r,c=(d?ee:g)(t);if(!n)try{n=se("getDefaultStorage",()=>{var w;return(w=T)==null?void 0:w.localStorage})()}catch(w){u(w)}if(!n)return c;const m=y(t),_=Ve(m),p=(a=r.serializer)!=null?a:qe[_],{pause:h,resume:b}=Ce(c,()=>S(c.value),{flush:o,deep:s,eventFilter:f});return v&&i&&O(v,"storage",j),j(),c;function S(w){try{w==null?n.removeItem(e):n.setItem(e,p.write(w))}catch(E){u(E)}}function P(w){if(!(w&&w.key!==e)){h();try{const E=w?w.newValue:n.getItem(e);return E==null?(l&&m!==null&&n.setItem(e,p.write(m)),m):typeof E!="string"?E:p.read(E)}catch(E){u(E)}finally{b()}}}function j(w){w&&w.key!==e||(c.value=P(w))}}function ue(e){return He("(prefers-color-scheme: dark)",e)}var Ge=Object.defineProperty,q=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Qe=Object.prototype.propertyIsEnumerable,K=(e,t,n)=>t in e?Ge(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ye=(e,t)=>{for(var n in t||(t={}))Xe.call(t,n)&&K(e,n,t[n]);if(q)for(var n of q(t))Qe.call(t,n)&&K(e,n,t[n]);return e};function Ze(e={}){const{selector:t="html",attribute:n="class",window:r=T,storage:a,storageKey:o="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:i,emitAuto:l}=e,d=Ye({auto:"",light:"light",dark:"dark"},e.modes||{}),v=ue({window:r}),f=N(()=>v.value?"dark":"light"),u=i||(o==null?g("auto"):Ke(o,"auto",a,{window:r,listenToStorageChanges:s})),c=N({get(){return u.value==="auto"&&!l?f.value:u.value},set(h){u.value=h}}),m=se("updateHTMLAttrs",(h,b,S)=>{const P=r==null?void 0:r.document.querySelector(h);if(!!P)if(b==="class"){const j=S.split(/\s/g);Object.values(d).flatMap(w=>(w||"").split(/\s/g)).filter(Boolean).forEach(w=>{j.includes(w)?P.classList.add(w):P.classList.remove(w)})}else P.setAttribute(b,S)});function _(h){var b;const S=h==="auto"?f.value:h;m(t,n,(b=d[S])!=null?b:S)}function p(h){e.onChanged?e.onChanged(h,_):_(h)}return $(c,p,{flush:"post",immediate:!0}),L(()=>p(c.value)),c}var et=Object.defineProperty,tt=Object.defineProperties,nt=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,rt=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable,X=(e,t,n)=>t in e?et(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ot=(e,t)=>{for(var n in t||(t={}))rt.call(t,n)&&X(e,n,t[n]);if(G)for(var n of G(t))at.call(t,n)&&X(e,n,t[n]);return e},it=(e,t)=>tt(e,nt(t));function Pt(e={}){const{valueDark:t="dark",valueLight:n="",window:r=T}=e,a=Ze(it(ot({},e),{onChanged:(i,l)=>{var d;e.onChanged?(d=e.onChanged)==null||d.call(e,i==="dark"):l(i)},modes:{dark:t,light:n}})),o=ue({window:r});return N({get(){return a.value==="dark"},set(i){i===o.value?a.value="auto":a.value=i?"dark":"light"}})}function st(e,t={}){const{controls:n=!1,navigator:r=B}=t,a=Boolean(r&&"permissions"in r);let o;const s=typeof e=="string"?{name:e}:e,i=g(),l=()=>{o&&(i.value=o.state)},d=Oe(async()=>{if(!!a){if(!o)try{o=await r.permissions.query(s),O(o,"change",l),l()}catch{i.value="prompt"}return o}});return d(),n?{state:i,isSupported:a,query:d}:i}function St(e={}){const{navigator:t=B,requestPermissions:n=!1,constraints:r={audio:!0,video:!0},onUpdated:a}=e,o=g([]),s=N(()=>o.value.filter(c=>c.kind==="videoinput")),i=N(()=>o.value.filter(c=>c.kind==="audioinput")),l=N(()=>o.value.filter(c=>c.kind==="audiooutput"));let d=!1;const v=g(!1);async function f(){!d||(o.value=await t.mediaDevices.enumerateDevices(),a==null||a(o.value))}async function u(){if(!d)return!1;if(v.value)return!0;const{state:c,query:m}=st("camera",{controls:!0});return await m(),c.value!=="granted"&&((await t.mediaDevices.getUserMedia(r)).getTracks().forEach(p=>p.stop()),f()),v.value=!0,v.value}return t&&(d=Boolean(t.mediaDevices&&t.mediaDevices.enumerateDevices),d&&(n&&u(),O(t.mediaDevices,"devicechange",f),f())),{devices:o,ensurePermissions:u,permissionGranted:v,videoInputs:s,audioInputs:i,audioOutputs:l,isSupported:d}}var Q=Object.getOwnPropertySymbols,ut=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable,ct=(e,t)=>{var n={};for(var r in e)ut.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Q)for(var r of Q(e))t.indexOf(r)<0&&lt.call(e,r)&&(n[r]=e[r]);return n};function ft(e,t,n={}){const r=n,{window:a=T}=r,o=ct(r,["window"]);let s;const i=a&&"ResizeObserver"in a,l=()=>{s&&(s.disconnect(),s=void 0)},d=$(()=>D(e),f=>{l(),i&&a&&f&&(s=new ResizeObserver(t),s.observe(f,o))},{immediate:!0,flush:"post"}),v=()=>{l(),d()};return R(v),{isSupported:i,stop:v}}function $t(e,t={}){const{reset:n=!0,windowResize:r=!0,windowScroll:a=!0,immediate:o=!0}=t,s=g(0),i=g(0),l=g(0),d=g(0),v=g(0),f=g(0),u=g(0),c=g(0);function m(){const _=D(e);if(!_){n&&(s.value=0,i.value=0,l.value=0,d.value=0,v.value=0,f.value=0,u.value=0,c.value=0);return}const p=_.getBoundingClientRect();s.value=p.height,i.value=p.bottom,l.value=p.left,d.value=p.right,v.value=p.top,f.value=p.width,u.value=p.x,c.value=p.y}return ft(e,m),$(()=>D(e),_=>!_&&m()),a&&O("scroll",m,{passive:!0}),r&&O("resize",m,{passive:!0}),L(()=>{o&&m()}),{height:s,bottom:i,left:l,right:d,top:v,width:f,x:u,y:c,update:m}}var Y;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(Y||(Y={}));function Tt(e={}){var t,n,r;const a=g((t=e.enabled)!=null?t:!1),o=g((n=e.autoSwitch)!=null?n:!0),s=g(e.videoDeviceId),i=g(e.audioDeviceId),{navigator:l=B}=e,d=Boolean((r=l==null?void 0:l.mediaDevices)==null?void 0:r.getUserMedia),v=ee();function f(h){return h.value==="none"||h.value===!1?!1:h.value==null?!0:{deviceId:h.value}}async function u(){if(!(!d||v.value))return v.value=await l.mediaDevices.getUserMedia({video:f(s),audio:f(i)}),v.value}async function c(){var h;(h=v.value)==null||h.getTracks().forEach(b=>b.stop()),v.value=void 0}function m(){c(),a.value=!1}async function _(){return await u(),v.value&&(a.value=!0),v.value}async function p(){return c(),await _()}return $(a,h=>{h?u():c()},{immediate:!0}),$([s,i],()=>{o.value&&v.value&&p()},{immediate:!0}),{isSupported:d,stream:v,start:_,stop:m,restart:p,videoDeviceId:s,audioDeviceId:i,enabled:a,autoSwitch:o}}function Et({window:e=T}={}){if(!e)return{x:g(0),y:g(0)};const t=g(e.pageXOffset),n=g(e.pageYOffset);return O("scroll",()=>{t.value=e.pageXOffset,n.value=e.pageYOffset},{capture:!1,passive:!0}),{x:t,y:n}}function Dt(e={}){const{window:t=T,initialWidth:n=1/0,initialHeight:r=1/0,listenOrientation:a=!0}=e,o=g(n),s=g(r),i=()=>{t&&(o.value=t.innerWidth,s.value=t.innerHeight)};return i(),L(i),O("resize",i,{passive:!0}),a&&O("orientationchange",i,{passive:!0}),{width:o,height:s}}export{wt as a,St as b,Tt as c,mt as d,He as e,$t as f,Ot as g,gt as h,_t as i,Et as j,O as k,Dt as l,pt as m,Pt as n,ht as o,bt as p,vt as s,yt as t,st as u,Ce as w};