const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/interact.min.CbIEsjER.js","assets/chunks/commonjsHelpers.BosuxZz1.js"])))=>i.map(i=>d[i]);
import{I as J,y as P,a3 as K,Z as Q,d as W,r as m,ax as k,t as V,l as r,aB as Y,ar as E,o as ee,c as ae,m as i,ac as x,aj as R,R as D,p as w,n as te}from"./framework.6Y5hX2by.js";import{u as I}from"./index.DUP7z69l.js";import{t as le}from"./throttle.CdTQLZho.js";function T(d,g){const e=J();P(d,async u=>{if(e.value&&e.value.unset(),u){const{default:p}=await Q(async()=>{const{default:f}=await import("./interact.min.CbIEsjER.js").then(t=>t.i);return{default:f}},__vite__mapDeps([0,1])),v=le(g,1e3/120);e.value=p(u).styleCursor(!1).draggable({onmove:v})}}),K(async()=>{e.value&&e.value.unset()})}const oe=W({__name:"InputRange",props:{modelValue:{type:[Number,Array],default:void 0},start:{type:Number,default:void 0},end:{type:Number,default:void 0},step:{type:[String,Number],default:1},min:{type:[String,Number],default:0},max:{type:[String,Number],default:100},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},emits:["change","update:modelValue","update:end","update:start"],setup(d,{emit:g}){var S,A,B;const e=d,u=g,p=m(),v=m(),f=m(),t=k(V(e,"min")),n=k(V(e,"max")),y=k(V(e,"step")),_=m(Array.isArray(e.modelValue)?e.modelValue[0]:(S=e.start)!=null?S:t.value),b=m(Array.isArray(e.modelValue)?e.modelValue[1]:(B=(A=e.end)!=null?A:e.modelValue)!=null?B:n.value),M=r(()=>e.multiple?_.value+y.value:t.value),z=r(()=>e.multiple?b.value-y.value:n.value),s=I(_.value,t,z),o=I(b.value,M,n),{width:L,left:U}=Y(p),$=r({get(){var a;return Array.isArray(e.modelValue)?e.modelValue[0]:(a=e.start)!=null?a:t.value},set(a){u("update:start",a)}}),j=r({get(){var a;return Array.isArray(e.modelValue)?e.modelValue[1]:Number.isFinite(e.modelValue)?e.modelValue:(a=e.end)!=null?a:n.value},set(a){u("update:end",a)}}),C=r(()=>(s.value-t.value)/(n.value-t.value)*100),F=r(()=>(o.value-t.value)/(n.value-t.value)*100),O=r(()=>{const a=[];return e.disabled&&a.push("input-range--disabled"),e.readonly&&a.push("input-range--readonly"),e.error&&a.push("input-range--error","state--error"),a}),X=r(()=>({width:`${C.value}%`})),Z=r(()=>({width:`${F.value-C.value}%`}));function c(a){const h=(a.pageX-U.value)/L.value*(n.value-t.value)+t.value;return Math.round(h/y.value)*y.value}function q(a){!e.disabled&&!e.readonly&&(s.value=c(a))}function G(a){if(!e.disabled&&!e.readonly){const l=c(a);if(e.multiple){const N=Math.abs(l-s.value),h=Math.abs(l-o.value);if(N<h){s.value=l;return}}o.value=l}}function H(a){!e.disabled&&!e.readonly&&(o.value=c(a))}return T(v,a=>{!e.disabled&&!e.readonly&&(s.value=c(a))}),T(f,a=>{!e.disabled&&!e.readonly&&(o.value=c(a))}),E(s,$,{immediate:!1}),E(o,j,{immediate:!1}),P([s,o],([a,l])=>{_.value=a,b.value=l,e.multiple?(u("update:modelValue",[a,l]),u("change",[a,l])):(u("update:modelValue",l),u("change",l))}),(a,l)=>(ee(),ae("div",{"data-testid":"input-range",class:te(["input-range",w(O)])},[i("div",{ref_key:"track",ref:p,class:"input-range__tracks"},[x(i("div",{"data-testid":"track-lower",class:"input-range__track input-range__track-lower",style:D(w(X)),onClickCapture:q},null,36),[[R,d.multiple]]),i("div",{"data-testid":"track-active",class:"input-range__track input-range__track-active",style:D(w(Z)),onClickCapture:G},[x(i("div",{ref_key:"thumbStart",ref:v,"data-testid":"thumb-start",class:"input-range__thumb input-range__thumb-start"},null,512),[[R,d.multiple]]),i("div",{ref_key:"thumbEnd",ref:f,"data-testid":"thumb-end",class:"input-range__thumb input-range__thumb-end"},null,512)],36),i("div",{"data-testid":"track-upper",class:"input-range__track input-range__track-upper",onClickCapture:H},null,32)],512)],2))}});export{oe as _};