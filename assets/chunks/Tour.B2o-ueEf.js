import{d as $,o as i,c as d,J as h,g as u,m,f as p,w as r,ab as w,p as v,t as f,F as T,b,n as D,ac as V,r as L,z as x,N as B,H as k,k as H,ah as R,bl as E}from"./framework.sPKXfJg2.js";import{_ as I}from"./Subheading.vue_vue_type_style_index_0_lang.EGg49p8Y.js";import{_ as U}from"./Caption.vue_vue_type_script_setup_true_lang.CoQWz2VF.js";import"./Caption.vue_vue_type_style_index_0_lang.l0sNRNKZ.js";import{_}from"./Button.vue_vue_type_script_setup_true_lang.D0k62JW9.js";import"./Button.vue_vue_type_style_index_0_lang.l0sNRNKZ.js";import{v as C}from"./index.BGocLYEj.js";import{I as j}from"./16.Dp5Wvxo0.js";import{a as N,c as A,b as G,s as J,i as M,h as O,o as q}from"./floating-ui.dom.Bv9LQ7l_.js";import"./index.DvWHfs5K.js";import"./SpinnerRinggo.vue_vue_type_script_setup_true_lang.CxnU0WMy.js";import"./defu.CMw4_7D2.js";const K=["src"],Q={class:"tour__body"},W={"data-testid":"tour-title"},X={"data-testid":"tour-text"},Y={class:"tour__footer"},Z={key:0,class:"tour__meta","data-testid":"tour-meta"},tt={class:"tour__controls"},et=m("span",{class:"tour__divider"},"•",-1),at=$({__name:"TourDialog",props:{title:{type:String,default:void 0},text:{type:String,default:""},image:{type:String,default:void 0},highlight:{type:Boolean,default:!0},step:{type:Number,default:0},totalStep:{type:Number,default:0},dismissable:{type:Boolean,default:!0},prevLabel:{type:String,default:"Previous"},nextLabel:{type:String,default:"Next"},dismissLabel:{type:String,default:"Dismiss"},finishLabel:{type:String,default:"Finish"}},emits:["prev","next","dismiss"],setup(t){return(n,e)=>(i(),d("div",{class:D(["tour__dialog",{"tour--image":!!t.image}]),"data-testid":"tour-dialog"},[t.dismissable?(i(),d("span",{key:0,"data-testid":"tour-dismiss",class:"tour__dismiss",onClick:e[0]||(e[0]=a=>n.$emit("dismiss",a))},[h(j)])):u("",!0),t.image?(i(),d("img",{key:1,class:"tour__image","data-testid":"tour-image",src:t.image,alt:"tour-image",width:"320",height:"195"},null,8,K)):u("",!0),m("div",Q,[t.title?(i(),p(I,{key:0,class:"tour__title",size:"sm"},{default:r(()=>[w(m("span",W,null,512),[[v(C),t.title,void 0,{inline:!0}]])]),_:1})):u("",!0),h(U,null,{default:r(()=>[w(m("span",X,null,512),[[v(C),t.text,void 0,{inline:!0}]])]),_:1})]),m("div",Y,[t.totalStep>2?(i(),d("div",Z,f(t.step)+" / "+f(t.totalStep),1)):u("",!0),m("div",tt,[t.dismissable&&t.step<t.totalStep?(i(),d(T,{key:0},[h(_,{"data-testid":"tour-control-dismiss",size:"xs",variant:"link",onClick:e[1]||(e[1]=a=>n.$emit("dismiss",a))},{default:r(()=>[b(f(t.dismissLabel),1)]),_:1}),et],64)):u("",!0),h(_,{"data-testid":"tour-control-prev",size:"xs",variant:"link",disabled:t.step<2,onClick:e[2]||(e[2]=a=>n.$emit("prev",a))},{default:r(()=>[b(f(t.prevLabel),1)]),_:1},8,["disabled"]),t.step===t.totalStep?(i(),p(_,{key:1,"data-testid":"tour-control-finish",size:"xs",variant:"solid",color:"info",onClick:e[3]||(e[3]=a=>n.$emit("next",a))},{default:r(()=>[b(f(t.finishLabel),1)]),_:1})):(i(),p(_,{key:2,"data-testid":"tour-control-next",size:"xs",variant:"solid",color:"info",onClick:e[4]||(e[4]=a=>n.$emit("next",a))},{default:r(()=>[b(f(t.nextLabel),1)]),_:1}))])])],2))}}),it={class:"tour__backdrop"},st=$({inheritAttrs:!1,__name:"TourHighlight",props:{target:{type:Object,default:void 0}},setup(t){const e=V(t,"target"),a=L();return x(o=>{if(a.value&&e.value){const g=N(e.value,a.value,()=>{const s=e.value.getBoundingClientRect(),c=16;a.value.style.width=`${s.width+c}px`,a.value.style.height=`${s.height+c}px`,a.value.style.left=`${s.left-c/2}px`,a.value.style.top=`${s.top-c/2}px`},{animationFrame:!0});o(g)}}),(o,g)=>(i(),d("div",it,[m("div",B({ref_key:"highlight",ref:a,class:"tour__highlight"},o.$attrs),null,16)]))}}),ot={class:"tour"},yt=$({__name:"Tour",setup(t,{expose:n}){const e=L(!1),a=k(),o=k(),g=k(),s=H(()=>{var l;return(l=a.value)==null?void 0:l.$el});x(l=>{if(o.value&&s.value){const y=N(o.value,s.value,async()=>{A(o.value,s.value,{strategy:"absolute",middleware:[G({altBoundary:!0}),J({padding:16}),M(),O(),q(16)]}).then(({x:z,y:F,middlewareData:P})=>{s.value&&(s.value.style.transform=`translate3d(${z||0}px, ${F||0}px, 0)`,s.value.style.visibility=P.hide.referenceHidden?"hidden":"visible")})},{animationFrame:!0});l(y)}}),x(l=>{e.value&&document.body.classList.add("tour--active"),l(()=>{document.body.classList.remove("tour--active")})});function c(l,y){o.value=l,g.value=y,e.value=!0}function S(){e.value=!1}return R(()=>{S()}),n({show:c,hide:S}),(l,y)=>(i(),d("div",ot,[h(E,{name:"fade"},{default:r(()=>[v(e)?(i(),p(st,{key:0,target:v(o)},null,8,["target"])):u("",!0),v(e)?(i(),p(at,B({key:1,ref_key:"dialog",ref:a},v(g)),null,16)):u("",!0)]),_:1})]))}});export{yt as default};