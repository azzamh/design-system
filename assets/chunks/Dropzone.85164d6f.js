import{t as w}from"./index.8df9a8d7.js";import{u as h,d as v,h as A,r as C,J as M,_ as T,v as V,b as B,F as N,V as S,z as H,a as F,a2 as f}from"./framework.0fccce8d.js";import{u as O}from"./index.aa62d5f4.js";import{t as g}from"./base64.041d95b4.js";import{b as I}from"./index.9c3046df.js";function L(e,a){return e?a.filter(i=>{const t=String(i.name).toLowerCase(),d=String(i.type).toLowerCase();return e.split(",").some(r=>{const s=r.trim().toLowerCase();return s.charAt(0)==="."?t.endsWith(s):s.endsWith("/*")?d.replace(/\/.*$/,"")===s.replace(/\/.*$/,""):d===s})}):a}const P=h({props:{modelValue:{type:[globalThis.File,Array,String],default:void 0},modelModifiers:{type:Object,default:()=>({})},multiple:{type:[Boolean,String],default:!1},maxlength:{type:[Number,String],default:void 0},accept:{type:String,default:""},clearOnCancel:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","change","cancel"],setup(e,{emit:a}){const i=v(),t=O(e),d=w("input"),u=I(A(e,"maxlength"),{method:"parseInt"}),r=v(!1),s=v(!1),c=C(()=>{const o=[];return r.value&&o.push("dropzone--dragover"),s.value&&o.push("dropzone--hover"),e.disabled&&o.push("dropzone--disabled"),e.readonly&&o.push("dropzone--readonly"),o});function b(){d.value.value="",d.value.click()}function m(){d.value.value="",i.value=void 0,t.value=void 0}function z(o){if(!e.disabled&&!e.readonly){const l=o.dataTransfer.files;r.value=!1,y(l)}}function D(o){const l=o.target,p=l.files;y(p),e.multiple==="append"&&M(()=>{l.value=""})}function $(o){return Array.isArray(o)?Promise.all(o.map(l=>g(l))):g(o)}async function y(o){if(o.length>0){const l=L(e.accept,Array.from(o)),p=e.multiple===!1?l.at(0):l;let n=p;e.multiple==="append"&&Array.isArray(t.value)&&(n=[...t.value,...n]),Number.isInteger(u.value)&&Array.isArray(n)&&(n=n.slice(0,u.value)),i.value=n,e.modelModifiers.base64&&(n=await $(p)),t.value=n,a("change",n)}else e.clearOnCancel&&m(),a("cancel")}return{classNames:c,browse:b,clear:m,isDragover:r,isHovered:s,model:t,rawModel:i,onDrop:z,onChange:D}}});const W=["multiple","accept","disabled"];function j(e,a,i,t,d,u){return V(),B("label",{class:F(["dropzone",e.classNames]),"data-testid":"dropzone",onDrop:a[1]||(a[1]=f((...r)=>e.onDrop&&e.onDrop(...r),["prevent"])),onDragover:a[2]||(a[2]=f(()=>{},["prevent"])),onDragenter:a[3]||(a[3]=f(r=>e.isDragover=!0,["prevent"])),onDragleave:a[4]||(a[4]=f(r=>e.isDragover=!1,["prevent"])),onMouseover:a[5]||(a[5]=r=>e.isHovered=!0),onMouseout:a[6]||(a[6]=r=>e.isHovered=!1)},[N("input",S({ref:"input","data-testid":"dropzone-input",class:"dropzone__input",type:"file",multiple:e.multiple!==!1,accept:e.accept,disabled:e.disabled||e.readonly},e.$attrs,{onChange:a[0]||(a[0]=(...r)=>e.onChange&&e.onChange(...r))}),null,16,W),H(e.$slots,"default",{isDragover:e.isDragover,isHovered:e.isHovered,disabled:e.disabled,readonly:e.readonly,model:e.model,rawModel:e.rawModel,browse:e.browse,clear:e.clear})],34)}const G=T(P,[["render",j]]);export{G as p};