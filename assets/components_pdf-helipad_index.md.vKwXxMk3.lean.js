import{_ as P}from"./chunks/PdfViewer.vue_vue_type_style_index_0_lang.qcfMRLsk.js";import{g as I,_ as j}from"./chunks/PdfObject.vue_vue_type_style_index_0_lang.Oz3BKXxC.js";import{I as v,z as _,al as T,Z as S,d as R,r as F,ac as f,l as N,A as $,c as B,p as o,a as D,R as A,q as e,n as O,o as m,j as q,a6 as U,K as E,w as r,aa as b,F as H,a8 as L,G as V,H as z,f as G}from"./chunks/framework.kdG7p9fL.js";import{_ as M}from"./chunks/PdfObjectAddon.vue_vue_type_style_index_0_lang.-3sv8ejm.js";import{_ as J}from"./chunks/Button.vue_vue_type_script_setup_true_lang.f5vU9QSd.js";import"./chunks/Button.vue_vue_type_style_index_0_lang.w40geAFS.js";import{I as K}from"./chunks/16.tvZHdGkb.js";import"./chunks/index.iBxx3z5D.js";import"./chunks/index.IJQqav0q.js";import"./chunks/index.n7jXhgcr.js";import"./chunks/noop.Uu3q6ZSj.js";import"./chunks/20.rh4RsIQD.js";import"./chunks/20.3HYS_NWI.js";import"./chunks/Divider.vue_vue_type_script_setup_true_lang.JXAFLAPN.js";import"./chunks/Divider.vue_vue_type_style_index_0_lang.w40geAFS.js";import"./chunks/Select.vue_vue_type_style_index_0_lang.lkOuPOFM.js";import"./chunks/Dropdown.vue_vue_type_script_setup_true_lang.Jgcuyvxl.js";import"./chunks/Dropdown.vue_vue_type_style_index_0_lang.X8dxwg20.js";import"./chunks/use-focus.tCf7QHyd.js";import"./chunks/toNumber._iUOfnSi.js";import"./chunks/isObject.mlSoqgao.js";import"./chunks/isSymbol.kHNk0UTq.js";import"./chunks/baseGetTag.IiKF_g5t.js";import"./chunks/isObjectLike.cOVh3xPP.js";import"./chunks/floating-ui.dom.1o3sBJnb.js";import"./chunks/index.vndneDSt.js";import"./chunks/DropdownHeader.vue_vue_type_style_index_0_lang.AlYbSVOx.js";import"./chunks/Subheading.vue_vue_type_style_index_0_lang.ktuwZ-pM.js";import"./chunks/Input.vue_vue_type_script_setup_true_lang.7lmh34ke.js";import"./chunks/20.FVOYcnST.js";import"./chunks/index.hjpy5ZnQ.js";import"./chunks/accept._rvVzN4h.js";import"./chunks/Input.vue_vue_type_style_index_0_lang.w40geAFS.js";import"./chunks/Text.vue_vue_type_style_index_0_lang.o4wGGu9E.js";import"./chunks/Label.vue_vue_type_script_setup_true_lang.f3E4tPV7.js";import"./chunks/Dot.vue_vue_type_script_setup_true_lang.MNxS98Bb.js";import"./chunks/Dot.vue_vue_type_style_index_0_lang.w40geAFS.js";import"./chunks/Label.vue_vue_type_style_index_0_lang.w40geAFS.js";import"./chunks/20.cc_4jLtC.js";import"./chunks/20.Bl8nqYm9.js";import"./chunks/IconCheckbox.SVcg8H-e.js";import"./chunks/SpinnerRing.vue_vue_type_script_setup_true_lang.b7LcBiwQ.js";import"./chunks/value.Mcqa82Kw.js";import"./chunks/adapter.zL9xveU8.js";import"./chunks/use-loading.HCEokWuw.js";import"./chunks/defu.3rjBFRnm.js";import"./chunks/isNil.-q_uwI5T.js";import"./chunks/Heading.vue_vue_type_script_setup_true_lang.VaytnL41.js";import"./chunks/Heading.vue_vue_type_style_index_0_lang.w40geAFS.js";import"./chunks/focus.8Gz5lC-e.js";import"./chunks/theme.meo-tmh0.js";import"./chunks/index.cpQteZoJ.js";import"./chunks/debounce.pZZBdQwa.js";import"./chunks/toInteger.ndo2zcSZ.js";import"./chunks/toString.H12QvfU5.js";import"./chunks/isArray.nknceDKk.js";import"./chunks/memoize.-mnl6pHI.js";import"./chunks/MapCache.dFD_XtlM.js";import"./chunks/eq.hcQ18STi.js";import"./chunks/SpinnerRinggo.vue_vue_type_script_setup_true_lang.riupV0h_.js";function X(g,d={}){const n=v(!0),l=v();async function a(){if(p(),g.value){const{default:k}=await S(()=>import("./chunks/interact.min.0Pw5gFgi.js").then(s=>s.i),__vite__mapDeps([0,1,2]));l.value=k(g.value).draggable({inertia:!0,enabled:n.value,autoScroll:!0,onstart:d.onstart,onmove:d.onmove,onend:d.onend}).on("tap",d.ontap)}}function p(){l.value&&l.value.unset()}return _(g,async()=>{await a()}),_(n,k=>{l.value&&l.value.draggable(k)}),T(()=>{p()}),n}const Y={class:"pdf-object__container"},Z={class:"pdf-object__container"},x=R({__name:"PdfHelipad",props:{scale:{type:Number,default:1},width:{type:Number,default:198},height:{type:Number,default:106},disabled:{type:Boolean,default:!1}},emits:["landed","click"],setup(g,{emit:d}){const n=g,l=d,a=F(),p=f(n,"scale"),k=f(n,"width"),s=f(n,"height"),y=F(!1),c=F(0),t=F(0),C=N(()=>{const i=[];return n.disabled&&i.push("pdf-helipad--disabled"),i}),h=X(a,{onstart(){const{left:i,top:u}=a.value.getBoundingClientRect();y.value=!0,c.value=i,t.value=u},onmove(i){c.value=i.clientX-i.rect.width*p.value/2,t.value=i.clientY-i.rect.height*p.value/2},onend(i){if(i.relatedTarget){const u=i.relatedTarget,w=I({reference:u,object:a.value,scale:p.value});l("landed",{...w,width:k.value,height:s.value})}y.value=!1},ontap(i){l("click",i)}});return $(()=>{a.value&&(y.value?(a.value.style.position="fixed",a.value.style.transform=`translate(${c.value}px, ${t.value}px) scale(${p.value})`,a.value.style.zIndex="50"):(a.value.style.position="absolute",a.value.style.transform="translate(0px, 0px)",a.value.style.zIndex="2"))}),_(()=>n.disabled,i=>{h.value=!i},{immediate:!0}),(i,u)=>(m(),B("div",{"data-testid":"pdf-helipad",class:O(["pdf-helipad",e(C)])},[o("div",{ref_key:"object",ref:a,"data-testid":"pdf-helipad-object",class:"pdf-object pdf-object--external",style:A({width:`${e(k)}px`,height:`${e(s)}px`})},[o("div",Y,[D(i.$slots,"default")])],4),o("div",{class:"pdf-object pdf-object--external pdf-helipad__ghost",style:A({width:`${e(k)}px`,height:`${e(s)}px`})},[o("div",Z,[D(i.$slots,"default")])],4)],2))}}),Q=b("",5),W=["src"],ss=["src"],is=b("",2),as=["src"],ts=b("",8),Ei=JSON.parse(`{"title":"PDF Helipad · Components","description":"Add object to PDF Viewer with Drag'n'Drop","frontmatter":{"title":"PDF Helipad · Components","description":"Add object to PDF Viewer with Drag'n'Drop"},"headers":[],"relativePath":"components/pdf-helipad/index.md","filePath":"components/pdf-helipad/index.md"}`),ns={name:"components/pdf-helipad/index.md"},ri=Object.assign(ns,{setup(g){const d=q("/assets/pdf/Calibrator-v3.pdf"),n=q("/assets/images/img-helicopter.svg"),l=U([]),a=F(1);function p(s){l.push({_id:Symbol("ObjectId"),page:s==null?void 0:s.page,x:s==null?void 0:s.x,y:s==null?void 0:s.y,width:s==null?void 0:s.width,height:s==null?void 0:s.height})}function k(s){l.splice(s,1)}return(s,y)=>{const c=H("preview");return m(),B("div",null,[Q,E(x,{scale:e(a),onLanded:p},{default:r(()=>[o("img",{class:"w-full h-full bg-base-white",src:e(n)},null,8,W)]),_:1},8,["scale"]),E(c,null,{default:r(()=>[E(P,{src:e(d),scale:e(a),"onUpdate:scale":y[0]||(y[0]=t=>L(a)?a.value=t:null)},{default:r(()=>[(m(!0),B(V,null,z(e(l),(t,C)=>(m(),G(j,{key:t._id,page:t.page,"onUpdate:page":h=>t.page=h,x:t.x,"onUpdate:x":h=>t.x=h,y:t.y,"onUpdate:y":h=>t.y=h,width:t.width,"onUpdate:width":h=>t.width=h,height:t.height,"onUpdate:height":h=>t.height=h},{default:r(()=>[o("img",{class:"w-full h-full rounded",src:e(n)},null,8,ss),E(M,null,{default:r(()=>[E(J,{size:"sm",icon:"",color:"danger",onClick:h=>k(C)},{default:r(()=>[E(K)]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["page","onUpdate:page","x","onUpdate:x","y","onUpdate:y","width","onUpdate:width","height","onUpdate:height"]))),128))]),_:1},8,["src","scale"])]),_:1}),is,E(c,{class:"!bg-base-white"},{default:r(()=>[E(x,{disabled:""},{default:r(()=>[o("img",{class:"w-full h-full",src:e(n)},null,8,as)]),_:1})]),_:1}),ts])}}});export{Ei as __pageData,ri as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/chunks/interact.min.0Pw5gFgi.js","assets/chunks/theme.meo-tmh0.js","assets/chunks/framework.kdG7p9fL.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}