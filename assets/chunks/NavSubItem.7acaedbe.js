import{_ as d,x as n,p as c,F as i,m,$ as v,c as f,K as b,q as p,J as u,z as h,H as S,a5 as $,v as w}from"./framework.91e0efa6.js";const g=Symbol("SidebarSettings"),y={},k={xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"none",class:"persona-icon"},I=i("path",{fill:"currentColor",d:"M12.354 5.646a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.707 0l-4-4a.5.5 0 1 1 .707-.708L8 9.293l3.646-3.646a.5.5 0 0 1 .708 0Z"},null,-1),N=[I];function B(s,t){return n(),c("svg",k,N)}const C=d(y,[["render",B]]),A=m({components:{IconArrow:C},props:{text:{type:String,default:void 0},collapsible:{type:Boolean,default:!1}},setup(s,{slots:t}){const a=v(g,void 0,!0),l=a==null?void 0:a.type,r=f(()=>{const e=[];return t.icon&&e.push("nav__subitem--icon"),s.collapsible&&l!=="narrow"&&e.push("nav__subitem--collapsible nav__subitem--collapsed"),e});function _(e){if(s.collapsible&&l!=="narrow"){const o=e.target.closest("li");o==null||o.classList.toggle("nav__subitem--collapsed")}}return{classNames:r,collapse:_}}});const E={key:0,class:"nav__link__icon"},z={class:"nav__link__label"};function D(s,t,a,l,r,_){const e=b("IconArrow");return n(),c("li",{"data-testid":"nav-subitem",class:w(["nav__subitem",s.classNames])},[i("div",{class:"nav__subitem__parent","data-testid":"nav-subitem-parent",onClick:t[0]||(t[0]=$((...o)=>s.collapse&&s.collapse(...o),["prevent"]))},[s.$slots.icon?(n(),c("span",E,[p(s.$slots,"icon")])):u("",!0),i("span",z,h(s.text),1),s.collapsible?(n(),S(e,{key:1,class:"nav__link__caret"})):u("",!0)]),p(s.$slots,"default")],2)}const M=d(A,[["render",D]]);export{C as I,g as S,M as p};