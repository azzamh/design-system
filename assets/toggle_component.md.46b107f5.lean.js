import{d as w,c as V,_ as S,a as h,b as _,f as e,e as v,k as t,q as g,p as T,n as A,G as C,r as m,g as n,h as a,i as c,j as P,u as f,H as I}from"./app.58fe9cf7.js";import{u as D}from"./chunks/use-checkbox.b5a03fc5.js";import{u as q}from"./chunks/utils-6ba05f5b.d752b706.js";import{b as B}from"./chunks/index.ba2fff2d.js";import"./chunks/index.2ab2eff7.js";import"./chunks/value.b16f1ede.js";const N=w({props:{variant:{type:String,default:"pill"},modelValue:{default:!1},value:{default:!0},uncheckedValue:{default:!1},checked:{type:Boolean,default:!1},checkedLabel:{type:String,default:"on"},uncheckedLabel:{type:String,default:"off"},noLabel:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},models:{prop:"modelValue",event:"update:modelValue"},emits:["update:modelValue","change"],setup(s){const u=D(s),k=V(()=>{const o=[];return s.variant&&o.push(`toggle--${s.variant}`),u.value&&o.push("toggle--checked"),s.disabled&&o.push("toggle--disabled"),s.readonly&&o.push("toggle--readonly"),o});function r(){!s.readonly&&!s.disabled&&(u.value=!u.value)}return{classNames:k,model:u,toggle:r}}}),R={class:"toggle__switch"},H={key:0,class:"toggle__label toggle__checked-label"},M=["disabled","value","checked"],L={key:1,class:"toggle__label toggle__unchecked-label"};function E(s,u,k,r,o,x){return h(),_("label",{"data-testid":"toggle",class:A(["toggle",s.classNames]),onClick:u[0]||(u[0]=C((...l)=>s.toggle&&s.toggle(...l),["prevent"]))},[e("div",R,[s.noLabel===!1?(h(),_("span",H,[v(s.$slots,"checked",{},()=>[t(g(s.checkedLabel),1)])])):T("",!0),e("input",{type:"checkbox",class:"toggle__pointer",disabled:s.disabled||s.readonly,value:s.value,checked:s.model},null,8,M),s.noLabel===!1?(h(),_("span",L,[v(s.$slots,"unchecked",{},()=>[t(g(s.uncheckedLabel),1)])])):T("",!0)]),v(s.$slots,"default")],2)}var p=S(N,[["render",E]]),z=q,b=z.createSVGComponent(b,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M7.5 1H8.5V3.5H7.5z"}},{elem:"path",attrs:{d:"M10.8 3.4H13.3V4.4H10.8z",transform:"rotate(-45.001 12.041 3.923)"}},{elem:"path",attrs:{d:"M12.5 7.5H15V8.5H12.5z"}},{elem:"path",attrs:{d:"M11.6 10.8H12.6V13.3H11.6z",transform:"rotate(-45.001 12.075 12.041)"}},{elem:"path",attrs:{d:"M7.5 12.5H8.5V15H7.5z"}},{elem:"path",attrs:{d:"M2.7 11.6H5.2V12.6H2.7z",transform:"rotate(-45.001 3.96 12.079)"}},{elem:"path",attrs:{d:"M1 7.5H3.5V8.5H1z"}},{elem:"path",attrs:{d:"M3.4 2.7H4.4V5.2H3.4z",transform:"rotate(-45.001 3.925 3.961)"}},{elem:"path",attrs:{d:"M8,6c1.1,0,2,0.9,2,2s-0.9,2-2,2S6,9.1,6,8S6.9,6,8,6 M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.3,3-3S9.7,5,8,5z"}}]),$=b,U=$,F=q,y=F.createSVGComponent(y,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"currentColor",width:16,height:16},[{elem:"path",attrs:{d:"M7.2,2.3c-1,4.4,1.7,8.7,6.1,9.8c0.1,0,0.1,0,0.2,0c-1.1,1.2-2.7,1.8-4.3,1.8c-0.1,0-0.2,0-0.2,0C5.6,13.8,3,11,3.2,7.7	C3.2,5.3,4.8,3.1,7.2,2.3 M8,1L8,1C4.1,1.6,1.5,5.3,2.1,9.1c0.6,3.3,3.4,5.8,6.8,5.9c0.1,0,0.2,0,0.3,0c2.3,0,4.4-1.1,5.8-3	c0.2-0.2,0.1-0.6-0.1-0.7c-0.1-0.1-0.2-0.1-0.3-0.1c-3.9-0.3-6.7-3.8-6.4-7.6C8.3,3,8.4,2.4,8.6,1.8c0.1-0.3,0-0.6-0.3-0.7	C8.1,1,8.1,1,8,1z"}}]),G=y,Y=G;const j=c("",3),W=t("Text"),O=c("",2),J=e("svg",{width:"8",height:"8",viewBox:"0 0 2 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("rect",{width:"2",height:"8",rx:"1",fill:"white"})],-1),K=e("svg",{width:"8",height:"8",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[e("circle",{cx:"4",cy:"4",r:"3",stroke:"white","stroke-width":"2"})],-1),Q=t(" Text "),X=c("",3),Z=t("Pill"),aa=t("Flat"),na=c("",3),sa=t("Text"),ta=t("Text"),ea=c("",2),pa=t(" Dark Mode "),oa=c("",3),la=t("Text"),ca=t("Text"),ua=c("",2),ia=t("Pill"),da=t("Flat"),ka=c("",2),ra=t("Readonly False"),ga=t("Readonly True"),ha=c("",2),_a=t("Text"),va=e("p",null,[e("strong",null,"Result :")],-1),ma=c("",3),fa=t("Lamp"),Ta=e("p",null,[e("strong",null,"Result :")],-1),qa=c("",3),ba={class:"flex flex-col gap-3"},ya=t("Apple"),xa=t("Grape"),wa=t("Pineapple"),Va=e("strong",null,"Selected :",-1),Sa={class:"whitespace-normal"},Aa=c("",10),Ha='{"title":"Toggle","description":"","frontmatter":{},"headers":[{"level":2,"title":"Usage","slug":"usage"},{"level":3,"title":"Simple Usage","slug":"simple-usage"},{"level":3,"title":"With Icon","slug":"with-icon"},{"level":2,"title":"Type variant","slug":"type-variant"},{"level":2,"title":"Custom label","slug":"custom-label"},{"level":2,"title":"Hide label","slug":"hide-label"},{"level":2,"title":"Disabled state","slug":"disabled-state"},{"level":2,"title":"Readonly state","slug":"readonly-state"},{"level":2,"title":"Binding v-model","slug":"binding-v-model"},{"level":3,"title":"Custom v-model value","slug":"custom-v-model-value"},{"level":3,"title":"Array v-model","slug":"array-v-model"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Props","slug":"props"},{"level":3,"title":"Slots","slug":"slots"},{"level":3,"title":"Events","slug":"events"},{"level":2,"title":"See Also","slug":"see-also"}],"relativePath":"toggle/component.md"}',Ca={},Ma=Object.assign(Ca,{setup(s){const u=m(!1),k=m("off"),r=B(),o=m([]);return(x,l)=>{const i=P("preview");return h(),_("div",null,[j,n(i,null,{default:a(()=>[n(p,null,{default:a(()=>[W]),_:1})]),_:1}),O,n(i,null,{default:a(()=>[n(p,null,{checked:a(()=>[J]),unchecked:a(()=>[K]),default:a(()=>[Q]),_:1})]),_:1}),X,n(i,{class:"flex-col items-center gap-3"},{default:a(()=>[n(p,{variant:"pill"},{default:a(()=>[Z]),_:1}),n(p,{variant:"flat"},{default:a(()=>[aa]),_:1})]),_:1}),na,n(i,{class:"flex-col items-center gap-3"},{default:a(()=>[n(p,{variant:"pill","checked-label":"Y","unchecked-label":"N"},{default:a(()=>[sa]),_:1}),n(p,{variant:"flat","checked-label":"PM","unchecked-label":"AM"},{default:a(()=>[ta]),_:1})]),_:1}),ea,n(i,{class:"flex-col items-center gap-3"},{default:a(()=>[n(p,{modelValue:f(r),"onUpdate:modelValue":l[0]||(l[0]=d=>I(r)?r.value=d:null)},{checked:a(()=>[n(f(Y))]),unchecked:a(()=>[n(f(U))]),default:a(()=>[pa]),_:1},8,["modelValue"])]),_:1}),oa,n(i,{class:"flex-col items-center gap-3"},{default:a(()=>[n(p,{variant:"pill","no-label":""},{default:a(()=>[la]),_:1}),n(p,{variant:"flat","no-label":""},{default:a(()=>[ca]),_:1})]),_:1}),ua,n(i,{class:"flex-col items-center gap-3"},{default:a(()=>[n(p,{variant:"pill",disabled:""},{default:a(()=>[ia]),_:1}),n(p,{variant:"flat",disabled:""},{default:a(()=>[da]),_:1})]),_:1}),ka,n(i,{class:"flex-col items-center gap-3"},{default:a(()=>[n(p,{readonly:""},{default:a(()=>[ra]),_:1}),n(p,{readonly:"",checked:""},{default:a(()=>[ga]),_:1})]),_:1}),ha,n(i,{class:"flex-col items-center gap-3"},{default:a(()=>[n(p,{modelValue:u.value,"onUpdate:modelValue":l[1]||(l[1]=d=>u.value=d)},{default:a(()=>[_a]),_:1},8,["modelValue"])]),_:1}),va,e("pre",null,[e("code",null,g(u.value),1)]),ma,n(i,{class:"flex-col items-center gap-3"},{default:a(()=>[n(p,{modelValue:k.value,"onUpdate:modelValue":l[2]||(l[2]=d=>k.value=d),value:"on","unchecked-value":"off"},{default:a(()=>[fa]),_:1},8,["modelValue"])]),_:1}),Ta,e("pre",null,[e("code",null,g(k.value),1)]),qa,n(i,{class:"flex-col items-center"},{default:a(()=>[e("div",ba,[n(p,{modelValue:o.value,"onUpdate:modelValue":l[3]||(l[3]=d=>o.value=d),value:"apple"},{default:a(()=>[ya]),_:1},8,["modelValue"]),n(p,{modelValue:o.value,"onUpdate:modelValue":l[4]||(l[4]=d=>o.value=d),value:"grape"},{default:a(()=>[xa]),_:1},8,["modelValue"]),n(p,{modelValue:o.value,"onUpdate:modelValue":l[5]||(l[5]=d=>o.value=d),value:"pineapple"},{default:a(()=>[wa]),_:1},8,["modelValue"])])]),_:1}),e("p",null,[Va,e("pre",Sa,[e("code",null,g(o.value),1)])]),Aa])}}});export{Ha as __pageData,Ma as default};