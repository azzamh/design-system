var x=Object.getOwnPropertyNames,G=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty;function d(r,e){return function(a,n,u){return r(a,n,u)&&e(a,n,u)}}function m(r){return function(t,a,n){if(!t||!a||typeof t!="object"||typeof a!="object")return r(t,a,n);var u=n.cache,l=u.get(t),c=u.get(a);if(l&&c)return l===a&&c===t;u.set(t,a),u.set(a,t);var f=r(t,a,n);return u.delete(t),u.delete(a),f}}function A(r){return x(r).concat(G(r))}var $=Object.hasOwn||function(r,e){return B.call(r,e)};function y(r,e){return r||e?r===e:r===e||r!==r&&e!==e}var P="_owner",j=Object.getOwnPropertyDescriptor,w=Object.keys;function D(r,e,t){var a=r.length;if(e.length!==a)return!1;for(;a-- >0;)if(!t.equals(r[a],e[a],a,a,r,e,t))return!1;return!0}function I(r,e){return y(r.getTime(),e.getTime())}function S(r,e,t){if(r.size!==e.size)return!1;for(var a={},n=r.entries(),u=0,l,c;(l=n.next())&&!l.done;){for(var f=e.entries(),v=!1,i=0;(c=f.next())&&!c.done;){var o=l.value,s=o[0],E=o[1],p=c.value,O=p[0],R=p[1];!v&&!a[i]&&(v=t.equals(s,O,u,i,r,e,t)&&t.equals(E,R,s,O,r,e,t))&&(a[i]=!0),i++}if(!v)return!1;u++}return!0}function M(r,e,t){var a=w(r),n=a.length;if(w(e).length!==n)return!1;for(var u;n-- >0;)if(u=a[n],u===P&&(r.$$typeof||e.$$typeof)&&r.$$typeof!==e.$$typeof||!$(e,u)||!t.equals(r[u],e[u],u,u,r,e,t))return!1;return!0}function g(r,e,t){var a=A(r),n=a.length;if(A(e).length!==n)return!1;for(var u,l,c;n-- >0;)if(u=a[n],u===P&&(r.$$typeof||e.$$typeof)&&r.$$typeof!==e.$$typeof||!$(e,u)||!t.equals(r[u],e[u],u,u,r,e,t)||(l=j(r,u),c=j(e,u),(l||c)&&(!l||!c||l.configurable!==c.configurable||l.enumerable!==c.enumerable||l.writable!==c.writable)))return!1;return!0}function k(r,e){return y(r.valueOf(),e.valueOf())}function N(r,e){return r.source===e.source&&r.flags===e.flags}function T(r,e,t){if(r.size!==e.size)return!1;for(var a={},n=r.values(),u,l;(u=n.next())&&!u.done;){for(var c=e.values(),f=!1,v=0;(l=c.next())&&!l.done;)!f&&!a[v]&&(f=t.equals(u.value,l.value,u.value,l.value,r,e,t))&&(a[v]=!0),v++;if(!f)return!1}return!0}function W(r,e){var t=r.length;if(e.length!==t)return!1;for(;t-- >0;)if(r[t]!==e[t])return!1;return!0}var z="[object Arguments]",_="[object Boolean]",V="[object Date]",U="[object Map]",J="[object Number]",L="[object Object]",X="[object RegExp]",Z="[object Set]",F="[object String]",H=Array.isArray,h=typeof ArrayBuffer=="function"&&ArrayBuffer.isView?ArrayBuffer.isView:null,C=Object.assign,K=Object.prototype.toString.call.bind(Object.prototype.toString);function Q(r){var e=r.areArraysEqual,t=r.areDatesEqual,a=r.areMapsEqual,n=r.areObjectsEqual,u=r.arePrimitiveWrappersEqual,l=r.areRegExpsEqual,c=r.areSetsEqual,f=r.areTypedArraysEqual;return function(i,o,s){if(i===o)return!0;if(i==null||o==null||typeof i!="object"||typeof o!="object")return i!==i&&o!==o;var E=i.constructor;if(E!==o.constructor)return!1;if(E===Object)return n(i,o,s);if(H(i))return e(i,o,s);if(h!=null&&h(i))return f(i,o,s);if(E===Date)return t(i,o,s);if(E===RegExp)return l(i,o,s);if(E===Map)return a(i,o,s);if(E===Set)return c(i,o,s);var p=K(i);return p===V?t(i,o,s):p===X?l(i,o,s):p===U?a(i,o,s):p===Z?c(i,o,s):p===L?typeof i.then!="function"&&typeof o.then!="function"&&n(i,o,s):p===z?n(i,o,s):p===_||p===J||p===F?u(i,o,s):!1}}function Y(r){var e=r.circular,t=r.createCustomConfig,a=r.strict,n={areArraysEqual:a?g:D,areDatesEqual:I,areMapsEqual:a?d(S,g):S,areObjectsEqual:a?g:M,arePrimitiveWrappersEqual:k,areRegExpsEqual:N,areSetsEqual:a?d(T,g):T,areTypedArraysEqual:a?g:W};if(t&&(n=C({},n,t(n))),e){var u=m(n.areArraysEqual),l=m(n.areMapsEqual),c=m(n.areObjectsEqual),f=m(n.areSetsEqual);n=C({},n,{areArraysEqual:u,areMapsEqual:l,areObjectsEqual:c,areSetsEqual:f})}return n}function b(r){return function(e,t,a,n,u,l,c){return r(e,t,c)}}function rr(r){var e=r.circular,t=r.comparator,a=r.createState,n=r.equals,u=r.strict;if(a)return function(f,v){var i=a(),o=i.cache,s=o===void 0?e?new WeakMap:void 0:o,E=i.meta;return t(f,v,{cache:s,equals:n,meta:E,strict:u})};if(e)return function(f,v){return t(f,v,{cache:new WeakMap,equals:n,meta:void 0,strict:u})};var l={cache:void 0,equals:n,meta:void 0,strict:u};return function(f,v){return t(f,v,l)}}var er=q();q({strict:!0});q({circular:!0});q({circular:!0,strict:!0});q({createInternalComparator:function(){return y}});q({strict:!0,createInternalComparator:function(){return y}});q({circular:!0,createInternalComparator:function(){return y}});q({circular:!0,createInternalComparator:function(){return y},strict:!0});function q(r){r===void 0&&(r={});var e=r.circular,t=e===void 0?!1:e,a=r.createInternalComparator,n=r.createState,u=r.strict,l=u===void 0?!1:u,c=Y(r),f=Q(c),v=a?a(f):b(f);return rr({circular:t,comparator:f,createState:n,equals:v,strict:l})}function tr(r,e){return er(r,e)}function ar(r,e){return r.some(t=>tr(t,e))}export{tr as i,ar as v};