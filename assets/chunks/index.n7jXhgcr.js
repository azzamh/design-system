import{m as U,V as R,r as g,X as j,z as F,a8 as C,l as _,ak as L,al as V,q,ah as G,ac as z,am as H,an as X,ad as Z,B as $}from"./framework.kdG7p9fL.js";function O(e){return L()?(V(e),!0):!1}function oe(){const e=new Set,t=i=>{e.delete(i)};return{on:i=>{e.add(i);const r=()=>t(i);return O(r),{off:r}},off:t,trigger:(...i)=>Promise.all(Array.from(e).map(r=>r(...i)))}}function p(e){return typeof e=="function"?e():q(e)}const x=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const re=e=>typeof e<"u",ie=e=>e!=null,J=Object.prototype.toString,se=e=>J.call(e)==="[object Object]",ue=(e,t,n)=>Math.min(n,Math.max(t,e)),b=()=>{},ae=K();function K(){var e,t;return x&&((e=window==null?void 0:window.navigator)==null?void 0:e.userAgent)&&(/iP(ad|hone|od)/.test(window.navigator.userAgent)||((t=window==null?void 0:window.navigator)==null?void 0:t.maxTouchPoints)>2&&/iPad|Macintosh/.test(window==null?void 0:window.navigator.userAgent))}function I(e,t){function n(...o){return new Promise((i,r)=>{Promise.resolve(e(()=>t.apply(this,o),{fn:t,thisArg:this,args:o})).then(i).catch(r)})}return n}const k=e=>e();function Q(e,t={}){let n,o,i=b;const r=u=>{clearTimeout(u),i(),i=b};return u=>{const s=p(e),m=p(t.maxWait);return n&&r(n),s<=0||m!==void 0&&m<=0?(o&&(r(o),o=null),Promise.resolve(u())):new Promise((d,a)=>{i=t.rejectOnCancel?a:d,m&&!o&&(o=setTimeout(()=>{n&&r(n),o=null,d(u())},m)),n=setTimeout(()=>{o&&r(o),o=null,d(u())},s)})}}function Y(...e){let t=0,n,o=!0,i=b,r,c,u,s,m;!C(e[0])&&typeof e[0]=="object"?{delay:c,trailing:u=!0,leading:s=!0,rejectOnCancel:m=!1}=e[0]:[c,u=!0,s=!0,m=!1]=e;const d=()=>{n&&(clearTimeout(n),n=void 0,i(),i=b)};return l=>{const f=p(c),h=Date.now()-t,v=()=>r=l();return d(),f<=0?(t=Date.now(),v()):(h>f&&(s||!o)?(t=Date.now(),v()):u&&(r=new Promise((w,y)=>{i=m?y:w,n=setTimeout(()=>{t=Date.now(),o=!0,w(v()),d()},Math.max(0,f-h))})),!s&&!n&&(n=setTimeout(()=>o=!0,f)),o=!1,r)}}function ee(e=k){const t=g(!0);function n(){t.value=!1}function o(){t.value=!0}const i=(...r)=>{t.value&&e(...r)};return{isActive:j(t),pause:n,resume:o,eventFilter:i}}function M(e,t=!1,n="Timeout"){return new Promise((o,i)=>{setTimeout(t?()=>i(n):o,e)})}function ce(e){let t;function n(){return t||(t=e()),t}return n.reset=async()=>{const o=t;t=void 0,o&&await o},n}function A(e){return e||G()}function le(...e){if(e.length!==1)return z(...e);const t=e[0];return typeof t=="function"?j(H(()=>({get:t,set:b}))):g(t)}function fe(e,t=200,n=!1,o=!0,i=!1){return I(Y(t,n,o,i),e)}function E(e,t,n={}){const{eventFilter:o=k,...i}=n;return F(e,I(o,t),i)}function N(e,t,n={}){const{eventFilter:o,...i}=n,{eventFilter:r,pause:c,resume:u,isActive:s}=ee(o);return{stop:E(e,t,{...i,eventFilter:r}),pause:c,resume:u,isActive:s}}function me(e,t,...[n]){const{flush:o="sync",deep:i=!1,immediate:r=!0,direction:c="both",transform:u={}}=n||{},s=[],m="ltr"in u&&u.ltr||(l=>l),d="rtl"in u&&u.rtl||(l=>l);return(c==="both"||c==="ltr")&&s.push(N(e,l=>{s.forEach(f=>f.pause()),t.value=m(l),s.forEach(f=>f.resume())},{flush:o,deep:i,immediate:r})),(c==="both"||c==="rtl")&&s.push(N(t,l=>{s.forEach(f=>f.pause()),e.value=d(l),s.forEach(f=>f.resume())},{flush:o,deep:i,immediate:r})),()=>{s.forEach(l=>l.stop())}}function de(e,t=!0,n){A(n)?X(e,n):t?e():R(e)}function pe(e,t){A(t)&&Z(e,t)}function he(e,t=!0,n){A()?U(e,n):t?e():R(e)}function we(e,t){A(t)&&$(e,t)}function S(e,t=!1){function n(a,{flush:l="sync",deep:f=!1,timeout:h,throwOnTimeout:v}={}){let w=null;const B=[new Promise(P=>{w=F(e,T=>{a(T)!==t&&(w==null||w(),P(T))},{flush:l,deep:f,immediate:!0})})];return h!=null&&B.push(M(h,v).then(()=>p(e)).finally(()=>w==null?void 0:w())),Promise.race(B)}function o(a,l){if(!C(a))return n(T=>T===a,l);const{flush:f="sync",deep:h=!1,timeout:v,throwOnTimeout:w}=l!=null?l:{};let y=null;const P=[new Promise(T=>{y=F([e,a],([D,W])=>{t!==(D===W)&&(y==null||y(),T(D))},{flush:f,deep:h,immediate:!0})})];return v!=null&&P.push(M(v,w).then(()=>p(e)).finally(()=>(y==null||y(),p(e)))),Promise.race(P)}function i(a){return n(l=>!!l,a)}function r(a){return o(null,a)}function c(a){return o(void 0,a)}function u(a){return n(Number.isNaN,a)}function s(a,l){return n(f=>{const h=Array.from(f);return h.includes(a)||h.includes(p(a))},l)}function m(a){return d(1,a)}function d(a=1,l){let f=-1;return n(()=>(f+=1,f>=a),l)}return Array.isArray(p(e))?{toMatch:n,toContains:s,changed:m,changedTimes:d,get not(){return S(e,!t)}}:{toMatch:n,toBe:o,toBeTruthy:i,toBeNull:r,toBeNaN:u,toBeUndefined:c,changed:m,changedTimes:d,get not(){return S(e,!t)}}}function ve(e){return S(e)}function te(e,t=1e3,n={}){const{immediate:o=!0,immediateCallback:i=!1}=n;let r=null;const c=g(!1);function u(){r&&(clearInterval(r),r=null)}function s(){c.value=!1,u()}function m(){const d=p(t);d<=0||(c.value=!0,i&&e(),u(),r=setInterval(e,d))}if(o&&x&&m(),C(t)||typeof t=="function"){const d=F(t,()=>{c.value&&x&&m()});O(d)}return O(s),{isActive:c,pause:s,resume:m}}function ye(e=1e3,t={}){const{controls:n=!1,immediate:o=!0,callback:i}=t,r=g(0),c=()=>r.value+=1,u=()=>{r.value=0},s=te(i?()=>{c(),i(r.value)}:c,e,{immediate:o});return n?{counter:r,reset:u,...s}:r}function Te(e,t,n={}){const{immediate:o=!0}=n,i=g(!1);let r=null;function c(){r&&(clearTimeout(r),r=null)}function u(){i.value=!1,c()}function s(...m){c(),i.value=!0,r=setTimeout(()=>{i.value=!1,r=null,e(...m)},p(t))}return o&&(i.value=!0,x&&s()),O(u),{isPending:j(i),start:s,stop:u}}function be(e,t={}){const{method:n="parseFloat",radix:o,nanToZero:i}=t;return _(()=>{let r=p(e);return typeof r=="string"&&(r=Number[n](r,o)),i&&Number.isNaN(r)&&(r=0),r})}function ge(e,t,n={}){const{debounce:o=0,maxWait:i=void 0,...r}=n;return E(e,t,{...r,eventFilter:Q(o,{maxWait:i})})}export{fe as a,ge as b,be as c,x as d,se as e,p as f,O as g,ce as h,ae as i,Te as j,le as k,ie as l,re as m,b as n,ue as o,de as p,pe as q,oe as r,me as s,he as t,ve as u,we as v,N as w,ye as x};