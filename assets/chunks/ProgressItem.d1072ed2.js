import{f as B,t as V}from"./vnode.d315c788.js";import{b as m,k as b}from"./baseIteratee.51bf9e01.js";import{i as C}from"./isArrayLike.740cb4e2.js";import{t as I}from"./toInteger.cccd26ae.js";import{m as g,c,_ as v,x as d,p,F as o,q as u,H as N,R as P,G as S,y as h,z as $,J as F,v as y}from"./framework.91e0efa6.js";function L(e,a,r,n){for(var s=e.length,t=r+(n?1:-1);n?t--:++t<s;)if(a(e[t],t,e))return t;return-1}function M(e){return function(a,r,n){var s=Object(a);if(!C(a)){var t=m(r);a=b(a),r=function(l){return t(s[l],l,s)}}var i=e(a,r,n);return i>-1?s[t?a[i]:i]:void 0}}var z=Math.max,x=Math.min;function A(e,a,r){var n=e==null?0:e.length;if(!n)return-1;var s=n-1;return r!==void 0&&(s=I(r),s=r<0?z(n+s,0):x(s,n-1)),L(e,m(a),s,!0)}var D=M(A);const j=D,q=g({props:{variant:{type:String,default:"dot"},titleVariant:{type:String,default:"specific"},vertical:{type:Boolean,default:!1}},setup(e,{slots:a}){const r=c(()=>{const s=[];return e.variant&&s.push(`progress--${e.variant}`),e.titleVariant&&s.push(`progress--${e.titleVariant}`),e.vertical?s.push("progress--vertical"):s.push("progress--horizontal"),s}),n=c(()=>{var i,l,_;const s=B(a.default(),"ProgressItem"),t=j(s,k=>{var f;return V((f=k.props)==null?void 0:f.active)});return{title:(l=(i=t==null?void 0:t.props)==null?void 0:i.title)!=null?l:"",slots:(_=t==null?void 0:t.children)!=null?_:{}}});return{classNames:r,item:n}}});const w={class:"progress__items"},E={key:0,"data-testid":"progress-title-general",class:"progress__title"};function G(e,a,r,n,s,t){var i;return d(),p("div",{class:y(["progress",e.classNames]),"data-testid":"progress"},[o("div",w,[u(e.$slots,"default")]),e.titleVariant==="general"?(d(),p("div",E,[(i=e.item.slots)!=null&&i.title?(d(),N(P(e.item.slots.title),{key:0})):(d(),p(S,{key:1},[h($(e.item.title),1)],64))])):F("",!0)],2)}const ee=v(q,[["render",G]]),H=g({name:"ProgressItem",props:{title:{type:String,default:""},active:{type:Boolean,default:!1}},setup(e){return{classNames:c(()=>{const r=[];return e.active&&r.push("progress--active"),r})}}}),J={class:"progress__content"},O=o("div",{class:"progress__bar"},null,-1),T={class:"progress__point"},K=o("div",{"data-testid":"progress-point-item",class:"progress__point-item"},null,-1),Q={"data-testid":"progress-title",class:"progress__title"};function R(e,a,r,n,s,t){return d(),p("div",{class:y(["progress__item",e.classNames]),"data-testid":"progress-item"},[o("div",J,[O,o("div",T,[u(e.$slots,"icon",{},()=>[K])]),o("div",Q,[u(e.$slots,"title",{},()=>[h($(e.title),1)])])])],2)}const se=v(H,[["render",R]]);export{se as a,ee as p};