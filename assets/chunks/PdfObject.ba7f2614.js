import{a as J,c as ce,b as fe,o as ve}from"./floating-ui.dom.d66a0422.js";import{t as q,r as P,s as _,c as he}from"./theme.bdd572ce.js";import{s as B,V as D,w as R,b as G,a0 as U,u as b,m as Z,l as Q,_ as ee,x as C,p as te,G as x,z as O,r as $,t as k,o as me,a1 as ge,L as pe,q as ye,A as be,C as _e,a7 as xe,a9 as we,a2 as T,a5 as z}from"./framework.f14560cd.js";import{D as Ne,P as ae,a as Ie,u as Pe,b as Oe,f as A}from"./Calibrator-v3.49ccb315.js";import{c as S}from"./use-focus.b9bc053c.js";import{m as Ee}from"./memoize.19554dab.js";function $e(t,e=document.body){let n=t.parentElement;do{const{position:a}=window.getComputedStyle(n);if(a==="relative"||a==="absolute")return n;n=n.parentElement}while(n&&n!==e);return e}function Te(t){const{container:e,reference:n,x:a,y:i,scale:s}=t,l=n.getBoundingClientRect(),o=$e(n,e),v=o.getBoundingClientRect(),h=l.top-v.top+o.scrollTop,m=l.left-v.left+o.scrollLeft;return{top:h+i*s,left:m+a*s}}function ze(t){const{reference:e,object:n,scale:a}=t,i=n.getBoundingClientRect(),s=e.getBoundingClientRect(),l=Math.floor((s.width-i.width)/a),o=Math.floor((s.height-i.height)/a),v=(i.left-s.left)/a,h=(i.top-s.top)/a,m=Number.parseInt(e.dataset.pageNumber);return{x:S(v,1,l-1),y:S(h,1,o-1),page:m}}function Be(t,e){const n=B(!0),a=B(),{hoverzone:i}=D(Ne);async function s(){if(l(),t.value){const{default:o}=await U(()=>import("./interact.min.3d1d0b73.js").then(v=>v.i),["assets/chunks/interact.min.3d1d0b73.js","assets/chunks/commonjsHelpers.de833af9.js"]);a.value=o(t.value).draggable({inertia:!0,enabled:n.value,autoScroll:{container:t.value.parentElement,margin:100,speed:300},onstart:e.onstart,onmove:e.onmove,onend:e.onend,modifiers:[o.modifiers.restrict({restriction:"parent",elementRect:{top:0,left:0,bottom:1,right:1}}),o.modifiers.restrictRect({endOnly:!0,restriction:()=>i.value?o.getElementRect(i.value):{top:0,left:0,bottom:Number.POSITIVE_INFINITY,right:Number.POSITIVE_INFINITY}})]})}}function l(){a.value&&a.value.unset()}return R(t,async()=>{await s()}),R(n,o=>{a.value&&a.value.draggable(o)}),G(()=>{l()}),n}function Re(t,e={}){const n=B(!0),a=B();async function i(){var l,o,v;if(s(),t.value){const{default:h}=await U(()=>import("./interact.min.3d1d0b73.js").then(m=>m.i),["assets/chunks/interact.min.3d1d0b73.js","assets/chunks/commonjsHelpers.de833af9.js"]);a.value=h(t.value).resizable({enabled:n.value,edges:{left:!1,top:!1,bottom:(l=e.handleSelector)!=null?l:".resize-handle",right:(o=e.handleSelector)!=null?o:".resize-handle"},onstart:e.onstart,onmove:e.onmove,onend:e.onend,modifiers:[h.modifiers.aspectRatio({ratio:(v=b(e.ratio))!=null?v:"preserve",modifiers:[h.modifiers.restrictSize({min:(m,c,r)=>{var d;const f=(d=b(e.scale))!=null?d:1;return{...r.rect,width:b(e.minWidth)*f,height:b(e.minHeight)*f}},max:(m,c,r)=>{var d;const f=(d=b(e.scale))!=null?d:1;return{...r.rect,width:b(e.maxWidth)*f,height:b(e.maxHeight)*f}}}),h.modifiers.restrictSize({max:(m,c,r)=>{const f=b(e.reference);if(f){const d=h.getElementRect(f);if(d){const y=d.right-r.rect.left,E=d.bottom-r.rect.top;return{...d,width:y,height:E}}}return{...r.rect,width:Number.POSITIVE_INFINITY,height:Number.POSITIVE_INFINITY}}})]})]})}}function s(){a.value&&a.value.unset()}return R(t,async()=>{await i()}),R(n,l=>{a.value&&a.value.draggable(l)},{immediate:!0}),G(()=>{s()}),n}function Se(t,e){return{x:(e.width-t.width)/2,y:(e.height-t.height)/2}}function je(t,e){return t.x+t.width>e.width||t.y+t.height>e.height}function Ce(t){var a;const e=new Map,n=Ee(i=>Math.round(i/15)*15);for(const i of t){const s=n(i.x),l=n(i.y),o=(a=e.get(s))!=null?a:new Map;o.set(l,i),e.set(s,o)}return i=>{var o;const s=n(i.x),l=n(i.y);return((o=e.get(s))==null?void 0:o.get(l))!==void 0}}function De(t){var o;const e=(o=t.checkOverlap)!=null?o:Ce(t.objects),n=Se(t.size,t.offside),a={...t.size,...n};let i=!0,s=0,l=0;do i=!0,je(a,t.offside)&&(a.y=n.y+l,a.x=n.x,l+=15,i=!1),e(a,t.objects)&&(a.x+=15,a.y+=15,i=!1);while(!i&&++s<=500);return i||console.warn("Cannot find empty position, max iteration reach"),a}const Me=Z({setup(){const{x:t,y:e,page:n,width:a,height:i}=D(ae),s=q("target");return Q(l=>{if(s.value){const o=J(s.value.parentElement,s.value,()=>{ce(s.value.parentElement,s.value,{strategy:"absolute",middleware:[fe(),ve(12)]}).then(({x:v,y:h})=>{s.value&&(s.value.style.left=`${v||0}px`,s.value.style.top=`${h||0}px`)})});l(o)}},{flush:"post"}),{x:t,y:e,page:n,width:a,height:i}}});const Fe={ref:"target","data-testid":"pdf-debugger",class:"pdf-object__debugger"},He={"data-testid":"debug-x"},Ve={"data-testid":"debug-y"},We={"data-testid":"debug-page"},Ye={"data-testid":"debug-width"},Ke={"data-testid":"debug-height"};function Xe(t,e,n,a,i,s){return C(),te("div",Fe,[x("pre",He,"x: "+O(t.x),1),x("pre",Ve,"y: "+O(t.y),1),x("pre",We,"page: "+O(t.page),1),x("pre",Ye,"width: "+O(t.width),1),x("pre",Ke,"height: "+O(t.height),1)],512)}const Le=ee(Me,[["render",Xe]]),ke=Z({components:{PdfObjectDebugger:Le},props:{x:{type:Number,default:void 0},y:{type:Number,default:void 0},page:{type:Number,default:void 0},width:{type:Number,default:198},height:{type:Number,default:106},minWidth:{type:Number,default:void 0},minHeight:{type:Number,default:void 0},maxWidth:{type:Number,default:void 0},maxHeight:{type:Number,default:void 0},moveable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},autofocus:{type:Boolean,default:!1},debug:{type:Boolean,default:!1}},emits:["update:x","update:y","update:page","update:width","update:height"],setup(t){const e=q("object"),{root:n,scale:a,objects:i}=D(Ie),s=P(t,"x"),l=P(t,"y"),o=P(t,"page"),v=P(t,"width"),h=P(t,"height"),{id:m,x:c,y:r,page:f,width:d,height:y,minHeight:E,minWidth:M,maxHeight:F,maxWidth:H,ratio:V}=Pe(t),j=$(!1),W=$(),Y=$(),K=$(),p=Oe(f),ne=Be(e,{onstart(){const{left:u,top:g}=e.value.getBoundingClientRect();j.value=!0,W.value=c.value,Y.value=r.value,K.value=f.value,c.value=u,r.value=g},onmove(u){c.value+=u.dx,r.value+=u.dy},onend(u){if(u.relatedTarget){const g=ze({reference:u.relatedTarget,container:n.value,object:e.value,scale:a.value});c.value=g.x,r.value=g.y,f.value=g.page}else c.value=W.value,r.value=Y.value,f.value=K.value;j.value=!1}}),oe=Re(e,{minHeight:E,minWidth:M,maxHeight:F,maxWidth:H,scale:a,ratio:V,reference:p,onmove(u){u.rect&&a.value&&(d.value=u.rect.width/a.value,y.value=u.rect.height/a.value)}});Q(u=>{if(e.value)if(p.value&&n.value)if(e.value.style.display="block",e.value.style.width=`${d.value}px`,e.value.style.height=`${y.value}px`,j.value)e.value.style.position="fixed",e.value.style.transform=`translate(${c.value}px, ${r.value}px) scale(${a.value})`,e.value.style.zIndex="50";else{const g=J(p.value,e.value,()=>{const{left:I,top:w}=Te({reference:p.value,container:n.value,x:c.value,y:r.value,scale:a.value});e.value.style.position="absolute",e.value.style.transform=`translate(${I}px, ${w}px) scale(${a.value})`,e.value.style.zIndex="10"},{ancestorScroll:!1});u(g)}else e.value.style.display="none"});function ie(u,g,I){if(t.moveable){const w=p.value.clientWidth,N=p.value.clientHeight,X=Math.floor(w/a.value-d.value),L=Math.floor(N/a.value-y.value),le=u.metaKey||u.ctrlKey?X:u.shiftKey?10:1,ue=u.metaKey||u.ctrlKey?L:u.shiftKey?10:1,re=c.value+g*le,de=r.value+I*ue;c.value=S(re,0,X),r.value=S(de,0,L)}}function se(){const u=[...i.values()].filter(N=>N.id!==m&&Number.isFinite(N.x)&&Number.isFinite(N.y)&&N.page===f.value),g={width:d.value,height:y.value},I={width:p.value.clientWidth/a.value,height:p.value.clientHeight/a.value},w=De({size:g,offside:I,objects:u});c.value=w.x,r.value=w.y}return _(c,s),_(r,l),_(f,o),_(d,v),_(y,h),_(ne,k(t,"moveable"),{direction:"rtl",immediate:!0}),_(oe,k(t,"resizable"),{direction:"rtl",immediate:!0}),me(async()=>{await he(p).toBeTruthy(),(!Number.isFinite(c.value)||!Number.isFinite(r.value))&&se(),t.autofocus&&A(e.value)}),ge(ae,{id:m,x:c,y:r,page:f,width:d,height:y,minHeight:E,minWidth:M,maxHeight:F,maxWidth:H,ratio:V}),{move:ie,focus:A}}});const Ae=["data-x","data-y","data-page","data-width","data-height"],Je={class:"pdf-object__container"},qe={class:"pdf-object__resize resize-handle"};function Ge(t,e,n,a,i,s){const l=pe("PdfObjectDebugger");return C(),te("div",{ref:"object","data-testid":"pdf-object",class:"pdf-object",tabindex:"0","data-x":t.x,"data-y":t.y,"data-page":t.page,"data-width":t.width,"data-height":t.height,onKeydown:[e[0]||(e[0]=T(z(o=>t.move(o,0,-1),["stop","prevent"]),["up"])),e[1]||(e[1]=T(z(o=>t.move(o,0,1),["stop","prevent"]),["down"])),e[2]||(e[2]=T(z(o=>t.move(o,-1,0),["stop","prevent"]),["left"])),e[3]||(e[3]=T(z(o=>t.move(o,1,0),["stop","prevent"]),["right"]))]},[x("div",Je,[ye(t.$slots,"default"),t.debug?(C(),be(l,{key:0})):_e("",!0)]),xe(x("div",qe,null,512),[[we,t.resizable]])],40,Ae)}const nt=ee(ke,[["render",Ge]]);export{ze as g,nt as p};