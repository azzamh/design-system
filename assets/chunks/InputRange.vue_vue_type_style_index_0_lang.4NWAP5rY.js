import{H as J,z,ae as K,Y as Q,d as W,r as m,ak as k,a9 as V,l as r,av as Z,al as E,o as ee,c as ae,p as i,a8 as x,ah as R,R as D,q as C,n as te}from"./framework.95PECLjQ.js";import{u as T}from"./index.mXdi38WT.js";import{t as le}from"./throttle.Yy5L90F6.js";function P(d,g){const e=J();z(d,async u=>{if(e.value&&e.value.unset(),u){const{default:p}=await Q(()=>import("./interact.min.FnQz540N.js").then(f=>f.i),__vite__mapDeps([0,1,2])),v=le(g,1e3/120);e.value=p(u).styleCursor(!1).draggable({onmove:v})}}),K(async()=>{e.value&&e.value.unset()})}const oe=W({__name:"InputRange",props:{modelValue:{type:[Number,Array],default:void 0},start:{type:Number,default:void 0},end:{type:Number,default:void 0},step:{type:[String,Number],default:1},min:{type:[String,Number],default:0},max:{type:[String,Number],default:100},multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},emits:["change","update:modelValue","update:end","update:start"],setup(d,{emit:g}){var S,A,N;const e=d,u=g,p=m(),v=m(),f=m(),l=k(V(e,"min")),n=k(V(e,"max")),y=k(V(e,"step")),_=m(Array.isArray(e.modelValue)?e.modelValue[0]:(S=e.start)!=null?S:l.value),h=m(Array.isArray(e.modelValue)?e.modelValue[1]:(N=(A=e.end)!=null?A:e.modelValue)!=null?N:n.value),I=r(()=>e.multiple?_.value+y.value:l.value),M=r(()=>e.multiple?h.value-y.value:n.value),s=T(_.value,l,M),o=T(h.value,I,n),{width:L,left:U}=Z(p),$=r({get(){var a;return Array.isArray(e.modelValue)?e.modelValue[0]:(a=e.start)!=null?a:l.value},set(a){u("update:start",a)}}),q=r({get(){var a;return Array.isArray(e.modelValue)?e.modelValue[1]:Number.isFinite(e.modelValue)?e.modelValue:(a=e.end)!=null?a:n.value},set(a){u("update:end",a)}}),w=r(()=>(s.value-l.value)/(n.value-l.value)*100),F=r(()=>(o.value-l.value)/(n.value-l.value)*100),H=r(()=>{const a=[];return e.disabled&&a.push("input-range--disabled"),e.readonly&&a.push("input-range--readonly"),e.error&&a.push("input-range--error","state--error"),a}),O=r(()=>({width:`${w.value}%`})),X=r(()=>({width:`${F.value-w.value}%`}));function c(a){const b=(a.pageX-U.value)/L.value*(n.value-l.value)+l.value;return Math.round(b/y.value)*y.value}function Y(a){!e.disabled&&!e.readonly&&(s.value=c(a))}function j(a){if(!e.disabled&&!e.readonly){const t=c(a);if(e.multiple){const B=Math.abs(t-s.value),b=Math.abs(t-o.value);if(B<b){s.value=t;return}}o.value=t}}function G(a){!e.disabled&&!e.readonly&&(o.value=c(a))}return P(v,a=>{!e.disabled&&!e.readonly&&(s.value=c(a))}),P(f,a=>{!e.disabled&&!e.readonly&&(o.value=c(a))}),E(s,$,{immediate:!1}),E(o,q,{immediate:!1}),z([s,o],([a,t])=>{_.value=a,h.value=t,e.multiple?(u("update:modelValue",[a,t]),u("change",[a,t])):(u("update:modelValue",t),u("change",t))}),(a,t)=>(ee(),ae("div",{"data-testid":"input-range",class:te(["input-range",C(H)])},[i("div",{ref_key:"track",ref:p,class:"input-range__tracks"},[x(i("div",{"data-testid":"track-lower",class:"input-range__track input-range__track-lower",style:D(C(O)),onClickCapture:Y},null,36),[[R,d.multiple]]),i("div",{"data-testid":"track-active",class:"input-range__track input-range__track-active",style:D(C(X)),onClickCapture:j},[x(i("div",{ref_key:"thumbStart",ref:v,"data-testid":"thumb-start",class:"input-range__thumb input-range__thumb-start"},null,512),[[R,d.multiple]]),i("div",{ref_key:"thumbEnd",ref:f,"data-testid":"thumb-end",class:"input-range__thumb input-range__thumb-end"},null,512)],36),i("div",{"data-testid":"track-upper",class:"input-range__track input-range__track-upper",onClickCapture:G},null,32)],512)],2))}});export{oe as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/interact.min.FnQz540N.js","assets/chunks/theme.C61A0BKv.js","assets/chunks/framework.95PECLjQ.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}