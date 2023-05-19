import{z as A,A as ie,v as oe,T as se}from"./floating-ui.dom.browser.min.3a6ea315.js";import{t as J,j as x}from"./index.601b502e.js";import{Y as z,w as B,U as C,b as K,J as U,e as m,d as Z,k as q,_ as G,o as S,c as Q,z as w,t as N,j as E,f as L,p as le,V as re,D as ue,r as de,A as ce,C as fe,a4 as ve,a8 as he,$ as P,a2 as T}from"./framework.6feb5f37.js";import{D as ge,P as ee,u as pe,a as me,f as X,b as ye}from"./Calibrator-v3.bf89c5c0.js";import{m as be}from"./memoize.8367968b.js";import{s as _,u as _e}from"./index.06d37783.js";function we(t,e=document.body){let n=t.parentElement;do{const{position:a}=window.getComputedStyle(n);if(a==="relative"||a==="absolute")return n;n=n.parentElement}while(n&&n!==e);return e}function xe(t){const{container:e,reference:n,x:a,y:i,scale:o}=t,l=n.getBoundingClientRect(),s=we(n,e),v=s.getBoundingClientRect(),h=l.top-v.top+s.scrollTop,p=l.left-v.left+s.scrollLeft;return{top:h+i*o,left:p+a*o}}function Ne(t){const{reference:e,object:n,scale:a}=t,i=n.getBoundingClientRect(),o=e.getBoundingClientRect();return{x:(i.left-o.left)/a,y:(i.top-o.top)/a,page:Number.parseInt(e.dataset.pageNumber)}}function $e(t,e){const n=z(!0),a=z(),{hoverzone:i}=C(ge);async function o(){if(l(),t.value){const{default:s}=await U(()=>import("./interact.min.6dc930b6.js").then(v=>v.i),["assets/chunks/interact.min.6dc930b6.js","assets/chunks/commonjsHelpers.042e6b4d.js"]);a.value=s(t.value).draggable({inertia:!0,enabled:n.value,autoScroll:{container:t.value.parentElement,margin:100,speed:300},onstart:e.onstart,onmove:e.onmove,onend:e.onend,modifiers:[s.modifiers.restrict({restriction:"parent",elementRect:{top:0,left:0,bottom:1,right:1}}),s.modifiers.restrictRect({endOnly:!0,restriction:()=>i.value?s.getElementRect(i.value):{top:0,left:0,bottom:Number.POSITIVE_INFINITY,right:Number.POSITIVE_INFINITY}})]})}}function l(){a.value&&a.value.unset()}return B(t,async()=>{await o()}),B(n,s=>{a.value&&a.value.draggable(s)}),K(()=>{l()}),n}function Ie(t,e={}){const n=z(!0),a=z();async function i(){var l,s,v;if(o(),t.value){const{default:h}=await U(()=>import("./interact.min.6dc930b6.js").then(p=>p.i),["assets/chunks/interact.min.6dc930b6.js","assets/chunks/commonjsHelpers.042e6b4d.js"]);a.value=h(t.value).resizable({enabled:n.value,edges:{left:!1,top:!1,bottom:(l=e.handleSelector)!=null?l:".resize-handle",right:(s=e.handleSelector)!=null?s:".resize-handle"},onstart:e.onstart,onmove:e.onmove,onend:e.onend,modifiers:[h.modifiers.aspectRatio({ratio:(v=m(e.ratio))!=null?v:"preserve",modifiers:[h.modifiers.restrictSize({min:(p,f,r)=>{var c;const d=(c=m(e.scale))!=null?c:1;return{...r.rect,width:m(e.minWidth)*d,height:m(e.minHeight)*d}},max:(p,f,r)=>{var c;const d=(c=m(e.scale))!=null?c:1;return{...r.rect,width:m(e.maxWidth)*d,height:m(e.maxHeight)*d}}}),h.modifiers.restrictSize({max:(p,f,r)=>{const d=m(e.reference);if(d){const c=h.getElementRect(d);if(c){const y=c.right-r.rect.left,$=c.bottom-r.rect.top;return{...c,width:y,height:$}}}return{...r.rect,width:Number.POSITIVE_INFINITY,height:Number.POSITIVE_INFINITY}}})]})]})}}function o(){a.value&&a.value.unset()}return B(t,async()=>{await i()}),B(n,l=>{a.value&&a.value.draggable(l)},{immediate:!0}),K(()=>{o()}),n}function Oe(t,e){return{x:(e.width-t.width)/2,y:(e.height-t.height)/2}}function Ee(t,e){return t.x+t.width>e.width||t.y+t.height>e.height}function Pe(t){var a;const e=new Map,n=be(i=>Math.round(i/15)*15);for(const i of t){const o=n(i.x),l=n(i.y),s=(a=e.get(o))!=null?a:new Map;s.set(l,i),e.set(o,s)}return i=>{var s;const o=n(i.x),l=n(i.y);return((s=e.get(o))==null?void 0:s.get(l))!==void 0}}function Te(t){var s;const e=(s=t.checkOverlap)!=null?s:Pe(t.objects),n=Oe(t.size,t.offside),a={...t.size,...n};let i=!0,o=0,l=0;do i=!0,Ee(a,t.offside)&&(a.y=n.y+l,a.x=n.x,l+=15,i=!1),e(a,t.objects)&&(a.x+=15,a.y+=15,i=!1);while(!i&&++o<=500);return i||console.warn("Cannot find empty position, max iteration reach"),a}const ze=Z({setup(){const{x:t,y:e,page:n,width:a,height:i}=C(ee),o=J("target");return q(l=>{if(o.value){const s=A(o.value.parentElement,o.value,()=>{ie(o.value.parentElement,o.value,{strategy:"absolute",middleware:[oe(),se(12)]}).then(({x:v,y:h})=>{o.value&&(o.value.style.left=`${v||0}px`,o.value.style.top=`${h||0}px`)})});l(s)}},{flush:"post"}),{x:t,y:e,page:n,width:a,height:i}}});const Be={ref:"target","data-testid":"pdf-debugger",class:"pdf-object__debugger"},je={"data-testid":"debug-x"},Re={"data-testid":"debug-y"},Se={"data-testid":"debug-page"},Ce={"data-testid":"debug-width"},De={"data-testid":"debug-height"};function Me(t,e,n,a,i,o){return S(),Q("div",Be,[w("pre",je,"x: "+N(t.x),1),w("pre",Re,"y: "+N(t.y),1),w("pre",Se,"page: "+N(t.page),1),w("pre",Ce,"width: "+N(t.width),1),w("pre",De,"height: "+N(t.height),1)],512)}const Fe=G(ze,[["render",Me]]),Ve=Z({components:{PdfObjectDebugger:Fe},props:{x:{type:Number,default:void 0},y:{type:Number,default:void 0},page:{type:Number,default:void 0},width:{type:Number,default:198},height:{type:Number,default:106},minWidth:{type:Number,default:void 0},minHeight:{type:Number,default:void 0},maxWidth:{type:Number,default:void 0},maxHeight:{type:Number,default:void 0},moveable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},autofocus:{type:Boolean,default:!1},debug:{type:Boolean,default:!1}},emits:["update:x","update:y","update:page","update:width","update:height"],setup(t){const e=J("object"),{root:n,scale:a,objects:i}=C(ye),o=x(t,"x"),l=x(t,"y"),s=x(t,"page"),v=x(t,"width"),h=x(t,"height"),{id:p,x:f,y:r,page:d,width:c,height:y,minHeight:$,minWidth:D,maxHeight:M,maxWidth:F,ratio:V}=pe(t),j=E(!1),Y=E(),H=E(),W=E(),b=me(d),te=$e(e,{onstart(){const{left:u,top:g}=e.value.getBoundingClientRect();j.value=!0,Y.value=f.value,H.value=r.value,W.value=d.value,f.value=u,r.value=g},onmove(u){k(u.dx,u.dy)},onend(u){if(u.relatedTarget){const g=Ne({reference:u.relatedTarget,container:n.value,object:e.value,scale:a.value});f.value=g.x,r.value=g.y,d.value=g.page}else f.value=Y.value,r.value=H.value,d.value=W.value;j.value=!1}}),ae=Ie(e,{minHeight:$,minWidth:D,maxHeight:M,maxWidth:F,scale:a,ratio:V,reference:b,onmove(u){u.rect&&a.value&&(c.value=u.rect.width/a.value,y.value=u.rect.height/a.value)}});q(u=>{if(e.value)if(b.value&&n.value)if(e.value.style.display="block",e.value.style.width=`${c.value}px`,e.value.style.height=`${y.value}px`,j.value)e.value.style.position="fixed",e.value.style.transform=`translate(${f.value}px, ${r.value}px) scale(${a.value})`,e.value.style.zIndex="50";else{const g=A(b.value,e.value,()=>{const{left:R,top:I}=xe({reference:b.value,container:n.value,x:f.value,y:r.value,scale:a.value});e.value.style.position="absolute",e.value.style.transform=`translate(${R}px, ${I}px) scale(${a.value})`,e.value.style.zIndex="10"},{ancestorScroll:!1});u(g)}else e.value.style.display="none"});function k(u,g){t.moveable&&(f.value+=u,r.value+=g)}function ne(){const u=[...i.values()].filter(O=>O.id!==p&&Number.isFinite(O.x)&&Number.isFinite(O.y)&&O.page===d.value),g={width:c.value,height:y.value},R={width:b.value.clientWidth/a.value,height:b.value.clientHeight/a.value},I=Te({size:g,offside:R,objects:u});f.value=I.x,r.value=I.y}return _(f,o),_(r,l),_(d,s),_(c,v),_(y,h),_(te,L(t,"moveable"),{direction:"rtl",immediate:!0}),_(ae,L(t,"resizable"),{direction:"rtl",immediate:!0}),le(async()=>{await _e(b).toBeTruthy(),(!Number.isFinite(f.value)||!Number.isFinite(r.value))&&ne(),t.autofocus&&X(e.value)}),re(ee,{id:p,x:f,y:r,page:d,width:c,height:y,minHeight:$,minWidth:D,maxHeight:M,maxWidth:F,ratio:V}),{move:k,focus:X}}});const Ye=["data-x","data-y","data-page","data-width","data-height"],He={class:"pdf-object__container"},We={class:"pdf-object__resize resize-handle"};function ke(t,e,n,a,i,o){const l=ue("PdfObjectDebugger");return S(),Q("div",{ref:"object","data-testid":"pdf-object",class:"pdf-object",tabindex:"0","data-x":t.x,"data-y":t.y,"data-page":t.page,"data-width":t.width,"data-height":t.height,onKeydown:[e[0]||(e[0]=P(T(s=>t.move(0,-1),["stop","prevent"]),["up"])),e[1]||(e[1]=P(T(s=>t.move(0,1),["stop","prevent"]),["down"])),e[2]||(e[2]=P(T(s=>t.move(-1,0),["stop","prevent"]),["left"])),e[3]||(e[3]=P(T(s=>t.move(1,0),["stop","prevent"]),["right"]))]},[w("div",He,[de(t.$slots,"default"),t.debug?(S(),ce(l,{key:0})):fe("",!0)]),ve(w("div",We,null,512),[[he,t.resizable]])],40,Ye)}const Ze=G(Ve,[["render",ke]]);export{Ne as g,Ze as p};