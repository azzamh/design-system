import{d as q,r as b,ax as B,ac as I,k as T,as as V,o as u,c as f,F as N,G as w,f as z,N as R,a1 as C,a3 as m,p as k,n as K,J as t,w as d,m as g,t as U,a8 as p,E as O,a9 as G}from"./chunks/framework.sPKXfJg2.js";import{_ as L}from"./chunks/Input.vue_vue_type_script_setup_true_lang.Bet4tWGP.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.l0sNRNKZ.js";import{u as $}from"./chunks/use-focus.BMEofKAE.js";import{r as j,i as J}from"./chunks/accept.6g-OpsWF.js";import"./chunks/index.BXynq5-W.js";import"./chunks/20.Ddr7hwV1.js";import"./chunks/index.DvWHfs5K.js";import"./chunks/toNumber.Dcxq_36h.js";import"./chunks/isObject.C3e4t58V.js";import"./chunks/isSymbol.BOom9x27.js";import"./chunks/baseGetTag.Cu32HCTk.js";import"./chunks/isObjectLike.nLWjQ9zq.js";function _(l,h){return Array.from({length:h},(e,r)=>{var i;return(i=l==null?void 0:l[r])!=null?i:""})}const n=q({inheritAttrs:!1,__name:"InputPin",props:{modelValue:{type:String,default:void 0},size:{type:String,default:"md"},length:{type:[Number,String],default:5},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},accept:{type:String,default:void 0}},emits:["update:modelValue","change"],setup(l,{emit:h}){const e=l,r=h,i=b(),o=B(I(e,"length")),E=b(_(e.modelValue,o.value)),S=T(()=>{const s=[];return e.disabled&&s.push("input-pin--disabled"),e.readonly&&s.push("input-pin--readonly"),e.error&&s.push("input-pin--error","state--error"),s}),{next:v,prev:A}=$(i,!1),F=T({get(){return _(e.modelValue,o.value)},set(s){const a=s.map(c=>c||" ").join("").trimEnd();r("change",a),r("update:modelValue",a)}});V(E,F,{deep:!0,immediate:!1});function x(s){return E.value.at(s)}function D(s,a){a.inputType==="insertFromPaste"?E.value=_(j(e.accept,a.data),o.value):a.inputType!=="insertLineBreak"&&(!a.data||J(e.accept,a.data))&&(E.value[s]=a.data,i.value&&(a.inputType==="deleteContentBackward"&&A(),a.inputType==="insertText"&&v()))}function P(s){if(!e.readonly&&!e.disabled){const a=s.target;a.value&&[...s.key].length===1&&!s.ctrlKey&&!s.metaKey?(s.preventDefault(),a.dispatchEvent(new InputEvent("beforeinput",{inputType:"insertText",data:s.key}))):s.key==="Backspace"&&(s.preventDefault(),a.dispatchEvent(new InputEvent("beforeinput",{inputType:"deleteContentBackward"})))}}return(s,a)=>(u(),f("div",{ref_key:"root",ref:i,"data-testid":"input-pin",class:K(["input-pin",k(S)])},[(u(!0),f(N,null,w(k(o),c=>(u(),z(L,R({key:c,maxlength:"1"},s.$attrs,{"model-value":x(c-1),size:l.size,clearable:!1,readonly:l.readonly,disabled:l.disabled,error:l.error,onKeydown:[a[0]||(a[0]=y=>P(y)),C(m(k(A),["stop","prevent"]),["left"]),C(m(k(v),["stop","prevent"]),["right"])],onBeforeinput:m(y=>D(c-1,y),["prevent"])}),null,16,["model-value","size","readonly","disabled","error","onBeforeinput","onKeydown"]))),128))],2))}}),M=p("",4),Y=p("",3),W=p("",3),H=p("",2),Q=p("",2),X=p("",2),Z=p("",3),ss=p("",4),ts=g("p",null,[g("strong",null,"result:")],-1),as={class:"truncate whitespace-pre"},is=p("",10),ms=JSON.parse('{"title":"Input Pin · Components","description":"One at time input form.","frontmatter":{"title":"Input Pin · Components","description":"One at time input form."},"headers":[],"relativePath":"components/input-pin/index.md","filePath":"components/input-pin/index.md"}'),es={name:"components/input-pin/index.md"},_s=Object.assign(es,{setup(l){const h=b("");return(e,r)=>{const i=O("preview");return u(),f("div",null,[M,t(i,null,{default:d(()=>[t(n)]),_:1}),Y,t(i,null,{default:d(()=>[t(n,{length:"3"})]),_:1}),W,t(i,{class:"flex-col space-y-3"},{default:d(()=>[t(n,{size:"xs"}),t(n,{size:"sm"}),t(n,{size:"md"}),t(n,{size:"lg"})]),_:1}),H,t(i,null,{default:d(()=>[t(n,{disabled:""})]),_:1}),Q,t(i,null,{default:d(()=>[t(n,{readonly:""})]),_:1}),X,t(i,null,{default:d(()=>[t(n,{error:""})]),_:1}),Z,t(i,{class:"flex-col space-y-4"},{default:d(()=>[t(n,{accept:"numeric"})]),_:1}),ss,t(i,null,{default:d(()=>[t(n,{modelValue:k(h),"onUpdate:modelValue":r[0]||(r[0]=o=>G(h)?h.value=o:null)},null,8,["modelValue"])]),_:1}),ts,g("p",null,[g("code",as,U(k(h)||"-"),1)]),is])}}});export{ms as __pageData,_s as default};