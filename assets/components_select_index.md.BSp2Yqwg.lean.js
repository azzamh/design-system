import{_ as k}from"./chunks/Select.vue_vue_type_style_index_0_lang.Cej-arS1.js";import{_ as T}from"./chunks/Avatar.vue_vue_type_style_index_0_lang.Dw29mwxT.js";import{F as w}from"./chunks/fuse.CU2r43ac.js";import{d as I,u as z}from"./chunks/adapter.Emb0gcVo.js";import{y as x,aw as O,r as F,al as L,I as N,l as U,Z as e,ax as j,c as V,K as s,w as E,m as t,f as C,p as a,a9 as r,b as G,F as H,o as P,aa as c,G as M,H as J,g as Y}from"./chunks/framework.BKe39h19.js";import{k as $}from"./chunks/index.CF2swUAz.js";import{d as W}from"./chunks/defu.CMw4_7D2.js";import"./chunks/Dropdown.vue_vue_type_script_setup_true_lang.cJDSRs48.js";import"./chunks/Button.vue_vue_type_script_setup_true_lang.DfXXWqOU.js";import"./chunks/index.DvWHfs5K.js";import"./chunks/SpinnerRinggo.vue_vue_type_script_setup_true_lang.DPDHpNan.js";/* empty css                                                      */import"./chunks/Dropdown.vue_vue_type_style_index_0_lang.DCnhzbGN.js";import"./chunks/use-focus.BMEofKAE.js";import"./chunks/toNumber.Dcxq_36h.js";import"./chunks/isObject.C3e4t58V.js";import"./chunks/isSymbol.BOom9x27.js";import"./chunks/baseGetTag.Cu32HCTk.js";import"./chunks/isObjectLike.nLWjQ9zq.js";import"./chunks/floating-ui.dom.Bv9LQ7l_.js";import"./chunks/index.BgZLTpqE.js";import"./chunks/index.CyBTFB5O.js";import"./chunks/20.BTiqxacA.js";import"./chunks/DropdownHeader.vue_vue_type_style_index_0_lang.B8msSNcS.js";import"./chunks/Subheading.vue_vue_type_style_index_0_lang.BT7rbcUG.js";import"./chunks/Input.vue_vue_type_script_setup_true_lang.CGsWBuqj.js";import"./chunks/20.DXvKSiys.js";import"./chunks/accept.6g-OpsWF.js";/* empty css                                                     */import"./chunks/Text.vue_vue_type_style_index_0_lang.aUWfxts_.js";import"./chunks/Label.vue_vue_type_script_setup_true_lang.CJoUCtHV.js";import"./chunks/Dot.vue_vue_type_script_setup_true_lang.d3BDqJUW.js";/* empty css                                                   */import"./chunks/16.DaMo8UEY.js";/* empty css                                                     */import"./chunks/20.XH4UduO9.js";import"./chunks/20.C__q1h88.js";import"./chunks/IconCheckbox.kA7_N-q7.js";import"./chunks/SpinnerRing.vue_vue_type_script_setup_true_lang.ojVQI6TR.js";import"./chunks/value.C5X7htjv.js";import"./chunks/use-loading.CSkATP1W.js";import"./chunks/isNil.CHIgUVhi.js";import"./chunks/baseIteratee.BBvzqlE-.js";import"./chunks/Uint8Array.008PCTql.js";import"./chunks/isArray.Dxzbedgu.js";import"./chunks/Set.CfmJ7xMC.js";import"./chunks/eq.PE3UIL_r.js";import"./chunks/toString.CQAYsbsy.js";import"./chunks/isArrayLike.C0g-NlKf.js";import"./chunks/setToArray.DdBK26qc.js";import"./chunks/baseUniq.BUqiGGaZ.js";import"./chunks/noop.DX6rZLP_.js";import"./chunks/create-image.CkAV8b2h.js";import"./chunks/avatar.qWHUbXZ4.js";import"./chunks/color-hash.CY8Op1ql.js";import"./chunks/load-image.CsguPAoR.js";function K(g,h){x(g,h)}function Z(g,h,d=500){O(g,h,{debounce:d})}function Q(g,h){$(g,"scroll",d=>{const o=d.target;o.scrollTop+o.offsetHeight>=o.scrollHeight&&h(d)},{passive:!0})}function S(g,h,d){const o=W(d,{perPage:20,debounceTime:500});return I({setup({isLoading:u,keyword:y,menuEl:l,props:q}){const _=F([]),v=F(1),A=F(!1),B=F(!1);function D(){u.value=!0,g(y.value,v.value,o.perPage,q.modelValue).then(m=>{Array.isArray(m)&&m.length>0&&(_.value=[..._.value,...m],v.value=v.value+1),(!Array.isArray(m)||m.length<o.perPage)&&(A.value=!0)}).catch(console.error).finally(()=>{u.value=!1})}function f(){A.value=!1,v.value=1,_.value=[]}return h!==void 0&&x(h,()=>{y.value="",f(),D()}),L(()=>{D()}),K(y,()=>{B.value=!0,f()}),Z(y,()=>{B.value=!1,D()},o.debounceTime),x(B,m=>{u.value=m}),Q(l,()=>{!u.value&&!A.value&&D()}),_}})}const X=I({setup({props:g,keyword:h}){const d=N(),o=z(g),u=U(()=>h.value?d.value.search(h.value).map(y=>y.item):o.value);return x(o,y=>{d.value=new w(y,{keys:["text","value"]})},{immediate:!0}),u}});function R(g,h="",d=1,o=20){const u=(d-1)*o,y=u+o;return g.filter(l=>l.name.toLowerCase().includes(h.toLowerCase())).slice(u,y)}async function ss(g="",h=1,d=20){const{default:o}=await e(async()=>{const{default:y}=await import("./chunks/province.CFePoTdu.js");return{default:y}},[]);return{data:R(o,g,h,d)}}async function is(g,h="",d=1,o=20){if(!g)return{data:[]};const{default:u}=await j(Object.assign({"./api/regencies/11.ts":()=>e(()=>import("./chunks/11.HWUpWYt-.js"),[]),"./api/regencies/12.ts":()=>e(()=>import("./chunks/12.CnnWv6Re.js"),[]),"./api/regencies/13.ts":()=>e(()=>import("./chunks/13.yMBhSb0J.js"),[]),"./api/regencies/14.ts":()=>e(()=>import("./chunks/14.4ExDobGs.js"),[]),"./api/regencies/15.ts":()=>e(()=>import("./chunks/15.Bs7l_VNh.js"),[]),"./api/regencies/16.ts":()=>e(()=>import("./chunks/16.CKjyGVTD.js"),[]),"./api/regencies/17.ts":()=>e(()=>import("./chunks/17.Bh2YLVlM.js"),[]),"./api/regencies/18.ts":()=>e(()=>import("./chunks/18.DQsiSBul.js"),[]),"./api/regencies/19.ts":()=>e(()=>import("./chunks/19.s6tl28K-.js"),[]),"./api/regencies/21.ts":()=>e(()=>import("./chunks/21.CxLzLsQr.js"),[]),"./api/regencies/31.ts":()=>e(()=>import("./chunks/31.DtusfiPI.js"),[]),"./api/regencies/32.ts":()=>e(()=>import("./chunks/32.CaNJDAHk.js"),[]),"./api/regencies/33.ts":()=>e(()=>import("./chunks/33.A4MUzvI4.js"),[]),"./api/regencies/34.ts":()=>e(()=>import("./chunks/34.DgW5OEpu.js"),[]),"./api/regencies/35.ts":()=>e(()=>import("./chunks/35.JnYk-2cv.js"),[]),"./api/regencies/36.ts":()=>e(()=>import("./chunks/36.BFR83Yl8.js"),[]),"./api/regencies/51.ts":()=>e(()=>import("./chunks/51.DV6pGe12.js"),[]),"./api/regencies/52.ts":()=>e(()=>import("./chunks/52.ASAI2Zqi.js"),[]),"./api/regencies/53.ts":()=>e(()=>import("./chunks/53.19_j8WOW.js"),[]),"./api/regencies/61.ts":()=>e(()=>import("./chunks/61.BLebgr_J.js"),[]),"./api/regencies/62.ts":()=>e(()=>import("./chunks/62.B5Ak6ItS.js"),[]),"./api/regencies/63.ts":()=>e(()=>import("./chunks/63.qqmQQ-5p.js"),[]),"./api/regencies/64.ts":()=>e(()=>import("./chunks/64.Ccc1kit7.js"),[]),"./api/regencies/65.ts":()=>e(()=>import("./chunks/65.Da8n7Qhx.js"),[]),"./api/regencies/71.ts":()=>e(()=>import("./chunks/71.BuF9UjZr.js"),[]),"./api/regencies/72.ts":()=>e(()=>import("./chunks/72.ByijMsiD.js"),[]),"./api/regencies/73.ts":()=>e(()=>import("./chunks/73.Chaq9byd.js"),[]),"./api/regencies/74.ts":()=>e(()=>import("./chunks/74.DVUo1S01.js"),[]),"./api/regencies/75.ts":()=>e(()=>import("./chunks/75.BFn6KuTI.js"),[]),"./api/regencies/76.ts":()=>e(()=>import("./chunks/76.DCoX4LN-.js"),[]),"./api/regencies/81.ts":()=>e(()=>import("./chunks/81.b9vG2m36.js"),[]),"./api/regencies/82.ts":()=>e(()=>import("./chunks/82.Cd4YXb__.js"),[]),"./api/regencies/91.ts":()=>e(()=>import("./chunks/91.DwhDq2bc.js"),[]),"./api/regencies/94.ts":()=>e(()=>import("./chunks/94.DY3nSQoQ.js"),[])}),`./api/regencies/${g}.ts`,4);return{data:R(u,h,d,o)}}const as=r("",4),ts=r("",2),ns=r("",2),ls=r("",3),es=r("",3),hs=r("",2),ps=r("",3),ks=r("",2),Es=r("",2),ds=r("",2),rs=r("",2),os=t("p",null,[t("strong",null,"Result :")],-1),gs=r("",2),ys=t("p",null,[t("strong",null,"Result :")],-1),cs=r("",3),us=t("p",null,[t("strong",null,"v-model")],-1),Fs=t("p",null,[t("strong",null,"v-model:selected")],-1),_s={class:"whitespace-normal"},ms=r("",4),Cs=r("",3),vs=t("p",null,[t("strong",null,"Result:")],-1),As=t("h3",{id:"multiple-value",tabindex:"-1"},[G("Multiple value "),t("a",{class:"header-anchor",href:"#multiple-value","aria-label":'Permalink to "Multiple value"'},"​")],-1),Bs=t("p",null,[t("strong",null,"Result:")],-1),Ds=r("",3),bs=r("",3),qs={class:"flex flex-row space-x-2"},fs={class:"shrink-0"},xs={class:"grow"},Ts={class:"font-sans text-base font-normal"},Ps={class:"text-xs font-light option-text"},Vs=r("",2),Ss={class:"flex flex-row space-x-2"},Is={class:"shrink-0"},Rs={class:"grow"},ws={class:"font-sans text-base font-normal"},zs={class:"text-xs font-light option-text"},Os=r("",2),Ls={class:"flex w-full"},Ns={class:"flex items-center pl-3"},Us={class:"pl-2 grow"},js=r("",3),Gs=r("",10),Yi=JSON.parse('{"title":"Select · Components","description":"Base form input.","frontmatter":{"title":"Select · Components","description":"Base form input."},"headers":[],"relativePath":"components/select/index.md","filePath":"components/select/index.md"}'),Hs={name:"components/select/index.md"},$i=Object.assign(Hs,{setup(g){const h=F(["Apple","Banana","Grape"]),d=F([{text:"🍎 Apfel",value:"Apple"},{text:"🍇 Traube",value:"Grape"},{text:"🍌 Bananen",value:"Banana"}]),o=F([{text:"🍎 Apfel",value:"Apple"},{text:"🍇 Traube",value:"Grape",disabled:!0},{text:"🍌 Bananen",value:"Banana",disabled:!1}]),u=F([{text:"🍎 Apple",value:"Apple"},{text:"🍇 Grape",value:"Grape"},{text:"🍌 Banana",value:"Banana"},{text:"🍋 Lemon",value:"Lemon"},{text:"🥑 Avocado",value:"Avocado"}]),y=F([{text:"John Doe",value:1,img:"https://picsum.photos/id/50/50"},{text:"Tarjono",value:2,img:"https://picsum.photos/id/51/50"}]),l=F(""),q=F(),_=F(""),v=F(""),A=F([]),B=F([]),D=S(async(m,n,p)=>(await ss(m,n,p)).data.map(b=>({text:b.name,value:b.id})),[]),f=S(async(m,n,p)=>(await is(_.value,m,n,p)).data.map(b=>({text:b.name,value:b.id})),[_]);return(m,n)=>{const p=H("preview");return P(),V("div",null,[as,s(p,null,{default:E(()=>[s(k,{options:a(h)},null,8,["options"])]),_:1}),ts,s(p,null,{default:E(()=>[s(k,{options:a(d),modelValue:a(l),"onUpdate:modelValue":n[0]||(n[0]=i=>c(l)?l.value=i:null)},null,8,["options","modelValue"])]),_:1}),ns,s(p,null,{default:E(()=>[s(k,{options:a(o),modelValue:a(l),"onUpdate:modelValue":n[1]||(n[1]=i=>c(l)?l.value=i:null)},null,8,["options","modelValue"])]),_:1}),ls,s(p,null,{default:E(()=>[s(k,{placeholder:"Pick A Value"})]),_:1}),es,s(p,null,{default:E(()=>[s(k,{placeholder:"Pick A Value",options:a(h),"section-label":"Fruits"},null,8,["options"])]),_:1}),hs,s(p,null,{default:E(()=>[s(k,{options:a(d),modelValue:a(l),"onUpdate:modelValue":n[2]||(n[2]=i=>c(l)?l.value=i:null),clearable:""},null,8,["options","modelValue"])]),_:1}),ps,s(p,{class:"flex-col space-y-3"},{default:E(()=>[s(k,{size:"xs",modelValue:a(l),"onUpdate:modelValue":n[3]||(n[3]=i=>c(l)?l.value=i:null),options:a(h),placeholder:"Size xs"},null,8,["modelValue","options"]),s(k,{size:"sm",modelValue:a(l),"onUpdate:modelValue":n[4]||(n[4]=i=>c(l)?l.value=i:null),options:a(h),placeholder:"Size sm"},null,8,["modelValue","options"]),s(k,{size:"md",modelValue:a(l),"onUpdate:modelValue":n[5]||(n[5]=i=>c(l)?l.value=i:null),options:a(h),placeholder:"Size md"},null,8,["modelValue","options"]),s(k,{size:"lg",modelValue:a(l),"onUpdate:modelValue":n[6]||(n[6]=i=>c(l)?l.value=i:null),options:a(h),placeholder:"Size lg"},null,8,["modelValue","options"])]),_:1}),ks,s(p,null,{default:E(()=>[s(k,{disabled:""})]),_:1}),Es,s(p,null,{default:E(()=>[s(k,{readonly:""})]),_:1}),ds,s(p,null,{default:E(()=>[s(k,{error:""})]),_:1}),rs,s(p,null,{default:E(()=>[s(k,{options:a(u),modelValue:a(A),"onUpdate:modelValue":n[7]||(n[7]=i=>c(A)?A.value=i:null),multiple:""},null,8,["options","modelValue"])]),_:1}),os,t("pre",null,[t("code",null,C(a(A)||[]),1)]),gs,s(p,null,{default:E(()=>[s(k,{options:a(d),modelValue:a(l),"onUpdate:modelValue":n[8]||(n[8]=i=>c(l)?l.value=i:null)},null,8,["options","modelValue"])]),_:1}),ys,t("pre",null,[t("code",null,C(a(l)||"-"),1)]),cs,s(p,null,{default:E(()=>[s(k,{options:a(d),modelValue:a(l),"onUpdate:modelValue":n[9]||(n[9]=i=>c(l)?l.value=i:null),selected:a(q),"onUpdate:selected":n[10]||(n[10]=i=>c(q)?q.value=i:null),clearable:""},null,8,["options","modelValue","selected"])]),_:1}),us,t("pre",null,[t("code",null,C(a(l)||"-"),1)]),Fs,t("pre",_s,[t("code",null,C(a(q)||"-"),1)]),ms,s(p,null,{default:E(()=>[s(k,{adapter:a(X),options:a(d),modelValue:a(l),"onUpdate:modelValue":n[11]||(n[11]=i=>c(l)?l.value=i:null)},null,8,["adapter","options","modelValue"])]),_:1}),Cs,s(p,null,{default:E(()=>[s(k,{adapter:a(D),modelValue:a(_),"onUpdate:modelValue":n[12]||(n[12]=i=>c(_)?_.value=i:null)},null,8,["adapter","modelValue"])]),_:1}),vs,t("pre",null,[t("code",null,C(a(_)),1)]),As,s(p,null,{default:E(()=>[s(k,{adapter:a(D),modelValue:a(B),"onUpdate:modelValue":n[13]||(n[13]=i=>c(B)?B.value=i:null),multiple:""},null,8,["adapter","modelValue"])]),_:1}),Bs,t("pre",null,[t("code",null,C(a(B)),1)]),Ds,s(p,{class:"flex-col space-y-2"},{default:E(()=>[s(k,{modelValue:a(_),"onUpdate:modelValue":n[14]||(n[14]=i=>c(_)?_.value=i:null),placeholder:"Select Province",adapter:a(D),onUserInput:n[15]||(n[15]=i=>v.value="")},null,8,["modelValue","adapter"]),s(k,{modelValue:a(v),"onUpdate:modelValue":n[16]||(n[16]=i=>c(v)?v.value=i:null),placeholder:"Select Cities",adapter:a(f)},null,8,["modelValue","adapter"])]),_:1}),bs,s(p,null,{default:E(()=>[s(k,{options:a(y)},{option:E(({item:i})=>[t("div",qs,[t("div",fs,[s(T,{src:i.img},null,8,["src"])]),t("div",xs,[t("div",Ts,C(i.text),1),t("div",Ps,"ID: "+C(i.value),1)])])]),_:1},8,["options"])]),_:1}),Vs,s(p,null,{default:E(()=>[s(k,{options:a(y)},{selected:E(({item:i})=>[t("div",Ss,[t("div",Is,[s(T,{src:i.img},null,8,["src"])]),t("div",Rs,[t("div",ws,C(i.text),1),t("div",zs,"ID: "+C(i.value),1)])])]),_:1},8,["options"])]),_:1}),Os,s(p,null,{default:E(()=>[s(k,{options:a(y),multiple:""},{selected:E(({item:i})=>[t("div",Ls,[t("div",Ns,[(P(!0),V(M,null,J(i,b=>(P(),Y(T,{src:b.img,class:"-ml-3",size:"xs"},null,8,["src"]))),256))]),t("div",Us,C(i.length)+" People selected ",1)])]),_:1},8,["options"])]),_:1}),js,s(p,null,{default:E(()=>[s(k,{options:a(h),"no-caret":""},null,8,["options"])]),_:1}),Gs])}}});export{Yi as __pageData,$i as default};