import{d as $,o as i,c as d,K as h,g as u,p as m,f as p,w as r,q as v,a9 as w,t as f,G as D,b,n as F,aa as V,r as L,A as x,O as B,I as k,l as I,af as R,bk as A}from"./framework.pPTQOZ96.js";import{_ as E}from"./Subheading.vue_vue_type_style_index_0_lang.Am6wASnF.js";import{_ as G}from"./Caption.vue_vue_type_script_setup_true_lang.q0EJ8KPh.js";import"./Caption.vue_vue_type_style_index_0_lang.w40geAFS.js";import{_}from"./Button.vue_vue_type_script_setup_true_lang.hIAY_Ofm.js";import"./Button.vue_vue_type_style_index_0_lang.w40geAFS.js";import{v as C}from"./index.aPVAFx1T.js";import{I as H}from"./16.1BGH5jyh.js";import{a as N,c as O,b as U,s as j,i as q,h as K,o as M}from"./floating-ui.dom.iFpvQf4h.js";import"./index.hjpy5ZnQ.js";import"./SpinnerRinggo.vue_vue_type_script_setup_true_lang.xK7i01zT.js";import"./defu.3rjBFRnm.js";const J=["src"],Q={class:"tour__body"},W={"data-testid":"tour-title"},X={"data-testid":"tour-text"},Y={class:"tour__footer"},Z={key:0,class:"tour__meta","data-testid":"tour-meta"},tt={class:"tour__controls"},et=m("span",{class:"tour__divider"},"•",-1),at=$({__name:"TourDialog",props:{title:{type:String,default:void 0},text:{type:String,default:""},image:{type:String,default:void 0},highlight:{type:Boolean,default:!0},step:{type:Number,default:0},totalStep:{type:Number,default:0},dismissable:{type:Boolean,default:!0},prevLabel:{type:String,default:"Previous"},nextLabel:{type:String,default:"Next"},dismissLabel:{type:String,default:"Dismiss"},finishLabel:{type:String,default:"Finish"}},emits:["prev","next","dismiss"],setup(t){return(n,e)=>(i(),d("div",{class:F(["tour__dialog",{"tour--image":!!t.image}]),"data-testid":"tour-dialog"},[t.dismissable?(i(),d("span",{key:0,"data-testid":"tour-dismiss",class:"tour__dismiss",onClick:e[0]||(e[0]=a=>n.$emit("dismiss",a))},[h(H)])):u("",!0),t.image?(i(),d("img",{key:1,class:"tour__image","data-testid":"tour-image",src:t.image,alt:"tour-image",width:"320",height:"195"},null,8,J)):u("",!0),m("div",Q,[t.title?(i(),p(E,{key:0,class:"tour__title",size:"sm"},{default:r(()=>[w(m("span",W,null,512),[[v(C),t.title,void 0,{inline:!0}]])]),_:1})):u("",!0),h(G,null,{default:r(()=>[w(m("span",X,null,512),[[v(C),t.text,void 0,{inline:!0}]])]),_:1})]),m("div",Y,[t.totalStep>2?(i(),d("div",Z,f(t.step)+" / "+f(t.totalStep),1)):u("",!0),m("div",tt,[t.dismissable&&t.step<t.totalStep?(i(),d(D,{key:0},[h(_,{"data-testid":"tour-control-dismiss",size:"xs",variant:"link",onClick:e[1]||(e[1]=a=>n.$emit("dismiss",a))},{default:r(()=>[b(f(t.dismissLabel),1)]),_:1}),et],64)):u("",!0),h(_,{"data-testid":"tour-control-prev",size:"xs",variant:"link",disabled:t.step<2,onClick:e[2]||(e[2]=a=>n.$emit("prev",a))},{default:r(()=>[b(f(t.prevLabel),1)]),_:1},8,["disabled"]),t.step===t.totalStep?(i(),p(_,{key:1,"data-testid":"tour-control-finish",size:"xs",variant:"solid",color:"info",onClick:e[3]||(e[3]=a=>n.$emit("next",a))},{default:r(()=>[b(f(t.finishLabel),1)]),_:1})):(i(),p(_,{key:2,"data-testid":"tour-control-next",size:"xs",variant:"solid",color:"info",onClick:e[4]||(e[4]=a=>n.$emit("next",a))},{default:r(()=>[b(f(t.nextLabel),1)]),_:1}))])])],2))}}),it={class:"tour__backdrop"},st=$({inheritAttrs:!1,__name:"TourHighlight",props:{target:{type:Object,default:void 0}},setup(t){const e=V(t,"target"),a=L();return x(o=>{if(a.value&&e.value){const g=N(e.value,a.value,()=>{const s=e.value.getBoundingClientRect(),c=16;a.value.style.width=`${s.width+c}px`,a.value.style.height=`${s.height+c}px`,a.value.style.left=`${s.left-c/2}px`,a.value.style.top=`${s.top-c/2}px`},{animationFrame:!0});o(g)}}),(o,g)=>(i(),d("div",it,[m("div",B({ref_key:"highlight",ref:a,class:"tour__highlight"},o.$attrs),null,16)]))}}),ot={class:"tour"},yt=$({__name:"Tour",setup(t,{expose:n}){const e=L(!1),a=k(),o=k(),g=k(),s=I(()=>{var l;return(l=a.value)==null?void 0:l.$el});x(l=>{if(o.value&&s.value){const y=N(o.value,s.value,async()=>{O(o.value,s.value,{strategy:"absolute",middleware:[U({altBoundary:!0}),j({padding:16}),q(),K(),M(16)]}).then(({x:z,y:P,middlewareData:T})=>{s.value&&(s.value.style.transform=`translate3d(${z||0}px, ${P||0}px, 0)`,s.value.style.visibility=T.hide.referenceHidden?"hidden":"visible")})},{animationFrame:!0});l(y)}}),x(l=>{e.value&&document.body.classList.add("tour--active"),l(()=>{document.body.classList.remove("tour--active")})});function c(l,y){o.value=l,g.value=y,e.value=!0}function S(){e.value=!1}return R(()=>{S()}),n({show:c,hide:S}),(l,y)=>(i(),d("div",ot,[h(A,{name:"fade"},{default:r(()=>[v(e)?(i(),p(st,{key:0,target:v(o)},null,8,["target"])):u("",!0),v(e)?(i(),p(at,B({key:1,ref_key:"dialog",ref:a},v(g)),null,16)):u("",!0)]),_:1})]))}});export{yt as default};