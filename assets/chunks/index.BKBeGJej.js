const __vite__fileDeps=["assets/chunks/Notify.v7DWFcFE.js","assets/chunks/framework.CUNsVCb6.js","assets/chunks/defu.CMw4_7D2.js","assets/chunks/use-singleton.Bf8OpcyB.js","assets/chunks/queue.CxBKXn5n.js","assets/chunks/noop.DX6rZLP_.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{$ as e,P as s}from"./framework.CUNsVCb6.js";import{u as i}from"./use-singleton.Bf8OpcyB.js";import{n as t}from"./noop.DX6rZLP_.js";const a=Symbol("NotifyContext");async function m(o){const{default:n}=await e(()=>import("./Notify.v7DWFcFE.js"),__vite__mapDeps([0,1,2,3,4,5]));return(await i(n)).show(o)}function _(){return s(a,()=>({close:t,update:t}),!0)}export{a as N,m as s,_ as u};