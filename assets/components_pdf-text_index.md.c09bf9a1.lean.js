import{c as O}from"./chunks/create-image.219ca7ba.js";import{c as $,u as M}from"./chunks/index.4a6eedef.js";import{u as H}from"./chunks/index.66a2f4bb.js";import{f as G}from"./chunks/base64.041d95b4.js";import{l as J}from"./chunks/load-font.516114b7.js";import{c as Y}from"./chunks/use-focus.32a6221d.js";import{d as Q,h as S,j as K,_ as W,o as R,c as U,am as X,C as Z,H as l,w as g,k as y,t as N,l as e,Q as F,a as q,a1 as I}from"./chunks/framework.ea844ac6.js";import{a as ss}from"./chunks/index.bc57e2e2.js";import{p as as}from"./chunks/PdfViewer.6502145b.js";import{p as ns}from"./chunks/PdfObject.7cccabe9.js";import{F as ls}from"./chunks/Calibrator-v3.05700ce1.js";import"./chunks/avatar.bd58a373.js";import"./chunks/color-hash.af77277d.js";import"./chunks/defu.fbddeef0.js";import"./chunks/load-image.265b152a.js";import"./chunks/index.b1700c29.js";import"./chunks/toNumber.75689a18.js";import"./chunks/isObject.32699ff3.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/index.8626e971.js";import"./chunks/index.6d123da7.js";import"./chunks/noop.cb277961.js";import"./chunks/20.bb832a8c.js";import"./chunks/20.9e129ba7.js";import"./chunks/Button.vue_vue_type_script_setup_true_lang.40129c4b.js";import"./chunks/index.a3ecab28.js";import"./chunks/SpinnerRinggo.04c28947.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Divider.7526ed4c.js";import"./chunks/Divider.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Select.vue_vue_type_style_index_0_lang.0cb84225.js";import"./chunks/Dropdown.vue_vue_type_script_setup_true_lang.4c0b1526.js";import"./chunks/Dropdown.vue_vue_type_style_index_0_lang.96db71b5.js";import"./chunks/floating-ui.dom.546cdae4.js";import"./chunks/DropdownHeader.49eb3de7.js";import"./chunks/Subheading.014d7094.js";import"./chunks/Input.3967c5fd.js";import"./chunks/accept.c8f4354a.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Text.7e0e7737.js";import"./chunks/Label.8f06c0fa.js";import"./chunks/Dot.9a9f9de4.js";import"./chunks/Dot.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/16.4eb43d30.js";import"./chunks/Label.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/20.a7c0c876.js";import"./chunks/20.9bd54a66.js";import"./chunks/IconCheckbox.39dafda4.js";import"./chunks/SpinnerRing.124421e3.js";import"./chunks/value.d2e2d3a1.js";import"./chunks/adapter.2a72619d.js";import"./chunks/use-loading.6da634a2.js";import"./chunks/isNil.c75b1b34.js";import"./chunks/Heading.460a6948.js";import"./chunks/Heading.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/focus.33532f0c.js";import"./chunks/commonjsHelpers.de833af9.js";import"./chunks/index.7319edc6.js";import"./chunks/debounce.b619e377.js";import"./chunks/toInteger.d4d227f4.js";import"./chunks/toString.5230fc0f.js";import"./chunks/isArray.513c67aa.js";import"./chunks/memoize.ddd08355.js";import"./chunks/eq.0257f0f1.js";function D(s,d,r,t,i){const a=[];s.font=`${r}px ${JSON.stringify(t)}`,s.textBaseline="top";let o="",n,p,h;for(const B of d.split(`
`)){const m=B.split(" ");for(n=0;n<m.length;n++){for(p=m[n],h=s.measureText(p);h.width>i;)p=p.slice(0,Math.max(0,p.length-1)),h=s.measureText(p);m[n]!==p&&(m.splice(n+1,0,m[n].slice(p.length)),m[n]=p),p=`${o+m[n]} `,h=s.measureText(p),h.width>i&&n>0?(a.push(o),o=`${m[n]} `):o=p}a.push(o),o=""}return a}async function V(s,d=1){var k,P,L,z;const{text:r,color:t,padding:i,font:a,height:o,width:n,size:p,minSize:h,maxSize:B,fixedSize:m,label:T,lineHeight:_}=s;await J(a);const w=(k=s.canvas)!=null?k:$(n,o,d),E=w.getContext("2d"),v=n-i*2;let C=i;if(T){const x=(P=s.labelSize)!=null?P:p,u=(L=s.labelFont)!=null?L:a,b=(z=s.labelColor)!=null?z:t,f=D(E,T,x,u,v);E.font=`${x}px ${JSON.stringify(u)}`,E.textBaseline="top",E.textAlign="start",E.fillStyle=b;for(const A of f)E.fillText(A,i,C),C+=x*_}if(r){const x=o-(C+i);let u=p,b=D(E,r,u,a,v);if(!m){let f=b.length*_,A=0;do{const j=Y(Math.round((x/f*u+u)/2),h,B);if(j===u)break;u=j,b=D(E,r,u,a,v),f=b.length*_*u}while(f>x&&++A<5)}E.font=`${u}px ${JSON.stringify(a)}`,E.textBaseline="top",E.textAlign="start",E.fillStyle=t;for(const f of b)E.fillText(f,i,C),C+=u*_}return w.toDataURL("image/png")}const ts=Q({props:{modelValue:{type:[String,globalThis.File],default:""},modelModifiers:{type:Object,default:()=>({})},text:{type:String,default:""},width:{type:Number,default:198},height:{type:Number,default:106},color:{type:String,default:"#4a5362"},size:{type:Number,default:16},minSize:{type:Number,default:11},maxSize:{type:Number,default:72},fixedSize:{type:Boolean,default:!1},font:{type:String,default:"DM Sans"},lineHeight:{type:Number,default:1.5},padding:{type:Number,default:12},label:{type:String,default:""},labelColor:{type:String,default:"#9EA0A2"},labelFont:{type:String,default:void 0},labelSize:{type:Number,default:12}},setup(s){const d=H(s),r=M(d,O(s.width,s.height)),t=S("");ss(()=>[s.text,s.width,s.height,s.color,s.size,s.fixedSize,s.font,s.lineHeight,s.padding,s.label,s.labelColor,s.labelFont,s.labelSize],()=>{i()},{debounce:300}),K(()=>{i()});async function i(){const a=await V(s),o=s.modelModifiers.base64?a:G(a);d.value=o,t.value=`${await V(s,2)} 2x`}return{preview:r,srcset:t}}});const os=["width","height","src","srcset","alt"];function es(s,d,r,t,i,a){return R(),U("img",{class:"pdf-text",width:s.width,height:s.height,src:s.preview,srcset:s.srcset,alt:s.text},null,8,os)}const c=W(ts,[["render",es]]),ps=F("",4),cs=F("",2),rs=F("",3),is=F("",2),Es=F("",3),ys=F("",3),ds={class:"grid grid-cols-2 grid-rows-2 gap-4"},us=F("",3),ms=F("",2),gs={class:"truncate"},Fs=y("h3",{id:"encode-to-base64",tabindex:"-1"},[q("Encode to base64 "),y("a",{class:"header-anchor",href:"#encode-to-base64","aria-label":'Permalink to "Encode to base64"'},"​")],-1),hs=y("p",null,[q("If you prefer "),y("a",{href:"https://en.wikipedia.org/wiki/Data_URI_scheme",target:"_blank",rel:"noreferrer"},"base64-dataURI"),q(" format, add modifier "),y("code",null,".base64"),q(" to your "),y("code",null,"v-model"),q(".")],-1),fs=y("p",null,[y("strong",null,"result")],-1),xs={class:"truncate"},bs=F("",8),La=JSON.parse('{"title":"PDF Text · Components","description":"Generate text for Pdf Object","frontmatter":{"title":"PDF Text · Components","description":"Generate text for Pdf Object"},"headers":[],"relativePath":"components/pdf-text/index.md","filePath":"components/pdf-text/index.md"}'),Cs={name:"components/pdf-text/index.md"},za=Object.assign(Cs,{setup(s){const d=S(),r=S(),t=X({src:void 0,page:1,x:100,y:200,width:void 0,height:void 0});return(i,a)=>{const o=Z("preview");return R(),U("div",null,[ps,l(o,{class:"flex-col !bg-base-white"},{default:g(()=>[l(c,{text:"Lorem ipsum dolor sit amet consectetur adipisicing"})]),_:1}),cs,l(o,null,{default:g(()=>[l(as,{src:e(ls)},{default:g(()=>[l(ns,{page:e(t).page,"onUpdate:page":a[1]||(a[1]=n=>e(t).page=n),x:e(t).x,"onUpdate:x":a[2]||(a[2]=n=>e(t).x=n),y:e(t).y,"onUpdate:y":a[3]||(a[3]=n=>e(t).y=n),width:e(t).width,"onUpdate:width":a[4]||(a[4]=n=>e(t).width=n),height:e(t).height,"onUpdate:height":a[5]||(a[5]=n=>e(t).height=n)},{default:g(()=>[l(c,{modelValue:e(t).src,"onUpdate:modelValue":a[0]||(a[0]=n=>e(t).src=n),modelModifiers:{base64:!0},width:e(t).width,height:e(t).height,text:"Lorem ipsum dolor sit amet consectetur adipisicing"},null,8,["modelValue","width","height"])]),_:1},8,["page","x","y","width","height"])]),_:1},8,["src"])]),_:1}),rs,l(o,{class:"flex-col !bg-base-white"},{default:g(()=>[l(c,{font:"Indie Flower",text:"Lorem ipsum dolor sit amet consectetur adipisicing"}),l(c,{font:"Satisfy",text:"Lorem ipsum dolor sit amet consectetur adipisicing"})]),_:1}),is,l(o,{class:"flex-col !bg-base-white"},{default:g(()=>[l(c,{color:"#004C9D",text:"Lorem ipsum dolor sit amet consectetur adipisicing"}),l(c,{color:"#23B242",text:"Lorem ipsum dolor sit amet consectetur adipisicing"}),l(c,{color:"#E42E2C",text:"Lorem ipsum dolor sit amet consectetur adipisicing"})]),_:1}),Es,l(o,{class:"flex-col !bg-base-white"},{default:g(()=>[l(c,{label:"Noted from Tarjono (TR001)",text:"Lorem ipsum dolor sit amet consectetur adipisicing"}),l(c,{label:"Noted from Tarjono (TR001)",text:"Lorem ipsum dolor sit amet consectetur adipisicing"})]),_:1}),ys,l(o,{class:"!bg-base-white"},{default:g(()=>[y("div",ds,[l(c,{label:"Fixed Size",text:"Lorem ipsum dolor adipisicing","fixed-size":""}),l(c,{label:"Default",text:"Lorem ipsum dolor adipisicing"}),l(c,{label:"Fixed Size (long text)",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, maxime. Amet enim soluta?","fixed-size":""}),l(c,{label:"Default (long text)",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, maxime. Amet enim soluta?"})])]),_:1}),us,l(o,{class:"flex-col !bg-base-white"},{default:g(()=>[l(c,{text:"Lorem ipsum dolor sit amet consectetur adipisicing",modelValue:e(d),"onUpdate:modelValue":a[6]||(a[6]=n=>I(d)?d.value=n:null)},null,8,["modelValue"])]),_:1}),ms,y("pre",gs,[y("code",null,N(e(d)),1)]),Fs,hs,l(o,{class:"flex-col !bg-base-white"},{default:g(()=>[l(c,{text:"Lorem ipsum dolor sit amet consectetur adipisicing",modelValue:e(r),"onUpdate:modelValue":a[7]||(a[7]=n=>I(r)?r.value=n:null),modelModifiers:{base64:!0}},null,8,["modelValue"])]),_:1}),fs,y("pre",xs,[y("code",null,N(e(r)),1)]),bs])}}});export{La as __pageData,za as default};