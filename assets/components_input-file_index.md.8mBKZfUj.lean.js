import{d as A,r as u,l as T,o as _,f as x,w as i,K as e,b as F,t as y,a3 as S,q as c,a8 as m,n as D,c as q,p as d,W as n,F as P}from"./chunks/framework.pPTQOZ96.js";import{u as B}from"./chunks/index.NyNYb6b9.js";import{_ as V}from"./chunks/Dropzone.vue_vue_type_style_index_0_lang.uXyHp3AS.js";import{_ as I}from"./chunks/Input.vue_vue_type_script_setup_true_lang.Oji-AhDF.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.w40geAFS.js";import{p as z,_ as N}from"./chunks/InputGroupAddon.hyedus8J.js";import{_ as w}from"./chunks/Button.vue_vue_type_script_setup_true_lang.hIAY_Ofm.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.w40geAFS.js";import"./chunks/base64.sP9_YaTt.js";import"./chunks/20.u4zezLMT.js";import"./chunks/index.hjpy5ZnQ.js";import"./chunks/accept._rvVzN4h.js";import"./chunks/SpinnerRinggo.vue_vue_type_script_setup_true_lang.xK7i01zT.js";const l=A({__name:"InputFile",props:{modelValue:{type:[globalThis.File,Array,String],default:void 0},modelModifiers:{type:Object,default:()=>({})},multiple:{type:[Boolean,String],default:!1},maxlength:{type:[Number,String],default:void 0},accept:{type:String,default:""},clearable:{type:Boolean,default:!1},clearOnCancel:{type:Boolean,default:!1},placeholder:{type:String,default:"No file chosen"},browseLabel:{type:String,default:"Choose file"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},size:{type:String,default:"md"}},emits:["update:modelValue","clear","change","cancel"],setup(s,{expose:o,emit:r}){const p=s,k=r,a=B(p),h=u(),b=T(()=>{const t=[];return p.readonly&&t.push("input-file--readonly"),p.disabled&&t.push("input-file--disabled"),p.error&&t.push("input-file--error"),t});function f(t){var E;return Array.isArray(t)?t.map(g=>g.name).join(", "):(E=t==null?void 0:t.name)!=null?E:""}function v(){const t=new Event("clear");k("clear",t),!p.disabled&&!p.readonly&&!t.defaultPrevented&&h.value.clear()}return o({dropzone:h}),(t,E)=>(_(),x(V,{ref_key:"dropzone",ref:h,modelValue:c(a),"onUpdate:modelValue":E[0]||(E[0]=g=>m(a)?a.value=g:null),class:D(["input-file",c(b)]),"model-modifiers":s.modelModifiers,multiple:s.multiple,maxlength:s.maxlength,accept:s.accept,disabled:s.disabled,readonly:s.readonly,"clear-on-cancel":s.clearOnCancel},{default:i(({browse:g,rawModel:C})=>[e(N,{disabled:s.disabled,error:s.error,size:s.size},{default:i(()=>[e(z,null,{default:i(()=>[e(w,{disabled:s.disabled,readonly:s.readonly,onClick:g},{default:i(()=>[F(y(s.browseLabel),1)]),_:2},1032,["disabled","readonly","onClick"])]),_:2},1024),e(I,{readonly:"",clearable:s.clearable,"model-value":f(C),placeholder:s.placeholder,onClear:S(v,["stop","prevent"])},null,8,["clearable","model-value","placeholder"])]),_:2},1032,["disabled","error","size"])]),_:1},8,["modelValue","class","model-modifiers","multiple","maxlength","accept","disabled","readonly","clear-on-cancel"]))}}),R=n("",4),U=n("",3),M=n("",2),O=n("",2),L=n("",2),$=n("",2),j=n("",3),W=n("",3),G=n("",2),H=d("p",null,[d("strong",null,"result:")],-1),J={class:"truncate"},K=n("",3),Q=d("p",null,[d("strong",null,"result:")],-1),X={class:"truncate"},Y=n("",10),ce=JSON.parse('{"title":"Input File · Components","description":"Base file-input form.","frontmatter":{"title":"Input File · Components","description":"Base file-input form."},"headers":[],"relativePath":"components/input-file/index.md","filePath":"components/input-file/index.md"}'),Z={name:"components/input-file/index.md"},Ee=Object.assign(Z,{setup(s){const o=u(),r=u();return(p,k)=>{const a=P("preview");return _(),q("div",null,[R,e(a,null,{default:i(()=>[e(l,{multiple:""})]),_:1}),U,e(a,{class:"flex-col space-y-3"},{default:i(()=>[e(l,{size:"xs"}),e(l,{size:"sm"}),e(l,{size:"md"}),e(l,{size:"lg"})]),_:1}),M,e(a,{class:"flex-col space-y-3"},{default:i(()=>[e(l,{disabled:""})]),_:1}),O,e(a,{class:"flex-col space-y-3"},{default:i(()=>[e(l,{readonly:""})]),_:1}),L,e(a,{class:"flex-col space-y-3"},{default:i(()=>[e(l,{error:""})]),_:1}),$,e(a,{class:"flex-col space-y-3"},{default:i(()=>[e(l,{clearable:""})]),_:1}),j,e(a,{class:"flex-col space-y-3"},{default:i(()=>[e(l,{multiple:""})]),_:1}),W,e(a,{class:"flex-col space-y-3"},{default:i(()=>[e(l,{multiple:"append"})]),_:1}),G,e(a,{class:"flex-col space-y-3"},{default:i(()=>[e(l,{modelValue:c(o),"onUpdate:modelValue":k[0]||(k[0]=h=>m(o)?o.value=h:null)},null,8,["modelValue"])]),_:1}),H,d("pre",J,[d("code",null,y(c(o)),1)]),K,e(a,{class:"flex-col space-y-3"},{default:i(()=>[e(l,{modelValue:c(r),"onUpdate:modelValue":k[1]||(k[1]=h=>m(r)?r.value=h:null),modelModifiers:{base64:!0}},null,8,["modelValue"])]),_:1}),Q,d("pre",X,[d("code",null,y(c(r)),1)]),Y])}}});export{ce as __pageData,Ee as default};