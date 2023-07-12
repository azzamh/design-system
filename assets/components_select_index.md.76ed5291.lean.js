import{p as F}from"./chunks/Select.a172d13e.js";import{F as V}from"./chunks/fuse.esm.88e2763d.js";import{d as q,u as P}from"./chunks/adapter.85cbf921.js";import{s as x,c as S,w as f,r as C,g as I,Q as l,al as R,K as O,p as w,M as e,I as u,F as i,z as E,u as o,Y as A,x as k,i as d}from"./chunks/framework.d1aba3cb.js";import{d as z,x as L,k as B}from"./chunks/theme.0ede34c8.js";import"./chunks/Dropdown.29337292.js";import"./chunks/Button.c0b369e2.js";import"./chunks/index.a3ecab28.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/Dropdown.vue_vue_type_style_index_0_lang.0481f507.js";import"./chunks/commonjsHelpers.042e6b4d.js";import"./chunks/utils-6ba05f5b.bfd05ad6.js";import"./chunks/use-focus.ae494a4f.js";import"./chunks/toNumber.09abc7f0.js";import"./chunks/isSymbol.4326927f.js";import"./chunks/isObjectLike.53b0037d.js";import"./chunks/floating-ui.dom.browser.min.b27d3e90.js";import"./chunks/index.7ec55cbf.js";import"./chunks/Input.a21aeee6.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./chunks/SpinnerRing.55dd865f.js";import"./chunks/use-loading.da160747.js";import"./chunks/defu.573334b8.js";import"./chunks/value.830bdabd.js";const N=q({setup({props:D,keyword:p}){const t=x(),s=P(D),y=S(()=>p.value?t.value.search(p.value).map(r=>r.item):s.value);return f(s,r=>{t.value=new V(r,{keys:["text","value"]})},{immediate:!0}),y}});function U(D,p){f(D,p)}function j(D,p,t=500){z(D,p,{debounce:t})}function H(D,p){L(D,"scroll",t=>{const s=t.target;s.scrollTop+s.offsetHeight>=s.scrollHeight&&p(t)},{passive:!0})}function T(D,p){return q({setup({isLoading:t,keyword:s}){const y=C([]),r=C(1),_=C(!1),g=C(!1),h=I(),m=C();function a(){t.value=!0,D(s.value,r.value,20).then(n=>{Array.isArray(n)&&n.length>0?(y.value.push(...n),r.value++):_.value=!0}).catch(console.error).finally(()=>{t.value=!1})}function c(){_.value=!1,r.value=1,y.value=[]}return p!==void 0&&f(p,()=>{s.value="",c(),a()}),B(()=>{var n;(n=h==null?void 0:h.proxy)!=null&&n.$el&&(m.value=h.proxy.$el.querySelector(".dropdown__menu")),a()}),U(s,()=>{g.value=!0,c()}),j(s,()=>{g.value=!1,a()}),f(g,n=>{t.value=n}),H(m,()=>{!t.value&&!_.value&&a()}),y}})}function b(D,p="",t=1,s=20){const y=(t-1)*s,r=y+s;return D.filter(_=>_.name.toLowerCase().includes(p.toLowerCase())).slice(y,r)}async function G(D="",p=1,t=20){const{default:s}=await l(()=>import("./chunks/province.3cd00979.js"),[]);return{data:b(s,D,p,t)}}async function Y(D,p="",t=1,s=20){if(!D)return{data:[]};const{default:y}=await R(Object.assign({"./api/regencies/11.ts":()=>l(()=>import("./chunks/11.d5c0cbda.js"),[]),"./api/regencies/12.ts":()=>l(()=>import("./chunks/12.d98b3e9a.js"),[]),"./api/regencies/13.ts":()=>l(()=>import("./chunks/13.15c63ef4.js"),[]),"./api/regencies/14.ts":()=>l(()=>import("./chunks/14.adc92f36.js"),[]),"./api/regencies/15.ts":()=>l(()=>import("./chunks/15.426998ad.js"),[]),"./api/regencies/16.ts":()=>l(()=>import("./chunks/16.6530b6e4.js"),[]),"./api/regencies/17.ts":()=>l(()=>import("./chunks/17.ef8e06ae.js"),[]),"./api/regencies/18.ts":()=>l(()=>import("./chunks/18.62bdde03.js"),[]),"./api/regencies/19.ts":()=>l(()=>import("./chunks/19.9a0e257e.js"),[]),"./api/regencies/21.ts":()=>l(()=>import("./chunks/21.3ef4be12.js"),[]),"./api/regencies/31.ts":()=>l(()=>import("./chunks/31.26973bd1.js"),[]),"./api/regencies/32.ts":()=>l(()=>import("./chunks/32.9ecd82df.js"),[]),"./api/regencies/33.ts":()=>l(()=>import("./chunks/33.f0879cac.js"),[]),"./api/regencies/34.ts":()=>l(()=>import("./chunks/34.6d140427.js"),[]),"./api/regencies/35.ts":()=>l(()=>import("./chunks/35.814546b7.js"),[]),"./api/regencies/36.ts":()=>l(()=>import("./chunks/36.a2731212.js"),[]),"./api/regencies/51.ts":()=>l(()=>import("./chunks/51.840ee19f.js"),[]),"./api/regencies/52.ts":()=>l(()=>import("./chunks/52.74acac87.js"),[]),"./api/regencies/53.ts":()=>l(()=>import("./chunks/53.c71d1d38.js"),[]),"./api/regencies/61.ts":()=>l(()=>import("./chunks/61.ad1c949b.js"),[]),"./api/regencies/62.ts":()=>l(()=>import("./chunks/62.f853cef2.js"),[]),"./api/regencies/63.ts":()=>l(()=>import("./chunks/63.60b6b7ae.js"),[]),"./api/regencies/64.ts":()=>l(()=>import("./chunks/64.dd1858a7.js"),[]),"./api/regencies/65.ts":()=>l(()=>import("./chunks/65.9293ff1a.js"),[]),"./api/regencies/71.ts":()=>l(()=>import("./chunks/71.56bf21a1.js"),[]),"./api/regencies/72.ts":()=>l(()=>import("./chunks/72.2cf14dc9.js"),[]),"./api/regencies/73.ts":()=>l(()=>import("./chunks/73.f70b6e23.js"),[]),"./api/regencies/74.ts":()=>l(()=>import("./chunks/74.0e1e58ec.js"),[]),"./api/regencies/75.ts":()=>l(()=>import("./chunks/75.c42c3c20.js"),[]),"./api/regencies/76.ts":()=>l(()=>import("./chunks/76.6d849f14.js"),[]),"./api/regencies/81.ts":()=>l(()=>import("./chunks/81.85ebd2a2.js"),[]),"./api/regencies/82.ts":()=>l(()=>import("./chunks/82.ef252261.js"),[]),"./api/regencies/91.ts":()=>l(()=>import("./chunks/91.65799bde.js"),[]),"./api/regencies/94.ts":()=>l(()=>import("./chunks/94.6ce69055.js"),[])}),`./api/regencies/${D}.ts`);return{data:b(y,p,t,s)}}const $=A("",4),M=A("",2),J=A("",3),K=A("",3),Q=A("",2),W=A("",2),X=A("",2),Z=A("",2),ss=i("p",null,[i("strong",null,"Result :")],-1),as=A("",3),ns=i("p",null,[i("strong",null,"v-model")],-1),ls=i("p",null,[i("strong",null,"v-model:selected")],-1),os={class:"whitespace-normal"},es=A("",4),ps=A("",3),ts=i("p",null,[i("strong",null,"Result:")],-1),rs=A("",3),cs=A("",10),ws=JSON.parse('{"title":"Select · Components","description":"Base form input.","frontmatter":{"title":"Select · Components","description":"Base form input."},"headers":[],"relativePath":"components/select/index.md","filePath":"components/select/index.md"}'),Ds={name:"components/select/index.md"},ks=Object.assign(Ds,{setup(D){const p=C(["Apple","Banana","Grape"]),t=C([{text:"🍎 Apfel",value:"Apple"},{text:"🍇 Traube",value:"Grape"},{text:"🍌 Bananen",value:"Banana"}]),s=C(""),y=C(),r=C(""),_=C(""),g=T(async(m,a,c)=>(await G(m,a,c)).data.map(v=>({text:v.name,value:v.id})),[]),h=T(async(m,a,c)=>(await Y(r.value,m,a,c)).data.map(v=>({text:v.name,value:v.id})),[r]);return(m,a)=>{const c=O("preview");return k(),w("div",null,[$,e(c,null,{default:u(()=>[e(F,{options:o(p),modelValue:o(s),"onUpdate:modelValue":a[0]||(a[0]=n=>d(s)?s.value=n:null)},null,8,["options","modelValue"])]),_:1}),M,e(c,null,{default:u(()=>[e(F,{options:o(t),modelValue:o(s),"onUpdate:modelValue":a[1]||(a[1]=n=>d(s)?s.value=n:null)},null,8,["options","modelValue"])]),_:1}),J,e(c,null,{default:u(()=>[e(F,{placeholder:"Pick A Value"})]),_:1}),K,e(c,{class:"flex-col space-y-3"},{default:u(()=>[e(F,{size:"xs",modelValue:o(s),"onUpdate:modelValue":a[2]||(a[2]=n=>d(s)?s.value=n:null),options:o(p),placeholder:"Size xs"},null,8,["modelValue","options"]),e(F,{size:"sm",modelValue:o(s),"onUpdate:modelValue":a[3]||(a[3]=n=>d(s)?s.value=n:null),options:o(p),placeholder:"Size sm"},null,8,["modelValue","options"]),e(F,{size:"md",modelValue:o(s),"onUpdate:modelValue":a[4]||(a[4]=n=>d(s)?s.value=n:null),options:o(p),placeholder:"Size md"},null,8,["modelValue","options"]),e(F,{size:"lg",modelValue:o(s),"onUpdate:modelValue":a[5]||(a[5]=n=>d(s)?s.value=n:null),options:o(p),placeholder:"Size lg"},null,8,["modelValue","options"])]),_:1}),Q,e(c,null,{default:u(()=>[e(F,{disabled:""})]),_:1}),W,e(c,null,{default:u(()=>[e(F,{readonly:""})]),_:1}),X,e(c,null,{default:u(()=>[e(F,{error:""})]),_:1}),Z,e(c,null,{default:u(()=>[e(F,{options:o(t),modelValue:o(s),"onUpdate:modelValue":a[6]||(a[6]=n=>d(s)?s.value=n:null)},null,8,["options","modelValue"])]),_:1}),ss,i("pre",null,[i("code",null,E(o(s)),1)]),as,e(c,null,{default:u(()=>[e(F,{options:o(t),modelValue:o(s),"onUpdate:modelValue":a[7]||(a[7]=n=>d(s)?s.value=n:null),selected:o(y),"onUpdate:selected":a[8]||(a[8]=n=>d(y)?y.value=n:null)},null,8,["options","modelValue","selected"])]),_:1}),ns,i("pre",null,[i("code",null,E(o(s)||"-"),1)]),ls,i("pre",os,[i("code",null,E(o(y)||"-"),1)]),es,e(c,null,{default:u(()=>[e(F,{adapter:o(N),options:o(t),modelValue:o(s),"onUpdate:modelValue":a[9]||(a[9]=n=>d(s)?s.value=n:null)},null,8,["adapter","options","modelValue"])]),_:1}),ps,e(c,null,{default:u(()=>[e(F,{adapter:o(g),modelValue:o(r),"onUpdate:modelValue":a[10]||(a[10]=n=>d(r)?r.value=n:null)},null,8,["adapter","modelValue"])]),_:1}),ts,i("pre",null,[i("code",null,E(o(r)),1)]),rs,e(c,{class:"flex-col space-y-2"},{default:u(()=>[e(F,{modelValue:o(r),"onUpdate:modelValue":a[11]||(a[11]=n=>d(r)?r.value=n:null),placeholder:"Select Province",adapter:o(g),onUserInput:a[12]||(a[12]=n=>_.value="")},null,8,["modelValue","adapter"]),e(F,{modelValue:o(_),"onUpdate:modelValue":a[13]||(a[13]=n=>d(_)?_.value=n:null),placeholder:"Select Cities",adapter:o(h)},null,8,["modelValue","adapter"])]),_:1}),cs])}}});export{ws as __pageData,ks as default};