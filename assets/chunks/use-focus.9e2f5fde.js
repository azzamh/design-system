import{b as N}from"./baseClamp.947838b9.js";import{t as h}from"./toNumber.75689a18.js";function C(n,t,i){return i===void 0&&(i=t,t=void 0),i!==void 0&&(i=h(i),i=i===i?i:0),t!==void 0&&(t=h(t),t=t===t?t:0),N(h(n),t,i)}/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var I=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],g=I.join(","),E=typeof Element>"u",d=E?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,y=!E&&Element.prototype.getRootNode?function(n){var t;return n==null||(t=n.getRootNode)===null||t===void 0?void 0:t.call(n)}:function(n){return n==null?void 0:n.ownerDocument},o=function n(t,i){var e;i===void 0&&(i=!0);var r=t==null||(e=t.getAttribute)===null||e===void 0?void 0:e.call(t,"inert"),l=r===""||r==="true",a=l||i&&t&&n(t.parentNode);return a},F=function(t,i,e){if(o(t))return[];var r=Array.prototype.slice.apply(t.querySelectorAll(g));return i&&d.call(t,g)&&r.unshift(t),r=r.filter(e),r},T=function n(t,i,e){for(var r=[],l=Array.from(t);l.length;){var a=l.shift();if(!o(a,!1))if(a.tagName==="SLOT"){var s=a.assignedElements(),u=s.length?s:a.children,c=n(u,!0,e);e.flatten?r.push.apply(r,c):r.push({scopeParent:a,candidates:c})}else{var v=d.call(a,g);v&&e.filter(a)&&(i||!t.includes(a))&&r.push(a);var f=a.shadowRoot||typeof e.getShadowRoot=="function"&&e.getShadowRoot(a),A=!o(f,!1)&&(!e.shadowRootFilter||e.shadowRootFilter(a));if(f&&A){var m=n(f===!0?a.children:f.children,!0,e);e.flatten?r.push.apply(r,m):r.push({scopeParent:a,candidates:m})}else l.unshift.apply(l,a.children)}}return r},R=function(t){return t.tagName==="INPUT"},p=function(t){return R(t)&&t.type==="hidden"},x=function(t){var i=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(e){return e.tagName==="SUMMARY"});return i},D=function(t){var i,e=t&&y(t),r=(i=e)===null||i===void 0?void 0:i.host,l=!1;if(e&&e!==t){var a,s,u;for(l=!!((a=r)!==null&&a!==void 0&&(s=a.ownerDocument)!==null&&s!==void 0&&s.contains(r)||t!=null&&(u=t.ownerDocument)!==null&&u!==void 0&&u.contains(t));!l&&r;){var c,v,f;e=y(r),r=(c=e)===null||c===void 0?void 0:c.host,l=!!((v=r)!==null&&v!==void 0&&(f=v.ownerDocument)!==null&&f!==void 0&&f.contains(r))}}return l},S=function(t){var i=t.getBoundingClientRect(),e=i.width,r=i.height;return e===0&&r===0},M=function(t,i){var e=i.displayCheck,r=i.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var l=d.call(t,"details>summary:first-of-type"),a=l?t.parentElement:t;if(d.call(a,"details:not([open]) *"))return!0;if(!e||e==="full"||e==="legacy-full"){if(typeof r=="function"){for(var s=t;t;){var u=t.parentElement,c=y(t);if(u&&!u.shadowRoot&&r(u)===!0)return S(t);t.assignedSlot?t=t.assignedSlot:!u&&c!==t.ownerDocument?t=c.host:t=u}t=s}if(D(t))return!t.getClientRects().length;if(e!=="legacy-full")return!0}else if(e==="non-zero-area")return S(t);return!1},w=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var i=t.parentElement;i;){if(i.tagName==="FIELDSET"&&i.disabled){for(var e=0;e<i.children.length;e++){var r=i.children.item(e);if(r.tagName==="LEGEND")return d.call(i,"fieldset[disabled] *")?!0:!r.contains(t)}return!0}i=i.parentElement}return!1},b=function(t,i){return!(i.disabled||o(i)||p(i)||M(i,t)||x(i)||w(i))},L=function(t,i){i=i||{};var e;return i.getShadowRoot?e=T([t],i.includeContainer,{filter:b.bind(null,i),flatten:!0,getShadowRoot:i.getShadowRoot}):e=F(t,i.includeContainer,b.bind(null,i)),e};function O(n,t=!0){function i(l){const a=L(n.value),s=a.indexOf(document.activeElement),u=t?(s+l)%a.length:C(s+l,0,a.length-1),c=a.at(u);c!==void 0&&c.focus()}function e(){i(1)}function r(){i(-1)}return{next:e,prev:r}}export{C as c,O as u};