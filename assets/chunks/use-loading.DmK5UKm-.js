import{d as u}from"./defu.CMw4_7D2.js";import{d as n}from"./index.BMhYW6jJ.js";import{r as o,l as d}from"./framework.Co3D4XSo.js";function m(l){const e=u(l,{elapsed:!0}),s=o(0),a=o(e.elapsed!==!1),r=d({get(){return s.value>0||a.value},set(t){t?s.value++:s.value--}});return n(()=>{if(e.elapsed!==!1){const t=e.elapsed===!0?200:e.elapsed;setTimeout(()=>{a.value=!1},t)}}),r}export{m as u};