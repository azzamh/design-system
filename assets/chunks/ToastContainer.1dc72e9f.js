import{T as l}from"../components_toast_index.md.0f5f0b2c.js";import{m as c,r as m,_ as u,K as d,x as o,H as r,I as _,p as f,V as v,v as C,G as x,aC as y}from"./framework.91e0efa6.js";import"./Button.fd2868e0.js";import"./index.a3ecab28.js";import"./Button.vue_vue_type_style_index_0_lang.4ed993c7.js";import"./commonjsHelpers.042e6b4d.js";import"./utils-6ba05f5b.79940067.js";import"./16.b52b2cd6.js";import"./use-singleton.21a0366b.js";const T=c({components:{Toast:l},setup(){const e=m([]);function s(a){e.value.unshift({...a,_id:Symbol("id")})}function n(a){e.value.splice(a,1)}return{add:s,remove:n,items:e}}});function $(e,s,n,a,k,g){const i=d("Toast");return o(),r(y,{tag:"div",name:"toast",class:"toast-container","data-testid":"toast-container"},{default:_(()=>[(o(!0),f(x,null,v(e.items,(t,p)=>(o(),r(i,{key:t._id,title:t.title,text:t.text,type:t.type,variant:t.variant,duration:t.duration,class:C(t.toastClass),onDismissed:h=>e.remove(p)},null,8,["title","text","type","variant","duration","class","onDismissed"]))),128))]),_:1})}const I=u(T,[["render",$]]);export{I as default};