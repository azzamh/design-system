import{b as H,U as G,g as $,e as m,f as x,S as E,h as Y,k as Z,j as W,t as M,c as b,l as q,i as z}from"./Uint8Array.008PCTql.js";import{S as h,c as o,s as c}from"./setToArray.DdBK26qc.js";import{S as C}from"./baseGetTag.Cu32HCTk.js";import{e as V}from"./eq.PE3UIL_r.js";import{i as y}from"./isArray.Dxzbedgu.js";import{i as U}from"./isObjectLike.nLWjQ9zq.js";import{i as j}from"./isObject.C3e4t58V.js";import{b as k,a as nn}from"./isArrayLike.C0g-NlKf.js";function rn(n,r,e){var f=n==null?void 0:H(n,r);return f===void 0?e:f}function en(n,r){for(var e=-1,f=n==null?0:n.length;++e<f;)if(r(n[e],e,n))return!0;return!1}var fn=1,un=2;function J(n,r,e,f,u,i){var a=e&fn,s=n.length,l=r.length;if(s!=l&&!(a&&l>s))return!1;var g=i.get(n),v=i.get(r);if(g&&v)return g==r&&v==n;var A=-1,t=!0,P=e&un?new h:void 0;for(i.set(n,r),i.set(r,n);++A<s;){var d=n[A],O=r[A];if(f)var p=a?f(O,d,A,r,n,i):f(d,O,A,n,r,i);if(p!==void 0){if(p)continue;t=!1;break}if(P){if(!en(r,function(T,_){if(!o(P,_)&&(d===T||u(d,T,e,f,i)))return P.push(_)})){t=!1;break}}else if(!(d===O||u(d,O,e,f,i))){t=!1;break}}return i.delete(n),i.delete(r),t}function an(n){var r=-1,e=Array(n.size);return n.forEach(function(f,u){e[++r]=[u,f]}),e}var sn=1,tn=2,ln="[object Boolean]",gn="[object Date]",An="[object Error]",vn="[object Map]",dn="[object Number]",On="[object RegExp]",Pn="[object Set]",pn="[object String]",Tn="[object Symbol]",_n="[object ArrayBuffer]",Ln="[object DataView]",B=C?C.prototype:void 0,S=B?B.valueOf:void 0;function Rn(n,r,e,f,u,i,a){switch(e){case Ln:if(n.byteLength!=r.byteLength||n.byteOffset!=r.byteOffset)return!1;n=n.buffer,r=r.buffer;case _n:return!(n.byteLength!=r.byteLength||!i(new G(n),new G(r)));case ln:case gn:case dn:return V(+n,+r);case An:return n.name==r.name&&n.message==r.message;case On:case pn:return n==r+"";case vn:var s=an;case Pn:var l=f&sn;if(s||(s=c),n.size!=r.size&&!l)return!1;var g=a.get(n);if(g)return g==r;f|=tn,a.set(n,r);var v=J(s(n),s(r),f,u,i,a);return a.delete(n),v;case Tn:if(S)return S.call(n)==S.call(r)}return!1}var wn=1,En=Object.prototype,yn=En.hasOwnProperty;function Sn(n,r,e,f,u,i){var a=e&wn,s=$(n),l=s.length,g=$(r),v=g.length;if(l!=v&&!a)return!1;for(var A=l;A--;){var t=s[A];if(!(a?t in r:yn.call(r,t)))return!1}var P=i.get(n),d=i.get(r);if(P&&d)return P==r&&d==n;var O=!0;i.set(n,r),i.set(r,n);for(var p=a;++A<l;){t=s[A];var T=n[t],_=r[t];if(f)var D=a?f(_,T,t,r,n,i):f(T,_,t,n,r,i);if(!(D===void 0?T===_||u(T,_,e,f,i):D)){O=!1;break}p||(p=t=="constructor")}if(O&&!p){var L=n.constructor,R=r.constructor;L!=R&&"constructor"in n&&"constructor"in r&&!(typeof L=="function"&&L instanceof L&&typeof R=="function"&&R instanceof R)&&(O=!1)}return i.delete(n),i.delete(r),O}var Mn=1,F="[object Arguments]",N="[object Array]",w="[object Object]",In=Object.prototype,K=In.hasOwnProperty;function Dn(n,r,e,f,u,i){var a=y(n),s=y(r),l=a?N:m(n),g=s?N:m(r);l=l==F?w:l,g=g==F?w:g;var v=l==w,A=g==w,t=l==g;if(t&&x(n)){if(!x(r))return!1;a=!0,v=!1}if(t&&!v)return i||(i=new E),a||Y(n)?J(n,r,e,f,u,i):Rn(n,r,l,e,f,u,i);if(!(e&Mn)){var P=v&&K.call(n,"__wrapped__"),d=A&&K.call(r,"__wrapped__");if(P||d){var O=P?n.value():n,p=d?r.value():r;return i||(i=new E),u(O,p,e,f,i)}}return t?(i||(i=new E),Sn(n,r,e,f,u,i)):!1}function I(n,r,e,f,u){return n===r?!0:n==null||r==null||!U(n)&&!U(r)?n!==n&&r!==r:Dn(n,r,e,f,I,u)}var Gn=1,$n=2;function mn(n,r,e,f){var u=e.length,i=u,a=!f;if(n==null)return!i;for(n=Object(n);u--;){var s=e[u];if(a&&s[2]?s[1]!==n[s[0]]:!(s[0]in n))return!1}for(;++u<i;){s=e[u];var l=s[0],g=n[l],v=s[1];if(a&&s[2]){if(g===void 0&&!(l in n))return!1}else{var A=new E;if(f)var t=f(g,v,l,n,r,A);if(!(t===void 0?I(v,g,Gn|$n,f,A):t))return!1}}return!0}function Q(n){return n===n&&!j(n)}function xn(n){for(var r=Z(n),e=r.length;e--;){var f=r[e],u=n[f];r[e]=[f,u,Q(u)]}return r}function X(n,r){return function(e){return e==null?!1:e[n]===r&&(r!==void 0||n in Object(e))}}function Cn(n){var r=xn(n);return r.length==1&&r[0][2]?X(r[0][0],r[0][1]):function(e){return e===n||mn(e,n,r)}}function Un(n,r){return n!=null&&r in Object(n)}function Bn(n,r,e){r=W(r,n);for(var f=-1,u=r.length,i=!1;++f<u;){var a=M(r[f]);if(!(i=n!=null&&e(n,a)))break;n=n[a]}return i||++f!=u?i:(u=n==null?0:n.length,!!u&&k(u)&&nn(a,u)&&(y(n)||b(n)))}function Fn(n,r){return n!=null&&Bn(n,r,Un)}var Nn=1,Kn=2;function Hn(n,r){return q(n)&&Q(r)?X(M(n),r):function(e){var f=rn(e,n);return f===void 0&&f===r?Fn(e,n):I(r,f,Nn|Kn)}}function qn(n){return function(r){return r==null?void 0:r[n]}}function Jn(n){return function(r){return H(r,n)}}function Qn(n){return q(n)?qn(M(n)):Jn(n)}function cn(n){return typeof n=="function"?n:n==null?z:typeof n=="object"?y(n)?Hn(n[0],n[1]):Cn(n):Qn(n)}export{cn as b};