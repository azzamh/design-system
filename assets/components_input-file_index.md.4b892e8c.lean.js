import{u as k}from"./chunks/index.86298ba5.js";import{p as T}from"./chunks/Dropzone.ddac3df3.js";import{p as q}from"./chunks/Input.46879ea1.js";import{p as S,a as F}from"./chunks/InputGroupAddon.ea903cc4.js";import{_ as D}from"./chunks/Button.vue_vue_type_script_setup_true_lang.99aa9448.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.4ed993c7.js";import{t as x}from"./chunks/index.d72d8958.js";import{d as P,g as B,_ as I,C as E,o as v,b as V,w as l,H as e,a as z,t as _,Z as N,n as w,h as f,c as R,k as c,l as u,Q as o,a1 as b}from"./chunks/framework.4146f201.js";import"./chunks/index.c7fdaaa0.js";import"./chunks/base64.041d95b4.js";import"./chunks/index.a3ecab28.js";import"./chunks/accept.c8f4354a.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/SpinnerRinggo.62674c99.js";const U=P({components:{pDropzone:T,pInput:q,pInputGroup:S,pInputGroupAddon:F,pButton:D},props:{modelValue:{type:[globalThis.File,Array,String],default:void 0},modelModifiers:{type:Object,default:()=>({})},multiple:{type:[Boolean,String],default:!1},maxlength:{type:[Number,String],default:void 0},accept:{type:String,default:""},clearable:{type:Boolean,default:!1},clearOnCancel:{type:Boolean,default:!1},placeholder:{type:String,default:"No file chosen"},browseLabel:{type:String,default:"Choose file"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},size:{type:String,default:"md"}},emits:["update:modelValue","clear","change","cancel"],setup(s,{emit:p}){const r=k(s),h=x("dropzone"),d=B(()=>{const a=[];return s.readonly&&a.push("input-file--readonly"),s.disabled&&a.push("input-file--disabled"),s.error&&a.push("input-file--error"),a});function t(a){var y;return Array.isArray(a)?a.map(g=>g.name).join(", "):(y=a==null?void 0:a.name)!=null?y:""}function i(){const a=new Event("clear");p("clear",a),!s.disabled&&!s.readonly&&!a.defaultPrevented&&h.value.clear()}return{model:r,classNames:d,getFileNames:t,clear:i}}});function M(s,p,r,h,d,t){const i=E("p-button"),a=E("p-input-group-addon"),y=E("p-input"),g=E("p-input-group"),C=E("p-dropzone");return v(),V(C,{ref:"dropzone",modelValue:s.model,"onUpdate:modelValue":p[0]||(p[0]=m=>s.model=m),class:w(["input-file",s.classNames]),"model-modifiers":s.modelModifiers,multiple:s.multiple,maxlength:s.maxlength,accept:s.accept,disabled:s.disabled,readonly:s.readonly,"clear-on-cancel":s.clearOnCancel},{default:l(({browse:m,rawModel:A})=>[e(g,{disabled:s.disabled,error:s.error,size:s.size},{default:l(()=>[e(a,null,{default:l(()=>[e(i,{disabled:s.disabled,readonly:s.readonly,onClick:m},{default:l(()=>[z(_(s.browseLabel),1)]),_:2},1032,["disabled","readonly","onClick"])]),_:2},1024),e(y,{readonly:"",clearable:s.clearable,"model-value":s.getFileNames(A),placeholder:s.placeholder,onClear:N(s.clear,["stop","prevent"])},null,8,["clearable","model-value","placeholder","onClear"])]),_:2},1032,["disabled","error","size"])]),_:1},8,["modelValue","class","model-modifiers","multiple","maxlength","accept","disabled","readonly","clear-on-cancel"])}const n=I(U,[["render",M]]),O=o("",4),$=o("",3),L=o("",2),j=o("",2),G=o("",2),H=o("",2),W=o("",3),J=o("",3),Q=o("",2),Z=c("p",null,[c("strong",null,"result:")],-1),K={class:"truncate"},X=o("",3),Y=c("p",null,[c("strong",null,"result:")],-1),ss={class:"truncate"},es=o("",10),ms=JSON.parse('{"title":"Input File · Components","description":"Base file-input form.","frontmatter":{"title":"Input File · Components","description":"Base file-input form."},"headers":[],"relativePath":"components/input-file/index.md","filePath":"components/input-file/index.md"}'),as={name:"components/input-file/index.md"},_s=Object.assign(as,{setup(s){const p=f(),r=f();return(h,d)=>{const t=E("preview");return v(),R("div",null,[O,e(t,null,{default:l(()=>[e(n,{multiple:""})]),_:1}),$,e(t,{class:"flex-col space-y-3"},{default:l(()=>[e(n,{size:"xs"}),e(n,{size:"sm"}),e(n,{size:"md"}),e(n,{size:"lg"})]),_:1}),L,e(t,{class:"flex-col space-y-3"},{default:l(()=>[e(n,{disabled:""})]),_:1}),j,e(t,{class:"flex-col space-y-3"},{default:l(()=>[e(n,{readonly:""})]),_:1}),G,e(t,{class:"flex-col space-y-3"},{default:l(()=>[e(n,{error:""})]),_:1}),H,e(t,{class:"flex-col space-y-3"},{default:l(()=>[e(n,{clearable:""})]),_:1}),W,e(t,{class:"flex-col space-y-3"},{default:l(()=>[e(n,{multiple:""})]),_:1}),J,e(t,{class:"flex-col space-y-3"},{default:l(()=>[e(n,{multiple:"append"})]),_:1}),Q,e(t,{class:"flex-col space-y-3"},{default:l(()=>[e(n,{modelValue:u(p),"onUpdate:modelValue":d[0]||(d[0]=i=>b(p)?p.value=i:null)},null,8,["modelValue"])]),_:1}),Z,c("pre",K,[c("code",null,_(u(p)),1)]),X,e(t,{class:"flex-col space-y-3"},{default:l(()=>[e(n,{modelValue:u(r),"onUpdate:modelValue":d[1]||(d[1]=i=>b(r)?r.value=i:null),modelModifiers:{base64:!0}},null,8,["modelValue"])]),_:1}),Y,c("pre",ss,[c("code",null,_(u(r)),1)]),es])}}});export{ms as __pageData,_s as default};