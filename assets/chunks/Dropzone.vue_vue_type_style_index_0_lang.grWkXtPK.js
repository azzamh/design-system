import{d as D,r as v,an as M,ab as $,l as S,o as N,c as k,p as x,O as V,a as O,q as p,n as F,a3 as y,V as H}from"./framework.UVGMWIV8.js";import{u as I}from"./index.s_-5J9HF.js";import{t as A}from"./base64.sP9_YaTt.js";function L(n,f){return n?f.filter(c=>{const t=String(c.name).toLowerCase(),i=String(c.type).toLowerCase();return n.split(",").some(u=>{const l=u.trim().toLowerCase();return l.charAt(0)==="."?t.endsWith(l):l.endsWith("/*")?i.replace(/\/.*$/,"")===l.replace(/\/.*$/,""):i===l})}):f}const P=["multiple","accept","disabled"],E=D({__name:"Dropzone",props:{modelValue:{type:[globalThis.File,Array,String],default:void 0},modelModifiers:{type:Object,default:()=>({})},multiple:{type:[Boolean,String],default:!1},maxlength:{type:[Number,String],default:void 0},accept:{type:String,default:""},clearOnCancel:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1}},emits:["update:modelValue","change","cancel"],setup(n,{expose:f,emit:c}){const t=n,i=c,s=I(t),u=v(),l=v(),b=M($(t,"maxlength"),{method:"parseInt"}),d=v(!1),m=v(!1),B=S(()=>{const a=[];return d.value&&a.push("dropzone--dragover"),m.value&&a.push("dropzone--hover"),t.disabled&&a.push("dropzone--disabled"),t.readonly&&a.push("dropzone--readonly"),a});function h(){l.value.value="",l.value.click()}function g(){l.value.value="",u.value=void 0,s.value=void 0}function T(a){if(!t.disabled&&!t.readonly){const e=a.dataTransfer.files;d.value=!1,z(e)}}function w(a){const e=a.target,r=e.files;z(r),t.multiple==="append"&&H(()=>{e.value=""})}function C(a){return Array.isArray(a)?Promise.all(a.map(e=>A(e))):A(a)}async function z(a){if(a.length>0){const e=L(t.accept,Array.from(a)),r=t.multiple===!1?e.at(0):e;let o=r;t.multiple==="append"&&Array.isArray(s.value)&&(o=[...s.value,...o]),Number.isInteger(b.value)&&Array.isArray(o)&&(o=o.slice(0,b.value)),u.value=o,t.modelModifiers.base64&&(o=await C(r)),s.value=o,i("change",o)}else t.clearOnCancel&&g(),i("cancel")}return f({browse:h,clear:g,input:l}),(a,e)=>(N(),k("label",{class:F(["dropzone",p(B)]),"data-testid":"dropzone",onDrop:y(T,["prevent"]),onDragover:e[0]||(e[0]=y(()=>{},["prevent"])),onDragenter:e[1]||(e[1]=y(r=>d.value=!0,["prevent"])),onDragleave:e[2]||(e[2]=y(r=>d.value=!1,["prevent"])),onMouseover:e[3]||(e[3]=r=>m.value=!0),onMouseout:e[4]||(e[4]=r=>m.value=!1)},[x("input",V({ref_key:"input",ref:l,"data-testid":"dropzone-input",class:"dropzone__input",type:"file",multiple:n.multiple!==!1,accept:n.accept,disabled:n.disabled||n.readonly},a.$attrs,{onChange:w}),null,16,P),O(a.$slots,"default",{isDragover:p(d),isHovered:p(m),disabled:n.disabled,readonly:n.readonly,model:p(s),rawModel:p(u),browse:h,clear:g})],34))}});export{E as _};