import{p as re}from"./index.8626e971.js";import{i as ie,f as oe,j as me,k as ge,t as A,u as ne}from"./index.6d123da7.js";import{n as W}from"./noop.cb277961.js";import{E as $,h,ad as he,W as X,U as q,x as b,l as S,M as K,am as _e,g as O,y as ye,_ as T,o as L,c as k,k as v,d as H,C as y,H as g,w as I,t as B,j as le,a6 as ue,a2 as F,a as Pe,a4 as de,r as N,a5 as we,a7 as G,T as $e,n as be}from"./framework.ea844ac6.js";import{I as Se,a as De}from"./20.bb832a8c.js";import{I as ze}from"./20.9e129ba7.js";import{_ as Ie}from"./Button.vue_vue_type_script_setup_true_lang.40129c4b.js";import"./Button.vue_vue_type_style_index_0_lang.4ed993c7.js";import{p as Oe}from"./Divider.7526ed4c.js";import{_ as Ee}from"./Select.vue_vue_type_style_index_0_lang.0cb84225.js";import{H as Ne}from"./Heading.460a6948.js";import{t as Ce,m as Te,l as Le,u as ke,o as J,b as Ve,a as je,s as ae}from"./index.bc57e2e2.js";import{f as Me}from"./focus.33532f0c.js";import{u as Z}from"./index.7319edc6.js";import{d as Fe}from"./debounce.b619e377.js";import{r as Be}from"./isObjectLike.53b0037d.js";import{t as Re}from"./toInteger.d4d227f4.js";import{t as He}from"./toNumber.75689a18.js";import{t as se}from"./toString.5230fc0f.js";import{u as We}from"./use-loading.6da634a2.js";var Ae=Be.isFinite,Ze=Math.min;function Ue(e){var a=Math[e];return function(o,n){if(o=He(o),n=n==null?0:Ze(Re(n),292),n&&Ae(o)){var t=(se(o)+"e").split("e"),s=a(t[0]+"e"+(+t[1]+n));return t=(se(s)+"e").split("e"),+(t[0]+"e"+(+t[1]-n))}return a(o)}}var Ge=Ue("round");const Je=Ge,Xe=Symbol("DropzoneContext");function qe(e,a){const o=$(!0),n=$(),t=h(),s=h();async function i(){if(d(),e.value){const{default:f}=await q(()=>import("./interact.min.62670632.js").then(r=>r.i),["assets/chunks/interact.min.62670632.js","assets/chunks/commonjsHelpers.de833af9.js"]);n.value=f(a.value,{context:e.value}).dropzone({accept:".pdf-object",overlap:.95,enabled:o.value,checker(r,p,c,l,P,w,D){var E;return c&&(((E=e.value)==null?void 0:E.contains(D))||D.classList.contains("pdf-object--external"))},ondragenter(r){s.value=r.target,r.target.classList.add("hover")},ondragleave(r){r.target.classList.remove("hover")},ondrop(r){s.value=r.target,t.value=r.target,r.target.classList.remove("hover")}})}}function d(){n.value&&n.value.unset()}return ie(e,f=>{f.some(p=>p.type==="childList"&&p.target.matches(a.value))&&i()},{subtree:!0,childList:!0}),he(()=>{d()}),X(Xe,{dropzone:t,hoverzone:s}),o}function Ke(e,a=document.body,o=!1){const n=$();function t(){var s,i;n.value=o?(s=S(a))==null?void 0:s.querySelectorAll(S(e)):(i=S(a))==null?void 0:i.querySelector(S(e))}return b(()=>S(e),()=>{t()}),ie(a,s=>{s.some(i=>i.type==="childList")&&t()},{childList:!0,subtree:!0}),Ce(()=>{t()}),n}const Y=Symbol("PDFObjects"),vo=Symbol("PDFObjects");function Ye(e){var f,r,p,c;const a=O(()=>Je(e.width/e.height,2)),o=h((f=e.minWidth)!=null?f:e.width*.5),n=h((r=e.maxWidth)!=null?r:e.width*2),t=h((p=e.minHeight)!=null?p:e.height*.5),s=h((c=e.maxHeight)!=null?c:e.height*2),i=Z(e.width,o,n),d=Z(e.height,t,s);return b(()=>e.minWidth,l=>{Number.isFinite(l)&&(o.value=l)}),b(()=>e.minHeight,l=>{Number.isFinite(l)&&(t.value=l)}),b(()=>e.maxWidth,l=>{Number.isFinite(l)&&(n.value=l)}),b(()=>e.maxHeight,l=>{Number.isFinite(l)&&(s.value=l)}),{ratio:a,width:i,height:d,minWidth:o,maxWidth:n,minHeight:t,maxHeight:s}}function mo(e){var w;const{objects:a,page:o}=K(Y),n=h((w=e.page)!=null?w:o.value),t=h(e.x),s=h(e.y),i=Symbol("PDFObject"),{width:d,height:f,minWidth:r,maxWidth:p,minHeight:c,maxHeight:l,ratio:P}=Ye(e);return a.set(i,_e({id:i,page:n,x:t,y:s,width:d,height:f})),Te(()=>{Number.isFinite(n.value)||ke(o).toBeTruthy().then(()=>{n.value=o.value})}),Le(()=>{a.delete(i)}),{id:i,x:t,y:s,page:n,width:d,height:f,minWidth:r,minHeight:c,maxWidth:p,maxHeight:l,ratio:P}}function go(e){const{root:a}=K(Y),o=O(()=>`.page[data-page-number="${S(e)}"]`);return Ke(o,a)}const ho=Fe(Me,100),ce=Symbol("PdfViewer");function fe(){return K(ce,()=>{const e=h(1),a=h(1),o=h(0);return{page:e,scale:a,totalPage:o,zoomIn:W,zoomOut:W,next:W,prev:W}},!0)}function Qe(e,a={}){const o=h(!1),n=O(()=>{var c;return(c=S(a.offsetTop))!=null?c:0}),t=O(()=>{var c;return(c=S(e))==null?void 0:c.parentElement}),{top:s,height:i}=oe(t),{top:d,width:f,left:r}=oe(e),{height:p}=me();return ye(c=>{o.value&&e.value&&(s.value-n.value>=0?(e.value.style.setProperty("height",`${p.value-d.value}px`),e.value.style.setProperty("width","100%")):(t.value.style.setProperty("min-height",`${i.value}px`),e.value.style.setProperty("position","fixed"),e.value.style.setProperty("top",`${n.value}px`),e.value.style.setProperty("left",`${r.value}px`),e.value.style.setProperty("width",`${f.value}px`),e.value.style.setProperty("height",`${p.value-n.value}px`)),c(()=>{t.value.style.removeProperty("min-height"),e.value.style.removeProperty("position"),e.value.style.removeProperty("top"),e.value.style.removeProperty("left"),e.value.style.removeProperty("width"),e.value.style.removeProperty("height")}))}),o}const xe={},et={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",class:"persona-icon",viewBox:"0 0 20 20"},tt=v("path",{fill:"currentColor","fill-rule":"evenodd",d:"M4.673 12.83a.575.575 0 0 1 0-.821l4.91-4.839a.595.595 0 0 1 .834 0l4.91 4.839c.23.226.23.594 0 .82a.595.595 0 0 1-.833 0L10 8.403 5.506 12.83a.595.595 0 0 1-.833 0Z","clip-rule":"evenodd"},null,-1),ot=[tt];function nt(e,a){return L(),k("svg",et,ot)}const at=T(xe,[["render",nt]]),st=H({components:{IconZoomIn:Se,IconZoomOut:De,IconPrev:at,IconNext:ze,pButton:Ie,pDivider:Oe,pSelect:Ee},setup(){const{page:e,scale:a,totalPage:o,zoomIn:n,zoomOut:t,next:s,prev:i}=fe(),d=O(()=>Array.from({length:o.value}).map((f,r)=>({text:`${r+1}`,value:r+1})));return{page:e,pages:d,scale:a,totalPage:o,zoomIn:n,zoomOut:t,next:s,prev:i}}});const rt={"data-testid":"pdf-navigation",class:"pdf__navigation"},it={class:"pdf__navigation-container"},lt={class:"pdf__navigation-scale"},ut={"data-testid":"pdf-total",class:"pdf__navigation-total"};function dt(e,a,o,n,t,s){const i=y("IconZoomOut"),d=y("p-button"),f=y("IconZoomIn"),r=y("p-divider"),p=y("p-select"),c=y("IconPrev"),l=y("IconNext");return L(),k("div",rt,[v("div",it,[g(d,{"data-testid":"pdf-zoom-out",variant:"ghost",size:"xs",icon:"",onClick:e.zoomOut},{default:I(()=>[g(i)]),_:1},8,["onClick"]),v("span",lt,B((e.scale*100).toFixed(0))+"% ",1),g(d,{"data-testid":"pdf-zoom-in",variant:"ghost",size:"xs",icon:"",onClick:e.zoomIn},{default:I(()=>[g(f)]),_:1},8,["onClick"]),g(r,{vertical:""}),g(p,{modelValue:e.page,"onUpdate:modelValue":a[0]||(a[0]=P=>e.page=P),options:e.pages,size:"xs"},null,8,["modelValue","options"]),v("span",ut,"of "+B(e.totalPage),1),g(d,{"data-testid":"pdf-prev",variant:"ghost",size:"xs",icon:"",onClick:e.prev},{default:I(()=>[g(c)]),_:1},8,["onClick"]),g(d,{"data-testid":"pdf-next",variant:"ghost",size:"xs",icon:"",onClick:e.next},{default:I(()=>[g(l)]),_:1},8,["onClick"])])])}const ct=T(st,[["render",dt]]),ft="/design-system/assets/pdf-loading.2dcb0a6f.svg",pt=H({setup(){return{PDF_LOADING_IMG:ft}}});const vt={"data-testid":"pdf-loading",class:"pdf__loading"},mt=["src"];function gt(e,a,o,n,t,s){return L(),k("div",vt,[v("img",{src:e.PDF_LOADING_IMG,width:"793",height:"1122"},null,8,mt)])}const ht=T(pt,[["render",gt]]);let R,C;async function Q(){if(!R){const e=await q(()=>import("./pdf.15921cf8.js").then(a=>a.p),["assets/chunks/pdf.15921cf8.js","assets/chunks/commonjsHelpers.de833af9.js","assets/chunks/vite-browser-external_commonjs-proxy.0726eb50.js"]);typeof window<"u"&&"Worker"in window&&(e.GlobalWorkerOptions.workerSrc=`https://cdn.jsdelivr.net/npm/pdfjs-dist@${e.version}/build/pdf.worker.min.js`),R=e}return R}async function x(){return await Q(),C||(C=await q(()=>import("./pdf_viewer.16f6e99d.js").then(e=>e.p),["assets/chunks/pdf_viewer.16f6e99d.js","assets/chunks/commonjsHelpers.de833af9.js"])),C}async function _t(...e){return await Q(),R.getDocument(...e)}async function yt(){return`https://cdn.jsdelivr.net/npm/pdfjs-dist@${await pe()}/cmaps/`}async function pe(){return await Q(),R.version}async function Pt(){return await x(),new C.EventBus}async function wt(...e){return await x(),new C.PDFViewer(...e)}async function $t(...e){return await x(),new C.PDFLinkService(...e)}const bt=H({directives:{pAspectRatio:re},components:{Heading:Ne},props:{url:{type:String,default:""},error:{type:Object,default:()=>({})}},setup(){const e=h("");return le(async()=>{e.value=await pe()}),{version:e}}});const St={"data-testid":"pdf-error",class:"pdf__error"},Dt={class:"mt-7"},zt=v("dt",null,"URL:",-1),It={class:"truncate"},Ot=["href"],Et=v("dt",null," Reason: ",-1),Nt=v("dt",null," PDFJS Version: ",-1);function Ct(e,a,o,n,t,s){const i=y("Heading"),d=ue("p-aspect-ratio");return F((L(),k("div",St,[g(i,{element:"h3"},{default:I(()=>[Pe(" Failed to load PDF ")]),_:1}),v("dl",Dt,[zt,v("dd",It,[v("a",{href:e.url,target:"_blank"},[v("code",null,B(e.url),1)],8,Ot)]),Et,v("dd",null,[v("code",null,B(e.error.message),1)]),Nt,v("dd",null,[v("code",null,B(e.version),1)])])])),[[d,1122/793]])}const Tt=T(bt,[["render",Ct]]),Lt=["mousemove","mousedown","touchstart","keydown","scroll"];function kt(e,a=5e3){const o=h(!1);let n;function t(){o.value=!1,n&&clearTimeout(n),n=setTimeout(()=>{o.value=!0},a)}return ge(e,Lt,t,{passive:!0}),o}const Vt=H({props:{dropTarget:{type:String,default:".pdfViewer > .page"}},setup(e){const a=new Map,o=A("root"),n=fe(),t=de(e,"dropTarget");return X(Y,{...n,objects:a,root:o}),qe(o,t),{}}}),jt={ref:"root",class:"pdf-objects","data-testid":"pdf-objects"};function Mt(e,a,o,n,t,s){return L(),k("div",jt,[N(e.$slots,"default")],512)}const Ft=T(Vt,[["render",Mt]]);function Bt(e,a){const o=$(),n=$(),t=$(),s=$(),i=$(),d=O(()=>{var u,m;return(m=(u=o.value)==null?void 0:u.numPages)!=null?m:0}),f=Z(1,.1,2),r=Z(1,1,d),p=We(),c=$(!1),l=$(),P=J(),w=J(),D=J();async function E(u,m){p.value=!0,l.value=void 0;try{await V(),u&&(s.value=await _t({url:u,password:m,cMapUrl:await yt(),cMapPacked:!0,disableStream:!1}),o.value=await s.value.promise,t.value.setDocument(o.value),i.value.setDocument(o.value),P.trigger(o.value))}catch(z){z instanceof Error&&(l.value=z,w.trigger(z))}finally{p.value=!1}}async function V(){var u,m;s.value&&!s.value.destroyed&&(await s.value.destroy(),o.value=void 0,s.value=void 0,(u=t.value)==null||u.setDocument(null),(m=i.value)==null||m.setDocument(null))}async function U(){if(typeof navigator<"u"&&e.value&&a.value){const u=await Pt();u.on("pagesinit",()=>{var j,M;const m=(M=(j=a.value)==null?void 0:j.clientWidth)!=null?M:0,z=m>0&&m<793;t.value.currentScaleValue=z?"page-width":"1",t.value.currentPageNumber=r.value,c.value=!0,D.trigger(t.value)}),u.on("pagechanging",m=>{r.value=m.pageNumber}),u.on("scalechanging",m=>{f.value=m.scale}),n.value=u,i.value=await $t({eventBus:n.value}),t.value=await wt({container:e.value,viewer:a.value,eventBus:n.value,linkService:i.value,removePageBorders:!0,annotationEditorMode:-1}),i.value.setViewer(t.value)}}return b([e,a],async([u,m])=>{t.value?u&&m&&(t.value.container=u,t.value.viewer=m,o.value&&t.value.setDocument(o.value),t.value.update()):await U()}),b(r,u=>{t.value&&u!==t.value.currentPageNumber&&(t.value.currentPageNumber=u)}),b(f,u=>{t.value&&u!==t.value.currentScale&&(t.value.currentScale=u)}),we(async()=>{var u;await V(),(u=t.value)==null||u.cleanup()}),{page:r,scale:f,totalPage:d,loading:p,error:l,ready:c,openDoc:E,closeDoc:V,pdfDoc:o,pdfEventBus:n,pdfViewer:t,pdfLoadingTask:s,pdfLinkService:i,onLoaded:P.on,onError:w.on,onReady:D.on}}const Rt=H({directives:{pAspectRatio:re},components:{PdfObjects:Ft,PdfNavigation:ct,PdfLoading:ht,PdfError:Tt},props:{src:{type:String,default:""},page:{type:Number,default:1},scale:{type:Number,default:1},password:{type:String,default:void 0},layout:{type:String,default:"fixed"},ratio:{type:[Number,String],default:210/297},offsetTop:{type:[Number,String],default:0}},emits:["ready","loaded","error","error-password","update:page","update:scale"],setup(e,{emit:a}){const o=A("root"),n=A("container"),t=A("viewer"),s=kt(n),i=ne(e,"page"),d=ne(e,"scale"),f=Ve(de(e,"offsetTop"),{nanToZero:!0}),r=Qe(o,{offsetTop:f}),p=O(()=>{const _=[];return e.layout&&_.push(`pdf-viewer--layout-${e.layout}`),_}),{page:c,scale:l,totalPage:P,openDoc:w,closeDoc:D,pdfDoc:E,loading:V,error:U,onLoaded:u,onError:m,onReady:z}=Bt(n,t);je(()=>[e.src,e.password],([_,ve])=>{w(_,ve)},{debounce:500}),b(()=>e.layout,_=>{r.value=_==="fit"},{immediate:!0}),le(async()=>{e.src&&w(e.src,e.password)}),u(_=>{a("loaded",_)}),m(_=>{_.name==="PasswordException"&&a("error-password",_),a("error",_)}),z(_=>{a("ready",_)});function j(){l.value=Math.round(l.value/.1)*.1+.1}function M(){l.value=Math.round(l.value/.1)*.1-.1}function ee(){c.value++}function te(){c.value--}return X(ce,{page:c,scale:l,totalPage:P,zoomIn:j,zoomOut:M,next:ee,prev:te}),ae(c,i),ae(l,d),{pdfPage:c,pdfScale:l,classNames:p,totalPage:P,openDoc:w,closeDoc:D,pdfDoc:E,idle:s,loading:V,error:U,zoomIn:j,zoomOut:M,next:ee,prev:te}}});const Ht=["data-page","data-scale"],Wt={class:"pdf__header"},At={ref:"container",class:"pdf__container pdfContainer"},Zt={ref:"viewer",class:"pdf__viewer pdfViewer"},Ut={class:"pdf__footer"};function Gt(e,a,o,n,t,s){const i=y("PdfLoading"),d=y("PdfError"),f=y("PdfNavigation"),r=y("PdfObjects"),p=ue("p-aspect-ratio");return F((L(),k("div",{ref:"root","data-testid":"pdf-viewer",class:be(["pdf",e.classNames]),"data-page":e.pdfPage,"data-scale":e.pdfScale},[v("div",Wt,[N(e.$slots,"header",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,zoomIn:e.zoomIn,zoomOut:e.zoomOut,next:e.next,prev:e.prev,doc:e.pdfDoc})]),g(r,{class:"pdf__wrapper"},{default:I(()=>[v("div",At,[F(g(i,null,null,512),[[G,e.loading||!e.src]]),F(g(d,{url:e.src,error:e.error},null,8,["url","error"]),[[G,!e.loading&&e.error]]),v("div",Zt,null,512),N(e.$slots,"default",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,zoomIn:e.zoomIn,zoomOut:e.zoomOut,next:e.next,prev:e.prev,doc:e.pdfDoc})],512),N(e.$slots,"container",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,zoomIn:e.zoomIn,zoomOut:e.zoomOut,next:e.next,prev:e.prev,doc:e.pdfDoc}),g($e,{name:"slide-up"},{default:I(()=>[F(g(f,null,null,512),[[G,!e.idle&&!e.loading&&!e.error]])]),_:1}),N(e.$slots,"body",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,zoomIn:e.zoomIn,zoomOut:e.zoomOut,next:e.next,prev:e.prev,doc:e.pdfDoc})]),_:3}),v("div",Ut,[N(e.$slots,"footer",{page:e.pdfPage,scale:e.pdfScale,totalPage:e.totalPage,zoomIn:e.zoomIn,zoomOut:e.zoomOut,next:e.next,prev:e.prev,doc:e.pdfDoc})])],10,Ht)),[[p,e.layout==="fixed"?e.ratio:!1]])}const _o=T(Rt,[["render",Gt]]);export{Xe as D,vo as P,Y as a,go as b,ho as f,_o as p,mo as u};