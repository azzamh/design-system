import{d as h,l as y,c as l,p as o,a as r,g as i,f as c,w as f,J as p,T as v,n as k,q as a,o as s,a8 as n}from"./framework.95PECLjQ.js";import{I as m}from"./20.uxyWSu6t.js";import{_ as $}from"./Caption.vue_vue_type_script_setup_true_lang.6AWZlLjq.js";import"./Caption.vue_vue_type_style_index_0_lang.w40geAFS.js";import{v as u}from"./index.-pNb-pRQ.js";import{v as B}from"./index.arIZTdT8.js";const b={"data-testid":"form-group-label",class:"form-group__label"},S={key:1,"data-testid":"form-group-required"},C={class:"form-group__inputs"},q={key:0,"data-testid":"form-group-error",class:"form-group__error"},z={key:1,"data-testid":"form-group-description",class:"form-group__description"},D=h({__name:"FormGroup",props:{required:{type:Boolean,default:!1},label:{type:String,default:""},caption:{type:String,default:""},description:{type:String,default:""},hint:{type:String,default:""},error:{type:String,default:""},horizontal:{type:Boolean,default:!1},errorIcon:{type:Boolean,default:!1}},setup(e){const d=e,g=y(()=>{const t=[];return d.error&&t.push("form-group--error","state--error"),d.horizontal&&t.push("form-group--horizontal"),t});return(t,I)=>(s(),l("div",{class:k(["form-group",a(g)]),"data-testid":"form-group"},[o("label",b,[e.hint?r(t.$slots,"hint",{key:0},()=>[n(p(m,{"data-testid":"form-group-hint",class:"form-group__hint"},null,512),[[a(B),e.hint]])]):i("",!0),r(t.$slots,"label",{},()=>[n(o("span",null,null,512),[[a(u),e.label,void 0,{inline:!0}]])]),e.required?(s(),l("sup",S,"*")):i("",!0),e.caption?(s(),c($,{key:2,"data-testid":"form-group-caption"},{default:f(()=>[r(t.$slots,"caption",{},()=>[n(o("span",null,null,512),[[a(u),e.caption,void 0,{inline:!0}]])])]),_:3})):i("",!0)]),o("div",C,[r(t.$slots,"default"),p(v,{name:"slide-up",mode:"out-in"},{default:f(()=>[e.error?(s(),l("p",q,[r(t.$slots,"error-icon",{},()=>[e.errorIcon?(s(),c(m,{key:0,"data-testid":"form-group-error-icon"})):i("",!0)]),r(t.$slots,"error",{},()=>[n(o("span",null,null,512),[[a(u),e.error,void 0,{inline:!0}]])])])):e.description?(s(),l("p",z,[r(t.$slots,"description",{},()=>[n(o("span",null,null,512),[[a(u),e.description,void 0,{inline:!0}]])])])):i("",!0)]),_:3})])],2))}});export{D as _};