function u(n){return new Promise((r,o)=>{const t=new FileReader,e=()=>{a(),r(t.result)},s=c=>{a(),o(c)},a=()=>{t.removeEventListener("load",e),t.removeEventListener("error",s)};t.addEventListener("load",e),t.addEventListener("error",s),t.readAsDataURL(n)})}function v(n,r,o){if(n)try{const t=r!=null?r:new Date().toISOString(),[e,s]=n.split(","),a=o!=null?o:e.match(/:(.*?);/)[1],c=window.atob(s),d=Uint8Array.from(c,i=>i.codePointAt(0));return new globalThis.File([d],t,{type:a})}catch(t){}}export{v as f,u as t};