const c=function(){};function o(n,e={}){c.prototype.name=n;const t={};return new Proxy(c,{get(u,r){return r==="caller"?null:r==="__createMock__"?o:r==="__unenv__"?!0:r in e?e[r]:t[r]=t[r]||o(`${n}.${r.toString()}`)},apply(u,r,s){return o(`${n}()`)},construct(u,r,s){return o(`[${n}]`)},enumerate(){return[]}})}const a=o("mock");function i(n){const e=[];for(const t in n)if(Array.isArray(n[t]))for(const u of n[t])e.push(t,u);else e.push(t,n[t]);return e}function _(...n){return function(...e){for(const t of n)t(...e)}}function f(n){throw new Error(`[unenv] ${n} is not implemented yet!`)}function g(n){return Object.assign(()=>{throw f(n)},{__unenv__:!0})}export{_ as a,f as c,a as m,g as n,i as r};