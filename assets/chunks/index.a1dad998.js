import{a0 as n}from"./framework.f14560cd.js";import{u as r}from"./use-singleton.373a22ca.js";import{d as e}from"./defu.573334b8.js";async function c(t){const{default:o}=await n(()=>import("./Dialog.01cf296d.js"),["assets/chunks/Dialog.01cf296d.js","assets/chunks/Modal.da4d0719.js","assets/chunks/theme.bdd572ce.js","assets/chunks/framework.f14560cd.js","assets/chunks/Heading.612fdd02.js","assets/chunks/Heading.vue_vue_type_style_index_0_lang.4ed993c7.js","assets/chunks/16.4b8c6256.js","assets/chunks/index.7a96623d.js","assets/chunks/Button.2deccdb1.js","assets/chunks/index.a3ecab28.js","assets/chunks/Button.vue_vue_type_style_index_0_lang.4ed993c7.js"]),i=await r(o);return await new Promise(a=>{i.show(e({onConfirm:()=>a(!0),onCancel:()=>a(!1)},t,{title:"Confirm",confirm:{},cancel:{},centered:!0}))})}async function u(t){await c(e({cancel:{visible:!1}},t,{title:"Alert",confirm:{text:"Ok"}}))}export{u as a,c};