import{_ as i,U as a}from"../app.8de4c67c.js";import{u as r}from"./use-singleton.edb6164a.js";async function c(t){const{default:n}=await i(()=>import("./Dialog.5024e93b.js"),["assets/chunks/Dialog.5024e93b.js","assets/chunks/Modal.b67dbbdf.js","assets/chunks/index.de94caa5.js","assets/chunks/index.3cf6f51a.js","assets/app.8de4c67c.js","assets/chunks/Heading.34eabf03.js","assets/chunks/Heading.vue_vue_type_style_index_0_lang.2df80dde.js","assets/chunks/16.aca6f26a.js","assets/chunks/utils-6ba05f5b.a5ef5455.js","assets/chunks/index.70913ba2.js","assets/chunks/Button.eeec7c82.js","assets/chunks/Button.vue_vue_type_style_index_0_lang.8f1c439c.js"]),o=await r(n);return await new Promise(e=>{o.show(a({onConfirm:()=>e(!0),onCancel:()=>e(!1)},t,{title:"Confirm",confirm:{},cancel:{},centered:!0}))})}async function m(t){await c(a({cancel:{visible:!1}},t,{title:"Alert",confirm:{text:"Ok"}}))}export{m as a,c};