import{b as K,U as x,g as G,a as $,i as h,S as y,c as X,k as Y,d as Z,t as I,e as W,f as q,h as c}from"./Uint8Array.cDH14Nhq.js";import{M as b}from"./memoize.UOSzi-11.js";import{S as m,i as N}from"./isObjectLike.OM1Hublo.js";import{e as z}from"./eq.T-xbWnwO.js";import{i as R}from"./isArray.nknceDKk.js";import{i as V}from"./isObject.mlSoqgao.js";import{b as j,a as k}from"./isArrayLike.mPUXsLGz.js";function nn(n,r,e){var f=n==null?void 0:K(n,r);return f===void 0?e:f}var rn="__lodash_hash_undefined__";function en(n){return this.__data__.set(n,rn),this}function fn(n){return this.__data__.has(n)}function M(n){var r=-1,e=n==null?0:n.length;for(this.__data__=new b;++r<e;)this.add(n[r])}M.prototype.add=M.prototype.push=en;M.prototype.has=fn;function an(n,r){for(var e=-1,f=n==null?0:n.length;++e<f;)if(r(n[e],e,n))return!0;return!1}function tn(n,r){return n.has(r)}var un=1,sn=2;function o(n,r,e,f,a,i){var t=e&un,u=n.length,l=r.length;if(u!=l&&!(t&&l>u))return!1;var g=i.get(n),d=i.get(r);if(g&&d)return g==r&&d==n;var A=-1,s=!0,v=e&sn?new M:void 0;for(i.set(n,r),i.set(r,n);++A<u;){var _=n[A],p=r[A];if(f)var O=t?f(p,_,A,r,n,i):f(_,p,A,n,r,i);if(O!==void 0){if(O)continue;s=!1;break}if(v){if(!an(r,function(P,T){if(!tn(v,T)&&(_===P||a(_,P,e,f,i)))return v.push(T)})){s=!1;break}}else if(!(_===p||a(_,p,e,f,i))){s=!1;break}}return i.delete(n),i.delete(r),s}function ln(n){var r=-1,e=Array(n.size);return n.forEach(function(f,a){e[++r]=[a,f]}),e}function gn(n){var r=-1,e=Array(n.size);return n.forEach(function(f){e[++r]=f}),e}var An=1,dn=2,_n="[object Boolean]",pn="[object Date]",vn="[object Error]",On="[object Map]",Pn="[object Number]",Tn="[object RegExp]",wn="[object Set]",En="[object String]",Ln="[object Symbol]",yn="[object ArrayBuffer]",Rn="[object DataView]",U=m?m.prototype:void 0,S=U?U.valueOf:void 0;function Mn(n,r,e,f,a,i,t){switch(e){case Rn:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case yn:return!(n.byteLength!=r.byteLength||!i(new x(n),new x(r)));case _n:case pn:case Pn:return z(+n,+r);case vn:return n.name==r.name&&n.message==r.message;case Tn:case En:return n==r+"";case On:var u=ln;case wn:var l=f&An;if(u||(u=gn),n.size!=r.size&&!l)return!1;var g=t.get(n);if(g)return g==r;f|=dn,t.set(n,r);var d=o(u(n),u(r),f,a,i,t);return t.delete(n),d;case Ln:if(S)return S.call(n)==S.call(r)}return!1}var Sn=1,In=Object.prototype,Dn=In.hasOwnProperty;function Cn(n,r,e,f,a,i){var t=e&Sn,u=G(n),l=u.length,g=G(r),d=g.length;if(l!=d&&!t)return!1;for(var A=l;A--;){var s=u[A];if(!(t?s in r:Dn.call(r,s)))return!1}var v=i.get(n),_=i.get(r);if(v&&_)return v==r&&_==n;var p=!0;i.set(n,r),i.set(r,n);for(var O=t;++A<l;){s=u[A];var P=n[s],T=r[s];if(f)var C=t?f(T,P,s,r,n,i):f(P,T,s,n,r,i);if(!(C===void 0?P===T||a(P,T,e,f,i):C)){p=!1;break}O||(O=s=="constructor")}if(p&&!O){var w=n.constructor,E=r.constructor;w!=E&&"constructor"in n&&"constructor"in r&&!(typeof w=="function"&&w instanceof w&&typeof E=="function"&&E instanceof E)&&(p=!1)}return i.delete(n),i.delete(r),p}var xn=1,F="[object Arguments]",B="[object Array]",L="[object Object]",Gn=Object.prototype,H=Gn.hasOwnProperty;function $n(n,r,e,f,a,i){var t=R(n),u=R(r),l=t?B:$(n),g=u?B:$(r);l=l==F?L:l,g=g==F?L:g;var d=l==L,A=g==L,s=l==g;if(s&&h(n)){if(!h(r))return!1;t=!0,d=!1}if(s&&!d)return i||(i=new y),t||X(n)?o(n,r,e,f,a,i):Mn(n,r,l,e,f,a,i);if(!(e&xn)){var v=d&&H.call(n,"__wrapped__"),_=A&&H.call(r,"__wrapped__");if(v||_){var p=v?n.value():n,O=_?r.value():r;return i||(i=new y),a(p,O,e,f,i)}}return s?(i||(i=new y),Cn(n,r,e,f,a,i)):!1}function D(n,r,e,f,a){return n===r?!0:n==null||r==null||!N(n)&&!N(r)?n!==n&&r!==r:$n(n,r,e,f,D,a)}var hn=1,mn=2;function Nn(n,r,e,f){var a=e.length,i=a,t=!f;if(n==null)return!i;for(n=Object(n);a--;){var u=e[a];if(t&&u[2]?u[1]!==n[u[0]]:!(u[0]in n))return!1}for(;++a<i;){u=e[a];var l=u[0],g=n[l],d=u[1];if(t&&u[2]){if(g===void 0&&!(l in n))return!1}else{var A=new y;if(f)var s=f(g,d,l,n,r,A);if(!(s===void 0?D(d,g,hn|mn,f,A):s))return!1}}return!0}function J(n){return n===n&&!V(n)}function Un(n){for(var r=Y(n),e=r.length;e--;){var f=r[e],a=n[f];r[e]=[f,a,J(a)]}return r}function Q(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function Fn(n){var r=Un(n);return r.length==1&&r[0][2]?Q(r[0][0],r[0][1]):function(e){return e===n||Nn(e,n,r)}}function Bn(n,r){return n!=null&&r in Object(n)}function Hn(n,r,e){r=Z(r,n);for(var f=-1,a=r.length,i=!1;++f<a;){var t=I(r[f]);if(!(i=n!=null&&e(n,t)))break;n=n[t]}return i||++f!=a?i:(a=n==null?0:n.length,!!a&&j(a)&&k(t,a)&&(R(n)||W(n)))}function Kn(n,r){return n!=null&&Hn(n,r,Bn)}var qn=1,on=2;function Jn(n,r){return q(n)&&J(r)?Q(I(n),r):function(e){var f=nn(e,n);return f===void 0&&f===r?Kn(e,n):D(r,f,qn|on)}}function Qn(n){return function(r){return r==null?void 0:r[n]}}function Xn(n){return function(r){return K(r,n)}}function Yn(n){return q(n)?Qn(I(n)):Xn(n)}function kn(n){return typeof n=="function"?n:n==null?c:typeof n=="object"?R(n)?Jn(n[0],n[1]):Fn(n):Yn(n)}export{kn as b};