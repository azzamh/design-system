import{d as r}from"./defu.fbddeef0.js";import{a as n}from"./index.b1700c29.js";import{h as o,g as d}from"./framework.ea844ac6.js";function m(l){const e=r(l,{elapsed:!0}),s=o(0),t=o(e.elapsed!==!1),u=d({get(){return s.value>0||t.value},set(a){a?s.value++:s.value--}});return n(()=>{if(e.elapsed!==!1){const a=e.elapsed===!0?200:e.elapsed;setTimeout(()=>{t.value=!1},a)}}),u}export{m as u};