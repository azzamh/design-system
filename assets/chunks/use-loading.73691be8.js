import{t as n}from"./index.35064abe.js";import{j as o,k as r}from"../app.9536caf3.js";function i(l){const e={elapsed:!0,...l},s=o(0),a=o(e.elapsed!==!1),u=r({get(){return s.value>0||a.value},set(t){t?s.value++:s.value--}});return n(()=>{if(e.elapsed!==!1){const t=e.elapsed===!0?200:e.elapsed;setTimeout(()=>{a.value=!1},t)}}),u}export{i as u};