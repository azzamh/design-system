import{a9 as $,j as g,O as j,x as _,g as x,l as T}from"./framework.ea844ac6.js";function v(t){return typeof t=="function"?t():T(t)}const q=(t,r,n)=>Math.min(n,Math.max(r,t)),O=()=>{};function F(t,r){function n(...e){return new Promise((o,a)=>{Promise.resolve(t(()=>r.apply(this,e),{fn:r,thisArg:this,args:e})).then(o).catch(a)})}return n}const R=t=>t();function N(t,r={}){let n,e,o=O;const a=i=>{clearTimeout(i),o(),o=O};return i=>{const l=v(t),s=v(r.maxWait);return n&&a(n),l<=0||s!==void 0&&s<=0?(e&&(a(e),e=null),Promise.resolve(i())):new Promise((f,p)=>{o=r.rejectOnCancel?p:f,s&&!e&&(e=setTimeout(()=>{n&&a(n),e=null,f(i())},s)),n=setTimeout(()=>{e&&a(e),e=null,f(i())},l)})}}function z(t,r,n={}){var e,o;const{flush:a="sync",deep:c=!1,immediate:i=!0,direction:l="both",transform:s={}}=n;let f,p;const y=(e=s.ltr)!=null?e:u=>u,P=(o=s.rtl)!=null?o:u=>u;return(l==="both"||l==="ltr")&&(f=_(t,u=>r.value=y(u),{flush:a,deep:c,immediate:i})),(l==="both"||l==="rtl")&&(p=_(r,u=>t.value=P(u),{flush:a,deep:c,immediate:i})),()=>{f==null||f(),p==null||p()}}function B(t,r=!0){$()?g(t):r?t():j(t)}function G(t,r={}){const{method:n="parseFloat",radix:e,nanToZero:o}=r;return x(()=>{let a=v(t);return typeof a=="string"&&(a=Number[n](a,e)),o&&Number.isNaN(a)&&(a=0),a})}var d=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,D=(t,r)=>{var n={};for(var e in t)I.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&d)for(var e of d(t))r.indexOf(e)<0&&W.call(t,e)&&(n[e]=t[e]);return n};function E(t,r,n={}){const e=n,{eventFilter:o=R}=e,a=D(e,["eventFilter"]);return _(t,F(o,r),a)}var M=Object.defineProperty,S=Object.defineProperties,L=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,b=(t,r,n)=>r in t?M(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,C=(t,r)=>{for(var n in r||(r={}))h.call(r,n)&&b(t,n,r[n]);if(m)for(var n of m(r))w.call(r,n)&&b(t,n,r[n]);return t},V=(t,r)=>S(t,L(r)),A=(t,r)=>{var n={};for(var e in t)h.call(t,e)&&r.indexOf(e)<0&&(n[e]=t[e]);if(t!=null&&m)for(var e of m(t))r.indexOf(e)<0&&w.call(t,e)&&(n[e]=t[e]);return n};function H(t,r,n={}){const e=n,{debounce:o=0,maxWait:a=void 0}=e,c=A(e,["debounce","maxWait"]);return E(t,r,V(C({},c),{eventFilter:N(o,{maxWait:a})}))}export{B as a,q as c,z as s,v as t,G as u,H as w};