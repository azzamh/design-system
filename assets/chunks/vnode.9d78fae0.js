import{p as o}from"./framework.0fccce8d.js";function l(e){return e===""?!0:!!e}function a(e,...s){const t=[...e],r=[];for(;t.length>0;){const n=t.shift();n.type===o&&Array.isArray(n.children)?t.push(...n.children):n.type&&s.includes(n.type.name)&&r.push(n)}return r}export{a as f,l as t};