const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/Notify.DKfmmUZM.js","assets/chunks/framework.BjhmxGx1.js","assets/chunks/defu.CMw4_7D2.js","assets/chunks/use-singleton.BZKiDE5h.js","assets/chunks/queue.DLTVddtq.js","assets/chunks/noop.DX6rZLP_.js"])))=>i.map(i=>d[i]);
import{Z as e,P as s}from"./framework.BjhmxGx1.js";import{u as i}from"./use-singleton.BZKiDE5h.js";import{n as t}from"./noop.DX6rZLP_.js";const r=Symbol("NotifyContext");async function y(o){const{default:n}=await e(async()=>{const{default:a}=await import("./Notify.DKfmmUZM.js");return{default:a}},__vite__mapDeps([0,1,2,3,4,5]));return(await i(n)).show(o)}function N(){return s(r,()=>({close:t,update:t}),!0)}export{r as N,y as s,N as u};