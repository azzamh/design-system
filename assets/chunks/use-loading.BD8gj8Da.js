import{d as n}from"./defu.CMw4_7D2.js";import{r as o,k as r,au as d}from"./framework.sPKXfJg2.js";function i(u){const e=n(u,{elapsed:!0}),s=o(0),t=o(e.elapsed!==!1),l=r({get(){return s.value>0||t.value},set(a){a?s.value++:s.value--}});return d(()=>{if(e.elapsed!==!1){const a=e.elapsed===!0?200:e.elapsed;setTimeout(()=>{t.value=!1},a)}}),l}export{i as u};